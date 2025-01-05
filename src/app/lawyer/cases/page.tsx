import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const cases = [
  { id: '1234', client: 'John Doe', type: 'Civil', status: 'Active', nextAction: 'File Motion', dueDate: '2023-07-15' },
  { id: '5678', client: 'Jane Smith', type: 'Criminal', status: 'On Hold', nextAction: 'Client Meeting', dueDate: '2023-07-20' },
  { id: '9101', client: 'Bob Johnson', type: 'Family', status: 'Closed', nextAction: 'None', dueDate: 'N/A' },
  { id: '1121', client: 'Alice Brown', type: 'Corporate', status: 'Active', nextAction: 'Prepare Contract', dueDate: '2023-07-18' },
  { id: '3141', client: 'Charlie Davis', type: 'Civil', status: 'Active', nextAction: 'Court Hearing', dueDate: '2023-07-25' },
]

export default function LawyerCasesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Case Management</h1>
        <Button>
          Create New Case
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Next Action</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cases.map((case_) => (
                <TableRow key={case_.id}>
                  <TableCell>{case_.id}</TableCell>
                  <TableCell>{case_.client}</TableCell>
                  <TableCell>{case_.type}</TableCell>
                  <TableCell>
                    <Badge variant={case_.status === 'Active' ? 'default' : case_.status === 'On Hold' ? 'secondary' : 'outline'}>
                      {case_.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{case_.nextAction}</TableCell>
                  <TableCell>{case_.dueDate}</TableCell>
                  <TableCell>
                    <Link href={`/lawyer/cases/${case_.id}`}>
                      <Button variant="link">View Details</Button>
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

