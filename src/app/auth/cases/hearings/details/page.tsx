'use client'
import React, { useEffect, useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MapPin, User, ChevronUp } from "lucide-react"
import Loader from "@/components/external/Loader"

interface Hearing {
  hearing_id: number;
  casetitle: string; 
  date: string;
  time: string;
  location: string;
  prosecution: string;
  defense: string;
  judge: string;
  status: string;
  brief_summary: string;
  prev_hearing_summary: string;
  next_steps: string;
}

export default function HearingPage() {
  const hearing_id = 1
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const [hearingData, setHearingData] = useState<Hearing | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:10101/hearings/${hearing_id}`, {
          method: 'GET',
          credentials: 'include', 
        });
        const data = await res.json()
        setHearingData(data.hearing)
        console.log(data)
      } catch (error) {
        console.error('Error fetching hearing data:', error)
      }
    }
    fetchData()
  }, [])

  if (!hearingData) {
    return <Loader text='Loading hearing information...' />
  }

  return (
    <div className="flex-grow flex flex-col bg-gradient-to-b from-white to-primary-50 p-8">
      <div className="container mx-auto p-4 space-y-6 pb-16 mb-12">
        <div className="space-y-2" id="basic-info">
          <h1 className="text-3xl font-bold">{hearingData.casetitle}</h1>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Case #047</Badge>
            <Badge className="bg-primary-500">Scheduled</Badge>
          </div>
        </div>

        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Hearing Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Hearing Date: {hearingData.date.split("T")[0]}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Time: {hearingData.time.split(":").slice(0, 2).join(":")}{" "}
                  {parseInt(hearingData.time.split(":")[0]) >= 12 ? "PM" : "AM"}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Venue: {hearingData.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>Judge: Hon. {hearingData.judge}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parties Involved */}
        <Card id="parties">
          <CardHeader>
            <CardTitle>Parties Involved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-semibold">Prosecution</h3>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>II</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{hearingData.prosecution}</p>
                    <p className="text-sm text-muted-foreground">District Attorney</p>
                    <p className="text-sm text-muted-foreground">ismlammahim@gov.bd</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Defense</h3>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>NA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{hearingData.defense}</p>
                    <p className="text-sm text-muted-foreground">Defense Attorney</p>
                    <p className="text-sm text-muted-foreground">nahiyanahmed.com</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hearing Status */}
        <Card id="status">
          <CardHeader>
            <CardTitle>Hearing Status & Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Current Status</h3>
              <Badge variant="outline">{hearingData.status}</Badge>
              <p className="text-muted-foreground mt-2">Next hearing scheduled for March 15, 2024 at 10:00 AM EST</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Previous Hearing Summary</h3>
              <p className="text-muted-foreground">
                {hearingData.prev_hearing_summary}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Hearing Summary */}
        <Card id="summary">
          <CardHeader>
            <CardTitle>Hearing Summary & Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Brief Summary</h3>
              <p className="text-muted-foreground">
                {hearingData.brief_summary}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Next Step</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>{hearingData.next_steps}</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        
      </div>
    </div>
  )
}