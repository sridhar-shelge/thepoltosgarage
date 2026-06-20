import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://poltosgarage.in"),
  title: {
    default: "The Poltos Garage | Torque • Thump • Roads",
    template: "%s | The Poltos Garage"
  },
  description: "A modern Indian automotive community for cars, bikes, road trips, tested accessories, vlogs, marketplace picks, and real ownership stories.",
  keywords: ["Poltos Garage", "Indian automotive community", "car ownership India", "bike ownership India", "tested accessories", "road trip stories"],
  applicationName: "The Poltos Garage",
  authors: [{ name: "The Poltos Garage" }],
  creator: "The Poltos Garage",
  publisher: "The Poltos Garage",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/poltos-garage-logo.png",
    apple: "/poltos-garage-logo.png"
  },
  openGraph: {
    title: "The Poltos Garage",
    description: "Real Indian ownership, tested accessories, garage life, marketplace, vlogs, blogs, and community stories.",
    url: "https://poltosgarage.in",
    siteName: "The Poltos Garage",
    type: "website",
    images: [{ url: "/poltos-garage-logo.png", width: 1200, height: 1200, alt: "The Poltos Garage" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
