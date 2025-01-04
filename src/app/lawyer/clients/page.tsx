import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const clients = [
  { id: '1', name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', activeCases: 2 },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '234-567-8901', activeCases: 1 },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', phone: '345-678-9012', activeCases: 3 },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', phone: '456-789-0123', activeCases: 0 },
  { id: '5', name: 'Charlie Davis', email: 'charlie@example.com', phone: '567-890-1234', activeCases: 1 },
]

export default function ClientListPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Client List</h1>
        <Button>Add New Client</Button>
      </div> */}

      <Card>
        <CardHeader>
          <CardTitle>All Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Active Cases</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.name}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell>
                    <Badge variant={client.activeCases > 0 ? 'default' : 'secondary'}>
                      {client.activeCases}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Link href={`/lawyer/clients/${client.id}`}>
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

