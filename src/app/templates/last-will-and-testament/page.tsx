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

export default function LastWillAndTestamentForm() {
  const [date, setDate] = useState<Date>()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Last Will and Testament</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          
          <h1 className="text-xl font-bold text-left mb-8">Personal Information</h1>
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="Enter your full name" />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter your address" />
          </div>
          <div>
            <Label htmlFor="zip">Zip Code</Label>
            <Input id="zip" placeholder="Enter zip code" />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="Enter city" />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="Enter state" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Executor Information</h1>
          <div>
            <Label htmlFor="executorName">Executor Name</Label>
            <Input id="executorName" placeholder="Enter executor name" />
          </div>
          <div>
            <Label htmlFor="executorAddress">Executor Address</Label>
            <Input id="executorAddress" placeholder="Enter executor address" />
          </div>
          <div>
            <Label htmlFor="executorZip">Zip Code</Label>
            <Input id="executorZip" placeholder="Enter zip code" />
          </div>
          <div>
            <Label htmlFor="executorCity">City</Label>
            <Input id="executorCity" placeholder="Enter city" />
          </div>
          <div>
            <Label htmlFor="executorState">State</Label>
            <Input id="executorState" placeholder="Enter state" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Beneficiaries</h1>
          <div>
            <Label htmlFor="beneficiaries">List of Beneficiaries</Label>
            <Textarea id="beneficiaries" placeholder="Enter beneficiaries' names and details" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Assets</h1>
          <div>
            <Label htmlFor="assets">List of Assets</Label>
            <Textarea id="assets" placeholder="Enter assets details" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Date of Will</h1>
          <div>
            <Label>Date</Label>
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

          <h1 className="text-xl font-bold text-left mb-8">Additional Instructions</h1>
          <div>
            <Label htmlFor="additionalInstructions">Additional Instructions</Label>
            <Textarea id="additionalInstructions" placeholder="Enter any additional instructions..." />
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