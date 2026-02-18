import ContactClient from "./ContactClient"

export const metadata = {
  title: "Contact ASCLICK | Wedding Photographer in Motihari",
  description:
    "Contact ASCLICK, a professional wedding photographer in Motihari specializing in cinematic wedding storytelling and destination weddings.",
  openGraph: {
    title: "Contact ASCLICK | Wedding Photographer",
    description:
      "Cinematic wedding photography & destination weddings in Motihari.",
    url: "https://yourwebsite.com/contact",
    siteName: "ASCLICK",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />
}
