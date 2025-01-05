"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const caseCategories = [
  { name: "Personal Law", description: "Marriage, divorce, inheritance" },
  { name: "Business Law", description: "Contracts, compliance, IP" },
  { name: "Criminal Law", description: "Procedures, rights, defenses" },
  { name: "Civil Law", description: "Property disputes, tenant rights" },
  { name: "Legal Writing", description: "Documentation and reports" },
  { name: "International Law", description: "Immigration, cross-border" },
]

export default function FileCasePage() {
  const [category, setCategory] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 p-12">
      <h1 className="text-5xl font-bold mb-12 text-gray-800">File a New Case</h1>
      <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl w-full">
        <div>
          <Label htmlFor="title" className="text-lg font-medium">Case Title</Label>
          <Input id="title" placeholder="Enter case title" className="mt-2 w-full p-4 text-lg border rounded-md" />
        </div>
        <div>
          <Label htmlFor="category" className="text-lg font-medium">Case Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="mt-2 w-full p-4 border rounded-md text-lg">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {caseCategories.map((cat) => (
                <SelectItem key={cat.name} value={cat.name} className="text-lg py-3">
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="description" className="text-lg font-medium">Case Description</Label>
          <Textarea id="description" placeholder="Describe your case" className="mt-2 w-full p-4 text-lg border rounded-md h-60" />
        </div>
        <Button type="submit" className="w-full py-4 text-lg font-medium rounded-md bg-blue-500 hover:bg-blue-600 text-white">File Case</Button>
      </form>
    </div>
  )
}
