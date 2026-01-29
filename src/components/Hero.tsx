import { useState, useEffect } from 'react';
import { Factory, Wrench, Truck, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://images.pexels.com/photos/30005294/pexels-photo-30005294.jpeg",
    "https://images.pexels.com/photos/15363842/pexels-photo-15363842.jpeg",
    "https://images.pexels.com/photos/2965734/pexels-photo-2965734.jpeg",
    "https://images.pexels.com/photos/15743467/pexels-photo-15743467.jpeg"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-red-100 animate-gradient-shift">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-red-400 to-purple-500 rounded-full animate-spin"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-8 md:pt-8 md:pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md border-2 border-amber-500 rounded-2xl px-6 py-3 mb-6 shadow-xl transform hover:scale-105 transition-all duration-300">
              <Factory className="h-6 w-6 text-amber-600 animate-pulse" />
              <span className="text-lg font-bold text-amber-800">Premium Agricultural Machinery</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent animate-pulse">
              Vishwakarma Foundry Works
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl font-medium animate-fade-in-up">
              Leading manufacturer of high-quality agricultural machinery including Half Dala Machine, 
              Bhoosi Tank Model, Balwan Tank Model, and Bran Expert. Built with heavy iron materials 
              for long-lasting performance.
            </p>

            <div className="bg-gradient-to-r from-white via-amber-50 to-orange-50 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-amber-500 max-w-lg mr-0 transform hover:scale-105 transition-all duration-300 animate-float">
              <p className="text-lg text-gray-800 leading-relaxed font-semibold">
                Engineered for durability and efficiency, our Half Dala Machine offers powerful grain processing 
                with minimal downtime, making it a trusted choice for modern agricultural operations.
              </p>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
              <img 
                src={heroImages[currentImageIndex]} 
                alt="Agricultural Machinery" 
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
              
              {/* Enhanced Navigation Buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-600 to-orange-700 text-white p-3 rounded-full hover:from-amber-700 hover:to-orange-800 transition-all duration-300 shadow-lg transform hover:scale-110 animate-bounce"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-600 to-orange-700 text-white p-3 rounded-full hover:from-amber-700 hover:to-orange-800 transition-all duration-300 shadow-lg transform hover:scale-110 animate-bounce"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Enhanced Image Indicators */}
            <div className="flex justify-center mt-6 space-x-3">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    currentImageIndex === index 
                      ? 'bg-gradient-to-r from-amber-600 to-orange-700 scale-125 animate-pulse' 
                      : 'bg-gray-300 hover:bg-amber-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes slide-in-left {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slide-in-right {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes fade-in-up {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-gradient-shift {
            background-size: 200% 200%;
            animation: gradient-shift 8s ease infinite;
          }
          .animate-slide-in-left {
            animation: slide-in-left 1s ease-out;
          }
          .animate-slide-in-right {
            animation: slide-in-right 1s ease-out;
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out 0.5s both;
          }
        `
      }} />
    </section>
  );
};

export default Hero;
