'use client'

import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  { 
    name: "Personal Law", 
    description: "Family matters, inheritance, and individual rights",
    href: "/categories/personal-law",
    imageId: 1,
    courseCount: 5
  },
  { 
    name: "Business Law", 
    description: "Master the legal aspects of running a business, from contracts to compliance.",
    href: "/categories/business-law",
    imageId: 2,
    courseCount: 5
  },
  { 
    name: "Criminal Law", 
    description: "Understand the justice system, criminal procedures, and defense strategies.",
    href: "/categories/criminal-law",
    imageId: 3,
    courseCount: 5
  },
  { 
    name: "Civil Law", 
    description: "Learn about property rights, disputes, and civil case procedures.",
    href: "/categories/civil-law",
    imageId: 4,
    courseCount: 5
  },
  { 
    name: "Legal Writing", 
    description: "Develop skills in drafting legal documents and professional communication.",
    href: "/categories/legal-writing",
    imageId: 5,
    courseCount: 5
  },
  { 
    name: "International Law", 
    description: "Explore global legal frameworks, immigration, and cross-border regulations.",
    href: "/categories/international-law",
    imageId: 6,
    courseCount: 5
  }
]

function CategoryCard({ name, description, href, imageId, courseCount }: any) {
  return (
    <Link href={href} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={`/placeholder.svg?height=200&width=400&text=Category+${imageId}`}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl group-hover:text-yellow-600 transition-colors">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
          <p className="mt-2 text-sm text-slate-600">{courseCount} Courses</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-slate-800 text-white hover:bg-yellow-500 hover:text-black transition-colors">
            Explore Courses
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Explore Legal Education Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              description={category.description}
              href={category.href}
              imageId={category.imageId}
              courseCount={category.courseCount}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

