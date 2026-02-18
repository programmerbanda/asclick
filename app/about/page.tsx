import AboutClient from "./AboutClient";

export const metadata = {
  title: "About ASCLICK | Wedding Photographer in Motihari",
  description:
    "Learn about ASCLICK and Amit Singh, a professional wedding photographer in Motihari specializing in cinematic wedding storytelling and destination weddings.",
  keywords: [
    "ASCLICK wedding photography",
    "Amit Singh photographer",
    "Wedding photographer in Motihari",
    "Cinematic wedding photography",
    "Destination wedding photographer India",
  ],
  openGraph: {
    title: "About ASCLICK | Cinematic Wedding Photographer",
    description:
      "Meet Amit Singh, founder of ASCLICK, capturing timeless wedding stories with cinematic artistry.",
    url: "https://yourwebsite.com/about",
    siteName: "ASCLICK",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
