"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "@/lib/animation"

const areas = [
  {
    title: "Criminal Law",
    image: "/criminal.png",
  },
  {
    title: "Business & Startups",
    image: "/business.png",
  },
  {
    title: "Divorce & Family",
    image: "/law.webp",
  },
  {
    title: "Public Law",
    image: "/public.png",
  },
]

export default function PracticeAreas() {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-4 gap-4">
          {areas.map((area) => (
            <motion.div key={area.title} variants={fadeIn}>
              <Link
                href="#"
                className="group relative aspect-[3/4] overflow-hidden rounded-lg block transform transition-all duration-300 hover:-translate-y-2"
              >
                <Image
                  src={area.image || "/placeholder.svg"}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                <h3 className="absolute bottom-4 left-4 text-white font-serif text-xl transform transition-all duration-300 group-hover:translate-y-[-5px]">
                  {area.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

