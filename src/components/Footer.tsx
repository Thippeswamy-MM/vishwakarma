import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-amber-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-green-500 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-red-500 to-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="group order-1 lg:order-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <img src="/images/logo/logo_aman-removebg-preview (1).png" alt="Vishwakarma Foundry Works Logo" className="h-16 w-16 object-contain transform group-hover:scale-110 transition-transform duration-300 drop-shadow-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-30 rounded-full blur-xl"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent leading-tight">Vishwakarma</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">Foundry Works</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">Leading manufacturer of premium agricultural machinery with decades of expertise in foundry work and metal fabrication. Built with heavy iron materials for long-lasting performance.</p>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/vishwakarmafoundryworks" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-amber-600 to-orange-700 p-2 rounded-lg hover:from-amber-700 hover:to-orange-800 transition-all duration-300 shadow-lg transform hover:scale-110">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/vishwakarmafoundryworks" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-600 to-purple-700 p-2 rounded-lg hover:from-pink-700 hover:to-purple-800 transition-all duration-300 shadow-lg transform hover:scale-110">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.twitter.com/vishwakarmafoundry" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg transform hover:scale-110">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/company/vishwakarma-foundry-works" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-700 to-indigo-800 p-2 rounded-lg hover:from-blue-800 hover:to-indigo-900 transition-all duration-300 shadow-lg transform hover:scale-110">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="order-3 lg:order-2 md:order-2">
              <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Products', href: '#products' },
                  { name: 'About Us', href: '#about' },
                  { name: 'Specifications', href: '#features' },
                  { name: 'Applications', href: '#features' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-amber-300 transition-all duration-300 font-medium text-sm flex items-center gap-2 hover:bg-white/10 px-2 py-1 rounded-lg"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="order-2 lg:order-3 md:order-3">
              <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="bg-gradient-to-r from-amber-600 to-orange-700 p-2 rounded-lg shadow-lg transform group-hover:scale-110 transition-all duration-300">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Industrial Area, Sector 82,<br />
                      Ghaziabad 201009,<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 p-2 rounded-lg shadow-lg transform group-hover:scale-110 transition-all duration-300">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">+91 9415139283</p>
                    <p className="text-gray-300 text-sm font-medium">+91 7860686213</p>
                    <p className="text-gray-300 text-sm font-medium">+91 7007821888</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg shadow-lg transform group-hover:scale-110 transition-all duration-300">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">info@vishwakarmafoundry.com</p>
                    <p className="text-gray-300 text-sm font-medium">support@vishwakarmafoundry.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-xl shadow-xl">
                <h4 className="text-md font-bold mb-3 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Business Hours</h4>
                <div className="flex flex-col space-y-1 text-gray-300 text-sm">
                  <p className="font-medium">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="font-medium">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-amber-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-300 text-sm font-medium">
                &copy; 2026 Vishwakarma Foundry Works. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="/privacy-policy" className="text-gray-300 hover:text-amber-300 transition-colors duration-300 font-medium">
                  Privacy Policy
                </a>
                <span className="text-gray-600">|</span>
                <a href="/terms-conditions" className="text-gray-300 hover:text-amber-300 transition-colors duration-300 font-medium">
                  Terms & Conditions
                </a>
                <span className="text-gray-600">|</span>
                <a href="/warranty-policy" className="text-gray-300 hover:text-amber-300 transition-colors duration-300 font-medium">
                  Warranty Policy
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-amber-600 to-orange-700 p-3 rounded-xl hover:from-amber-700 hover:to-orange-800 transition-all duration-300 shadow-xl transform hover:scale-110"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}