'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export default function NewCasePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [caseData, setCaseData] = useState({
    clientName: '',
    caseType: '',
    caseDescription: '',
    courtName: '',
    filingDate: '',
    caseNumber: '',
    judge: '',
    opposingParty: '',
    opposingCounsel: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCaseData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setCaseData(prev => ({ ...prev, caseType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Submitting case:', caseData)
    toast({
      title: "Case Created",
      description: "The new case has been successfully created.",
    })
    // Redirect to the cases list page after submission
    router.push('/lawyer/cases')
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">File a New Case</h1>
      <Card>
        <CardHeader>
          <CardTitle>Case Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clientName">Client Name</Label>
                <Input
                  id="clientName"
                  name="clientName"
                  value={caseData.clientName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="caseType">Case Type</Label>
                <Select onValueChange={handleSelectChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select case type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="civil">Civil</SelectItem>
                    <SelectItem value="criminal">Criminal</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="caseNumber">Case Number</Label>
                <Input
                  id="caseNumber"
                  name="caseNumber"
                  value={caseData.caseNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="filingDate">Filing Date</Label>
                <Input
                  id="filingDate"
                  name="filingDate"
                  type="date"
                  value={caseData.filingDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="courtName">Court Name</Label>
                <Input
                  id="courtName"
                  name="courtName"
                  value={caseData.courtName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="judge">Judge</Label>
                <Input
                  id="judge"
                  name="judge"
                  value={caseData.judge}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="opposingParty">Opposing Party</Label>
                <Input
                  id="opposingParty"
                  name="opposingParty"
                  value={caseData.opposingParty}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="opposingCounsel">Opposing Counsel</Label>
                <Input
                  id="opposingCounsel"
                  name="opposingCounsel"
                  value={caseData.opposingCounsel}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="caseDescription">Case Description</Label>
              <Textarea
                id="caseDescription"
                name="caseDescription"
                value={caseData.caseDescription}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">File Case</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

