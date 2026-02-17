"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const categories = [
  "All",
  "Wedding",
  "Pre-Wedding",
  "Reception",
  "Bridal",
]

const projects = [
  {
    title: "Royal Palace Wedding",
    category: "Wedding",
    image: "/work1.jpg",
    gear: "Sony A7IV • 85mm f/1.4 • Natural Light",
  },
  {
    title: "Golden Hour Love",
    category: "Pre-Wedding",
    image: "/work2.jpg",
    gear: "Canon R6 • 70-200mm f/2.8 • Sunset",
  },
  {
    title: "Grand Reception Night",
    category: "Reception",
    image: "/work3.jpg",
    gear: "Sony A1 • 24-70mm f/2.8 • Flash",
  },
  {
    title: "Elegant Bridal Portrait",
    category: "Bridal",
    image: "/work4.jpg",
    gear: "Canon R5 • 85mm f/1.2 • Softbox",
  },
  {
    title: "Temple Wedding",
    category: "Wedding",
    image: "/work5.jpg",
    gear: "Sony A7III • 35mm f/1.8 • Ambient",
  },
  {
    title: "Haldi Ceremony",
    category: "Wedding",
    image: "/work6.jpg",
    gear: "Canon R6 • 50mm f/1.4 • Daylight",
  },
]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="bg-white dark:bg-[#0f0f12] text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* HERO */}
      <section className="pt-24 pb-8 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Wedding Stories{" "}
          <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Captured
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm mx-auto text-gray-600 dark:text-gray-400">
          A curated collection of timeless wedding memories crafted with
          cinematic precision.
        </p>
      </section>

      {/* CATEGORY FILTER */}
      <section className="pb-12 px-6 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-4 py-1 rounded-full border cursor-pointer transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white dark:text-black border-primary shadow-lg"
                  : "border-gray-300 dark:border-gray-700 dark:bg-[#1a1a1f] hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">

          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg cursor-pointer group break-inside-avoid dark:bg-[#262626] bg-muted border border-border"
              onClick={() => setSelectedImage(project.image)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={800}
                className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6 text-white">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm opacity-70 mt-1">
                  {project.gear}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 text-white hover:scale-110 transition"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl w-full"
            >
              <Image
                src={selectedImage}
                alt="Preview"
                width={1200}
                height={900}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
