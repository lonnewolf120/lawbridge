'use client'
import React, { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { get_req, put_req } from '@/lib/functions'
import Loader from '@/components/external/Loader'
import { useParams } from 'next/navigation'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function ClientDetailPage() {
  const [client, setClient] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [buttonLoading, setButtonLoading] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalStatus, setModalStatus] = useState<boolean | null>(null)
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
  }, [id])

  const SubmitBooking = async (status: boolean) => {
    try {
      setButtonLoading(true)
      const res = await put_req({
        user_id: (client.user_id).toString(),
        due_amount: Number(client.due_amount),
        status: status ? 'accepted' : 'rejected'
      }, `clients/${id}`)
      const data = await res.json()
      setButtonLoading(false)
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update client')
      }
      console.log("Updated client data:", data)
      setClient(data)
    } catch (error) {
      console.error("Error updating client data:", error)
    } finally {
      setLoading(false)
    }
  }

  const openModal = (status: boolean) => {
    setModalStatus(status)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalStatus(null)
  }

  const handleConfirm = () => {
    if (modalStatus !== null) {
      SubmitBooking(modalStatus)
    }
    closeModal()
  }

  if (loading) {
    return <div className='flex items-center justify-center'>
      <Loader text='Loading clients' />
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
                <div className="text-muted-foreground">{client.email}</div>
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
                  <div className="mb-2"><strong>Status:</strong> <Badge variant={case_.case_status === 'Open' ? 'default' : 'secondary'}>{case_.case_status}</Badge></div>
                  <div className="mb-2"><strong>Court Name:</strong> {case_.court_name}</div>
                  <div className="mb-2"><strong>Description:</strong> {case_.description}</div>
                  <div className="mb-2"><strong>Judge:</strong> {case_.judge}</div>
                  <div className="mb-2"><strong>Prosecution:</strong> {case_.prosecution}</div>
                  <div className="mb-2"><strong>Defense:</strong> {case_.defense}</div>
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
        : (
        <div className="flex justify-end">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" onClick={() => openModal(true)} className="mr-4 bg-green-500 text-white">Confirm Client</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Client</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to confirm this client?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={closeModal}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" onClick={() => openModal(false)} className="mr-4 bg-black text-red-600">Reject Client</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Reject Client</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to reject this client?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={closeModal}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleConfirm}>Reject</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </div>
  )
}