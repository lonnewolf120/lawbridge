'use client'

import { useParams } from 'next/navigation'
// import { withAuth } from '@/components/with-auth'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dummy data for the case details
const caseDetails = {
  id: '1234',
  title: 'Smith vs. Johnson',
  client: 'John Smith',
  opponent: 'Sarah Johnson',
  type: 'Civil',
  status: 'Active',
  filingDate: '2023-01-15',
  nextHearing: '2023-07-30',
  description: 'Dispute over property boundaries and alleged trespassing.',
  notes: [
    { date: '2023-06-01', content: 'Initial consultation with client' },
    { date: '2023-06-15', content: 'Filed initial complaint' },
    { date: '2023-07-01', content: 'Received response from defendant' },
  ],
  documents: [
    { name: 'Initial Complaint', date: '2023-06-15' },
    { name: 'Defendant Response', date: '2023-07-01' },
    { name: 'Evidence Photos', date: '2023-07-10' },
  ],
}

function CaseDetailsPage() {
  const params = useParams()
  const { caseId } = params

  // In a real application, you would fetch the case details using the caseId
  // For this example, we're using the dummy data

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Case Details: {caseDetails.title}</h1>
      
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Case Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="font-medium">Case ID</dt>
                <dd>{caseId}</dd>
              </div>
              <div>
                <dt className="font-medium">Client</dt>
                <dd>{caseDetails.client}</dd>
              </div>
              <div>
                <dt className="font-medium">Opponent</dt>
                <dd>{caseDetails.opponent}</dd>
              </div>
              <div>
                <dt className="font-medium">Type</dt>
                <dd>{caseDetails.type}</dd>
              </div>
              <div>
                <dt className="font-medium">Status</dt>
                <dd>
                  <Badge variant={caseDetails.status === 'Active' ? 'default' : 'secondary'}>
                    {caseDetails.status}
                  </Badge>
                </dd>
              </div>
              <div>
                <dt className="font-medium">Filing Date</dt>
                <dd>{caseDetails.filingDate}</dd>
              </div>
              <div>
                <dt className="font-medium">Next Hearing</dt>
                <dd>{caseDetails.nextHearing}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Case Description</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{caseDetails.description}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="notes" className="w-full">
        <TabsList>
          <TabsTrigger value="notes">Case Notes</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="notes">
          <Card>
            <CardHeader>
              <CardTitle>Case Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {caseDetails.notes.map((note, index) => (
                  <li key={index} className="border-b pb-2">
                    <p className="font-medium">{note.date}</p>
                    <p>{note.content}</p>
                  </li>
                ))}
              </ul>
              <Button className="mt-4">Add Note</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Case Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {caseDetails.documents.map((doc, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{doc.name}</span>
                    <span className="text-sm text-muted-foreground">{doc.date}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-4">Upload Document</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CaseDetailsPage

