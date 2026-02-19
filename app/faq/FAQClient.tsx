"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does wedding photography cost in Motihari?",
    answer:
      "Wedding photography pricing depends on event duration, number of functions, location and deliverables. Contact ASCLICK for a customized quote tailored to your wedding.",
  },
  {
    question: "Do you offer pre-wedding shoots?",
    answer:
      "Yes, we specialize in creative pre-wedding shoots designed around your love story and preferred locations.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer:
      "Absolutely. ASCLICK covers destination weddings across India with professional travel-ready setup.",
  },
  {
    question: "How long does it take to deliver wedding photos?",
    answer:
      "Delivery timelines typically range between 3–6 weeks depending on project scale and editing requirements.",
  },
  {
    question: "Do you provide cinematic wedding films?",
    answer:
      "Yes, we offer cinematic wedding films that blend storytelling, music and artistic editing.",
  },
  {
    question: "How can we book ASCLICK?",
    answer:
      "You can book by contacting us through the contact page. Booking is confirmed after advance payment.",
  },
  {
    question: "Do you provide albums?",
    answer:
      "Yes, we offer premium quality wedding albums with custom design options.",
  },
  {
    question: "What equipment do you use?",
    answer:
      "We use professional full-frame cameras, prime lenses and advanced lighting equipment for premium results.",
  },
  {
    question: "Can we request specific shots?",
    answer:
      "Yes, we encourage couples to share shot preferences to ensure personalized coverage.",
  },
  {
    question: "Why choose ASCLICK for wedding photography?",
    answer:
      "With over 8 years of experience, ASCLICK combines cinematic storytelling, technical excellence and a personalized freelance approach.",
  },
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-[#0f0f12] text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* HERO */}
      <section className="px-6 pt-28 pb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Everything you need to know about our wedding photography services.
        </p>
      </section>

      {/* FAQ ACCORDION */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-800 
              rounded-2xl bg-gray-50 dark:bg-[#15151a]"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center 
                p-6 text-left font-medium"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center bg-gray-50 dark:bg-[#15151a]">
        <h2 className="text-3xl font-semibold mb-6">
          Still Have Questions?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Get in touch with ASCLICK to discuss your wedding photography plans.
        </p>

        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-primary to-pink-500 
          text-white px-8 py-3 rounded-xl 
          hover:opacity-90 hover:scale-105 
          transition-all duration-300"
        >
          Contact Now
        </a>
      </section>

      {/* SEO SUPPORT TEXT */}
      <div className="hidden">
        ASCLICK is a professional wedding photographer in Motihari offering
        pre-wedding shoots, cinematic wedding films, bridal portraits and
        destination wedding coverage across India.
      </div>

    </div>
  );
}
