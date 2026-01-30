import { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Heart, Share2, Wrench, Zap, Gauge, Factory, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VFWHalfDalaDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const productImages = [
    '/images/products/5.jpeg',
    '/images/products/6.jpeg',
    '/images/products/7.jpeg',
    '/images/products/8.jpeg',
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.43 PM.jpeg',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const setCurrentImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 animate-machine-gear"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-machine-crank animate-delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-red-400 to-purple-500 rounded-full opacity-20 animate-machine-piston animate-delay-400"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
            <div className="flex items-center justify-between">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="font-semibold">Back to Products</span>
              </Link>
              
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Product Detail */}
        <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src={productImages[currentImageIndex]} 
                  alt="VFW Half Dala Machine" 
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              {/* Image Thumbnails */}
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'ring-4 ring-amber-500 scale-110' 
                        : 'ring-2 ring-gray-200 hover:ring-amber-300'
                    }`}
                  >
                    <img 
                      src={productImages[index]} 
                      alt={`Product view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              {/* Product Title */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                    Threshing Machine
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-xl text-sm font-semibold">
                    In Stock
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                  VFW Half Dala Machine
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Advanced agricultural threshing machine designed to separate grains from stalks, husk, and chaff after harvesting with improved efficiency and precision.
                </p>
              </div>

              {/* Key Specifications */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Specifications</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-100 p-3 rounded-xl">
                      <Gauge className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Capacity</p>
                      <p className="text-lg font-semibold text-gray-900">1.5 Ton/Hour</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Power Requirement</p>
                      <p className="text-lg font-semibold text-gray-900">45 HP Tractor / 35 HP Electric</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <Wrench className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Drum Size</p>
                      <p className="text-lg font-semibold text-gray-900">24-28 inch Drum</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Construction</p>
                      <p className="text-lg font-semibold text-gray-900">Heavy Iron Materials</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                
                <div className="space-y-4">
                  {[
                    'Improved threshing efficiency for better grain separation',
                    'Heavy iron construction for enhanced durability and longevity',
                    '24-28 inch drum size for optimal processing capacity',
                    'Compatible with 45 HP tractor or 35 HP electric motor',
                    'Precision-engineered components for consistent performance',
                    'Minimal grain breakage during threshing process',
                    'Easy maintenance and cleaning procedures',
                    'Designed for continuous operation in demanding conditions'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Applications</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Post-harvest grain threshing operations',
                    'Large-scale agricultural processing',
                    'Commercial grain processing units',
                    'Agricultural cooperatives and farms',
                    'Food processing industries',
                    'Rural development projects'
                  ].map((application, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <p className="text-gray-700">{application}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-8 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02]">
                  Request Quote
                </button>
                <button className="flex-1 bg-white text-amber-600 border-2 border-amber-600 py-4 px-8 rounded-xl hover:bg-amber-50 transition-all duration-300 font-semibold">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
