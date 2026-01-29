import { useState } from 'react';
import { ArrowLeft, Heart, Share2, Wrench, Zap, Gauge, Star, CheckCircle, Users, Shield, Droplets, Wind } from 'lucide-react';

export default function BalwanBhoosiDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const productImages = [
    '/images/products/1.jpeg',
    '/images/products/2.jpeg',
    '/images/products/3.jpeg',
    '/images/products/4.jpeg',
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.43 PM.jpeg',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const features = [
    { icon: Shield, title: "Strong & durable body", description: "Made from metal/steel for long-lasting performance" },
    { icon: Users, title: "Large storage capacity", description: "Ample space for bhoosi and fodder storage" },
    { icon: Wrench, title: "Easy to use", description: "Compatible with agricultural machines" },
    { icon: Zap, title: "Low maintenance", description: "Minimal upkeep required" },
    { icon: Gauge, title: "Space-saving design", description: "Keeps the farm clean and organized" },
    { icon: Shield, title: "Weather protection", description: "Protects from wind, rain, and wastage" },
  ];

  const benefits = [
    "Reduces fodder wastage",
    "Keeps animal feed organized", 
    "Saves time and labor",
    "Improves storage management in dairy and farms",
    "Useful for cows, buffaloes, goats, etc."
  ];

  const specifications = [
    { label: "Storage Capacity", value: "500-1000 Kg" },
    { label: "Power Requirement", value: "Manual Operation" },
    { label: "Available Sizes", value: "6 Feet & 8 Feet" },
    { label: "Material", value: "Heavy Iron & Steel" },
    { label: "Storage Type", value: "Bhoosi, Hay, Straw, Dry Fodder" },
    { label: "Usage Location", value: "Farms, Dairy Farms, Cattle Sheds" },
  ];

  const purposes = [
    { icon: CheckCircle, title: "Collect bhoosi", description: "From chaff cutter / thresher machine" },
    { icon: Shield, title: "Store fodder safely", description: "Keep everything in one place" },
    { icon: Droplets, title: "Keep feed clean", description: "Dry and protected from elements" },
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
                alt="Balwan Bhoosi Tank"
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
                    alt={`Balwan Bhoosi Tank ${index + 1}`}
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
                <span className="bg-gradient-to-r from-amber-600 to-orange-700 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                  Storage Tank
                </span>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-4">Balwan Bhoosi Tank</h1>
              <p className="text-xl text-neutral-600 leading-relaxed">
                The Balwan Bhoosi Tank (also called Balwan Boosi Tank) is an agricultural storage tank/machine mainly used to store and collect bhoosi (chaff), hay, straw, or dry fodder for animals. It is commonly used in farms, dairy farms, and cattle sheds.
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

            {/* Purpose Section */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
                <span className="text-2xl mr-2">🌾</span>
                Purpose
              </h3>
              <p className="text-lg text-neutral-700 mb-4">Its main purpose is to:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {purposes.map((purpose, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-premium border border-neutral-100">
                    <purpose.icon className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-neutral-900">{purpose.title}</h4>
                      <p className="text-sm text-neutral-600 mt-1">{purpose.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center">
                <span className="text-2xl mr-2">🔧</span>
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-premium border border-neutral-100">
                    <feature.icon className="h-6 w-6 text-amber-600 flex-shrink-0" />
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
                <span className="text-2xl mr-2">🐄</span>
                Benefits for Farmers
              </h3>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-neutral-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Usage Information */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="text-lg font-bold text-neutral-900 mb-3 flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                Ideal For
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Farms", "Dairy Farms", "Cattle Sheds", "Animal Husbandry", "Agricultural Storage"].map((use) => (
                  <span key={use} className="bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-700 border border-blue-200">
                    {use}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex-1 bg-gradient-to-r from-amber-600 to-orange-700 text-white py-4 px-8 rounded-2xl hover:from-amber-700 hover:to-orange-800 transition-all duration-300 font-semibold shadow-premium hover:shadow-premium-lg hover:scale-[1.02]">
                Get Quote
              </button>
              <button className="flex-1 bg-white border-2 border-amber-600 text-amber-600 py-4 px-8 rounded-2xl hover:bg-amber-50 transition-all duration-300 font-semibold">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
