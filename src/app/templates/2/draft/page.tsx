'use client'

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function NDA() {

  const downloadPDF = async () => {
    const element = document.getElementById('nda');
    if (!element) return;

    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('nda.pdf');
  };

  const printNDA = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Button className="mr-4 bg-blue-500 hover:bg-blue-700 text-white" onClick={downloadPDF}>Download</Button>
          <Button variant="outline" onClick={printNDA}>Print</Button>
        </div>
        <div id="nda" className="rounded-lg shadow-lg p-6 bg-white">
            <div className="mb-4">
            <h2 className="text-2xl font-bold">Non-Disclosure Agreement</h2>
            <p className="text-gray-600">Effective Date: {new Date().toLocaleDateString()}</p>
            </div>

          <p>This Non-Disclosure Agreement (the "Agreement") is made and entered into by and between [Disclosing Party Name (the "Disclosing Party") and [Receiving Party Name] (the "Receiving Party").</p>

          <h3 className="text-xl font-semibold mt-4">1. Definition of Confidential Information</h3>
          <p>"Confidential Information" means any and all information, technical or non-technical, disclosed by the Disclosing Party to the Receiving Party, whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure.  Confidential Information includes, but is not limited to, trade secrets, proprietary information, financial information, customer lists, business plans, marketing strategies, and research and development.</p>

          <h3 className="text-xl font-semibold mt-4">2. Obligations of Receiving Party</h3>
          <p>The Receiving Party agrees:</p>
          <ul className="list-disc ml-6">
            <li>To protect the confidentiality of the Confidential Information using the same degree of care that it uses to protect its own confidential information of like kind, but in no event less than reasonable care.</li>
            <li>Not to use any Confidential Information for any purpose outside the scope of this Agreement.</li>
            <li>Not to disclose any Confidential Information to any third party without the prior written consent of the Disclosing Party.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">3. Exclusions from Confidential Information</h3>
          <p>Notwithstanding the foregoing, Confidential Information shall not include information that:</p>
          <ul className="list-disc ml-6">
            <li>Is or becomes generally known to the public without breach of this Agreement.</li>
            <li>Was known to the Receiving Party prior to its disclosure by the Disclosing Party without breach of this Agreement.</li>
            <li>Is rightfully received by the Receiving Party from a third party without restriction and without breach of this Agreement.</li>
            <li>Is independently developed by the Receiving Party without use of or reference to the Confidential Information.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">4. Term and Termination</h3>
          <p>This Agreement shall remain in effect for a period of [Number] years from the Effective Date. Either party may terminate this Agreement upon [Number] days written notice to the other party.</p>

          <h3 className="text-xl font-semibold mt-4">5. Governing Law</h3>
          <p>This Agreement shall be governed by and construed in accordance with the laws of [State/Country].</p>
          <div className="mt-8">
            <p className="font-bold">IN WITNESS WHEREOF,</p> the parties have executed this Agreement as of the Effective Date.
            <div className="mt-4 flex justify-between">
              <div>
                <p>_________________________</p>
                <p>[Disclosing Party Name]</p>
        </div>
              <div>
                <p>_________________________</p>
                <p>[Receiving Party Name]</p>
    </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}
