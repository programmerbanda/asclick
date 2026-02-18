export const metadata = {
  title: "Wedding Photography Services in Motihari | ASCLICK",
  description:
    "ASCLICK offers professional wedding photography services in Motihari including cinematic wedding coverage, pre-wedding shoots, bridal portraits and destination weddings across India.",
  alternates: {
    canonical: "https://yourwebsite.com/services",
  },
};

const services = [
  {
    title: "Wedding Photography",
    desc: "Full-day wedding coverage documenting rituals, emotions and celebrations with cinematic storytelling and artistic precision.",
  },
  {
    title: "Pre-Wedding Shoots",
    desc: "Creative and romantic pre-wedding photography crafted around your personality, story and location.",
  },
  {
    title: "Destination Weddings",
    desc: "Luxury wedding photography coverage across India with travel-ready professional setup and seamless execution.",
  },
  {
    title: "Bridal Portrait Sessions",
    desc: "Timeless bridal portraits focusing on elegance, styling details and refined natural light composition.",
  },
  {
    title: "Reception Coverage",
    desc: "Evening reception photography with expert lighting techniques capturing celebrations and candid moments beautifully.",
  },
  {
    title: "Cinematic Wedding Films",
    desc: "Emotion-driven wedding films blending storytelling, music and cinematic editing for unforgettable memories.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-[#0f0f12] text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* HERO */}
      <section className="px-6 pt-28 pb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Wedding Photography Services
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          As a professional freelance wedding photographer in Motihari,
          ASCLICK delivers cinematic storytelling, refined artistry and
          timeless wedding memories crafted with precision and passion.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl border border-gray-200 dark:border-gray-800 
              bg-gray-50 dark:bg-[#15151a] 
              hover:shadow-2xl hover:-translate-y-1 
              transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="px-6 py-20 bg-gray-50 dark:bg-[#15151a]">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-8">
            Why Choose ASCLICK?
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            With over 8 years of professional experience, ASCLICK combines
            artistic vision with technical excellence. Every wedding is
            approached with dedication, attention to detail and a commitment
            to delivering premium quality imagery that stands the test of time.
          </p>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Let’s Capture Your Special Day
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Get in touch to discuss your wedding photography requirements and
          receive a personalized quote.
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

      {/* SEO SUPPORT TEXT (Hidden but helpful for ranking) */}
      <div className="hidden">
        ASCLICK provides professional wedding photography services in Motihari,
        Bihar including pre-wedding shoots, bridal portraits, cinematic wedding
        films, reception coverage and destination wedding photography across India.
      </div>

    </div>
  );
}
