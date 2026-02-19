export const metadata = {
  title: "Wedding Photography Blog in Motihari | ASCLICK",
  description:
    "Explore wedding photography tips, venue guides, pre-wedding ideas and cinematic inspiration by ASCLICK, a professional wedding photographer in Motihari.",
  alternates: {
    canonical: "https://yourwebsite.com/blog",
  },
};

const posts = [
  {
    title: "Top Wedding Venues in Motihari for 2025",
    desc: "Discover the most beautiful wedding venues in Motihari perfect for cinematic photography.",
    category: "Venue Guide",
  },
  {
    title: "How to Choose the Right Wedding Photographer",
    desc: "Essential tips to help you select a professional wedding photographer for your big day.",
    category: "Wedding Tips",
  },
  {
    title: "Best Pre-Wedding Shoot Ideas",
    desc: "Creative and romantic pre-wedding photography concepts for modern couples.",
    category: "Pre-Wedding",
  },
  {
    title: "Cinematic Wedding Photography Trends",
    desc: "Explore the latest wedding photography styles and cinematic trends.",
    category: "Trends",
  },
  {
    title: "Bridal Portrait Photography Guide",
    desc: "Tips for achieving elegant and timeless bridal portraits.",
    category: "Bridal",
  },
  {
    title: "Planning a Destination Wedding in India",
    desc: "Everything you need to know before planning your dream destination wedding.",
    category: "Destination Wedding",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white dark:bg-[#0f0f12] text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* HERO */}
      <section className="px-6 pt-28 pb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Wedding Photography Blog
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Insights, inspiration and expert tips from ASCLICK —
          helping couples plan and capture unforgettable wedding memories.
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {posts.map((post, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl border border-gray-200 dark:border-gray-800 
              bg-gray-50 dark:bg-[#15151a] 
              hover:shadow-2xl hover:-translate-y-1 
              transition-all duration-300"
            >
              {/* Category */}
              <span className="text-xs uppercase tracking-wider text-primary font-medium">
                {post.category}
              </span>

              <h2 className="text-2xl font-semibold mt-3 mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {post.desc}
              </p>

              <button className="text-sm font-medium text-primary hover:underline">
                Read More →
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center bg-gray-50 dark:bg-[#15151a]">
        <h2 className="text-3xl font-semibold mb-6">
          Planning Your Wedding?
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Let ASCLICK capture your special moments with cinematic precision and artistic storytelling.
        </p>

        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-primary to-pink-500 
          text-white px-8 py-3 rounded-xl 
          hover:opacity-90 hover:scale-105 
          transition-all duration-300"
        >
          Book a Consultation
        </a>
      </section>

      {/* SEO SUPPORT TEXT */}
      <div className="hidden">
        ASCLICK is a professional wedding photographer in Motihari sharing
        expert wedding photography tips, venue guides, pre-wedding ideas and
        cinematic wedding inspiration for couples across Bihar and India.
      </div>

    </div>
  );
}
