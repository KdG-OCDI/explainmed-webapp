"use client"

import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import React, { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Important: Set the worker source for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString()

export function PDFViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.0)

  const pdfUrl = `/api/fetch-pdf?url=${encodeURIComponent(url)}`

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) =>
      Math.min(Math.max(prevPageNumber + offset, 1), numPages || 1)
    )
  }

  function changeScale(delta: number) {
    setScale((prevScale) => Math.min(Math.max(prevScale + delta, 0.5), 2))
  }

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center space-x-2">
        <Button onClick={() => changePage(-1)} disabled={pageNumber <= 1}>
          <ChevronLeft className="size-4" />
        </Button>
        <Input
          type="number"
          min={1}
          max={numPages || 1}
          value={pageNumber}
          onChange={(e) => setPageNumber(parseInt(e.target.value, 10))}
          className="w-16 text-center"
        />
        <span>of {numPages}</span>
        <Button
          onClick={() => changePage(1)}
          disabled={pageNumber >= (numPages || 1)}
        >
          <ChevronRight className="size-4" />
        </Button>
        <Button onClick={() => changeScale(-0.1)}>
          <ZoomOut className="size-4" />
        </Button>
        <span>{Math.round(scale * 100)}%</span>
        <Button onClick={() => changeScale(0.1)}>
          <ZoomIn className="size-4" />
        </Button>
      </div>
      <div className="grow overflow-auto rounded-lg border">
        <Document
          file={pdfUrl}
          onLoadSuccess={() => onDocumentLoadSuccess}
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
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  )
}
