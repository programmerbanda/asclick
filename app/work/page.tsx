"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Royal Wedding",
    category: "Wedding",
    image: "/work1.jpg",
  },
  {
    title: "Couple Portrait",
    category: "Portrait",
    image: "/work2.jpg",
  },
  {
    title: "Pre-Wedding Shoot",
    category: "Pre-Wedding",
    image: "/work3.jpg",
  },
  {
    title: "Engagement Ceremony",
    category: "Event",
    image: "/work4.jpg",
  },
  {
    title: "Luxury Bridal",
    category: "Fashion",
    image: "/work5.jpg",
  },
  {
    title: "Traditional Moments",
    category: "Wedding",
    image: "/work6.jpg",
  },
]

export default function WorkPage() {
  return (
    <div className="bg-white dark:bg-background text-gray-900 dark:text-foreground">

      {/* HERO */}
      <section className="py-24 md:py-32 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Work
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto"
        >
          A collection of moments captured with passion, precision, and
          storytelling.
        </motion.p>
      </section>

      {/* GRID SECTION */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[350px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center text-white p-6">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm mt-2 opacity-80">
                  {project.category}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </section>

    </div>
  )
}
