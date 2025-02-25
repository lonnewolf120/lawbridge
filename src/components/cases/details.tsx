'use client'
import React, { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, FileText, Link2, MapPin, User, MessageSquare, Bell, Upload, Download, ChevronUp, Users, ExternalLink } from "lucide-react"
import Link from "next/link"
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
  // details: string;
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
const caseData = {
  basicInfo: {
    caseNumber: "2024-CR-123",
    caseTitle: "State vs. John Doe",
    caseType: "Criminal",
    filingDate: "2024-01-15",
    court: "Superior Court",
    judge: "Hon. Sarah Johnson",
    status: "Active",
    priority: "High",
  },
  parties: {
    plaintiff: {
      name: "State of California",
      type: "Government",
      contact: "District Attorney's Office",
      attorney: "Peter Davis",
      attorneyContact: "pdavis@justice.gov",
    },
    defendant: {
      name: "John Doe",
      type: "Individual",
      contact: "123 Main St, Anytown, CA",
      attorney: "Jane Smith",
      attorneyContact: "jsmith@legal.com",
    },
  },
  description:
    "Case involves allegations of financial misconduct. Initial evidence has been presented and discovery is in progress. Defense has filed a motion to dismiss citing lack of evidence.",
  previousHearings: [
    {
      id: 1,
      date: "2024-02-15",
      type: "Initial Hearing",
      judge: "Hon. Sarah Johnson",
      status: "Completed",
      summary: "Initial hearing completed. Bail was set at $50,000.",
    },
    {
      id: 2,
      date: "2024-02-28",
      type: "Motion Hearing",
      judge: "Hon. Sarah Johnson",
      status: "Scheduled",
      summary: "Motion to dismiss hearing",
    },
  ],
  documents: [
    {
      id: 1,
      name: "Charge Sheet",
      type: "Legal Document",
      dateAdded: "2024-02-01",
      addedBy: "Irtiza Iram",
      url: "https://templates.easylegaldocs.com/template.php?id=148&format=msword",
    },
    {
      id: 2,
      name: "Evidence Log",
      type: "Evidence",
      dateAdded: "2024-02-10",
      addedBy: "Investigation Team",
    },
    {
      id: 3,
      name: "Motion to Dismiss",
      type: "Legal Document",
      dateAdded: "2024-02-15",
      addedBy: "Jane Smith",
    },
  ],
  tags: ["Financial Crime", "Motion Pending", "High Priority"],
}


export default function CaseDetailsPage() {
  const userId = 3;
  const searchParams = useSearchParams();
  const caseId = searchParams.get('caseId'); 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
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
  }, [])
/* 
  if (!hearingData) {
    return <p>Loading case details...</p>
  }
 */

  return (
    <div className="flex flex-col mb-10 min-h-screen mt-10 mx-auto p-4 space-y-6 max-w-4xl pb-16">

    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{caseDataa?.title}</h1>
        
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">Case No.{caseDataa?.case_id}</Badge>
        <Badge variant="default">{caseDataa?.status}</Badge>
        {/* <Badge variant="secondary">{caseDataa?.caseType}</Badge> */}
        {caseDataa?.tags?.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </div>

    {/* Basic Information */}
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
              {caseDataa?.assigned_at.split("T")[0]}
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


    {/* Case Description */}
    <Card>
      <CardHeader>
        <CardTitle>Case Description</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{caseDataa?.description}</p>
      </CardContent>
    </Card>
    {/* Documents */}
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
              {caseData.documents.map((doc) => (
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
                        // link.href = doc.url; // Ensure doc.url contains the correct file URL
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

      {/* Previous Hearings */}
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



    
    {/* Action Buttons */}
   
  </div>
  )
}

