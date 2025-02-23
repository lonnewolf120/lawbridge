"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { staggerContainer, scaleUp } from "@/lib/animation"

const lawyers = [
  {
    name: "Advocate Lubna Yeasmin",
    title: `MSS (VRJ-DU), LL.M, MSS (P. Science)\nMPH (JPGSPH), STC-FNPPM (Philippines)\nAdvocate, Appellate Division`,
    court: "Supreme Court of Bangladesh",
    image: "/L1.jpg",
  },
  {
    name: "Barrister Faran Md Aaraf",
    title: `Barrister, Honourable Society of Lincoln's Inn, UK\nAdvocate, Dhaka Judge Court\nAcademic mentor,`,
    court: "London College of Legal Studies (South), \nUniversity of London (UK)",
    image: "/L2.jpg",
  },
  {
    name: "Ashra Anika Tanha",
    title: `Accredited Civil/ Commercial Mediator,\nADR ODR International, UK.\n`,
    court: "LLB, University of London (UK)",
    image: "/L3.jpg",
  },
]

export default function Team() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 variants={scaleUp} className="text-3xl font-serif text-center mb-12">
          Our Advisors
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {lawyers.map((lawyer, index) => (
            <motion.div key={lawyer.name} variants={scaleUp} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 transform transition-all duration-500 group-hover:scale-105" />
                <Image
                  src={lawyer.image || "/placeholder.svg"}
                  alt={lawyer.name}
                  height={192}
                  width={192}
                  className="rounded-full relative transform transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-xl text-bold bold mb-2">{lawyer.name}</h3>
              <p className="text-sm text-primary-400 whitespace-pre-line">{lawyer.title}</p>
              <p className="text-sm text-muted-foreground ">{lawyer.court}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

