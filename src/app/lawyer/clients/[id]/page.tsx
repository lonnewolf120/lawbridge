'use client'
import React, { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { get_req } from '@/lib/functions'
import TerminalLoader from '@/components/external/TerminalLoader'
import { useParams } from 'next/navigation'

interface Params {
  id: string
}

export default function ClientDetailPage() {
  const [client, setClient] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const { id } = useParams()
  
  useEffect(() => {
    const fetchClient = async () => {
      try {
        const res = await get_req(`clients/${id}`)
        const data = await res.json()
        console.log("Client data:", data)
        setClient(data)
      } catch (error) {
        console.error("Error fetching client data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchClient()
  }, [])

  if (loading) {
    return <div className='flex items-center justify-center'>
      <TerminalLoader text='Loading clients' />
    </div>
  }

  if (!client) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Client Profile: {client.first_name} {client.last_name}</h1>
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
                <AvatarImage src={client.avatar} alt={client.first_name} />
                <AvatarFallback>{client.username}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">{client.username}</h2>
                <p className="text-muted-foreground">{client.email}</p>
              </div>
            </div>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="font-medium">Phone</dt>
                <dd>{client.phone_number}</dd>
              </div>
              <div>
                <dt className="font-medium">Address</dt>
                <dd>{client.address || 'N/A'}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {client.cases && client.cases.length > 0 && client.cases.map((case_: { case_id: string, title: string, case_status: string, court_name: string, description: string, judge: string, prosecution: string, defense: string }) => (
                <div key={case_.case_id} className="border p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{case_.title}</h3>
                  <p className="mb-2"><strong>Status:</strong> <Badge variant={case_.case_status === 'Open' ? 'default' : 'secondary'}>{case_.case_status}</Badge></p>
                  <p className="mb-2"><strong>Court Name:</strong> {case_.court_name}</p>
                  <p className="mb-2"><strong>Description:</strong> {case_.description}</p>
                  <p className="mb-2"><strong>Judge:</strong> {case_.judge}</p>
                  <p className="mb-2"><strong>Prosecution:</strong> {case_.prosecution}</p>
                  <p className="mb-2"><strong>Defense:</strong> {case_.defense}</p>
                  <Link href={`/lawyer/cases/${case_.case_id}`}>
                    <Button variant="link">View Case</Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {client.status !== 'pending' ? 
        (<div className="flex justify-end">
          <Link href={`tel:${client.phone_number}`}><Button variant="outline" className="mr-4">Contact Client</Button></Link>
          <Link href={`mailto:${client.email}`}><Button variant="outline" className="mr-4">Email Client</Button></Link>
          <Button>Schedule Appointment</Button>
        </div>)
        : (<div className="flex justify-end">
          <Link href={`tel:${client.phone_number}`}><Button variant="outline" className="mr-4 bg-green-500 text-white">Confirm Client</Button></Link>
          <Link href={`mailto:${client.email}`}><Button variant="outline" className="mr-4 bg-black text-red-600">Reject Client</Button></Link>
        </div>)
      }
    </div>
  )
}
