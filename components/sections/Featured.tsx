"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import ScrollReveal from "@/components/ScrollReveal"
import Link from "next/link"

const projects = [
  {
    title: "Royal Wedding Story",
    category: "Wedding",
    image: "/work1.jpg",
    slug: "/work/royal-wedding",
  },
  {
    title: "Urban Portrait Series",
    category: "Portrait",
    image: "/work2.jpg",
    slug: "/work/urban-portrait",
  },
  {
    title: "Luxury Brand Campaign",
    category: "Commercial",
    image: "/work3.jpg",
    slug: "/work/luxury-brand",
  },
]

export default function Featured() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-[#0f0f12] dark:to-[#15151a]">
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Featured Work
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
              A curated selection of cinematic stories and luxury visual experiences.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <Link href={item.slug}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
                >

                  {/* Image */}
                  <div className="relative h-[420px]">
                    <Image
                      src={item.image}
                      alt={`${item.title} - ASCLICK Portfolio`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition" />

                  {/* Content */}
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <span className="inline-block text-xs uppercase tracking-wider bg-white/20 backdrop-blur px-3 py-1 rounded-full mb-4">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-semibold">
                      {item.title}
                    </h3>
                  </div>

                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
