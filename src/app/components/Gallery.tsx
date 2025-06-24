'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Cog, Package, Eye, X, ZoomIn } from 'lucide-react';

const galleryImages = [
    {
        src: '/gallery/factory-interior-01.jpeg',
        title: 'Factory Interior',
        category: 'facility',
        description: 'Clean and organized production environment with optimal workflow design'
      },

  {
    src: '/gallery/machinery-equipment-01.jpeg',
    title: 'Advanced Machinery',
    category: 'equipment',
    description: 'High-tech equipment for precise chemical production and quality control'
  },
  {
    src: '/gallery/production-line-01.jpeg',
    title: 'Production Line',
    category: 'production',
    description: 'Efficient sodium silicate production line with automated systems'
  },
//   {
//     src: '/gallery/chemical-storage-01.jpeg',
//     title: 'Chemical Storage',
//     category: 'facility',
//     description: 'Safe and organized chemical storage systems meeting international standards'
//   },
  {
    src: '/gallery/manufacturing-process-01.jpeg',
    title: 'Manufacturing Process',
    category: 'facility',
    description: 'Precision manufacturing processes ensuring consistent product quality'
  },

  {
    src: '/gallery/factory-exterior-01.jpeg',
    title: 'Modern Manufacturing Facility',
    category: 'products',
    description: 'Our state-of-the-art factory exterior showcasing modern industrial architecture'
  },
//   {
//     src: '/gallery/industrial-equipment-01.jpeg',
//     title: 'Industrial Equipment',
//     category: 'equipment',
//     description: 'Heavy-duty industrial machinery designed for continuous operation'
//   },
  {
    src: '/gallery/production-facility-01.jpeg',
    title: 'Production Facility',
    category: 'facility',
    description: 'Comprehensive view of our integrated production facility'
  },
  {
    src: '/gallery/quality-control-01.jpeg',
    title: 'Quality Control',
    category: 'equipment',
    description: 'Rigorous quality control processes ensuring product excellence'
  },
  {
    src: '/gallery/sodium-silicate-product-01.jpeg',
    title: 'Sodium Silicate Products',
    category: 'products',
    description: 'High-quality sodium silicate in various forms and concentrations'
  },
  {
    src: '/gallery/chemical-containers-01.jpeg',
    title: 'Product Containers',
    category: 'products',
    description: 'Professional packaging and containers for safe product transportation'
  },
  {
    src: '/gallery/packaging-area-01.jpeg',
    title: 'Packaging Area',
    category: 'production',
    description: 'Efficient packaging and labeling operations with quality assurance'
  },
  {
    src: '/gallery/factory-operations-01.jpeg',
    title: 'Factory Operations',
    category: 'facility',
    description: 'Daily operations showcasing our commitment to operational excellence'
  },
  {
    src: '/gallery/manufacturing-equipment-02.jpeg',
    title: 'Manufacturing Equipment',
    category: 'equipment',
    description: 'Specialized manufacturing equipment for chemical processing'
  },
  {
    src: '/gallery/production-process-02.jpeg',
    title: 'Production Process',
    category: 'production',
    description: 'Advanced production methodologies with environmental considerations'
  },
  {
    src: '/gallery/facility-overview-01.jpeg',
    title: 'Facility Overview',
    category: 'facility',
    description: 'Complete overview of our modern manufacturing complex'
  }
];

const categoryInfo = {
  facility: {
    title: 'Manufacturing Facilities',
    description: 'Our modern production facilities designed for efficiency and safety',
    icon: <Factory className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700'
  },
  equipment: {
    title: 'Advanced Equipment',
    description: 'State-of-the-art machinery for precision manufacturing',
    icon: <Cog className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700'
  },
  production: {
    title: 'Production Processes',
    description: 'Quality-focused production methodologies and quality control',
    icon: <Cog className="w-6 h-6" />,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700'
  },
  products: {
    title: 'Our Products',
    description: 'High-quality sodium silicate products and packaging solutions',
    icon: <Package className="w-6 h-6" />,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700'
  }
};

interface ImageModalProps {
  image: typeof galleryImages[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

function ImageModal({ image, isOpen, onClose }: ImageModalProps) {
  if (!image) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-60"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-8 h-8" />
          </motion.button>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className={`bg-gradient-to-r ${categoryInfo[image.category as keyof typeof categoryInfo].color} px-3 py-1 rounded-full flex items-center space-x-1`}>
                  {categoryInfo[image.category as keyof typeof categoryInfo].icon}
                  <span className="text-xs uppercase tracking-wider font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
              <p className="text-gray-200 max-w-2xl">{image.description}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const groupedImages = galleryImages.reduce((acc, image) => {
    if (!acc[image.category]) {
      acc[image.category] = [];
    }
    acc[image.category].push(image);
    return acc;
  }, {} as Record<string, typeof galleryImages>);

  const openModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Eye className="w-4 h-4" />
            <span>Manufacturing Excellence Gallery</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Manufacturing Excellence
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Explore our state-of-the-art facility, advanced machinery, and quality production processes
          </motion.p>
        </motion.div>

        {/* Gallery Sections */}
        <div className="space-y-16">
          {Object.entries(groupedImages).map(([category, images], categoryIndex) => {
            const categoryData = categoryInfo[category as keyof typeof categoryInfo];
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="space-y-8"
              >
                {/* Section Header */}
                <div className={`${categoryData.bgColor} rounded-2xl p-8`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`bg-gradient-to-r ${categoryData.color} p-3 rounded-xl text-white`}>
                      {categoryData.icon}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${categoryData.textColor}`}>
                        {categoryData.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{categoryData.description}</p>
                    </div>
                  </div>
                  <div className={`text-sm ${categoryData.textColor} font-medium`}>
                    {images.length} image{images.length > 1 ? 's' : ''} • Click to expand
                  </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {images.map((image, imageIndex) => (
                    <motion.div
                      key={image.src}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: imageIndex * 0.1 }}
                      className="group cursor-pointer"
                      onMouseEnter={() => setHoveredImage(image.src)}
                      onMouseLeave={() => setHoveredImage(null)}
                      onClick={() => openModal(image)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative aspect-square rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Hover Content */}
                        <AnimatePresence>
                          {hoveredImage === image.src && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 20 }}
                              className="absolute inset-0 flex flex-col justify-end p-4 text-white"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className={`bg-gradient-to-r ${categoryData.color} px-2 py-1 rounded text-xs font-medium flex items-center space-x-1`}>
                                  {categoryData.icon}
                                  <span className="uppercase tracking-wider">
                                    {category}
                                  </span>
                                </div>
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  className="bg-white/20 backdrop-blur-sm p-2 rounded-full"
                                >
                                  <ZoomIn className="w-4 h-4" />
                                </motion.div>
                              </div>
                              <h4 className="font-bold text-lg mb-1">{image.title}</h4>
                              <p className="text-sm text-gray-200 line-clamp-2">
                                {image.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Gallery Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200"
        >
          {[
            { value: '16+', label: 'Production Images' },
            { value: '2020', label: 'Established' },
            { value: 'Latest', label: 'Technology' },
            { value: '100%', label: 'Quality Focused' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 bg-white rounded-lg shadow-md"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-3xl font-bold text-blue-600 mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      <ImageModal 
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={closeModal}
      />
    </section>
  );
} 