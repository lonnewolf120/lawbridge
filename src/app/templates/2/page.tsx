"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const formFields = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function RentalAgreementForm() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            Rental Agreement Form
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Fill out the form below to generate your customized rental agreement
          </p>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={formFields}>
          <Card className="backdrop-blur-sm bg-white/50">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Agreement Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={formFields} className="space-y-4">
                  <Label htmlFor="propertyType" className="text-lg">
                    What kind of property is being rented?
                  </Label>
                  <Textarea
                    id="propertyType"
                    placeholder="Describe the property..."
                    className="min-h-[100px] resize-none"
                  />
                </motion.div>

                <motion.div variants={formFields} className="space-y-4">
                  <Label className="text-lg">What type of lease term?</Label>
                  <RadioGroup defaultValue="fixed" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["fixed", "month-to-month", "year-to-year"].map((term) => (
                      <div
                        key={term}
                        className="flex items-center space-x-2 p-4 rounded-lg border border-primary-200 hover:border-primary-300 transition-colors"
                      >
                        <RadioGroupItem value={term} id={term} />
                        <Label htmlFor={term} className="capitalize">
                          {term.replace(/-/g, " ")}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </motion.div>

                <motion.div variants={formFields} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Start Date", value: startDate, setter: setStartDate },
                    { label: "End Date", value: endDate, setter: setEndDate },
                  ].map((date) => (
                    <div key={date.label} className="space-y-2">
                      <Label className="text-lg">{date.label}</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal hover:bg-primary-50"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date.value ? format(date.value, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" selected={date.value} onSelect={date.setter} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={formFields} className="space-y-4">
                  <Label htmlFor="propertyAddress" className="text-lg">
                    Address of the Property
                  </Label>
                  <Textarea
                    id="propertyAddress"
                    placeholder="Enter the complete property address..."
                    className="min-h-[100px] resize-none"
                  />
                </motion.div>

                <motion.div variants={formFields} className="space-y-4">
                  <Label className="text-lg">Payment Details</Label>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label htmlFor="rentAmount" className="text-base">
                        Monthly Rent Amount
                      </Label>
                      <Input id="rentAmount" type="number" placeholder="Enter amount" className="max-w-xs" />
                    </div>

                    <RadioGroup defaultValue="yes" className="space-y-2">
                      <Label className="text-base">Payment on first of the month?</Label>
                      <div className="grid grid-cols-2 gap-4 max-w-xs">
                        {["yes", "no"].map((option) => (
                          <div
                            key={option}
                            className="flex items-center space-x-2 p-4 rounded-lg border border-primary-200 hover:border-primary-300 transition-colors"
                          >
                            <RadioGroupItem value={option} id={`payment-${option}`} />
                            <Label htmlFor={`payment-${option}`} className="capitalize">
                              {option}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </motion.div>

                <motion.div variants={formFields} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: "landlordInfo", label: "Landlord Details" },
                    { id: "tenantInfo", label: "Tenant Details" },
                  ].map((field) => (
                    <div key={field.id} className="space-y-2">
                      <Label htmlFor={field.id} className="text-lg">
                        {field.label}
                      </Label>
                      <Textarea
                        id={field.id}
                        placeholder={`Enter ${field.label.toLowerCase()}...`}
                        className="min-h-[100px] resize-none"
                      />
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={formFields} className="pt-6">
                  <Link href="/templates/2/draft">
                    <Button
                      type="submit"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white h-12 text-lg"
                    >
                      Generate Agreement
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

