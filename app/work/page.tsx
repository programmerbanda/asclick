import WorkClient from "./WorkClient";

export const metadata = {
  title: "Our Work | Wedding Photography Portfolio in Motihari - ASCLICK",
  description:
    "Browse the official wedding photography portfolio of ASCLICK. Explore cinematic weddings, pre-wedding shoots, bridal portraits and reception photography captured in Motihari and across India.",
  keywords: [
    "ASCLICK portfolio",
    "Wedding photography portfolio in Motihari",
    "Professional wedding photographer Motihari",
    "Pre wedding shoot Motihari",
    "Cinematic wedding photography India",
    "Wedding gallery ASCLICK",
  ],
  openGraph: {
    title: "ASCLICK | Wedding Photography Portfolio",
    description:
      "Explore cinematic wedding stories and professional photography work by ASCLICK in Motihari and across India.",
    url: "https://yourwebsite.com/work",
    siteName: "ASCLICK",
    type: "website",
  },
  alternates: {
    canonical: "https://yourwebsite.com/work",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
