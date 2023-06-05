import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin-ext'],
});

export const metadata = {
  title: "Drip Plug — Designer Clothing",
  description:
    "We connect fashion retailers and enthusiasts with top-quality garments directly from renowned Chinese manufacturers and designers. Explore our platform today and unlock access to a wide range of stylish and fashionable clothing options that will captivate your customers and elevate your business.",
  keywords:
    "drip plug, dripplug, dripplug.com, dripplug clothing, drip plug clothing",
  
  // Open Graph
  ogTitle: "Drip Plug — Designer Clothing",
  ogDescription:
    "We connect fashion retailers and enthusiasts with top-quality garments directly from renowned Chinese manufacturers and designers. Explore our platform today and unlock access to a wide range of stylish and fashionable clothing options that will captivate your customers and elevate your business.",
  ogImage: "https://dripplug.com/template.png",
  ogUrl: "https://dripplug.com",
  ogSiteName: "Drip Plug",
  ogLocale: "en_US",
  ogType: "website",

  // Twitter
  twitterTitle: "Drip Plug — Designer Clothing",
  twitterDescription:
    "We connect fashion retailers and enthusiasts with top-quality garments directly from renowned Chinese manufacturers and designers. Explore our platform today and unlock access to a wide range of stylish and fashionable clothing options that will captivate your customers and elevate your business.",
  twitterImage: "https://dripplug.com/template.png",
  twitterUrl: "https://dripplug.com",
  twitterSite: "@dripplug",
  twitterCreator: "@dripplug",

  // Misc
  favicon: "https://dripplug.com/favicon.ico",
  themeColor: "#111",
  backgroundColor: "#111",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
