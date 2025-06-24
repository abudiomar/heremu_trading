import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Camera } from "lucide-react";
import HeremuLogo from "../components/HeremuLogo";
import Gallery from "../components/Gallery";

export const metadata: Metadata = {
  title: "Manufacturing Gallery - Chemical Production Facility | Heremu Trading PLC",
  description: "Explore Heremu Trading PLC's state-of-the-art chemical manufacturing facilities in Ethiopia. See our modern equipment, quality control processes, and commitment to safety and environmental responsibility.",
  keywords: [
    "Heremu Trading factory photos",
    "chemical manufacturing facility Ethiopia",
    "sodium silicate production facility",
    "chemical plant Addis Ababa",
    "manufacturing excellence gallery",
    "industrial facilities Ethiopia",
    "chemical production equipment",
    "quality control facilities",
    "modern chemical manufacturing",
    "Ethiopian chemical industry photos"
  ],
  openGraph: {
    title: "Manufacturing Gallery - Chemical Production Facility | Heremu Trading PLC",
    description: "See Heremu Trading PLC's state-of-the-art chemical manufacturing facilities, modern equipment, and quality production processes.",
    images: [
      {
        url: "/gallery-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heremu Trading PLC Manufacturing Facilities Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Gallery | Heremu Trading PLC",
    description: "State-of-the-art chemical manufacturing facilities in Ethiopia.",
  },
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <HeremuLogo className="w-12 h-12" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Heremu</h1>
                <p className="text-xs text-blue-600 font-medium">CHEMICALS</p>
              </div>
            </Link>
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Manufacturing <span className="text-blue-600">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our state-of-the-art manufacturing facility, advanced machinery, 
              and quality production processes through our comprehensive photo gallery
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Component */}
      <Gallery />

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Manufacturing Excellence</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every image tells the story of our commitment to quality, innovation, and environmental responsibility
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Facility</h3>
              <p className="text-gray-600">
                Our factory is equipped with the latest technology to ensure efficient and 
                sustainable production of high-quality chemical products.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Control</h3>
              <p className="text-gray-600">
                Rigorous quality control processes at every stage ensure our products 
                meet the highest industry standards and customer expectations.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                Worker safety and environmental protection are our top priorities in 
                all manufacturing operations and facility design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Quality Manufacturing</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to learn more about our products and manufacturing capabilities? 
            Contact us to discuss your chemical solution needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View Our Products
            </Link>
            <Link
              href="/#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 