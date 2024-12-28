import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const mockHearings = [
  { id: 1, caseTitle: "Divorce Proceedings", date: "2023-12-15", time: "10:00 AM", location: "Court Room 3" },
  { id: 2, caseTitle: "Copyright Infringement", date: "2023-12-18", time: "2:00 PM", location: "Court Room 5" },
  { id: 3, caseTitle: "Property Dispute", date: "2023-12-20", time: "11:30 AM", location: "Court Room 2" },
]

export default function HearingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Upcoming Hearings</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Case Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockHearings.map((hearing) => (
            <TableRow key={hearing.id}>
              <TableCell>{hearing.caseTitle}</TableCell>
              <TableCell>{hearing.date}</TableCell>
              <TableCell>{hearing.time}</TableCell>
              <TableCell>{hearing.location}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

