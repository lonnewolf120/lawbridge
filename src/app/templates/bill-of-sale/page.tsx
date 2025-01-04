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

export default function BillOfSaleForm() {
  const [date, setDate] = useState<Date>()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Bill of Sale</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          
          <h1 className="text-xl font-bold text-left mb-8">Seller Information</h1>
          <div>
            <Label htmlFor="sellerName">Seller Name</Label>
            <Input id="sellerName" placeholder="Enter seller name" />
          </div>
          <div>
            <Label htmlFor="sellerAddress">Seller Address</Label>
            <Input id="sellerAddress" placeholder="Enter seller address" />
          </div>
          <div>
            <Label htmlFor="sellerZip">Zip Code</Label>
            <Input id="sellerZip" placeholder="Enter zip code" />
          </div>
          <div>
            <Label htmlFor="sellerCity">City</Label>
            <Input id="sellerCity" placeholder="Enter city" />
          </div>
          <div>
            <Label htmlFor="sellerState">State</Label>
            <Input id="sellerState" placeholder="Enter state" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Buyer Information</h1>
          <div>
            <Label htmlFor="buyerName">Buyer Name</Label>
            <Input id="buyerName" placeholder="Enter buyer name" />
          </div>
          <div>
            <Label htmlFor="buyerAddress">Buyer Address</Label>
            <Input id="buyerAddress" placeholder="Enter buyer address" />
          </div>
          <div>
            <Label htmlFor="buyerZip">Zip Code</Label>
            <Input id="buyerZip" placeholder="Enter zip code" />
          </div>
          <div>
            <Label htmlFor="buyerCity">City</Label>
            <Input id="buyerCity" placeholder="Enter city" />
          </div>
          <div>
            <Label htmlFor="buyerState">State</Label>
            <Input id="buyerState" placeholder="Enter state" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Item Details</h1>
          <div>
            <Label htmlFor="itemDescription">Item Description</Label>
            <Textarea id="itemDescription" placeholder="Enter item description" />
          </div>
          <div>
            <Label htmlFor="itemPrice">Item Price</Label>
            <Input id="itemPrice" type="number" placeholder="Enter item price" />
          </div>

          <h1 className="text-xl font-bold text-left mb-8">Date of Sale</h1>
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