'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from 'lucide-react'
import Link from 'next/link'

export default function SeparationAgreementForm() {
  const [date, setDate] = useState<Date>()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Separation Agreement</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          
          <h1 className="text-xl font-bold text-left mb-8">Personal Information</h1>
          <div>
            <Label htmlFor="petitionerName">Petitioner Name</Label>
            <Input id="petitionerName" placeholder="Enter Petitioner name" />
          </div>
          <div>
            <Label htmlFor="petitionerAddress">Petitioner Address</Label>
            <Input id="petitionerAddress" placeholder="Enter Petitioner address" />
          </div>
          <div>
            <Label htmlFor="respondentName">Respondent Name</Label>
            <Input id="respondentName" placeholder="Enter Respondent name" />
          </div>
          <div>
            <Label htmlFor="respondentAddress">Respondent Address</Label>
            <Input id="respondentAddress" placeholder="Enter Respondent address" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Separation Details</h1>
          <div>
            <Label htmlFor="separationDate">Date of Separation</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label htmlFor="reason">Reason for Separation</Label>
            <Textarea id="reason" placeholder="Enter reason for separation" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Child Custody</h1>
          <div>
            <Label htmlFor="childCustody">Child Custody Details</Label>
            <Textarea id="childCustody" placeholder="Enter child custody details" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Property Division</h1>
          <div>
            <Label htmlFor="propertyDivision">Property Division Details</Label>
            <Textarea id="propertyDivision" placeholder="Enter property division details" />
          </div>
          <div>
            <Label>Property Division Type</Label>
            <RadioGroup defaultValue="equal">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="equal" id="equal" />
                <Label htmlFor="equal">Equal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unequal" id="unequal" />
                <Label htmlFor="unequal">Unequal</Label>
              </div>
            </RadioGroup>
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Spousal Support</h1>
          <div>
            <Label htmlFor="spousalSupport">Spousal Support Details</Label>
            <Textarea id="spousalSupport" placeholder="Enter spousal support details" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Additional Terms</h1>
          <div>
            <Label htmlFor="additionalTerms">Additional Terms</Label>
            <Textarea id="additionalTerms" placeholder="Enter any additional terms..." />
          </div>

          <Link href="/templates/2/draft">
            <Button type="submit" className="w-full bg-[#8BC34A] hover:bg-[#7CB342] text-white mt-5">
              Show the Draft
            </Button>
          </Link> 
        </form>
      </div>
    </div>
  )
}