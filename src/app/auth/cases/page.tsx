'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import {parseCookies} from 'nookies'


import { FileText, AlertCircle, CheckCircle } from 'lucide-react'
import { useRouter } from "next/navigation"

interface CaseItem {
  case_id: any
  id: number;
  title: string;
  category: string;
  status: string;
}

/* const mockCases = [
  { id: 1, title: "Divorce Proceedings", category: "Personal Law", status: "Active" },
  { id: 2, title: "Copyright Infringement", category: "Business Law", status: "Pending" },
  { id: 3, title: "Property Dispute", category: "Civil Law", status: "Closed" },
]
 */


const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-primary-100 text-primary-800'
    case 'pending':
      return 'bg-secondary-100 text-secondary-800'
    case 'closed':
      return 'bg-gray-100 text-border-800'
    default:
      return 'bg-blue-100 text-blue-800'
  }
}

const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
      return <AlertCircle className="w-4 h-4 mr-1" />
    case 'pending':
      return <FileText className="w-4 h-4 mr-1" />
    case 'closed':
      return <CheckCircle className="w-4 h-4 mr-1" />
    default:
      return null
  }
}

export default function MyCasesPage() {

    //const clientId = 3; 
    const [cases, setCases] = useState<CaseItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const cookies = parseCookies()
    const user = cookies.user ? JSON.parse(cookies.user) : null;
    const router = useRouter()
    // let userId = 0;

    useEffect(() => {
      if(!cookies.token || !cookies.user){
        console.log("Token not found")
        router.push('/auth/login')
      }
      else{

        const userId = user.userId;
        const fetchCases = async () => {
          try {
            console.log("Userid", userId, "cookies: ", cookies)
            const res = await fetch(`http://localhost:10101/cases/client/${userId}`, {
              method: 'GET',
              credentials: 'include',
            });
            const data = await res.json();
            setCases(data.cases);
          } catch (err: any) {
            console.error("Error fetching cases:", err);
            // setError((err as Error).message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchCases();}
      }, [cookies]);






  return (
    <div className="mt-10 min-h-screen bg-gradient-to-b from-white to-primary-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-primary-900">My Cases</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {cases.map((case_) => (
          <Card key={case_.id} className="overflow-hidden border-secondary-200">
            <CardHeader className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <CardTitle>{case_.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-between items-center gap-4">
                <Badge variant="secondary" className="bg-primary-100 text-primary-800">{case_.category}</Badge>
                <Badge className={`flex items-center ${getStatusColor(case_.status)}`}>
                  {getStatusIcon(case_.status)}
                  {case_.status}
                </Badge>
              </div>
              <div className="mt-4">
              <Link href={`/auth/cases/details?caseId=${case_.case_id}`}>
                <Button variant="outline" className="text-primary-700 border-primary-500 hover:bg-primary-50">View Details</Button>
              </Link>

              
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 mb-8">
        <Link href="/auth/cases/file">
          <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white">Add New Case</Button>
        </Link>
      </div>
    </div>
  )
}

