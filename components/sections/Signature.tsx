"use client"

import { motion } from "framer-motion"
import { Camera, Sparkles, Globe, Palette } from "lucide-react"

const features = [
  {
    title: "Cinematic Lighting",
    description:
      "Crafting depth and drama using natural light and advanced framing techniques.",
    icon: Camera,
  },
  {
    title: "Emotional Storytelling",
    description:
      "Capturing real emotions that transform moments into timeless memories.",
    icon: Sparkles,
  },
  {
    title: "Luxury Editing",
    description:
      "Refined color grading and premium finishing for an elegant visual experience.",
    icon: Palette,
  },
  {
    title: "Destination Expertise",
    description:
      "Experienced in capturing weddings across diverse and exotic locations.",
    icon: Globe,
  },
]

export default function SignatureStyle() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b 
      from-white to-gray-50 
      dark:from-[#0f0f12] dark:to-[#15151a] 
      overflow-x-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
            The ASCLICK Signature Style
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
            A blend of artistry, emotion and cinematic precision.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-[#1a1a1f] 
                  border border-gray-200 dark:border-white/10
                  rounded-3xl p-8 text-center
                  transition-transform duration-300
                  hover:-translate-y-2
                  will-change-transform"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <Icon className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
