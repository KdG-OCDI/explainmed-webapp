import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface SummaryProps {
  summary: string
}

export function Summary({ summary }: SummaryProps) {
  return (
    <div className="mx-auto w-full rounded-lg border border-gray-200 bg-white shadow-lg">
      <Accordion type="single" collapsible>
        <AccordionItem value="summary">
          <AccordionTrigger>Samenvatting</AccordionTrigger>
          <AccordionContent>
            <p>{summary}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
