import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/system";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Heremu Trading PLC - Chemical Excellence in Ethiopia",
    template: "%s | Heremu Trading PLC"
  },
  description: "Heremu Trading PLC is Ethiopia's leading chemical manufacturing company. We produce high-quality sodium silicate, chemical solutions, and provide mixing, blending, and packaging services. 'The Best or Nothing' - Your trusted partner for premium chemical solutions in Addis Ababa, Ethiopia.",
  keywords: [
    "Heremu Trading PLC", 
    "Ethiopia chemicals", 
    "Addis Ababa chemical company",
    "sodium silicate manufacturer",
    "chemical manufacturing Ethiopia", 
    "soap detergent chemicals",
    "construction chemicals",
    "paper industry chemicals",
    "chemical mixing blending",
    "bottle filling service",
    "chemical packaging Ethiopia",
    "import substitute chemicals",
    "quality chemical products",
    "Ethiopian chemical industry",
    "chemical solutions Addis Ababa"
  ],
  authors: [{ name: "Heremu Trading PLC" }],
  creator: "Heremu Trading PLC",
  publisher: "Heremu Trading PLC",
  metadataBase: new URL("https://heremu-trading.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Heremu Trading PLC - Chemical Excellence in Ethiopia",
    description: "Leading chemical manufacturing company in Ethiopia. Producing high-quality sodium silicate and chemical solutions for soap, detergent, paper, and construction industries.",
    url: "https://heremu-trading.com", // Replace with your actual domain
    siteName: "Heremu Trading PLC",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Heremu Trading PLC - Chemical Manufacturing Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heremu Trading PLC - Chemical Excellence in Ethiopia",
    description: "Leading chemical manufacturing company in Ethiopia. High-quality sodium silicate and chemical solutions.",
    images: ["/twitter-image.jpg"], // You'll need to add this image
    creator: "@HeremuTrading", // Replace with your actual Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "business",
  classification: "Chemical Manufacturing",
  other: {
    "msapplication-TileColor": "#3B82F6",
    "theme-color": "#3B82F6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="company" content="Heremu Trading PLC" />
        <meta name="location" content="Addis Ababa, Ethiopia" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Geo Meta Tags */}
        <meta name="geo.region" content="ET" />
        <meta name="geo.placename" content="Addis Ababa" />
        <meta name="geo.position" content="9.0320;38.7469" />
        <meta name="ICBM" content="9.0320, 38.7469" />
        
        {/* Business Information */}
        <meta name="business:contact_data:street_address" content="Addis Ababa" />
        <meta name="business:contact_data:locality" content="Addis Ababa" />
        <meta name="business:contact_data:region" content="" />
        <meta name="business:contact_data:postal_code" content="" />
        <meta name="business:contact_data:country_name" content="Ethiopia" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Heremu Trading PLC",
              "alternateName": "Heremu Chemicals",
              "url": "https://heremu-trading.com",
              "logo": "https://heremu-trading.com/logo.png",
              "description": "Leading chemical manufacturing company in Ethiopia specializing in sodium silicate production and chemical solutions.",
              "foundingDate": "2020",
              "slogan": "The Best or Nothing",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Addis Ababa",
                "addressCountry": "Ethiopia"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+251-909-524-295",
                "contactType": "customer service",
                "email": "abudi4947@gmail.com"
              },
              "sameAs": [],
              "industry": "Chemical Manufacturing",
              "numberOfEmployees": "50-100",
              "knowsAbout": [
                "Chemical Manufacturing",
                "Sodium Silicate Production",
                "Chemical Mixing and Blending",
                "Bottle Filling Services",
                "Chemical Packaging"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
