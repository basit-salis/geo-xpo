import { Footer, Navbar } from "@/components";
import "../assets/mdi/css/materialdesignicons.min.css";
// import "../assets/mdi/fonts/materialdesignicons-webfont.svg";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geo-Xpo",
  description: "worldwide shipping company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/geoxpo-logo.jpg" />
      </head>
      <body className={`box-border text-cyan-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
