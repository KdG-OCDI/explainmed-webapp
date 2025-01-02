import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Terms() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="terms">
        <AccordionTrigger>Terms</AccordionTrigger>
        <AccordionContent>
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold">PDF</dt>
              <dd>
                Portable Document Format, a file format used to present
                documents independently of software, hardware, and operating
                systems.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Metadata</dt>
              <dd>
                Information about the document, such as author, creation date,
                and keywords, embedded within the PDF file.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Annotation</dt>
              <dd>
                Additional objects or markups added to a PDF document, such as
                comments, highlights, or drawings.
              </dd>
            </div>
          </dl>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
