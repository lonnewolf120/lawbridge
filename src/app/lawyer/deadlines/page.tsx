'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AddReminder } from "@/components/add-reminder"
// import { toast } from "@/components/ui/use-toast"
import { useToast } from "@/components/ui/use-toast"
const deadlines = [
  { id: '1', caseId: '1234', description: 'File Motion', dueDate: '2023-07-15', status: 'Upcoming' },
  { id: '2', caseId: '5678', description: 'Client Meeting', dueDate: '2023-07-20', status: 'Upcoming' },
  { id: '3', caseId: '9101', description: 'Court Hearing', dueDate: '2023-07-25', status: 'Upcoming' },
  { id: '4', caseId: '1121', description: 'Document Submission', dueDate: '2023-07-10', status: 'Overdue' },
  { id: '5', caseId: '3141', description: 'Case Review', dueDate: '2023-07-05', status: 'Completed' },
]

export default function DeadlinesPage() {
  const [filter, setFilter] = useState('all')
  const {toast} = useToast()

  const filteredDeadlines = deadlines.filter(deadline => {
    if (filter === 'all') return true
    return deadline.status.toLowerCase() === filter
  })

  const exportDeadlines = () => {
    // Here you would typically generate a CSV or PDF file
    const csv = [
      ['Case ID', 'Description', 'Due Date', 'Status'],
      ...deadlines.map(d => [d.caseId, d.description, d.dueDate, d.status])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', 'deadlines.csv')
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
    toast({
      title: "Deadlines Exported",
      description: "Your deadlines have been exported to a CSV file.",
    })
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Deadlines</h1>
        
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>All Deadlines</CardTitle>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDeadlines.map((deadline) => (
                <TableRow key={deadline.id}>
                  <TableCell>{deadline.caseId}</TableCell>
                  <TableCell>{deadline.description}</TableCell>
                  <TableCell>{deadline.dueDate}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        deadline.status === 'Upcoming' ? 'default' : 
                        deadline.status === 'Overdue' ? 'destructive' : 
                        'secondary'
                      }
                    >
                      {deadline.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="link">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="mt-8 flex justify-end">
        <Button variant="outline" className="mr-4" onClick={exportDeadlines}>Export Deadlines</Button>
        <AddReminder />
      </div>
    </div>
  )
}

