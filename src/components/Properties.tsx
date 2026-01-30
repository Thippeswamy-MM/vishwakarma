import { useState } from 'react';
import { Filter, Wrench, Zap, Gauge, Heart, Share2, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Properties() {
  const [filters, setFilters] = useState({
    type: 'all',
    capacity: 'all',
    size: 'all',
  });

  const [currentImageIndices, setCurrentImageIndices] = useState<{ [key: number]: number }>({ 1: 0, 2: 0, 3: 0 });
  
  const halfDalaImages = [
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.42 PM.jpeg',
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.43 PM.jpeg',
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.43 PM (1).jpeg',
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.44 PM.jpeg',
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.44 PM (1).jpeg',
  ];

  const balwanBhoosiImages = [
    '/images/products/1.jpeg',
    '/images/products/2.jpeg',
    '/images/products/3.jpeg',
    '/images/products/4.jpeg',
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.43 PM.jpeg',
  ];

  const vfwHalfDalaImages = [
    '/images/products/5.jpeg',
    '/images/products/6.jpeg',
    '/images/products/7.jpeg',
    '/images/products/8.jpeg',
    '/images/products/WhatsApp Image 2026-01-23 at 5.24.43 PM.jpeg',
  ];

  const getProductImages = (productId: number) => {
    return productId === 1 ? halfDalaImages : productId === 2 ? balwanBhoosiImages : vfwHalfDalaImages;
  };

  const nextImage = (productId: number) => {
    const images = getProductImages(productId);
    setCurrentImageIndices(prev => ({
      ...prev,
      [productId]: (prev[productId] + 1) % images.length
    }));
  };

  const prevImage = (productId: number) => {
    const images = getProductImages(productId);
    setCurrentImageIndices(prev => ({
      ...prev,
      [productId]: (prev[productId] - 1 + images.length) % images.length
    }));
  };

  const setCurrentImageIndex = (productId: number, index: number) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [productId]: index
    }));
  };

  const products = [
    {
      id: 1,
      title: 'Half Dala Machine',
      description: 'Efficient grain processing machine',
      capacity: '1 Ton/Hour',
      power: '39 HP Tractor / 30 HP Electric',
      image: '/images/products/WhatsApp Image 2026-01-23 at 5.24.42 PM.jpeg',
      size: '6 Inch & 8 Inch',
      type: 'Grain Processor',
      featured: true,
    },
    {
      id: 2,
      title: 'Balwan Bhoosi Tank',
      description: 'The Balwan Bhoosi Tank (also called Balwan Boosi Tank) is an agricultural storage tank/machine mainly used to store and collect bhoosi (chaff), hay, straw, or dry fodder for animals. It is commonly used in farms, dairy farms, and cattle sheds.',
      capacity: '500-1000 Kg',
      power: 'Manual Operation',
      image: '/images/products/1.jpeg',
      size: '6 Feet & 8 Feet',
      type: 'Storage Tank',
      featured: true,
    },
    {
      id: 3,
      title: 'VFW Half Dala Machine',
      description: 'A VFW Half Dala Machine is an agricultural threshing machine designed to separate grains from stalks, husk, and chaff after harvesting with improved efficiency.',
      capacity: '1.5 Ton/Hour',
      power: '45 HP Tractor / 35 HP Electric',
      image: '/images/products/WhatsApp Image 2026-01-23 at 5.24.43 PM (1).jpeg',
      size: '24-28 inch Drum',
      type: 'Threshing Machine',
      featured: true,
    },
  ];

  const featuredProducts = products.filter(p => p.featured);

  return (
    <section id="products" className="pt-4 pb-24 md:pt-6 md:pb-32 bg-gradient-to-br from-white via-primary-50/20 to-secondary-50/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-neutral-900 via-primary-800 to-secondary-800 bg-clip-text text-transparent mb-8">Our Products</h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            High-quality agricultural machinery built with heavy iron materials for long-lasting performance
          </p>
        </div>

        {/* Filters - Commented for future use when more products are added */}
        {/* <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 mb-16 shadow-premium border border-neutral-100">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <Filter className="h-6 w-6 text-neutral-500" />
              <span className="font-semibold text-neutral-700 text-lg">Filters:</span>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <select 
                className="px-6 py-3 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-primary-300 font-medium"
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              >
                <option value="all">All Types</option>
                <option value="grain-processor">Grain Processor</option>
                <option value="tank-model">Tank Model</option>
                <option value="combined-model">Combined Model</option>
                <option value="specialized">Specialized</option>
              </select>

              <select 
                className="px-6 py-3 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-primary-300 font-medium"
                value={filters.capacity}
                onChange={(e) => setFilters({ ...filters, capacity: e.target.value })}
              >
                <option value="all">All Capacities</option>
                <option value="1-ton">1 Ton/Hour</option>
              </select>

              <select 
                className="px-6 py-3 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-primary-300 font-medium"
                value={filters.size}
                onChange={(e) => setFilters({ ...filters, size: e.target.value })}
              >
                <option value="all">All Sizes</option>
                <option value="6-inch">6 Inch</option>
                <option value="8-inch">8 Inch</option>
              </select>
            </div>
          </div>
        </div> */}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => {
            const productImages = getProductImages(product.id);
            const currentImageIndex = currentImageIndices[product.id] || 0;
            return (
              <div key={product.id} className="bg-white rounded-2xl shadow-premium overflow-hidden hover:shadow-premium-lg transition-all duration-300 group border border-neutral-100 hover:border-primary-200 hover:scale-105" style={{animationDelay: `${index * 150}ms`}}>
                <div className="relative">
                  <img 
                    src={productImages[currentImageIndex]} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Left Navigation Button */}
                  <button 
                    onClick={() => prevImage(product.id)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-premium"
                  >
                    <ChevronLeft className="h-4 w-4 text-neutral-600" />
                  </button>
                  
                  {/* Right Navigation Button */}
                  <button 
                    onClick={() => nextImage(product.id)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-premium"
                  >
                    <ChevronRight className="h-4 w-4 text-neutral-600" />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                    {productImages.map((_, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(product.id, index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white w-4' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-3 py-1 rounded-xl text-xs font-semibold shadow-premium">
                      {product.type}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-xl hover:bg-white transition-all duration-300 hover:scale-110 shadow-premium">
                      <Heart className="h-4 w-4 text-neutral-600" />
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-xl hover:bg-white transition-all duration-300 hover:scale-110 shadow-premium">
                      <Share2 className="h-4 w-4 text-neutral-600" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{product.title}</h3>
                  <p className="text-sm text-neutral-600 mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">{product.capacity}</div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-neutral-600 mb-4">
                    <div className="flex items-center">
                      <Wrench className="h-4 w-4 mr-2" />
                      <span>{product.size}</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 mr-2" />
                      <span>{product.power}</span>
                    </div>
                    <div className="flex items-center">
                      <Gauge className="h-4 w-4 mr-2" />
                      <span>Heavy Iron</span>
                    </div>
                  </div>

                  <Link 
                    to={
                      product.id === 1 ? '/half-dala-detail' :
                      product.id === 2 ? '/balwan-bhoosi-detail' :
                      '/vfw-half-dala-detail'
                    }
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 font-semibold text-sm shadow-premium hover:shadow-premium-lg hover:scale-[1.02] text-center block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}