"use client"

import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "@/styles/pdf-viewer.scss"

import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"

import { Button } from "@/components/ui/button"
import type { TermsData } from "@/lib/models/pdf.model"

// Important: Set the worker source for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString()

interface PDFViewerProps {
  url: string
  onDataFetched: (summary: string, terms: TermsData[]) => void
}

export function PDFViewer({ url, onDataFetched }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.0)
  const [pdfData, setPdfData] = useState<string | null>(null)
  const [terms, setTerms] = useState<TermsData[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isPageRendered, setIsPageRendered] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)

  const fetchPDF = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/fetch-pdf?url=${encodeURIComponent(url)}`,
      )
      const data = await response.json()
      setPdfData(`data:application/pdf;base64,${data.pdfBuffer}`)
      setTerms(data.terms)
      onDataFetched(data.summary, data.terms)
    } catch (err) {
      setError("Failed to load PDF.")
      console.error("Error fetching PDF:", err)
    }
  }, [url, onDataFetched])

  const highlightTerms = useCallback(() => {
    if (!pageRef.current || !isPageRendered) return

    console.log("Highlighting terms...") // Debug log

    const textLayer = pageRef.current.querySelector(
      ".react-pdf__Page__textContent",
    )
    if (!textLayer) return

    // Remove existing highlights
    textLayer
      .querySelectorAll(".highlighted-term")
      .forEach((node) => node.remove())

    terms.forEach(({ term, description }) => {
      const textNodes = Array.from(textLayer.querySelectorAll("span")).filter(
        (span) => span.textContent?.toLowerCase().includes(term.toLowerCase()),
      )

      textNodes.forEach((node) => {
        const nodeContent = node.textContent || ""
        const termIndex = nodeContent.toLowerCase().indexOf(term.toLowerCase())
        if (termIndex !== -1) {
          const range = document.createRange()
          range.setStart(node.firstChild!, termIndex)
          range.setEnd(node.firstChild!, termIndex + term.length)

          const rect = range.getBoundingClientRect()
          const containerRect = textLayer.getBoundingClientRect()

          const highlight = document.createElement("div")
          highlight.className = "highlighted-term"
          highlight.title = description
          highlight.style.position = "absolute"
          highlight.style.backgroundColor = "#0ea5e9"
          highlight.style.opacity = "0.5"
          highlight.style.left = `${rect.left - containerRect.left}px`
          highlight.style.top = `${rect.top - containerRect.top}px`
          highlight.style.width = `${rect.width}px`
          highlight.style.height = `${rect.height}px`

          textLayer.appendChild(highlight)
        }
      })
    })
  }, [terms, isPageRendered])

  useEffect(() => {
    if (!pdfData) fetchPDF()
  }, [fetchPDF, pdfData])

  useEffect(() => {
    if (isPageRendered) {
      highlightTerms()
    }
  }, [highlightTerms, isPageRendered, pageNumber, scale])

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    console.log("Document loaded successfully") // Debug log
  }

  const onPageRenderSuccess = () => {
    console.log("Page rendered successfully") // Debug log
    setIsPageRendered(true)
  }

  const changePage = (offset: number) => {
    setPageNumber((prev) => Math.min(Math.max(prev + offset, 1), numPages || 1))
    setIsPageRendered(false) // Reset render state when changing page
  }

  const changeScale = (delta: number) => {
    setScale((prev) => Math.min(Math.max(prev + delta, 0.5), 2))
    setIsPageRendered(false) // Reset render state when changing scale
  }

  if (error) {
    return <div className="py-4 text-center text-red-500">{error}</div>
  }

  if (!pdfData || !terms.length) {
    return <div className="py-4 text-center">Loading PDF and terms...</div>
  }

  return (
    <div className="relative flex h-full flex-col">
      <div className="grow overflow-auto border-r" ref={pageRef}>
        <Document
          file={pdfData}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className="py-4 text-center">Loading PDF...</div>}
          error={
            <div className="py-4 text-center text-red-500">
              Failed to load PDF!
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer
            renderAnnotationLayer={false}
            className="max-w-none"
            onRenderSuccess={onPageRenderSuccess}
          />
        </Document>
      </div>
      <div className="absolute bottom-6 left-1/2 z-50 w-[390px] -translate-x-1/2 rounded-lg border bg-white p-2 shadow-md">
        <div className="flex items-center justify-center space-x-2">
          <Button onClick={() => changeScale(-0.1)} size="sm" variant="outline">
            <ZoomOut className="size-4" />
            <span className="sr-only">Zoom out</span>
          </Button>
          <span>{Math.round(scale * 100)}%</span>
          <Button onClick={() => changeScale(0.1)} size="sm" variant="outline">
            <ZoomIn className="size-4" />
            <span className="sr-only">Zoom in</span>
          </Button>

          <p className="px-4">Pagina {pageNumber}</p>

          <Button
            onClick={() => changePage(-1)}
            disabled={pageNumber <= 1}
            size="sm"
            variant="outline"
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <Button
            onClick={() => changePage(1)}
            disabled={pageNumber >= (numPages || 1)}
            size="sm"
            variant="outline"
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
