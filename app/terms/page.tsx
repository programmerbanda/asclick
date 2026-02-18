export const metadata = {
  title: "Terms & Conditions | ASCLICK Wedding Photography - Motihari",
  description:
    "Read the Terms and Conditions of ASCLICK, a professional wedding photographer in Motihari. Understand booking policies, payments, cancellations, and copyright terms.",
  keywords: [
    "ASCLICK terms and conditions",
    "Wedding photography terms",
    "Wedding photographer contract Motihari",
    "Photography service agreement India",
  ],
  openGraph: {
    title: "Terms & Conditions | ASCLICK",
    description:
      "Official terms governing wedding photography services by ASCLICK.",
    url: "https://yourwebsite.com/terms-and-conditions",
    siteName: "ASCLICK",
    type: "website",
  },
  alternates: {
    canonical: "https://yourwebsite.com/terms-and-conditions",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-white dark:bg-[#0f0f12] text-gray-900 dark:text-gray-100 px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-semibold mb-10">
          Terms & Conditions
        </h1>

        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Welcome to <strong>ASCLICK</strong>. By booking our wedding photography
          services or using our website, you agree to the following terms and
          conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. Booking & Payment
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          A booking is confirmed only after receiving a non-refundable advance
          payment. The remaining balance must be paid before or on the event
          date unless otherwise agreed in writing.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. Cancellation Policy
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          In case of cancellation by the client, the advance payment will not
          be refunded. If ASCLICK is unable to provide services due to
          unforeseen circumstances, a suitable replacement or refund policy
          will be discussed with the client.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Delivery Timeline
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Edited photographs and videos will be delivered within the agreed
          timeline. Delivery time may vary depending on event size and editing
          requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. Copyright & Usage
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          All photographs and videos captured by ASCLICK remain the intellectual
          property of ASCLICK. Clients receive personal usage rights. Images may
          be used for portfolio, marketing, and promotional purposes unless
          requested otherwise in writing.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. Client Responsibilities
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Clients are responsible for obtaining necessary permissions for
          photography at venues and ensuring event schedules are shared in
          advance.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Limitation of Liability
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          While every effort is made to capture and preserve your special
          moments, ASCLICK shall not be held liable for circumstances beyond
          control such as weather, venue restrictions, or technical failures.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          7. Contact Information
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          For any questions regarding these Terms & Conditions, please contact
          us at <strong>hello@asclick.com</strong>.
        </p>

        <p className="mt-10 text-sm text-gray-500">
          Last Updated: {new Date().getFullYear()}
        </p>

      </div>
    </div>
  );
}
