"use client"

import { Button } from "@/components/ui/button"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { motion } from "framer-motion"
import { Download, Printer, Share2 } from "lucide-react"
import { Snackbar } from '@mui/material'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"


export default function NDA() {
  const [snackopen, setSnack] = useState(false)

  const downloadPDF = async () => {
    const element = document.getElementById("nda")
    if (!element) return

    const canvas = await html2canvas(element)
    const data = canvas.toDataURL("image/png")

    const pdf = new jsPDF("p", "mm", "a4")
    const imgProperties = pdf.getImageProperties(data)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight)
    pdf.save("nda.pdf")
  }

  const printNDA = () => {
    window.print()
  }

  const shareUrl = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    setSnack(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Snackbar open={snackopen} message="Copied to clipboard"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        color="success"
      />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            Document Preview
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">Review your document and download or print when ready</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          <Button onClick={downloadPDF} className="bg-primary-600 hover:bg-primary-700 text-white">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <Button variant="outline" onClick={printNDA} className="border-primary-200 hover:bg-primary-50">
            <Printer className="mr-2 h-4 w-4" />
            Print Document
          </Button>
          <Button variant="outline" onClick={shareUrl} className="border-primary-200 hover:bg-primary-50">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="backdrop-blur-sm bg-white/50">
            <CardHeader>
              <CardTitle>Non-Disclosure Agreement</CardTitle>
              <CardDescription>Effective Date: {new Date().toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <div id="nda" className="prose max-w-none">
                <p className="text-muted-foreground">
                  This Non-Disclosure Agreement (the "Agreement") is made and entered into by and between [Disclosing
                  Party Name] (the "Disclosing Party") and [Receiving Party Name] (the "Receiving Party").
                </p>

                <h3 className="text-xl font-semibold mt-6">1. Definition of Confidential Information</h3>
                <p className="text-muted-foreground">
                  "Confidential Information" means any and all information, technical or non-technical, disclosed by the
                  Disclosing Party to the Receiving Party, whether orally or in writing, that is designated as
                  confidential or that reasonably should be understood to be confidential given the nature of the
                  information and the circumstances of disclosure.
                </p>

                <h3 className="text-xl font-semibold mt-6">2. Obligations of Receiving Party</h3>
                <p className="text-muted-foreground">The Receiving Party agrees:</p>
                <ul className="list-disc ml-6 text-muted-foreground">
                  <li>
                    To protect the confidentiality of the Confidential Information using the same degree of care that it
                    uses to protect its own confidential information of like kind.
                  </li>
                  <li>Not to use any Confidential Information for any purpose outside the scope of this Agreement.</li>
                  <li>
                    Not to disclose any Confidential Information to any third party without prior written consent.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">3. Term and Termination</h3>
                <p className="text-muted-foreground">
                  This Agreement shall remain in effect for a period of [Number] years from the Effective Date. Either
                  party may terminate this Agreement upon [Number] days written notice to the other party.
                </p>

                <div className="mt-8 border-t pt-8">
                  <p className="font-bold">IN WITNESS WHEREOF,</p>
                  <p className="text-muted-foreground">
                    the parties have executed this Agreement as of the Effective Date.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="border-b border-dashed border-gray-300 pb-4"></div>
                      <p className="font-medium">[Disclosing Party Name]</p>
                    </div>
                    <div className="space-y-4">
                      <div className="border-b border-dashed border-gray-300 pb-4"></div>
                      <p className="font-medium">[Receiving Party Name]</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}


