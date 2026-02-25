"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const portfolioItems = [
  { id: 1, src: "/images/p1.jpg", title: "Wedding Ceremony", category: "Wedding" },
  { id: 2, src: "/images/p2.jpg", title: "Pre-Wedding Shoot", category: "Pre-Wedding" },
  { id: 3, src: "/images/p3.jpg", title: "Cinematic Portrait", category: "Portrait" },
  { id: 4, src: "/images/p4.jpg", title: "Engagement Moments", category: "Engagement" },
  { id: 5, src: "/images/p5.jpg", title: "Couple Story", category: "Wedding" },
  { id: 6, src: "/images/p6.jpg", title: "Luxury Shoot", category: "Editorial" },
];

export default function PortfolioClient() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Our Portfolio
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
          Discover our finest wedding, cinematic, and portrait photography —
          crafted with creativity, emotion, and timeless storytelling.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-muted/20 dark:bg-muted/10 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index < 2}
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-500 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition duration-700">
                {item.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}