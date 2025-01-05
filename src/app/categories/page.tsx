'use client'

import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  { 
    name: "Personal Law", 
    description: "Explore the intricacies of family matters, inheritance, and individual rights.",
    href: "/categories/personal-law",
    imageId: 1
  },
  { 
    name: "Business Law", 
    description: "Master the legal aspects of running a business, from contracts to compliance.",
    href: "/categories/business-law",
    imageId: 2
  },
  { 
    name: "Criminal Law", 
    description: "Understand the justice system, criminal procedures, and defense strategies.",
    href: "/categories/criminal-law",
    imageId: 3
  },
  { 
    name: "Civil Law", 
    description: "Learn about property rights, disputes, and civil case procedures.",
    href: "/categories/civil-law",
    imageId: 4
  },
  { 
    name: "Legal Writing", 
    description: "Develop skills in drafting legal documents and professional communication.",
    href: "/categories/legal-writing",
    imageId: 5
  },
  { 
    name: "International Law", 
    description: "Explore global legal frameworks, immigration, and cross-border regulations.",
    href: "/categories/international-law",
    imageId: 6
  }
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">Explore Our Legal Education Hub</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Embark on a journey of legal discovery. Our comprehensive courses are designed to empower you with knowledge across various domains of law. Choose your path and start learning today!
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link href={category.href} key={category.name} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Category+${category.imageId}`}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-yellow-600 transition-colors">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-slate-800 text-white hover:bg-yellow-500 hover:text-black transition-colors">
                    Explore Courses
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </section>

        <section className="mt-16 text-center bg-slate-100 py-12 px-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Why Choose Our Legal Education Hub?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">Expert-Led Courses</h3>
              <p className="text-slate-600">Learn from experienced legal professionals and academics in the field.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">Flexible Learning</h3>
              <p className="text-slate-600">Study at your own pace with our on-demand video lectures and resources.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">Practical Knowledge</h3>
              <p className="text-slate-600">Gain insights applicable to real-world legal scenarios and challenges.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

