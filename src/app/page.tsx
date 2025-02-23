'use client'
import { motion } from 'framer-motion';
import Hero from '@/components/hero';
import PracticeAreas from '@/components/practice-areas';
import Stats from '@/components/stats';
import Experience from '@/components/experience';
import Team from '@/components/team';
import BlogPosts from '@/components/blog-posts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Hero />
      <PracticeAreas />
      <Stats />
      <Experience />

      <motion.section 
        className="py-16 text-center space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-serif font-bold">We&apos;re Advocates for Justice & Rights</h2>
        <p className="max-w-3xl mx-auto text-muted-foreground px-4 text-lg leading-relaxed">
          At Shalish (সালিশ), we provide expert legal guidance tailored to your unique needs. Our experienced team ensures informed, effective, and personalized legal solutions for you.
        </p>
        <Button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
          Talk to Us
        </Button>
      </motion.section>

      <Team />
      <BlogPosts />

      <motion.section 
        className="py-16 text-center bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-2xl mb-4 font-semibold">Talk to our legal assistant</h3>
        <Link href={'/legal-assistant'}>
          <Button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
            Click here
          </Button>
        </Link>
      </motion.section>
    </motion.div>
  );
}
