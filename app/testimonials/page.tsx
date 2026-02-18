export const metadata = {
  title: "Client Testimonials | ASCLICK Wedding Photography",
  description:
    "Read real client testimonials for ASCLICK, a trusted wedding photographer in Motihari known for cinematic storytelling.",
};

export default function TestimonialsPage() {
  return (
    <div className="px-6 py-24 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-16">
        What Our Clients Say
      </h1>

      <div className="space-y-12">
        {[
          {
            name: "Rahul & Priya",
            review:
              "ASCLICK captured our wedding beautifully. Every picture feels alive and emotional.",
          },
          {
            name: "Ankit & Shreya",
            review:
              "Professional, creative and punctual. Highly recommended for cinematic wedding photography.",
          },
        ].map((item, i) => (
          <div key={i} className="p-8 border rounded-2xl dark:bg-[#1a1a1f]">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              “{item.review}”
            </p>
            <h3 className="font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
