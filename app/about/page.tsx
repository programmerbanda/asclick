"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Camera, Sparkles, Award } from "lucide-react"


function Counter({ target }: { target: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = target
      const duration = 2000
      const increment = end / (duration / 16)

      const counter = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(counter)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(counter)
    }
  }, [isInView, target])

  return <span ref={ref}>{count}</span>
}

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-[#0f0f12] text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* HERO */}
      <section className="pt-24 pb-8 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          The Vision Behind{" "}
          <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            ASCLICK
          </span>
        </motion.h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm">
          A cinematic journey of emotions, artistry, and timeless wedding storytelling.
        </p>
      </section>

      {/* FOUNDER */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/about.jpg"
              alt="Amit Singh - Wedding Photographer"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold mb-6">
              Meet Amit Singh
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Founder of ASCLICK, Amit Singh has spent over 8 years mastering
              the art of wedding storytelling. His approach blends cinematic
              framing, natural light mastery, and emotional authenticity.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              From intimate ceremonies to grand destination weddings,
              Amit ensures every frame preserves emotion with elegance.
            </p>
          </motion.div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#15151a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              <Counter target={500} />+
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Weddings Captured
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              <Counter target={8} />+
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              <Counter target={1200} />+
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Happy Clients
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              <Counter target={25} />+
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Awards & Features
            </p>
          </div>

        </div>
      </section>

      {/* BEHIND THE SCENES */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-[#15151a]">
        <div className="max-w-6xl mx-auto text-center">

          <Camera className="w-10 h-10 text-primary mx-auto mb-6" />

          <h2 className="text-3xl font-semibold mb-12">
            Behind The Scenes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["/work1.jpg", "/work2.jpg", "/work3.jpg"].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src={img}
                  alt="Behind the scenes"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <Sparkles className="w-10 h-10 text-primary mx-auto mb-6" />

        <h2 className="text-3xl font-semibold mb-6">
          Let’s Capture Your Story
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Your wedding deserves timeless storytelling.
        </p>

        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-primary to-pink-500 text-white px-8 py-3 rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300"
        >
          Book Your Wedding Shoot
        </a>
      </section>

    </div>
  )
}
