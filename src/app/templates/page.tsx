"use client"

import { Search, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const templates = [
  "Residential Lease Agreement",
  "Incorporation",
  "Last Will and Testament",
  "Separation Agreement",
  "Bill of Sale",
  "Employment Contract",
]

const items = [
  { title: "Rent Out Property", icon: "🏠", href: "/templates/1" },
  { title: "Plan My Estate", icon: "📋", href: "/templates/1" },
  { title: "Start a Business", icon: "🏪", href: "/templates/1" },
  { title: "Sell Services", icon: "💼", href: "/templates/1" },
  { title: "Sell or Transfer Real Estate", icon: "🔄", href: "/templates/1" },
  { title: "Lend Money", icon: "💰", href: "/templates/1" },
  { title: "Buy, Sell, or Rent Goods", icon: "🛍️", href: "/templates/1" },
  { title: "Manage Employees", icon: "👥", href: "/templates/1" },
  { title: "Separate or Divorce", icon: "📄", href: "/templates/1" },
  { title: "Plan My Child's Care", icon: "👶", href: "/templates/1" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container py-12 space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            Free Legal Documents, Forms and Contracts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create customized legal documents in minutes. Professional templates crafted by legal experts.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4"
          >
            {templates.map((doc) => (
              <motion.div key={doc} variants={item}>
                <Link href="/templates/2">
                  <Button
                    variant="outline"
                    className="w-full h-auto py-2 px-6 bg-white hover:bg-primary-50 border border-primary-200 rounded-md hover:border-primary-300 transition-all duration-200"
                  >
                    <FileText className="w-4 h-4 mr-2 text-primary-500" />
                    {doc}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto space-y-4 mb-8 "
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search hundreds of documents..."
                className="w-full pl-12 pr-4 py-6 rounded-md border-primary-200 focus:border-primary-300 bg-white/50 backdrop-blur-sm"
              />
            </div>
            <Link href="/templates/1">
              <Button
                variant="outline"
                className="p-6 bg-primary-600 mt-8 hover:bg-primary-700 text-white border-none"
              >
                View All Documents
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-serif text-center font-semibold">What do you want to accomplish?</h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {items.map((doc) => (
              <motion.div key={doc.title} variants={item}>
                <Link href={doc.href}>
                  <Card className="hover:shadow-md transition-all duration-200">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{doc.icon}</span>
                        <span className="text-lg text-primary-600">{doc.title}</span>
                        <ArrowRight className="ml-auto w-5 h-5 text-primary-400" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

