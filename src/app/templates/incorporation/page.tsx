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
        <h1 className="text-3xl font-bold text-center mb-8">Incorporation</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          
          <h1 className="text-xl font-bold text-left mb-8">Name and Address</h1>
    
          <div>

            <Label htmlFor="corporationName">Corporation Name</Label>
            <Input id="corporationName" placeholder="Enter corporation name" />
          </div>
          <div>
            <Label htmlFor="corporationAddress">Corporation Address</Label>
            <Input id="corporationAddress" placeholder="Enter corporation address" />
          </div>
          <div>
            <Label htmlFor="corporationZip">Zip Code</Label>
            <Input id="corporationZip" placeholder="Enter zip code" />
          </div>
          <div>
            <Label htmlFor="corporationCity">City</Label>
            <Input id="corporationCity" placeholder="Enter city" />
          </div>
          <div>
            <Label htmlFor="corporationState">State</Label>
            <Input id="corporationState" placeholder="Enter state" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Statement of Purpose </h1>
          <div>
            <Label htmlFor="statementOfPurpose">The purpose for which the corporation is organized is:
             </Label>
            <Textarea id="statementOfPurpose" placeholder="Enter statement of purpose" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8"> Registered Agent </h1>
          <div>
            <Label htmlFor="agentName">Registered Agent Name</Label>
            <Input id="agentName" placeholder="Enter agent name" />
          </div>
          <div>
            <Label htmlFor="agentAddress">Registered Agent Address</Label>
            <Input id="agentAddress" placeholder="Enter agent address" />
          </div>
          <div>
            <Label htmlFor="agentZip">Zip Code</Label>
            <Input id="agentZip" placeholder="Enter zip code" />
          </div>
          <div>
            <Label htmlFor="agentCity">City</Label>
            <Input id="agentCity" placeholder="Enter city" />
          </div>
          <div>
            <Label htmlFor="agentState">State</Label>
            <Input id="agentState" placeholder="Enter state" />
          </div>

          
          <h1 className="text-xl font-bold text-left mb-8">Incorporator Details</h1>
          <div>
            <Label htmlFor="incorporatorName">Incorporator Name</Label>
            <Input id="incorporatorName" placeholder="Enter incorporator name" />
          </div>
          <div>
            <Label htmlFor="incorporatorAddress">Incorporator Address</Label>
            <Input id="incorporatorAddress" placeholder="Enter incorporator address" />
          </div>
          <div>
            <Label htmlFor="incorporatorZip">Zip Code</Label>
            <Input id="incorporatorZip" placeholder="Enter zip code" />
          </div>
          <div>
            <Label htmlFor="incorporatorCity">City</Label>
            <Input id="incorporatorCity" placeholder="Enter city" />
          </div>
          <div>
            <Label htmlFor="incorporatorState">State</Label>
            <Input id="incorporatorState" placeholder="Enter state" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8"> Director</h1>
          <div>
            <Label htmlFor="directorName">Director Name</Label>
            <Input id="directorName" placeholder="Enter director name" />
          </div>
          <div>
            <Label htmlFor="directorAddress">Director Address</Label>
            <Input id="directorAddress" placeholder="Enter director address" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8"> Authorized Stock Section </h1>
          <div>
            <Label htmlFor="authorizedStock">How many total shares of stock is the corporation authorized to issue?</Label>
            <Input id="authorizedStock" type="number" placeholder="Enter number of shares" />
          </div>

          
          <h1 className="text-xl font-bold text-left mb-8">Duration</h1>
          <div>
            <Label htmlFor="duration">How long is the duration of this corporation?</Label>
           
            <RadioGroup defaultValue="fixed">
              <div className="flex items-center space-x-2 mt-3">
                <RadioGroupItem value="fixed" id="fixed" />
                <Label htmlFor="fixed">Perpetual</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="month-to-month" id="month-to-month" />
                <Label htmlFor="month-to-month">Ends after a number of years</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="year-to-year" id="year-to-year" />
                <Label htmlFor="year-to-year">Ends on a certain date



                </Label>
              </div>
            </RadioGroup>


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