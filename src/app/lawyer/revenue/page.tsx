'use client'

import { useState } from 'react'
// import { withAuth } from '@/components/with-auth'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Dummy data for revenue
const revenueData = [
  { id: 1, client: 'John Doe', amount: 1500, date: '2023-07-01', status: 'Paid' },
  { id: 2, client: 'Jane Smith', amount: 2000, date: '2023-07-05', status: 'Pending' },
  { id: 3, client: 'Bob Johnson', amount: 1000, date: '2023-07-10', status: 'Paid' },
  { id: 4, client: 'Alice Brown', amount: 3000, date: '2023-07-15', status: 'Overdue' },
  { id: 5, client: 'Charlie Davis', amount: 1800, date: '2023-07-20', status: 'Pending' },
]

function LawyerRevenuePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState('')

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.amount, 0)
  const paidRevenue = revenueData.filter(item => item.status === 'Paid').reduce((sum, item) => sum + item.amount, 0)
  const pendingRevenue = revenueData.filter(item => item.status === 'Pending').reduce((sum, item) => sum + item.amount, 0)

  const handleAskForPayment = (client: string) => {
    setSelectedClient(client)
    setIsDialogOpen(true)
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Revenue Management</h1>

      <div className="grid gap-6 mb-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${totalRevenue.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Paid Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary-600">${paidRevenue.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-secondary-600">${pendingRevenue.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {revenueData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.client}</TableCell>
                  <TableCell>${item.amount.toLocaleString()}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    {item.status !== 'Paid' && (
                      <Button onClick={() => handleAskForPayment(item.client)}>
                        Ask for Payment
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ask for Payment</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="client">Client</Label>
              <Input id="client" value={selectedClient} readOnly />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Input id="message" placeholder="Enter your payment request message" />
            </div>
            <Button onClick={() => setIsDialogOpen(false)}>Send Request</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// export default withAuth(LawyerRevenuePage)

 export default (LawyerRevenuePage)

