"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, FileText } from "lucide-react"

interface CourseCardProps {
  id: string
  title: string
  description: string
  imageId: number
  content: string
  resources: { type: string; name: string }[]
}

export function CourseCard({ id, title, description, imageId, content, resources }: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Function to create a summary of 2-3 lines
  const createSummary = (text: string, maxLength = 200) => {
    if (text.length <= maxLength) return text
    const truncated = text.slice(0, maxLength).trim()
    const lastPeriodIndex = truncated.lastIndexOf(".")
    return lastPeriodIndex > 0 ? truncated.slice(0, lastPeriodIndex + 1) : truncated + "..."
  }

  const summary = createSummary(content)

  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-primary-50 border-gray-200 group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={`/placeholder.svg?height=200&width=400&text=Course+${imageId}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-700 mb-2">{description}</CardDescription>
        {isExpanded && <div className="text-sm text-gray-600 mb-2">{summary}</div>}
        <Button
          variant="ghost"
          size="sm"
          className="mt-2 p-0 text-gray-600 hover:text-gray-900"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" /> Show Less
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-4 w-4" /> Show More
            </>
          )}
        </Button>
        {isExpanded && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800 mb-2">Resources:</h4>
            <ul className="space-y-1">
              {resources.map((resource, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-700">
                  <FileText className="w-4 h-4 text-gray-600" />
                  <span className="text-sm">{resource.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="mt-auto">
        <Link href={`/courses/${id}`} className="w-full">
          <Button className="w-full bg-gray-800 text-white hover:bg-gray-700">View Course</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}


