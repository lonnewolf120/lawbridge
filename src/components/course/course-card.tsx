'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CourseCardProps {
  title: string
  description: string
  image: string
}

export function CourseCard({ title, description, image }: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={`/placeholder.svg?height=200&width=400&text=Course+${image}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className={`${isExpanded ? '' : 'line-clamp-2'}`}>
          {description}
        </CardDescription>
        <Button
          variant="ghost"
          size="sm"
          className="mt-2 p-0"
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
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full">Enroll Now</Button>
      </CardFooter>
    </Card>
  )
}

