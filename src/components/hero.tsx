"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn, slideIn } from "@/lib/animation"

const images = ["/1.png", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/internation.webp"]

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [currentIndex, setCurrentIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setCurrentIndex(emblaApi.selectedScrollSnap())
    }
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect)
      return () => {
        emblaApi.off("select", onSelect)
      }
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative py-12 px-4 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-center">
          <motion.div initial="hidden" animate="visible" variants={slideIn} className="space-y-6 z-10">
            <motion.h1
              variants={fadeIn}
              className="text-5xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
            >
              Shalish
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-xl">
              Welcome to Shalish, your trusted partner in navigating legal complexities. Simple, accessible, and
              affordable. At Shalish, we believe that navigating the legal world shouldn't be overwhelming or expensive
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/login">
                <Button className="bg-primary-100 text-black hover:bg-primary-200 border border-primary-200 transition-all duration-300 transform hover:scale-105">
                  Get started
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeIn} className="mt-8">
              <p className="text-sm text-muted-foreground mb-2">Have any question?</p>
              <Link href={`tel:+8801311962091`}>
                <Button className="text-primary-200 hover:text-primary-300 transition-colors">Call now</Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="embla overflow-hidden rounded-2xl shadow-2xl"
            ref={emblaRef}
          >
            <div className="embla__container flex">
              {images.map((src, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative aspect-square">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Legal image ${index + 1}`}
                    fill
                    className={`object-cover transition-all duration-1000 ${
                      index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
                    }`}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

