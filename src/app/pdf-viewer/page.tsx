import PDFViewer from '@/components/pdf-viewer'

export default function PDFViewerPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">PDF Viewer</h1>
      <PDFViewer url="'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'" />
    </div>
  )
}

