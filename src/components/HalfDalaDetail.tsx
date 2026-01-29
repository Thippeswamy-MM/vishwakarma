import { useState } from 'react';
import { ArrowLeft, Heart, Share2, Wrench, Zap, Gauge, Star, CheckCircle, Users, Clock, TrendingUp } from 'lucide-react';

export default function HalfDalaDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const productImages = [
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.42 PM.jpeg',
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.43 PM.jpeg',
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.43 PM (1).jpeg',
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.44 PM.jpeg',
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.44 PM (1).jpeg',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const features = [
    { icon: CheckCircle, title: "Strong and durable body", description: "Steel construction for long-lasting performance" },
    { icon: TrendingUp, title: "High efficiency threshing", description: "Maximum output with minimal grain damage" },
    { icon: Wrench, title: "Compact size", description: "Saves space and easy to install" },
    { icon: Zap, title: "Easy to operate", description: "Simple controls and low maintenance" },
    { icon: Gauge, title: "Low power consumption", description: "Energy-efficient operation" },
    { icon: Users, title: "Cost-effective", description: "Affordable solution for farmers" },
  ];

  const benefits = [
    "Saves time and labor",
    "Faster crop processing", 
    "Reduces manual work",
    "Increases productivity",
    "Suitable for small & medium scale farming"
  ];

  const specifications = [
    { label: "Processing Capacity", value: "1 Ton/Hour" },
    { label: "Power Requirement", value: "39 HP Tractor / 30 HP Electric" },
    { label: "Available Sizes", value: "6 Inch & 8 Inch" },
    { label: "Material", value: "Heavy Iron & Steel" },
    { label: "Suitable Crops", value: "Wheat, Paddy, Maize, Other Grains" },
    { label: "Operation Type", value: "Threshing & Cleaning" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-50/20 to-secondary-50/20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Products</span>
            </button>
            <div className="flex space-x-3">
              <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors duration-200">
                <Heart className="h-5 w-5 text-neutral-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors duration-200">
                <Share2 className="h-5 w-5 text-neutral-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img 
                src={productImages[currentImageIndex]} 
                alt="Half Dala Machine"
                className="w-full h-96 object-cover"
              />
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-premium"
              >
                <ArrowLeft className="h-6 w-6 text-neutral-600" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-premium"
              >
                <ArrowLeft className="h-6 w-6 text-neutral-600 rotate-180" />
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'border-primary-600 shadow-lg scale-105' 
                      : 'border-transparent hover:border-neutral-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Half Dala Machine ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            {/* Title and Basic Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                  Grain Processor
                </span>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-4">Half Dala Machine</h1>
              <p className="text-xl text-neutral-600 leading-relaxed">
                The Half Dala Machine is an agricultural machine mainly used in threshing and cleaning crops such as wheat, paddy, maize, and other grains. It helps farmers separate grain from straw and waste material quickly and efficiently.
              </p>
            </div>

            {/* Key Specifications */}
            <div className="bg-white rounded-2xl p-6 shadow-premium border border-neutral-100">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Key Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-neutral-100 last:border-0">
                    <span className="text-neutral-600">{spec.label}</span>
                    <span className="font-semibold text-neutral-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Uses */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🌾</span>
                Main Uses
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Separates grain from husk and straw</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Used in threshing operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Suitable for wheat, paddy, and similar crops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Works with motor or tractor (depending on model)</span>
                </li>
              </ul>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
                <span className="text-2xl mr-2">⭐</span>
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-premium border border-neutral-100">
                    <feature.icon className="h-6 w-6 text-primary-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-neutral-900">{feature.title}</h4>
                      <p className="text-sm text-neutral-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits for Farmers */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
                <span className="text-2xl mr-2">👨‍🌾</span>
                Benefits for Farmers
              </h3>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-neutral-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 px-8 rounded-2xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 font-semibold shadow-premium hover:shadow-premium-lg hover:scale-[1.02]">
                Get Quote
              </button>
              <button className="flex-1 bg-white border-2 border-primary-600 text-primary-600 py-4 px-8 rounded-2xl hover:bg-primary-50 transition-all duration-300 font-semibold">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
