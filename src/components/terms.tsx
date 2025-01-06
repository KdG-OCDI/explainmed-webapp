import { SquareArrowOutUpRight } from "lucide-react"

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
          <AccordionTrigger className="p-4 font-semibold">
            Terms
          </AccordionTrigger>
          <AccordionContent>
            <dl className="space-y-4 p-4">
              {terms.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-sm"
                >
                  <div className="mb-3 flex items-center justify-between border-b pb-1">
                    <dt className="text-sm font-bold text-gray-800">
                      {item.term}
                    </dt>
                    {item.source && (
                      <a
                        href={item.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        <SquareArrowOutUpRight size={16} />
                      </a>
                    )}
                  </div>
                  <dd className="mt-1 text-sm text-gray-600">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
