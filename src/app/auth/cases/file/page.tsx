"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {parseCookies} from 'nookies'


const lawyers = [
  { name: "Kamal Hannan", id: 1 },
  { name: "Shoyeb Fakir", id: 2 },
  { name: "Mostofa Kamal", id: 3 },
  { name: "Iftekhar Islam", id: 4 },
 
]


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
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [lawyerId, setLawyerId] = useState("") 
  const cookies = parseCookies()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const user = cookies.user ? JSON.parse(cookies.user) : null;
    const userId = user.userId

    if (!title || !category || !lawyerId) {
      alert("Please fill in all required fields.")
      return
    }

    try {

     // const client_id = '3';
      const response = await fetch("http://localhost:10101/cases/client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
        body: JSON.stringify({
          title,
          description,
          lawyer_id: 5,
          userId: userId,
          category
        }),
      })

      const data = await response.json()

      if (response.ok) {
        alert("Case created successfully!")
      } else {
        alert(`Failed to create case: ${data.error}`)
      }
    } catch (error) {
      console.error("Error submitting case:", error)
      alert("Error submitting case.")
    }
  }

  return (
    <div className="mt-20 flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 p-12">
      <h1 className=" text-5xl font-bold mb-12 text-border-800">Add Case Details</h1>
      <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl w-full">
        <div>
          <Label htmlFor="title" className="text-lg font-medium">Case Title</Label>
          <Input 
            id="title" 
            placeholder="Enter case title" 
            className="mt-2 w-full p-4 text-lg border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="category" className="text-lg font-medium">Case Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="mt-2 w-full p-4 border rounded-md text-lg">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="bg-primary-50">
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
          <Textarea 
            id="description" 
            placeholder="Describe your case" 
            className="mt-2 w-full p-4 text-lg border rounded-md h-60"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
  <Label htmlFor="lawyerId" className="text-lg font-medium">Select Lawyer</Label>
  <Select value={lawyerId} onValueChange={(value) => setLawyerId(value)}>
    <SelectTrigger className="mt-2 w-full p-4 border rounded-md text-lg">
      <SelectValue placeholder="Select a lawyer" />
    </SelectTrigger>
    <SelectContent className="bg-primary-50">
      {lawyers.map((lawyer) => (
        <SelectItem key={lawyer.name} value={lawyer.name} className="text-lg py-3">
          {lawyer.name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
 
</div>


        <Button type="submit" className="mb-10 w-full py-4 text-lg font-medium rounded-md bg-blue-500 hover:bg-blue-600 text-white">
          Submit
        </Button>
      </form>
    </div>
  )
}
