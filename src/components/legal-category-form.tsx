"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

const legalCategories = [
  { id: "criminal", label: "Criminal Law", icon: "⚖️" },
  { id: "civil", label: "Civil Law", icon: "📜" },
  { id: "family", label: "Family Law", icon: "👨‍👩‍👧‍👦" },
  { id: "corporate", label: "Corporate Law", icon: "🏢" },
  { id: "immigration", label: "Immigration Law", icon: "✈️" },
  { id: "other", label: "Other", icon: "📋" },
]

export function LegalCategoryForm({
  category,
  setCategory,
  description,
  setDescription,
}: {
  category: string | null
  setCategory: (value: string) => void
  description: string | null
  setDescription: (value: string) => void
}) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Form submitted:", { category, description })
  }

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <Card className="backdrop-blur-sm bg-white/50 border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            Categorize Your Legal Issue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Label className="text-lg">Select a category:</Label>
              <RadioGroup value={category || ""} onValueChange={setCategory}>
                <div className="grid grid-cols-1 gap-3">
                  {legalCategories.map((cat) => (
                    <motion.div key={cat.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <label
                        htmlFor={cat.id}
                        className={`flex items-center space-x-3 rounded-lg border cursor-pointer transition-all duration-200 px-3
                          ${category === cat.id ? "bg-primary-50 border-primary-200" : "border-gray-200 hover:bg-gray-50"}`}
                      >
                        <RadioGroupItem value={cat.id} id={cat.id} />
                        <span className="text-xl mr-2">{cat.icon}</span>
                        <span className="font-medium">{cat.label}</span>
                      </label>
                    </motion.div>
                  ))}
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="issue-description" className="text-lg">
                  Describe your legal issue
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Provide context about your legal matter to help the AI assistant give more relevant advice.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Textarea
                id="issue-description"
                placeholder="Please provide details about your legal situation..."
                value={description || ""}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[150px] resize-none"
              />
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium" type="submit">
                Start Consultation
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

