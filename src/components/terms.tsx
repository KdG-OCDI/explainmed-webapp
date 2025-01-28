import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { TermsData } from "@/lib/models/pdf.model"

interface TermsProps {
  terms: TermsData[]
}

export function Terms({ terms }: TermsProps) {
  return (
    <div className="mx-auto w-full rounded-lg bg-white shadow-lg">
      <Accordion type="single" collapsible>
        <AccordionItem value="terms">
          <AccordionTrigger>Medische termen</AccordionTrigger>
          <AccordionContent>
            <dl className="space-y-4">
              {terms.map((item) => (
                <div key={item.id} className="border-b pb-4 last:border-b-0">
                  <dt className="semibold">{item.term}</dt>

                  <dd className="mt-1 text-gray-700">{item.description}</dd>
                  {item.source && (
                    <a
                      href={item.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sky-800 hover:text-sky-950"
                    >
                      <span>Lees meer</span>
                    </a>
                  )}
                </div>
              ))}
            </dl>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
