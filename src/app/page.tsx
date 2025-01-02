import { PDFViewer } from "@/components/pdf-viewer"
import { Summary } from "@/components/summary"
import { Terms } from "@/components/terms"

export default function Home() {
  return (
    <main className="flex grow overflow-hidden">
      <div className="w-2/3 p-4">
        <PDFViewer url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" />
      </div>
      <div className="w-1/3 space-y-4 overflow-y-auto p-4">
        <Summary />
        <Terms />
      </div>
    </main>
  )
}
