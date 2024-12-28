import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { FileText, AlertCircle, CheckCircle } from 'lucide-react'

const mockCases = [
  { id: 1, title: "Divorce Proceedings", category: "Personal Law", status: "Active" },
  { id: 2, title: "Copyright Infringement", category: "Business Law", status: "Pending" },
  { id: 3, title: "Property Dispute", category: "Civil Law", status: "Closed" },
]

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-green-100 text-green-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'closed':
      return 'bg-gray-100 text-gray-800'
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-amber-900">My Cases</h1>
      <div className="grid gap-6">
        {mockCases.map((case_) => (
          <Card key={case_.id} className="overflow-hidden border-orange-200">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              <CardTitle>{case_.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800">{case_.category}</Badge>
                <Badge className={`flex items-center ${getStatusColor(case_.status)}`}>
                  {getStatusIcon(case_.status)}
                  {case_.status}
                </Badge>
              </div>
              <div className="mt-4">
                <Button variant="outline" className="text-amber-700 border-amber-500 hover:bg-amber-50">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 mb-8">
        <Link href="/cases/file">
          <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">File New Case</Button>
        </Link>
      </div>
    </div>
  )
}

