"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function FinalCTA() {
  return (
    <section className="relative py-30 overflow-hidden 
      bg-gradient-to-br from-gray-50 via-white to-gray-100
      dark:from-[#0f0f12] dark:via-black dark:to-[#111]">

      {/* Soft Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] 
        bg-primary/10 dark:bg-primary/20 
        rounded-full blur-[160px] 
        -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* Subtle Texture */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),transparent_60%)]
        dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight
            text-gray-900 dark:text-white"
        >
          Let’s Craft Your
          <span className="block bg-gradient-to-r 
            from-gray-900 to-gray-500 
            dark:from-white dark:to-gray-400 
            bg-clip-text text-transparent">
            Timeless Wedding Story
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-sm md:text-base max-w-2xl mx-auto leading-relaxed
            text-gray-600 dark:text-gray-400"
        >
          Every wedding is unique. Let’s turn your special day into a cinematic
          masterpiece that you will cherish forever.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center 
              px-8 py-4 text-lg font-medium rounded-4xl overflow-hidden group"
          >
            {/* Gradient Layer */}
            <span className="absolute inset-0 
              bg-gradient-to-r from-primary to-pink-500 
              transition-transform duration-500 
              group-hover:scale-110" />

            {/* Glass Layer */}
            <span className="absolute inset-0 
              bg-white/40 dark:bg-white/10 
              backdrop-blur-xl rounded-2xl 
              border border-white/50 dark:border-white/20" />

            <span className="relative text-sm dark:text-white text-gray-900">
              Book Your Experience
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
