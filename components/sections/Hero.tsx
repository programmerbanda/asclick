"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Typewriter } from "react-simple-typewriter"

export default function Hero() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-12 flex items-center justify-center px-6 overflow-hidden bg-white dark:bg-background"
    >

      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center"
      />

      {/* Light Mode Overlay (important fix) */}
      <div className="absolute inset-0 bg-white/70 dark:bg-black/60" />

      {/* Soft Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-400/10 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl text-center space-y-8">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-6xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white"
        >
          Capturing Stories Through
          <span className="block bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Minimal & Cinematic Photography
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base text-gray-700 dark:text-muted-foreground"
        >
          <Typewriter
            words={[
              "Wedding Photography",
              "Portrait Sessions",
              "Cinematic Shoots",
              "Event Coverage",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 dark:text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed"
        >
          Timeless moments crafted with emotion, precision and aesthetic vision.
          Every frame tells a story that lives forever.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-6"
        >
          <Link href="/work">
            <Button
              size="lg"
              className="px-8 rounded-md cursor-pointer text-sm group shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              View Work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              size="lg"
              // variant="outline"
              className="px-8 rounded-md cursor-pointer text-sm border-gray-300 transition-all hover:-translate-y-1"
            >
              Contact
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
