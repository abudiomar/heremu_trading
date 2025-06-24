import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Droplets, Square, Factory, Truck, Shield, Leaf, CheckCircle } from "lucide-react";
import HeremuLogo from "../components/HeremuLogo";

export const metadata: Metadata = {
  title: "Premium Chemical Products - Sodium Silicate | Heremu Trading PLC",
  description: "Discover Heremu Trading PLC's premium sodium silicate products. Available in liquid and solid forms for soap & detergent, paper, construction, and ceramic industries. High-quality chemical solutions manufactured in Ethiopia.",
  keywords: [
    "sodium silicate Ethiopia",
    "liquid sodium silicate",
    "solid sodium silicate", 
    "chemical products Ethiopia",
    "soap detergent chemicals",
    "paper industry chemicals",
    "construction chemicals",
    "ceramic manufacturing chemicals",
    "chemical raw materials",
    "industrial chemicals Addis Ababa",
    "sodium silicate manufacturer",
    "chemical solutions Ethiopia"
  ],
  openGraph: {
    title: "Premium Sodium Silicate Products | Heremu Trading PLC",
    description: "High-quality sodium silicate products for soap & detergent, paper, construction, and ceramic industries. Available in liquid and solid forms.",
    images: [
      {
        url: "/products-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heremu Trading PLC Premium Sodium Silicate Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Sodium Silicate Products | Heremu Trading PLC",
    description: "High-quality sodium silicate products for multiple industrial applications.",
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
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
              <span>Premium Chemical Products</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality sodium silicate products manufactured with the latest technology for various industrial applications
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Product</h2>
            <p className="text-xl text-gray-600">Our flagship chemical solution for multiple industries</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6">Sodium Silicate</h3>
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  Sodium silicate is a colorless compound that is soluble in water and has a variety of 
                  industrial uses. It is valued for its ability to act as a binder, adhesive, and sealant, 
                  as well as its fire-resistant properties.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium">Multi-Purpose</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium">Fire-Resistant</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium">Eco-Friendly</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium">Water-Soluble</span>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6">Key Properties</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Excellent binding properties</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Superior adhesive capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Effective sealing properties</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Fire-resistant characteristics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Environmentally safe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Variants */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Variants</h2>
            <p className="text-xl text-gray-600">Available in different forms to meet your specific needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Liquid Sodium Silicate</h3>
                  <p className="text-blue-600 font-medium">Ready-to-use solution</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our liquid sodium silicate is manufactured using the latest technology to ensure consistent 
                quality and optimal performance. Ideal for applications requiring immediate use without 
                additional preparation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Ready for immediate application</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Consistent viscosity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Extended shelf life</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-red-100 rounded-lg p-3">
                  <Square className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Solid Sodium Silicate</h3>
                  <p className="text-red-600 font-medium">Concentrated powder form</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our solid sodium silicate provides maximum concentration and flexibility for custom 
                applications. Can be dissolved in water to create solutions of desired concentration 
                for specific industrial needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">High concentration formula</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Cost-effective storage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Customizable concentration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industrial Applications</h2>
            <p className="text-xl text-gray-600">Essential raw material for multiple industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Soap & Detergents",
                description: "Essential ingredient for manufacturing high-quality cleaning products",
                icon: "🧼"
              },
              {
                title: "Paper Industry",
                description: "Critical component in paper manufacturing and processing",
                icon: "📄"
              },
              {
                title: "Construction",
                description: "Used in cement, concrete, and other construction materials",
                icon: "🏗️"
              },
              {
                title: "Ceramics",
                description: "Important component in ceramic manufacturing processes",
                icon: "🏺"
              },
              {
                title: "Drilling Fluids",
                description: "Essential component in oil and gas drilling operations",
                icon: "⚡"
              },
              {
                title: "Textiles",
                description: "Used in textile processing and fabric treatment",
                icon: "🧵"
              },
              {
                title: "Water Treatment",
                description: "Effective solution for water purification processes",
                icon: "💧"
              },
              {
                title: "Adhesives",
                description: "Key ingredient in industrial adhesive formulations",
                icon: "🔗"
              }
            ].map((application, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{application.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{application.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Sodium Silicate?</h2>
            <p className="text-xl text-gray-600">Superior quality and performance advantages</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmentally Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Our sodium silicate is environmentally safe and considered suitable for use in a wide 
                range of applications without harmful environmental impact.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Import Substitute</h3>
              <p className="text-gray-600 leading-relaxed">
                Our locally manufactured sodium silicate serves as an effective import substitute, 
                supporting Ethiopia's economic independence and reducing dependency on foreign suppliers.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Factory className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                Produced using state-of-the-art manufacturing equipment and processes to ensure 
                consistent quality, purity, and performance in every batch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Information</h2>
            <p className="text-xl text-gray-300">Detailed specifications for industrial applications</p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Product Characteristics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-white/20">
                    <span className="text-gray-300">Appearance:</span>
                    <span className="font-medium">Colorless Solution/White Powder</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/20">
                    <span className="text-gray-300">Solubility:</span>
                    <span className="font-medium">Highly Water Soluble</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/20">
                    <span className="text-gray-300">Binding Properties:</span>
                    <span className="font-medium">Excellent</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/20">
                    <span className="text-gray-300">Fire Resistance:</span>
                    <span className="font-medium">High</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-300">Environmental Impact:</span>
                    <span className="font-medium">Low/Safe</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Available Packaging</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Liquid Form</h4>
                    <p className="text-gray-300 text-sm">Available in various container sizes from small bottles to industrial drums</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Solid Form</h4>
                    <p className="text-gray-300 text-sm">Packaged in sealed bags and containers to maintain quality and prevent moisture absorption</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Custom Packaging</h4>
                    <p className="text-gray-300 text-sm">We offer custom packaging solutions to meet specific client requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Custom Chemical Solutions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your sodium silicate requirements or custom chemical manufacturing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Request Quote
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 