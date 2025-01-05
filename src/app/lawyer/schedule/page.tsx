'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const appointments = [
  { id: 1, client: 'John Doe', type: 'Consultation', time: '09:00 AM' },
  { id: 2, client: 'Jane Smith', type: 'Case Review', time: '11:00 AM' },
  { id: 3, client: 'Bob Johnson', type: 'Court Hearing', time: '02:00 PM' },
  { id: 4, client: 'Alice Brown', type: 'Document Signing', time: '04:00 PM' },
]

export default function LawyerSchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">My Schedule</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Appointments</CardTitle>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="consultation">Consultation</SelectItem>
                <SelectItem value="review">Case Review</SelectItem>
                <SelectItem value="hearing">Court Hearing</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <h3 className="font-medium">{appointment.client}</h3>
                    <p className="text-sm text-muted-foreground">{appointment.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{appointment.time}</p>
                    <Button variant="link" className="text-sm p-0">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4">Schedule New Appointment</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

