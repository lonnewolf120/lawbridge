import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CalendarDays, MapPin, Clock } from 'lucide-react'

const mockHearings = [
  { id: 1, caseTitle: "Divorce Proceedings", date: "2023-12-15", time: "10:00 AM", location: "Court Room 3" },
  { id: 2, caseTitle: "Copyright Infringement", date: "2023-12-18", time: "2:00 PM", location: "Court Room 5" },
  { id: 3, caseTitle: "Property Dispute", date: "2023-12-20", time: "11:30 AM", location: "Court Room 2" },
]

export default function HearingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-amber-900">Upcoming Hearings</h1>
      <div className="grid gap-6">
        {mockHearings.map((hearing) => (
          <Card key={hearing.id} className="overflow-hidden border-orange-200">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
              <CardTitle>{hearing.caseTitle}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <CalendarDays className="w-5 h-5 mr-2 text-amber-600" />
                  <span>{hearing.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-amber-600" />
                  <span>{hearing.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                  <span>{hearing.location}</span>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" className="text-amber-700 border-amber-500 hover:bg-amber-50">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

