import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const mockCases = [
  { id: 1, title: "Divorce Proceedings", category: "Personal Law", status: "Active" },
  { id: 2, title: "Copyright Infringement", category: "Business Law", status: "Pending" },
  { id: 3, title: "Property Dispute", category: "Civil Law", status: "Closed" },
]

export default function MyCasesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Cases</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Case Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockCases.map((case_) => (
            <TableRow key={case_.id}>
              <TableCell>{case_.title}</TableCell>
              <TableCell>{case_.category}</TableCell>
              <TableCell>{case_.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-6">
        <Link href="/cases/file">
          <Button>File New Case</Button>
        </Link>
      </div>
    </div>
  )
}

