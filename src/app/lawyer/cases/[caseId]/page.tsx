'use client'

import { useParams, useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer, scaleUp } from "@/lib/animation"
import { useEffect, useState } from 'react'

interface Case {
  case_id: string;
  title: string;
  client_id: string;
  category: string;
  status: string;
  description: string;
  // ... other properties
}

const caseDetails2 = {
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
  tasks: [
    { name: 'Prepare evidence', progress: 50 },
    { name: 'Interview witnesses', progress: 25 },
    { name: 'File motion for summary judgment', progress: 0 },
  ],
  documents: [
    { name: 'Initial Complaint', date: '2023-06-15' },
    { name: 'Defendant Response', date: '2023-07-01' },
    { name: 'Evidence Photos', date: '2023-07-10' },
  ],
}

function CaseDetailsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { caseId } = params;

  // Retrieve the caseData from the query parameters
  const caseDataString = searchParams.get('caseData');
  const caseDetails: Case = caseDataString ? JSON.parse(caseDataString) : null;

  if (!caseDetails) {
    return <div>Case details not found.</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="container mx-auto py-12 px-4"
    >
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-4xl font-bold mb-8"
      >
        Case Details: {caseDetails.title}
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid gap-6 md:grid-cols-3 mb-8"
      >
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
                <dd>{caseDetails.client_id}</dd>
              </div>
              <div>
                <dt className="font-medium">Type</dt>
                <dd>{caseDetails.category}</dd>
              </div>
              <div>
                <dt className="font-medium">Status</dt>
                <dd>
                  <Badge variant={caseDetails.status === 'Active' ? 'default' : 'secondary'}>
                    {caseDetails.status}
                  </Badge>
                </dd>
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
      </motion.div>

      <Tabs defaultValue="notes" className="w-full">
        <TabsList>
          <TabsTrigger value="notes">Case Notes</TabsTrigger>
          <TabsTrigger value="tasks">Tasks progress</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="notes">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Card>
              <CardHeader>
                <CardTitle>Case Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {caseDetails2.notes.map((note, index) => (
                    <li key={index} className="border-b pb-2">
                      <p className="font-medium">{note.date}</p>
                      <p>{note.content}</p>
                    </li>
                  ))}
                </ul>
                <Button className="mt-4">Add Note</Button>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        <TabsContent value="tasks">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Card>
              <CardHeader>
                <CardTitle>Tasks progress</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {caseDetails2.tasks.map((task, index) => (
                    <li key={index} className="border-b pb-2">
                      <p className="font-medium">{task.name}</p>
                      <p>{task.progress}%</p>
                    </li>
                  ))}
                </ul>
                <Button className="mt-4">Add Task</Button>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        <TabsContent value="documents">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Card>
              <CardHeader>
                <CardTitle>Case Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {caseDetails2.documents.map((doc, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{doc.name}</span>
                      <span className="text-sm text-muted-foreground">{doc.date}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-4">Upload Document</Button>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

    </motion.div>
  );
}

export default CaseDetailsPage;