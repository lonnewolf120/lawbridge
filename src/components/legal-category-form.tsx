'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'

const legalCategories = [
  { id: 'criminal', label: 'Criminal Law' },
  { id: 'civil', label: 'Civil Law' },
  { id: 'family', label: 'Family Law' },
  { id: 'corporate', label: 'Corporate Law' },
  { id: 'immigration', label: 'Immigration Law' },
  { id: 'other', label: 'Other' },
]

export function LegalCategoryForm() {
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission (e.g., send data to chatbot)
    console.log('Form submitted:', { category, description })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Categorize Your Legal Issue</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label>Select a category:</Label>
            <RadioGroup value={category} onValueChange={setCategory}>
              {legalCategories.map((cat) => (
                <div key={cat.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={cat.id} id={cat.id} />
                  <Label htmlFor={cat.id}>{cat.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="issue-description">Briefly describe your legal issue:</Label>
            <Textarea 
              id="issue-description" 
              placeholder="Enter your legal issue here..." 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className='bg-amber-100 hover:bg-amber-200 border-amber-200 text-black text-base'
        type="submit" onClick={() => handleSubmit}>Get Assistance</Button>
      </CardFooter>
    </Card>
  )
}

