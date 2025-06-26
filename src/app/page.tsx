import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight, Beaker, Cog, Package, Truck, FlaskConical, Users, Droplets, Camera, ArrowRight } from "lucide-react";
import HeremuLogo from "./components/HeremuLogo";
import ContactForm from "./components/ContactForm";
import HeroNavbar from "./components/HeroNavbar";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-600 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <HeroNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/office.jpeg"
            alt="Heremu Trading PLC Office"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20"></div>
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Beaker className="w-4 h-4" />
                <span>Leading Chemical Solutions Provider</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Heremu Trading PLC</span>
              <span className="block text-blue-600 mt-2">Chemical Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              "The Best or Nothing" - Your trusted partner for premium chemical solutions, 
              manufacturing excellence, and innovative formulations in Ethiopia and beyond.
            </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                 <span>View Our Products</span>
                 <ChevronRight className="w-4 h-4" />
               </Link>
               <Link href="#contact" className="border-2 border-primary text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                 Contact Us Today
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive chemical solutions tailored to meet your industrial and commercial needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cog className="w-8 h-8" />,
                title: "Mixing & Blending",
                description: "Custom chemicals and cleaning chemicals mixing and blending services"
              },
              {
                icon: <FlaskConical className="w-8 h-8" />,
                title: "Chemical Solutions",
                description: "High-quality chemical products and comprehensive solutions for various industries"
              },
              {
                icon: <Package className="w-8 h-8" />,
                title: "Bottle Filling Service",
                description: "Professional bottle filling service, including glass ampoules and specialized containers"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Product Development & Design",
                description: "Expert support on product development and innovative design solutions"
              },
              {
                icon: <Beaker className="w-8 h-8" />,
                title: "New Formulations",
                description: "Prototyping new formulations and development of innovative chemical solutions"
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Packing & Export",
                description: "Complete packing, repacking, labeling, delivering and export services to your premises or directly to your clients"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/5 to-blue-800/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-quality sodium silicate products manufactured with latest technology
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Beaker className="w-4 h-4" />
                  <span>Import Substitute Product</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Sodium Silicate</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  A colorless compound that is soluble in water with a variety of industrial uses. 
                  Valued for its ability to act as a binder, adhesive, and sealant, as well as 
                  its fire-resistant properties. Used in manufacturing of detergents, drilling fluids, 
                  and ceramics.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Droplets className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Liquid Form</h4>
                    <p className="text-sm text-gray-600">Ready-to-use solution</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Package className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Solid Form</h4>
                    <p className="text-sm text-gray-600">Concentrated powder</p>
                  </div>
                </div>
                <Link 
                  href="/products" 
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  <span>View All Products</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <FlaskConical className="w-16 h-16 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Industrial Applications</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/50 rounded-lg px-3 py-2">Soap & Detergents</div>
                    <div className="bg-white/50 rounded-lg px-3 py-2">Paper Industry</div>
                    <div className="bg-white/50 rounded-lg px-3 py-2">Construction</div>
                    <div className="bg-white/50 rounded-lg px-3 py-2">Ceramics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              "Quality is Not an Act, It's a Habit"
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              This philosophy drives everything we do at Heremu Trading PLC. We believe in building 
              long-lasting business relationships through consistent excellence and commitment to our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Quality Excellence</h3>
              <p className="text-blue-100 leading-relaxed">
                Committed to delivering "The Best or Nothing" - our motto reflects our dedication 
                to superior chemical solutions and manufacturing standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Cog className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Latest Technology</h3>
              <p className="text-blue-100 leading-relaxed">
                Our new factory is equipped with the latest technology to produce quality products 
                efficiently and sustainably while maintaining safety standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Import Substitute</h3>
              <p className="text-blue-100 leading-relaxed">
                Contributing to Ethiopia's economic independence by providing locally manufactured 
                chemical products that replace imported alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Teaser Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100/10 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Camera className="w-4 h-4" />
              <span>Manufacturing Excellence Showcase</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See Our Manufacturing
              <span className="block text-blue-400 mt-2">Excellence in Action</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Explore our state-of-the-art facilities, advanced equipment, and quality production processes. 
              Discover how we maintain the highest standards in chemical manufacturing.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-blue-400 mb-3">
                  <Package className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Modern Facilities</h3>
                <p className="text-gray-400 text-sm">State-of-the-art production environment</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-purple-400 mb-3">
                  <Cog className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Advanced Equipment</h3>
                <p className="text-gray-400 text-sm">Latest technology machinery</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-green-400 mb-3">
                  <FlaskConical className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality Processes</h3>
                <p className="text-gray-400 text-sm">Rigorous production standards</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-red-400 mb-3">
                  <Beaker className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Premium Products</h3>
                <p className="text-gray-400 text-sm">High-quality chemical solutions</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/gallery" 
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Camera className="w-5 h-5" />
                <span className="font-semibold">Explore Full Gallery</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/about" 
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center space-x-2"
              >
                <span>Learn More About Us</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build the Future Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Better quality builds strong future. Let's discuss how Heremu can provide 
            the chemical solutions your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Learn More About Us
            </Link>
            <Link
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to discuss your chemical solution needs?</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>+251 909 524 295</p>
                    <p>+251 967 676 738</p>
                    <p>+251 967 676 756</p>
                    <p>+251 983 540 254</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">heremuf@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>

          {/* Google Maps Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Us</h3>
              <p className="text-gray-600">Visit our office in Addis Ababa, Ethiopia</p>
            </div>
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.640729808!2d38.7469!3d9.0320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Heremu Trading PLC Location - Addis Ababa, Ethiopia"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/EfYgyhsAtAEkJBU79"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <HeremuLogo className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold">Heremu Chemicals</h3>
                <p className="text-sm text-gray-400">"The Best or Nothing"</p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 mt-8">
              <p className="text-gray-400">
                © 2025 Heremu Trading PLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
