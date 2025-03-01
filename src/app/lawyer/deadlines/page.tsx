'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { get_req } from '@/lib/functions'

// Dummy data for deadlines
const deadlinesData = [
  { id: 1, title: 'File Motion', dueDate: '2023-07-15', case: 'Smith vs. Johnson', priority: 'High' },
  { id: 2, title: 'Client Meeting', dueDate: '2023-07-20', case: 'Brown Divorce', priority: 'Medium' },
  { id: 3, title: 'Court Hearing', dueDate: '2023-07-25', case: 'State vs. Davis', priority: 'High' },
  { id: 4, title: 'Document Review', dueDate: '2023-07-30', case: 'Jones Contract', priority: 'Low' },
  { id: 5, title: 'Settlement Negotiation', dueDate: '2023-08-05', case: 'Miller Injury Claim', priority: 'Medium' },
]

function LawyerDeadlinesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedDeadline, setSelectedDeadline] = useState<typeof deadlinesData[0] | null>(null)

  useEffect(() => {
    const fetchDeadline = async()=> {
    const data = await get_req('deadlines')
    console.log(data)
  }
  }, [])

  const handleEditDeadline = (deadline: typeof deadlinesData[0]) => {
    setSelectedDeadline(deadline)
    setIsDialogOpen(true)
  }

  const handleUpdateDeadline = () => {
    // In a real application, you would update the deadline in your backend here
    console.log('Updating deadline:', selectedDeadline)
    setIsDialogOpen(false)
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Deadlines</h1>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Deadlines</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Case</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deadlinesData.map((deadline) => (
                <TableRow key={deadline.id}>
                  <TableCell>{deadline.title}</TableCell>
                  <TableCell>{deadline.dueDate}</TableCell>
                  <TableCell>{deadline.case}</TableCell>
                  <TableCell>{deadline.priority}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEditDeadline(deadline)}>
                      Edit
                    </Button>
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
            <DialogTitle>Edit Deadline</DialogTitle>
          </DialogHeader>
          {selectedDeadline && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  value={selectedDeadline.title} 
                  onChange={(e) => setSelectedDeadline({...selectedDeadline, title: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="dueDate">Due Date</Label>
                <Input 
                  id="dueDate" 
                  type="date" 
                  value={selectedDeadline.dueDate} 
                  onChange={(e) => setSelectedDeadline({...selectedDeadline, dueDate: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="case">Case</Label>
                <Input 
                  id="case" 
                  value={selectedDeadline.case} 
                  onChange={(e) => setSelectedDeadline({...selectedDeadline, case: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Input 
                  id="priority" 
                  value={selectedDeadline.priority} 
                  onChange={(e) => setSelectedDeadline({...selectedDeadline, priority: e.target.value})}
                />
              </div>
              <Button onClick={handleUpdateDeadline}>Update Deadline</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default LawyerDeadlinesPage

