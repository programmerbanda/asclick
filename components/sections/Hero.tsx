"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-background">

      <div className="max-w-4xl text-center space-y-8">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Capturing Stories Through
          <span className="block text-muted-foreground">
            Minimal & Cinematic Photography
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Timeless moments crafted with emotion, precision and aesthetic vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <Button size="lg">View Work</Button>
          <Button size="lg" variant="outline">
            Contact
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
