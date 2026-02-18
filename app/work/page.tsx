import WorkClient from "./WorkClient";

export const metadata = {
  title: "Wedding Photography Portfolio | ASCLICK - Motihari",
  description:
    "Explore the wedding photography portfolio of ASCLICK. Cinematic wedding, pre-wedding, reception and bridal photography in Motihari and across India.",
  keywords: [
    "Wedding photography portfolio",
    "Wedding photographer in Motihari",
    "Pre wedding shoot",
    "Cinematic wedding photography",
    "Bridal photography India",
  ],
  openGraph: {
    title: "ASCLICK Wedding Photography Portfolio",
    description:
      "Discover cinematic wedding stories captured by ASCLICK across India.",
    url: "https://yourwebsite.com/work",
    siteName: "ASCLICK",
    type: "website",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
