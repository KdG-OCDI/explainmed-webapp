import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Summary() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="summary">
        <AccordionTrigger>Summary</AccordionTrigger>
        <AccordionContent>
          This document is a sample PDF file that demonstrates various features
          and capabilities of the PDF format. It includes text, images, and
          interactive elements to showcase the versatility of PDF documents.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
