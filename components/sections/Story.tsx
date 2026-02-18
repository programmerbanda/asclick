"use client"

import ScrollReveal from "@/components/ScrollReveal"
import Image from "next/image"

export default function Story() {
  return (
    <section className="py-24 md:py-32 bg-muted border-t border-border overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* IMAGE SIDE */}
        <ScrollReveal>
          <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-border">

            <Image
              src="/main.jpg"
              alt="Amit Singh - Wedding Photographer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Soft Overlay for Premium Feel */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
          </div>
        </ScrollReveal>

        {/* TEXT SIDE */}
        <ScrollReveal delay={0.2}>
          <div className="space-y-6">

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
              The Story Behind ASCLICK
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              ASCLICK was founded with a vision to transform wedding
              photography into a cinematic storytelling experience.
              Every frame is crafted with emotion, elegance, and artistic precision.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              From intimate ceremonies to grand destination weddings,
              the goal remains the same — to preserve genuine emotions
              and timeless memories that couples can cherish forever.
            </p>

          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
