import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Factory, Target, Eye, Users, Award, Calendar } from "lucide-react";
import HeremuLogo from "../components/HeremuLogo";

export const metadata: Metadata = {
  title: "About Heremu Trading PLC - Leading Chemical Manufacturer in Ethiopia",
  description: "Learn about Heremu Trading PLC, established in 2020 as Ethiopia's premier chemical manufacturing company. Discover our mission, vision, leadership, and commitment to producing high-quality sodium silicate and chemical solutions in Addis Ababa.",
  keywords: [
    "about Heremu Trading PLC",
    "chemical company Ethiopia history",
    "Tofik Bedru CEO",
    "Ethiopian chemical manufacturer",
    "sodium silicate producer Ethiopia",
    "chemical industry Ethiopia",
    "Addis Ababa chemical company",
    "sustainable chemical manufacturing",
    "quality chemical products"
  ],
  openGraph: {
    title: "About Heremu Trading PLC - Leading Chemical Manufacturer in Ethiopia",
    description: "Established in 2020, Heremu Trading PLC is Ethiopia's premier chemical manufacturing company specializing in sodium silicate production and chemical solutions.",
    images: [
      {
        url: "/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Heremu Trading PLC - Chemical Manufacturing Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Heremu Trading PLC - Leading Chemical Manufacturer",
    description: "Established in 2020, Heremu Trading PLC is Ethiopia's premier chemical manufacturing company.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
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
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              <span>Established in 2020</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Heremu Trading PLC</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building Ethiopia's chemical manufacturing future with quality, innovation, and sustainability
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Heremu Trading PLC is a multi-lateral company established in 2020 for producing different 
                  chemical products for export as well as local market in Ethiopia. Our journey began with 
                  a vision to contribute to Ethiopia's industrial growth through quality chemical manufacturing.
                </p>
                <p>
                  Currently, we are producing different types of solid and liquid sodium silicate which is 
                  an important raw material for soap and detergents, paper and construction industries. 
                  Our products serve as import substitutes for the country, contributing to Ethiopia's 
                  economic independence.
                </p>
                <p>
                  Our new factory is equipped with the latest technology to produce quality products. 
                  We are committed to maintaining the highest standards while ensuring environmental 
                  responsibility and worker safety.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Company Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-200" />
                  <span>Established: 2020</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Factory className="w-5 h-5 text-blue-200" />
                  <span>Multi-lateral chemical manufacturer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-200" />
                  <span>Import substitute products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-200" />
                  <span>Serving local & international markets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600">Guiding principles that drive our commitment to excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Heremu's mission is to produce high quality sodium silicate products efficiently and 
                sustainably, while prioritizing worker safety and minimizing environmental impact. 
                We focus on efficient production processes, high quality products, and responsible 
                waste management practices. Additionally, we aim to innovate and stay up to date with 
                the latest technology and industry practices to remain competitive in the market while 
                ensuring safety, efficiency, and sustainability in our operations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The vision of Heremu Trading PLC is to be one of the leading companies in the country 
                for producing different basic chemicals for different industries locally as well as 
                internationally. We aim to meet the growing demand for chemical products by continuously 
                improving our processes, investing in research and development, adhering to industry 
                regulations and standards, and delivering excellent customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">Meet the visionary behind Heremu Trading PLC</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-8 text-center">
              <div className=" mx-auto mb-6 rounded-lg overflow-hidden shadow-lg ring-4 ring-white">
                <Image
                  src="/Izedin-Bedru.jpg"
                  alt="Tofik Bedru - Founder & CEO of Heremu Trading PLC"
                  width={428}
                  height={428}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tofik Bedru</h3>
              <p className="text-blue-600 font-medium mb-4">Founder & CEO</p>
              <blockquote className="text-gray-600 italic leading-relaxed text-lg">
                "Heremu trading PLC is a multi-lateral company established in 2020 for producing different 
                chemical products for export as well as local market in Ethiopia. Currently we are producing 
                different types of solid and liquid sodium silicate which is important raw material for soap 
                and detergents, for paper and construction industries which is import substitute for the country."
              </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Philosophy */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            "Quality is Not an Act, It's a Habit"
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            This philosophy drives everything we do at Heremu Trading PLC. From our manufacturing 
            processes to customer service, we believe in building long-lasting business relationships 
            through consistent excellence.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/10 px-6 py-3 rounded-lg">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Better Quality Builds Strong Future</span>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Environmental Commitment</h2>
            <p className="text-xl text-gray-600">Building a sustainable future through eco-friendly practices</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Eco-Friendly Manufacturing</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Heremu's chemical manufacturing processes can be made more eco-friendly by implementing 
              measures such as reducing water usage, optimizing energy consumption, implementing waste 
              management strategies, and using raw materials from sustainable sources.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Additionally, we invest in research and development to create new, greener production 
              processes that are less harmful to the environment. Our commitment to sustainability 
              ensures that we contribute positively to Ethiopia's environmental goals while maintaining 
              our production excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in building Ethiopia's chemical manufacturing future. Let's discuss how 
            Heremu can meet your chemical solution needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Contact Us Today
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 