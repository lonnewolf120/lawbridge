'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from 'react'
import { get_req } from '@/lib/functions'
import Loader from '@/components/external/Loader'
// import { Spinner } from "@/components/ui/spinner" // Assuming you have a Spinner component

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  client_id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  due_amount: number;
  status: string;
  // activeCases: number;
}

export default function ClientListPage() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    console.log('Fetching clients...')
    const fetchClients = async () => {
      try {
        const response = await get_req('clients/all')
        const data = await response.json()
        console.log("Client data:", data)
        setClients(data)
      } catch (error) {
        console.error("Error fetching clients:", error)
        // Handle error appropriately (e.g., display an error message)
      } finally {
        setLoading(false)
      }
    }
    fetchClients()
  }, [])

  return (
    <div className="flex flex-col gap-4 mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Current Clients</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader text='Loading clients' />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Due payments</TableHead>
                  {/* <TableHead>Active Cases</TableHead> */}
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  client['status'] !== 'pending' &&
                  (<TableRow key={client['client_id']}>
                    <TableCell className="font-medium">{client['first_name']} {client['last_name']}</TableCell>
                    <TableCell>{client['email']}</TableCell>
                    <TableCell>{client['phone_number']}</TableCell>
                    <TableCell>{client['due_amount']}</TableCell>
                    <TableCell>{client['status'] ?? 'client'}</TableCell>
                    {/* <TableCell>
                      <Badge variant={client.activeCases > 0 ? 'default' : 'secondary'}>
                        {client.activeCases}
                      </Badge>
                    </TableCell> */}
                    <TableCell>
                      <Link href={`/lawyer/clients/${client['client_id']}`}>
                        <Button variant="link">View Details</Button>
                      </Link>
                    </TableCell>
                  </TableRow>)
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pending Client Requests</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader text='Loading clients' />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Due payments</TableHead>
                  {/* <TableHead>Active Cases</TableHead> */}
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  client['status'] === 'pending' &&
                  (<TableRow key={client['client_id']}>
                    <TableCell className="font-medium">{client['first_name']} {client['last_name']}</TableCell>
                    <TableCell>{client['email']}</TableCell>
                    <TableCell>{client['phone_number']}</TableCell>
                    <TableCell>{client['due_amount']}</TableCell>
                    <TableCell>{client['status']}</TableCell>
                    {/* <TableCell>
                      <Badge variant={client.activeCases > 0 ? 'default' : 'secondary'}>
                        {client.activeCases}
                      </Badge>
                    </TableCell> */}
                    <TableCell>
                      <Link href={`/lawyer/clients/${client['client_id']}`}>
                        <Button variant="link">View Details</Button>
                      </Link>
                    </TableCell>
                  </TableRow>)
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}