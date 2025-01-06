import { NextResponse } from "next/server"

import type { PDFData } from "@/lib/models/pdf.model"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get("url")

  if (!url) {
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 },
    )
  }

  try {
    const response = await fetch(url)
    const arrayBuffer = await response.arrayBuffer()
    const base64String = Buffer.from(arrayBuffer).toString("base64")

    // Simulate PDF processing and data extraction
    const pdfData: PDFData = {
      pdfBuffer: base64String,
      summary:
        "This document is a sample PDF that demonstrates various features of the PDF format. It includes text, images, and interactive elements to showcase the versatility of PDF documents.",
      terms: [
        {
          id: "1",
          term: "Dummy",
          description:
            "Portable Document Format, a file format used to present documents independently of software, hardware, and operating systems.",
        },
        {
          id: "2",
          term: "Metadata",
          description:
            "Information about the document, such as author, creation date, and keywords, embedded within the PDF file.",
        },
        {
          id: "3",
          term: "File",
          description:
            "Additional objects or markups added to a PDF document, such as comments, highlights, or drawings.",
          source: "https://google.com",
        },
      ],
    }

    return NextResponse.json(pdfData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Error fetching PDF:", error)
    return NextResponse.json({ error: "Failed to fetch PDF" }, { status: 500 })
  }
}
