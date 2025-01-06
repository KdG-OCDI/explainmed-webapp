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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      terms: [
        {
          id: "1",
          term: "Dummy",
          description:
            "Een endomyocardbiopsie is een procedure waarbij een klein stukje weefsel uit de hartspier (myocard) wordt genomen om te onderzoeken. Dit gebeurt meestal met een dunne buis (katheter) die via een bloedvat naar het hart wordt gebracht. Het doel is om te kijken of er schade, ontsteking of andere afwijkingen in het hartweefsel zijn.",
        },
        {
          id: "2",
          term: "PDF",
          description:
            "Steeds erger wordende kortademigheid. Het gaat om het gevoel dat je steeds moeilijker kunt ademen, en dat dit langzaam in de loop van de tijd erger wordt.",
        },
        {
          id: "3",
          term: "File",
          source: "https://google.com",
          description:
            "NYHA staat voor New York Heart Association en is een classificatiesysteem dat wordt gebruikt om te beschrijven hoe ernstig hartfalen is op basis van de symptomen van een patiënt. Er zijn vier klassen: Klasse I: Geen beperkingen in dagelijkse activiteiten, geen klachten. Klasse II: Enige beperking bij zware inspanning, lichte kortademigheid of vermoeidheid. Klasse III: Duidelijke beperking bij alledaagse activiteiten, snel moe of kortademig. Klasse IV: Klachten ook in rust, ernstige beperking in alle activiteiten. Het helpt artsen om te bepalen hoe ernstig het hartfalen is en welke behandeling nodig is.",
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
