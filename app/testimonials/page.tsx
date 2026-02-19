export const metadata = {
  title: "Client Testimonials | ASCLICK Wedding Photography in Motihari",
  description:
    "Read real wedding client testimonials for ASCLICK, a professional wedding photographer in Motihari known for cinematic storytelling and premium wedding coverage.",
  alternates: {
    canonical: "https://yourwebsite.com/testimonials",
  },
};

const testimonials = [
  {
    name: "Rahul & Priya",
    review:
      "ASCLICK captured our wedding beautifully. Every photograph feels emotional and timeless. The cinematic style truly exceeded our expectations.",
  },
  {
    name: "Ankit & Shreya",
    review:
      "Professional, creative and punctual. The team made us feel comfortable and the final album was absolutely stunning.",
  },
  {
    name: "Vivek & Nisha",
    review:
      "From pre-wedding to reception, everything was perfectly documented. The attention to detail was impressive.",
  },
  {
    name: "Aman & Ritu",
    review:
      "We loved the natural and candid shots. The storytelling approach made our memories feel alive.",
  },
  {
    name: "Saurabh & Pooja",
    review:
      "Highly recommended for anyone looking for premium wedding photography in Motihari.",
  },
  {
    name: "Kunal & Sneha",
    review:
      "The wedding film was cinematic and emotional. We couldn’t have asked for a better photographer.",
  },
  {
    name: "Abhishek & Neha",
    review:
      "Very professional freelancer. Communication was smooth and delivery was on time.",
  },
  {
    name: "Rohit & Komal",
    review:
      "The bridal portraits were absolutely breathtaking. Every detail was captured perfectly.",
  },
  {
    name: "Manish & Aarti",
    review:
      "ASCLICK brought creativity and passion to our wedding. The results were beyond beautiful.",
  },
  {
    name: "Tarun & Simran",
    review:
      "The reception coverage was amazing. Lighting and candid moments were handled flawlessly.",
  },
  {
    name: "Deepak & Meera",
    review:
      "A true professional wedding photographer with a strong artistic vision.",
  },
  {
    name: "Harsh & Kavya",
    review:
      "Our destination wedding was captured perfectly. Every frame tells a story.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-white dark:bg-[#0f0f12] text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* HERO */}
      <section className="px-6 pt-28 pb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Client Testimonials
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Genuine experiences shared by couples who trusted ASCLICK to capture
          their most cherished wedding moments.
        </p>
      </section>

      {/* TESTIMONIAL GRID */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonials.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl border border-gray-200 dark:border-gray-800 
              bg-gray-50 dark:bg-[#15151a] 
              hover:shadow-2xl hover:-translate-y-1 
              transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4 text-yellow-500">
                ★★★★★
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                “{item.review}”
              </p>

              <h3 className="font-semibold text-lg">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Verified Wedding Client
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="px-6 py-20 bg-gray-50 dark:bg-[#15151a]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Trusted Wedding Photographer in Motihari
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            With over 8 years of experience, ASCLICK has earned the trust of
            countless couples by delivering cinematic storytelling, artistic
            excellence and professional service across wedding celebrations
            in Motihari and beyond.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Let’s Create Your Wedding Story
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Contact ASCLICK today to discuss your wedding photography plans.
        </p>

        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-primary to-pink-500 
          text-white px-8 py-3 rounded-xl 
          hover:opacity-90 hover:scale-105 
          transition-all duration-300"
        >
          Get In Touch
        </a>
      </section>

      {/* SEO SUPPORT TEXT */}
      <div className="hidden">
        ASCLICK is a trusted wedding photographer in Motihari offering
        cinematic wedding photography, pre-wedding shoots, bridal portraits
        and reception coverage across Bihar and India.
      </div>

    </div>
  );
}
