export const metadata = {
  title: "Wedding Photography Services in Motihari | ASCLICK",
  description:
    "Professional wedding photography services in Motihari including pre-wedding shoots, bridal portraits, cinematic wedding films and destination wedding coverage.",
  alternates: {
    canonical: "https://yourwebsite.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="px-6 py-24 max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold mb-12 text-center">
        Our Wedding Photography Services
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {[
          {
            title: "Wedding Photography",
            desc: "Complete wedding day coverage capturing every emotion, ritual and celebration with cinematic precision.",
          },
          {
            title: "Pre-Wedding Shoots",
            desc: "Romantic outdoor and conceptual pre-wedding photography crafted to tell your unique love story.",
          },
          {
            title: "Destination Weddings",
            desc: "Professional photography coverage across India for luxury and destination weddings.",
          },
          {
            title: "Bridal Portraits",
            desc: "Elegant bridal portraits highlighting grace, details and timeless beauty.",
          },
        ].map((service, i) => (
          <div key={i} className="p-8 border rounded-2xl dark:bg-[#1a1a1f]">
            <h2 className="text-2xl font-semibold mb-4">
              {service.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
