'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState, useCallback } from 'react'

const images = [
  '/1.png',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/internation.webp',
]

  // '/placeholder.svg?text=Legal7',
  // '/placeholder.svg?text=Legal8',
  // '/placeholder.svg?text=Legal9',

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
      emblaApi.on('select', onSelect)
      return () => {
        emblaApi.off('select', onSelect)
      }
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-center">
          <div className="space-y-6 z-10">
            <h1 className="text-5xl font-serif">Lawbridge</h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Welcome to LawBridge, your trusted partner in navigating legal complexities. Simple, 
              accessible, and affordable. At LawBridge, we believe that navigating the legal world 
              shouldn't be overwhelming or expensive
            </p>
            <Button className="bg-amber-100 text-black hover:bg-amber-200 border border-amber-200">
              Start Up
            </Button>
            <div className="mt-8">
              <p className="text-sm text-muted-foreground">Have any question?</p>
              <p className="text-lg">+8801311962091</p>
            </div>
          </div>
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="embla__slide flex-[0_0_100%] min-w-0 relative aspect-square"
                >
                  <Image
                    src={src}
                    alt={`Legal image ${index + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-1000 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
