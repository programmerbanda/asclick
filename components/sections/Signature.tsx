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
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-[#0f0f12] dark:to-[#15151a]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            The ASCLICK Signature Style
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            A blend of artistry, emotion and cinematic precision.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-xl text-center transition"
              >
                <Icon className="w-10 h-10 mx-auto mb-6 text-primary" />

                <h3 className="text-lg font-semibold mb-4">
                  {item.title}
                </h3>

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
