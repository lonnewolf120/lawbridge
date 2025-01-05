import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Badge
} from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const clients = [
  { 
    id: '1', 
    name: 'John Doe', 
    email: 'john@example.com', 
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    avatar: '/placeholder.svg?text=JD',
    cases: [
      { id: '1234', type: 'Civil', status: 'Active', nextHearing: '2023-07-15' },
      { id: '5678', type: 'Family', status: 'Closed', nextHearing: 'N/A' },
    ]
  },
  // ... other clients
]

export default function ClientDetailPage({ params }: { params: { id: string } }) {
  const client = clients.find(c => c.id === params.id)

  if (!client) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Client Profile: {client.name}</h1>
        <Button>Edit Client</Button>
      </div>

      <div className="grid gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={client.avatar} alt={client.name} />
                <AvatarFallback>{client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">{client.name}</h2>
                <p className="text-muted-foreground">{client.email}</p>
              </div>
            </div>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="font-medium">Phone</dt>
                <dd>{client.phone}</dd>
              </div>
              <div>
                <dt className="font-medium">Address</dt>
                <dd>{client.address}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Case ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Next Hearing</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {client.cases.map((case_) => (
                  <TableRow key={case_.id}>
                    <TableCell>{case_.id}</TableCell>
                    <TableCell>{case_.type}</TableCell>
                    <TableCell>
                      <Badge variant={case_.status === 'Active' ? 'default' : 'secondary'}>
                        {case_.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{case_.nextHearing}</TableCell>
                    <TableCell>
                      <Link href={`/lawyer/cases/${case_.id}`}>
                        <Button variant="link">View Case</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button variant="outline" className="mr-4">Contact Client</Button>
        <Button>Schedule Appointment</Button>
      </div>
    </div>
  )
}

