import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Module {
  title: string
  description: string
  duration: string
}

interface Instructor {
  name: string
  title: string
  bio: string
  imageUrl: string
}

interface CourseDetailsProps {
  title: string
  duration: string
  level: string
  certification: boolean
  description: string
  targetAudience: string
  modules: Module[]
  instructor: Instructor
  learningOutcomes: string[]
  interactiveElements: string[]
  materials: string[]
  price: number
  faqs: { question: string; answer: string }[]
  relatedCourses: { title: string; href: string }[]
}

export function CourseDetails({
  title,
  duration,
  level,
  certification,
  description,
  targetAudience,
  modules,
  instructor,
  learningOutcomes,
  interactiveElements,
  materials,
  price,
  faqs,
  relatedCourses
}: CourseDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">{duration}</Badge>
          <Badge variant="secondary">{level}</Badge>
          {certification && <Badge variant="secondary">Certification</Badge>}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{description}</p>
              <p><strong>Who should take this course:</strong> {targetAudience}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {modules.map((module, index) => (
                  <AccordionItem key={index} value={`module-${index}`}>
                    <AccordionTrigger>{module.title}</AccordionTrigger>
                    <AccordionContent>
                      <p>{module.description}</p>
                      <p className="text-sm text-muted-foreground mt-2">Duration: {module.duration}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Learning Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {learningOutcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Interactive Elements:</h4>
                <ul className="list-disc pl-5">
                  {interactiveElements.map((element, index) => (
                    <li key={index}>{element}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Course Materials:</h4>
                <ul className="list-disc pl-5">
                  {materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>FAQs</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-8 sticky top-4">
            <CardHeader>
              <CardTitle>Enroll Now</CardTitle>
              <CardDescription>Start your learning journey today!</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">${price.toFixed(2)}</p>
              <Button className="w-full mb-4" asChild>
                <Link href={`/courses/${encodeURIComponent(title)}/enroll`}>Enroll Now</Link>
              </Button>
              <p className="text-sm text-muted-foreground">Flexible payment options available</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={instructor.imageUrl} alt={instructor.name} />
                  <AvatarFallback>{instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{instructor.name}</h4>
                  <p className="text-sm text-muted-foreground">{instructor.title}</p>
                </div>
              </div>
              <p>{instructor.bio}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Related Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {relatedCourses.map((course, index) => (
                  <li key={index}>
                    <a href={course.href} className="text-blue-600 hover:underline">{course.title}</a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

