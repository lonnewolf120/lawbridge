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

export default function RentalAgreementForm() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Rental Agreement Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div>
            <Label htmlFor="propertyType">What kind of property is being rented?</Label>
            <Textarea id="propertyType" placeholder="Describe the property..." />
          </div>

          <div>
            <Label>What type of lease term?</Label>
            <RadioGroup defaultValue="fixed">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fixed" id="fixed" />
                <Label htmlFor="fixed">Fixed</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="month-to-month" id="month-to-month" />
                <Label htmlFor="month-to-month">Month to Month</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="year-to-year" id="year-to-year" />
                <Label htmlFor="year-to-year">Year to Year</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label>End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div>
            <Label htmlFor="propertyAddress">Address of the Property</Label>
            <Textarea id="propertyAddress" placeholder="Enter the property address..." />
          </div>

          <div>
            <Label>Will the tenant pay rent monthly?</Label>
            <RadioGroup defaultValue="yes">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="rent-monthly-yes" />
                <Label htmlFor="rent-monthly-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="rent-monthly-no" />
                <Label htmlFor="rent-monthly-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="rentAmount">How much will the tenant pay per month?</Label>
            <Input id="rentAmount" type="number" placeholder="Enter amount" />
          </div>

          <div>
            <Label>Will the tenant pay on the first of the month?</Label>
            <RadioGroup defaultValue="yes">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="rent-first-yes" />
                <Label htmlFor="rent-first-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="rent-first-no" />
                <Label htmlFor="rent-first-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="landlordInfo">Name and address of Landlord</Label>
            <Textarea id="landlordInfo" placeholder="Enter landlord's information..." />
          </div>

          <div>
            <Label htmlFor="tenantInfo">Name and address of Tenant</Label>
            <Textarea id="tenantInfo" placeholder="Enter tenant's information..." />
          </div>
          <Link href="/templates/2/draft">
          <Button type="submit" className="w-full bg-[#8BC34A] hover:bg-[#7CB342] text-white">
            Show the Draft
          </Button>
          </Link> 
        </form>
      </div>
    </div>
  )
}

