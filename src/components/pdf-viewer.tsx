'use client'

import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'

// Important: Set the worker source for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PDFViewerProps {
  url: string
}

export default function PDFViewer({ url }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.0)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => Math.min(Math.max(prevPageNumber + offset, 1), numPages || 1))
  }

  function changeScale(delta: number) {
    setScale(prevScale => Math.min(Math.max(prevScale + delta, 0.5), 2))
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex items-center space-x-2">
        <Button onClick={() => changePage(-1)} disabled={pageNumber <= 1}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          min={1}
          max={numPages || 1}
          value={pageNumber}
          onChange={(e) => setPageNumber(Number.parseInt(e.target.value))}
          className="w-16 text-center"
        />
        <span>of {numPages}</span>
        <Button onClick={() => changePage(1)} disabled={pageNumber >= (numPages || 1)}>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button onClick={() => changeScale(-0.1)}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span>{Math.round(scale * 100)}%</span>
        <Button onClick={() => changeScale(0.1)}>
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>
      <div className="border rounded-lg overflow-auto max-h-[calc(100vh-200px)]">
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className="text-center py-4">Loading PDF...</div>}
          error={<div className="text-center py-4 text-red-500">Failed to load PDF!</div>}
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

