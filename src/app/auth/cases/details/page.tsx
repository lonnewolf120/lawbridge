'use client'
import React, { useEffect, useState, Suspense } from "react"
import { useSearchParams } from 'next/navigation';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Link2, Download } from "lucide-react"
import Link from "next/link"
import TerminalLoader from "@/components/external/TerminalLoader";

interface Case {
  hearing_id: number;
  casetitle: string;
  date: string;
  time: string;
  location: string;
  prosecution: string;
  defense: string;
  judge: string;
  category: string;
  status: string;
  brief_summary: string;
  documents: {
    id: string;
    name: string;
    type: string;
    dateAdded: string;
    addedBy: string;
    url: string;
  }[];
  prev_hearing_summary: string;
  next_steps: string;
  title: string;
  case_id: string;
  status_text: string;
  assigned_at: string;
  court_name: string;
  judge_name: string;
  description: string;
  tags: string[];
  basicInfo: {
    caseType: string;
    priority: string;
  };
}

interface Hearing {
  hearing_id: number;
  caseTitle: string;
  date: string;
  time: string;
  location: string;
  hearing_type: string;
  judge: string;
  status: string;
}

const jsonToCase = (json: any): Case => {
  return {
    hearing_id: json.hearing_id,
    casetitle: json.casetitle,
    date: json.date,
    time: json.time,
    location: json.location,
    prosecution: json.prosecution,
    defense: json.defense,
    documents: json.documents,
    judge: json.judge,
    status: json.status,
    brief_summary: json.brief_summary,
    prev_hearing_summary: json.prev_hearing_summary,
    next_steps: json.next_steps,
    title: json.title,
    case_id: json.case_id,
    status_text: json.status_text,
    assigned_at: json.assigned_at,
    court_name: json.court_name,
    judge_name: json.judge_name,
    description: json.description,
    category: json.category,
    tags: json.tags,
    basicInfo: {
      caseType: json.caseType,
      priority: json.priority,
    },
  }
}


function CaseDetails({ caseId }: { caseId: string | null }) {
  const [caseDataa, setCaseData] = useState<Case | null>(null)
  const [hearings, setHearings] = useState<Hearing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHearings() {
      try {
        const response = await fetch(`http://localhost:10101/hearings/case/${caseId}`, {
          method: 'GET',
          credentials: 'include', 
        });
        const data = await response.json();
        if (response.ok) {
          setHearings(data.hearings);
        } else {
          setError(data.error || 'Failed to fetch hearings');
        }
      } catch (err) {
        console.error('Error fetching hearings:', err);
        setError('An error occurred while fetching hearings.');
      } finally {
        setLoading(false);
      }
    }
    fetchHearings();
  }, [caseId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:10101/cases/${caseId}`, {
          method: 'GET',
          credentials: 'include', 
        });
        let data = await res.json()
        data = jsonToCase(data)
        setCaseData(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching case data:', error)
      }
    }
    fetchData()
  }, [caseId])

  if (loading) return <TerminalLoader text='Loading case details...' />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-10 container mx-auto p-4 space-y-6 max-w-4xl pb-16">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{caseDataa?.title}</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Case No.{caseDataa?.case_id}</Badge>
          <Badge variant="default">{caseDataa?.status}</Badge>
          {caseDataa?.tags?.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <p className="text-sm font-medium">Filing Date</p>
              <p className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {caseDataa?.assigned_at}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Court</p>
              <p className="text-sm text-muted-foreground">{caseDataa?.court_name}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Judge</p>
              <p className="text-sm text-muted-foreground">{caseDataa?.judge}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Type</p>
              <p className="text-sm text-muted-foreground">{caseDataa?.category}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Case Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{caseDataa?.description}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Case Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Added On</TableHead>
                <TableHead>Added By</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {caseDataa?.documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      {doc.name}
                    </div>
                  </TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.dateAdded}</TableCell>
                  <TableCell>{doc.addedBy}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = doc.url; // Ensure doc.url contains the correct file URL
                        link.download = doc.name || "document"; // Optional: Set a filename
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download document</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Previous Hearings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Judge</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hearings.map((hearing) => (
                <TableRow key={hearing.hearing_id}>
                  <TableCell>{hearing.date.split("T")[0]}</TableCell>
                  <TableCell>{hearing.hearing_type}</TableCell>
                  <TableCell>{hearing.judge}</TableCell>
                  <TableCell>
                    <Badge variant={hearing.status === "Completed" ? "default" : "secondary"}>{hearing.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Link href={`/auth/cases/hearings/details`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Link2 className="h-4 w-4" />
                        <span className="sr-only">View hearing details</span>
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function CaseDetailsWrapper() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get('caseId');

  return (
    <Suspense fallback={<TerminalLoader text='Loading case details...' />}>
      <CaseDetails caseId={caseId} />
    </Suspense>
  );
}

export default CaseDetailsWrapper;