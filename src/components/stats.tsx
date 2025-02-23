"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { fadeIn, staggerContainer } from "@/lib/animation"

const StatNumber = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [end, duration, isInView])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-serif text-center mb-12">
          Our Experience
        </motion.h2>
        <motion.p variants={fadeIn} className="text-center text-muted-foreground mb-12">
          We&apos;ve helped and served our users for their legal cases successfully for a long time now and you can
          trust us
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: 96, label: "Cases Solved", symbol: "%" },
            { number: 54, label: "Happy Clients", symbol: "+" },
            { number: 200, label: "Lawyers", symbol: "" },
            { number: 1500, label: "Working Hours", symbol: "" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="p-6 rounded-lg bg-white shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-primary-400">
                <StatNumber end={stat.number} />
                {stat.symbol}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

