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

export default function EmploymentContractForm() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Employment Contract</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          
          <h1 className="text-xl font-bold text-left mb-8">Employer Details</h1>
          <div>
            <Label htmlFor="employerName">Employer Name</Label>
            <Input id="employerName" placeholder="Enter employer name" />
          </div>
          <div>
            <Label htmlFor="employerAddress">Employer Address</Label>
            <Input id="employerAddress" placeholder="Enter employer address" />
          </div>
          <div>
            <Label htmlFor="employerZip">Zip Code</Label>
            <Input id="employerZip" placeholder="Enter zip code" />
          </div>
          <div>
            <Label htmlFor="employerCity">City</Label>
            <Input id="employerCity" placeholder="Enter city" />
          </div>
          <div>
            <Label htmlFor="employerState">State</Label>
            <Input id="employerState" placeholder="Enter state" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Employee Details</h1>
          <div>
            <Label htmlFor="employeeName">Employee Name</Label>
            <Input id="employeeName" placeholder="Enter employee name" />
          </div>
          <div>
            <Label htmlFor="employeeAddress">Employee Address</Label>
            <Input id="employeeAddress" placeholder="Enter employee address" />
          </div>
          <div>
            <Label htmlFor="employeeZip">Zip Code</Label>
            <Input id="employeeZip" placeholder="Enter zip code" />
          </div>
          <div>
            <Label htmlFor="employeeCity">City</Label>
            <Input id="employeeCity" placeholder="Enter city" />
          </div>
          <div>
            <Label htmlFor="employeeState">State</Label>
            <Input id="employeeState" placeholder="Enter state" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Job Details</h1>
          <div>
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input id="jobTitle" placeholder="Enter job title" />
          </div>
          <div>
            <Label htmlFor="jobDescription">Job Description</Label>
            <Textarea id="jobDescription" placeholder="Enter job description" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Compensation</h1>
          <div>
            <Label htmlFor="salary">Salary</Label>
            <Input id="salary" type="number" placeholder="Enter salary amount" />
          </div>
          <div>
            <Label htmlFor="paymentFrequency">Payment Frequency</Label>
            <RadioGroup defaultValue="monthly">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">Monthly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bi-weekly" id="bi-weekly" />
                <Label htmlFor="bi-weekly">Bi-Weekly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weekly" id="weekly" />
                <Label htmlFor="weekly">Weekly</Label>
              </div>
            </RadioGroup>
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Employment Period</h1>
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