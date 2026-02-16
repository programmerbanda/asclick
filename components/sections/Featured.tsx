"use client"

import ScrollReveal from "@/components/ScrollReveal"

const projects = [
  { title: "Wedding Story", category: "Wedding" },
  { title: "Urban Portrait", category: "Portrait" },
  { title: "Luxury Brand Shoot", category: "Commercial" },
]

export default function Featured() {
  return (
    <section className="py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Featured Work
            </h2>
            <p className="text-muted-foreground mt-4">
              Selected projects that define my storytelling style.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="bg-background border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition hover:-translate-y-2">
                <div className="h-56 bg-muted rounded-xl mb-6" />
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.category}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
