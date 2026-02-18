export const metadata = {
  title: "Privacy Policy | ASCLICK Wedding Photography - Motihari",
  description:
    "Read the Privacy Policy of ASCLICK, a professional wedding photography service in Motihari. Learn how we collect, use, and protect your personal information.",
  keywords: [
    "ASCLICK privacy policy",
    "Wedding photographer privacy policy",
    "Photography website privacy",
    "ASCLICK Motihari policy",
  ],
  openGraph: {
    title: "Privacy Policy | ASCLICK",
    description:
      "Understand how ASCLICK collects and protects your personal information.",
    url: "https://yourwebsite.com/privacy-policy",
    siteName: "ASCLICK",
    type: "website",
  },
  alternates: {
    canonical: "https://yourwebsite.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white dark:bg-[#0f0f12] text-gray-900 dark:text-gray-100 px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-semibold mb-10">
          Privacy Policy
        </h1>

        <p className="mb-6 text-gray-600 dark:text-gray-400">
          At <strong>ASCLICK</strong>, we respect your privacy and are committed
          to protecting your personal information. This Privacy Policy explains
          how we collect, use, and safeguard your data when you visit our
          website or use our wedding photography services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          We may collect personal information such as your name, email address,
          phone number, and event details when you contact us through our
          website. We also collect basic analytics data to improve user
          experience.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Your information is used solely to respond to inquiries, provide
          wedding photography services, improve our website, and communicate
          important updates. We do not sell or share your personal information
          with third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Data Protection
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          We implement appropriate security measures to protect your data from
          unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. Cookies
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Our website may use cookies to enhance browsing experience and
          analyze website traffic. You can disable cookies through your browser
          settings.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. Contact Us
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          If you have any questions about this Privacy Policy, please contact
          us at <strong>hello@asclick.com</strong>.
        </p>

        <p className="mt-10 text-sm text-gray-500">
          Last Updated: {new Date().getFullYear()}
        </p>

      </div>
    </div>
  );
}
