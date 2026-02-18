"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Camera, Users, Award } from "lucide-react"

const stats = [
  {
    number: 120,
    suffix: "+",
    label: "Projects Completed",
    icon: Camera,
  },
  {
    number: 80,
    suffix: "+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    number: 5,
    suffix: "+",
    label: "Years Experience",
    icon: Award,
  },
]

function Counter({ value }: { value: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = value / (duration / 16)

      const counter = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(counter)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(counter)
    }
  }, [isInView, value])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-gray-50 dark:from-[#0f0f12] dark:to-[#15151a]">

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,128,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-10 shadow-xl transition"
            >
              <Icon className="w-8 h-8 mx-auto mb-6 text-primary" />

              <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                <Counter value={stat.number} />
                {stat.suffix}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          )
        })}

      </div>
    </section>
  )
}
