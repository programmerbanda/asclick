export const metadata = {
  title: "Wedding Photography Blog | ASCLICK",
  description:
    "Explore wedding photography tips, venue guides and inspiration by ASCLICK.",
};

export default function BlogPage() {
  return (
    <div className="px-6 py-24 max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-16">
        Wedding Photography Blog
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((post) => (
          <div key={post} className="p-6 border rounded-2xl dark:bg-[#1a1a1f]">
            <h2 className="text-xl font-semibold mb-3">
              Blog Post Title
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Short description of blog post about wedding photography tips or venues.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
