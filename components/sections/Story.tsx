"use client"

import ScrollReveal from "@/components/ScrollReveal"

export default function Story() {
  return (
    <section className="py-32 bg-muted border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <ScrollReveal>
          <div className="h-96 bg-background border border-border rounded-2xl shadow-sm" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              My Story
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Photography is more than images — it is about emotion,
              storytelling and timeless visual experiences.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
