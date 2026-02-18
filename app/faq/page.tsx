export const metadata = {
  title: "FAQ | Wedding Photographer in Motihari - ASCLICK",
  description:
    "Frequently asked questions about wedding photography services by ASCLICK in Motihari.",
};

export default function FAQPage() {
  return (
    <div className="px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold mb-12 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold">
            How much does wedding photography cost?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Pricing depends on event duration, location and services selected.
            Contact us for a custom quote.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Do you travel for destination weddings?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Yes, we cover destination weddings across India.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            How long does delivery take?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Delivery timeline depends on project size, typically within 3–6 weeks.
          </p>
        </div>
      </div>
    </div>
  );
}
