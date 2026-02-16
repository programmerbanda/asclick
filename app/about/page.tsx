"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Camera, Award, HeartHandshake, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-background text-gray-900 dark:text-foreground">

      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">

        <div className="max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            About{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              ASCLICK
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto"
          >
            We don’t just take photos — we capture emotions, stories, and timeless memories that last forever.
          </motion.p>

        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/about.jpg"
              alt="ASCLICK Photography"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed mb-4">
              ASCLICK was born from a passion for storytelling through the lens.
              Every wedding, portrait, and celebration carries a unique story —
              and we make sure it’s captured beautifully.
            </p>

            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">
              With years of experience and a cinematic approach, we transform
              ordinary moments into extraordinary visual memories.
            </p>
          </motion.div>

        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">

            {[
              {
                icon: Camera,
                title: "Creative Vision",
                desc: "Unique cinematic storytelling approach."
              },
              {
                icon: Award,
                title: "Professional Quality",
                desc: "High-end equipment and expert editing."
              },
              {
                icon: HeartHandshake,
                title: "Client First",
                desc: "We build relationships, not just projects."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: false }}
                className="p-8 bg-white dark:bg-background rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="max-w-3xl mx-auto"
        >
          <Sparkles className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">
            Let’s Create Something Beautiful
          </h2>
          <p className="text-gray-600 dark:text-muted-foreground mb-8">
            Ready to capture your special moments with ASCLICK?
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-xl hover:opacity-90 transition"
          >
            Book a Shoot
          </a>
        </motion.div>
      </section>

    </div>
  )
}
