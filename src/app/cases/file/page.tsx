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
    <div>
      <h1 className="text-3xl font-bold mb-8">File a New Case</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div>
          <Label htmlFor="title">Case Title</Label>
          <Input id="title" placeholder="Enter case title" />
        </div>
        <div>
          <Label htmlFor="category">Case Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {caseCategories.map((cat) => (
                <SelectItem key={cat.name} value={cat.name}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="description">Case Description</Label>
          <Textarea id="description" placeholder="Describe your case" />
        </div>
        <Button type="submit">File Case</Button>
      </form>
    </div>
  )
}
