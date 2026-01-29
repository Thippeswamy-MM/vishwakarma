 import { Wrench, Zap, Factory, Truck, Shield, Gauge, Settings, Power, Hammer } from 'lucide-react';

export default function Features() {
  const productFeatures = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Heavy Iron Construction',
      description: 'Built with premium heavy iron sheets and iron angles for maximum durability.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: 'Cast Iron Components',
      description: 'Critical components made from high-quality Cast Iron (CI) for long-lasting performance.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'High Capacity',
      description: 'Efficient processing capacity of 1 Ton per Hour for maximum productivity.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: 'Multiple Sizes',
      description: 'Available in 6 Inch and 8 Inch sizes to suit different operational needs.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: <Power className="h-8 w-8" />,
      title: 'Flexible Power Options',
      description: 'Compatible with 39 HP tractor or 30 HP electric motor for versatile operation.',
      color: 'bg-teal-100 text-teal-600',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Built to Last',
      description: 'Engineered for tough agricultural conditions with minimal maintenance requirements.',
      color: 'bg-indigo-100 text-indigo-600',
    },
  ];

  const specifications = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Product Specifications',
      description: 'Precision-engineered components with tight tolerances for optimal performance.',
    },
    {
      icon: <Power className="h-6 w-6" />,
      title: 'Power Requirements',
      description: '39 HP tractor compatibility or 30 HP electric motor operation.',
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: 'Capacity & Size',
      description: '1 Ton/Hour capacity in 6" and 8" diameter options.',
    },
  ];

  const applications = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Agricultural Processing',
      description: 'Ideal for grain processing and agricultural material handling.',
    },
    {
      icon: <Hammer className="h-6 w-6" />,
      title: 'Industrial Applications',
      description: 'Suitable for various industrial processing and manufacturing operations.',
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: 'Commercial Use',
      description: 'Perfect for commercial agricultural enterprises and processing units.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Features & Specifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes Vishwakarma Foundry Works machinery the preferred choice for agricultural processing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {productFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Specifications & Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Specifications */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
              <p className="text-gray-600">Detailed specifications for optimal performance</p>
            </div>

            <div className="space-y-6">
              {specifications.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Download Specifications
            </button>
          </div>

          {/* Applications */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Applications</h3>
              <p className="text-gray-600">Versatile applications for various industries</p>
            </div>

            <div className="space-y-6">
              {applications.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}