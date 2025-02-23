"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "@/lib/animation"

const posts = [
  {
    id: 1,
    title: "How to file a lawsuit against a company",
    excerpt:
      "Learn the step-by-step process of filing a lawsuit against a company, including necessary documentation and legal procedures.",
    image: "/business2.webp",
    date: "2023-05-15",
    author: "Jane Doe",
    category: "Legal Procedures",
  },
  {
    id: 2,
    title: "Understanding business law in Bangladesh",
    excerpt:
      "An overview of key business laws and regulations that every entrepreneur in Bangladesh should be aware of.",
    image: "/business.jpeg",
    date: "2023-05-20",
    author: "John Smith",
    category: "Business Law",
  },
  {
    id: 3,
    title: "The path to becoming a lawyer in Bangladesh",
    excerpt: "Explore the educational requirements, exams, and steps needed to pursue a career in law in Bangladesh.",
    image: "/lawyer2.jpg",
    date: "2023-05-25",
    author: "Aminul Islam",
    category: "Legal Career",
  },
]

export default function BlogPosts() {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-serif text-center mb-12">
          Latest Articles
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div key={post.id} variants={fadeIn}>
              <Card className="flex flex-col h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <Badge className="mb-2 bg-primary-100 text-primary-800 hover:bg-primary-200">{post.category}</Badge>
                  <CardTitle className="text-xl mb-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary-500 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 text-sm text-muted-foreground border-t mt-auto">
                  <div className="flex justify-between w-full">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

