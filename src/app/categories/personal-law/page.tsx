'use client'

import { useState } from 'react'
import { CourseCard } from "@/components/course/course-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
const personalLawCourses = [
    { 
        title: "Marriage Laws and Procedures in Bangladesh", 
        description: "Dive deep into the intricacies of marriage laws in Bangladesh. This comprehensive course covers everything from legal requirements for marriage registration to the rights and obligations of spouses under Bangladeshi law. You'll learn about the different types of marriages recognized in Bangladesh, the role of family courts, and how to navigate complex legal procedures related to marriage.",
        image: "image1" 
    },
    { 
        title: "Divorce Laws: Rights and Processes", 
        description: "Understand the legal landscape of divorce in Bangladesh with this in-depth course. You'll learn about the grounds for divorce under different personal laws, the step-by-step process of filing for divorce, and how to protect your rights during divorce proceedings. This course also covers important topics such as alimony, child custody, and property division in the context of Bangladeshi divorce laws.",
        image: "image2" 
    },
    { 
        title: "Understanding Inheritance Laws", 
        description: "Explore the complex world of inheritance laws in Bangladesh, covering both Islamic and Hindu legal traditions. This course provides a comprehensive overview of succession laws, including the rules of intestate and testamentary succession. You'll learn how to draft and execute a valid will, understand the concept of 'forced heirship' in Islamic law, and navigate the legal procedures for claiming inheritance.",
        image: "image3" 
    },
    { 
        title: "Child Custody and Guardianship", 
        description: "Gain crucial knowledge about child custody laws and guardianship rights in Bangladesh. This course covers the legal framework governing child custody in cases of divorce or separation, the concept of 'best interests of the child' in Bangladeshi law, and the rights and responsibilities of guardians. You'll also learn about international child custody issues and the application of the Hague Convention in Bangladesh.",
        image: "image4" 
    },
    { 
        title: "Domestic Violence Laws and Remedies", 
        description: "Empower yourself with knowledge about domestic violence laws and available legal remedies in Bangladesh. This course provides a comprehensive understanding of the Domestic Violence (Prevention and Protection) Act, 2010, and other relevant laws. You'll learn how to identify different forms of domestic violence, the legal procedures for seeking protection orders, and the support systems available for survivors of domestic violence in Bangladesh.",
        image: "image5" 
    }
]

export default function PersonalLawPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCourses = personalLawCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Personal Law Courses</h1>
        <p className="text-xl mb-8 text-gray-600">
          Explore the intricacies of family matters, inheritance, and individual rights in Bangladesh. Our personal law courses offer in-depth knowledge and practical insights into the legal aspects that affect your daily life and relationships.
        </p>
        
        <div className="mb-8">
          <Input 
            type="text" 
            placeholder="Search courses..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No courses found matching your search criteria.</p>
        )}

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Why Study Personal Law?</h2>
          <p className="text-gray-600 mb-6">
            Personal law governs the most intimate aspects of our lives, from marriage and divorce to inheritance and child custody. Understanding these laws is crucial for protecting your rights, making informed decisions, and navigating complex legal situations that may arise in your personal life.
          </p>
          <Button className="bg-yellow-500 text-black hover:bg-yellow-400 transition-colors">
            Explore More Courses
          </Button>
        </div>
      </main>
    </div>
  )
}

