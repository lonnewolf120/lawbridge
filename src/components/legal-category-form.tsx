'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {Tooltip} from "@nextui-org/react";

const legalCategories = [
  { id: 'criminal', label: 'Criminal Law' },
  { id: 'civil', label: 'Civil Law' },
  { id: 'family', label: 'Family Law' },
  { id: 'corporate', label: 'Corporate Law' },
  { id: 'immigration', label: 'Immigration Law' },
  { id: 'other', label: 'Other' },
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
    // You can persist form data here if needed
    console.log('Form submitted:', { category, description })
  }
  var showPopup = false;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categorize Your Legal Issue</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label>Select a category:</Label>
            <RadioGroup value={category || ''} onValueChange={setCategory}>
              {legalCategories.map((cat) => (
                <div key={cat.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={cat.id} id={cat.id} />
                  <Label htmlFor={cat.id}>{cat.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="issue-description">Briefly describe your legal issue </Label>
            <Tooltip content="this gives the AI assistant more insight about your matter and so his discussions will remain within context.">
              <button className="ml-2 rounded-full bg-gray-200 p-1 text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
            </button>
            </Tooltip>
            <Textarea
              id="issue-description"
              placeholder="Give legal issue context"
              value={description || ''}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button
            className="bg-amber-100 hover:bg-amber-200 border-amber-200 text-black text-base"
            type="submit"
          >
            Get Assistance
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
