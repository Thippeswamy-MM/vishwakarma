import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, PhoneCall, User, HelpCircle, MapPin } from 'lucide-react';
import { useLanguage, LanguageCode } from '../contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, isHindi } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [userLocation, setUserLocation] = useState<string>('');
  const [isDetectingLocation, setIsDetectingLocation] = useState(true);
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const [isAutoDetected, setIsAutoDetected] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    inquiryType: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Hide header when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      // Set a timeout to show header when scrolling stops
      const newTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 150); // Wait 150ms after scrolling stops
      
      setScrollTimeout(newTimeout);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  // Country to language mapping
  const getLanguageFromCountry = (countryCode: string): LanguageCode => {
    // We only have full, verified content for English and Hindi.
    // To avoid wrong or partial translations, we map:
    // - India -> Hindi
    // - All other countries -> English
    if (countryCode === 'IN') {
      return 'hi';
    }
    return 'en';
  };

  // Function to detect location automatically
  const detectLocationAutomatically = async () => {
    try {
      setIsDetectingLocation(true);
      setIsLocationMenuOpen(false);
      
      // Try IP-based geolocation first (free service)
      try {
        const ipResponse = await fetch('https://ipapi.co/json/');
        if (ipResponse.ok) {
          const ipData = await ipResponse.json();
          const country = ipData.country_code;
          const region = ipData.region || ipData.state || '';
          const city = ipData.city || '';
          
          // Get language based on country
          const detectedLang = getLanguageFromCountry(country);
          setLanguage(detectedLang);
          
          // Set location display and key
          let locationKey = '';
          if (country === 'IN') {
            const regionLower = region.toLowerCase();
            if (regionLower.includes('uttar pradesh') || ipData.region_code === 'UP') {
              setUserLocation('Uttar Pradesh, India');
              locationKey = 'up';
            } else if (regionLower.includes('madhya pradesh') || ipData.region_code === 'MP') {
              setUserLocation('Madhya Pradesh, India');
              locationKey = 'mp';
            } else if (regionLower.includes('bihar') || ipData.region_code === 'BR') {
              setUserLocation('Bihar, India');
              locationKey = 'bihar';
            } else if (regionLower.includes('rajasthan') || ipData.region_code === 'RJ') {
              setUserLocation('Rajasthan, India');
              locationKey = 'rajasthan';
            } else if (regionLower.includes('haryana') || ipData.region_code === 'HR') {
              setUserLocation('Haryana, India');
              locationKey = 'haryana';
            } else if (regionLower.includes('delhi') || ipData.region_code === 'DL') {
              setUserLocation('Delhi, India');
              locationKey = 'delhi';
            } else {
              if (region && city) {
                setUserLocation(`${city}, ${region}`);
              } else if (region) {
                setUserLocation(region);
              } else {
                setUserLocation('India');
              }
              locationKey = 'india';
            }
          } else {
            // Map country codes to location keys
            const countryLocationMap: { [key: string]: { location: string, key: string } } = {
              'US': { location: 'United States', key: 'us' },
              'GB': { location: 'United Kingdom', key: 'uk' },
              'CA': { location: 'Canada', key: 'ca' },
              'AU': { location: 'Australia', key: 'au' },
              'ES': { location: 'Spain', key: 'es' },
              'MX': { location: 'Mexico', key: 'mx' },
              'FR': { location: 'France', key: 'fr' },
              'DE': { location: 'Germany', key: 'de' },
              'IT': { location: 'Italy', key: 'it' },
              'PT': { location: 'Portugal', key: 'pt' },
              'BR': { location: 'Brazil', key: 'br' },
              'CN': { location: 'China', key: 'cn' },
              'JP': { location: 'Japan', key: 'jp' },
              'AR': { location: 'Argentina', key: 'ar' },
              'CO': { location: 'Colombia', key: 'co' },
              'RU': { location: 'Russia', key: 'ru' },
            };
            
            const locationData = countryLocationMap[country] || { location: country || 'International', key: 'international' };
            setUserLocation(locationData.location);
            locationKey = locationData.key;
          }
          
          setSelectedLocationKey(locationKey);
          setIsAutoDetected(true);
          
          setIsDetectingLocation(false);
          return;
        }
      } catch (ipError) {
        console.log('IP geolocation failed, trying browser language...');
      }
      
      // Fallback: Use browser language preference
      const browserLang = navigator.language || (navigator as any).userLanguage;
      const langCode = browserLang.split('-')[0] as LanguageCode;
      const supportedLangs: LanguageCode[] = ['en', 'hi'];
      const detectedLang = supportedLangs.includes(langCode) ? langCode : 'en';
      
      setLanguage(detectedLang);
      setUserLocation('International');
      setSelectedLocationKey('international');
      setIsAutoDetected(true);
      
      setIsDetectingLocation(false);
    } catch (error) {
      console.error('Location detection error:', error);
      // Default fallback
      const browserLang = navigator.language || (navigator as any).userLanguage;
      const langCode = browserLang.split('-')[0] as LanguageCode;
      const supportedLangs: LanguageCode[] = ['en', 'hi'];
      const detectedLang = supportedLangs.includes(langCode) ? langCode : 'en';
      
      setLanguage(detectedLang);
      setUserLocation('International');
      setSelectedLocationKey('international');
      setIsAutoDetected(true);
      setIsDetectingLocation(false);
    }
  };

  // Location-based language detection on component mount
  useEffect(() => {
    detectLocationAutomatically();
  }, []);

  // Close location menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isLocationMenuOpen && !target.closest('.location-menu-container')) {
        setIsLocationMenuOpen(false);
      }
    };

    if (isLocationMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLocationMenuOpen]);

  const translations = {
    english: {
      searchPlaceholder: "Search products (e.g., Half Dala Machine, Bhoosi Tank)",
      searchButton: "Search",
      account: "Account",
      inquiry: "Inquiry",
      requestQuote: "Request Quote",
      factoryVisit: "Factory Visit",
      qualityManufacturing: "Quality Manufacturing:",
      heavyIronMachinery: "Heavy Iron Agricultural Machinery",
      products: "Products",
      specifications: "Specifications",
      applications: "Applications",
      aboutUs: "About Us",
      contact: "Contact",
      agriculturalMachinery: "Agricultural Machinery",
      bySize: "By Size",
      technical: "Technical",
      features: "Features",
      industries: "Industries",
      powerOptions: "Power Options",
      inchModels: "Inch Models"
    },
    hindi: {
      searchPlaceholder: "उत्पाद खोजें (जैसे, हाफ डाला मशीन, भूसी टैंक)",
      searchButton: "खोजें",
      account: "खाता",
      inquiry: "पूछताछ",
      requestQuote: "मूल्य अनुरोध",
      factoryVisit: "कारखाना भ्रमण",
      qualityManufacturing: "गुणवत्त निर्माण:",
      heavyIronMachinery: "भारी लोहे कृषि यंत्र",
      products: "उत्पाद",
      specifications: "विशिष्टताएं",
      applications: "अनुप्रयोग",
      aboutUs: "हमारे बारे में",
      contact: "संपर्क करें",
      agriculturalMachinery: "कृषि यंत्र",
      bySize: "आकार के अनुसार",
      technical: "तकनीकी",
      features: "विशेषताएं",
      industries: "उद्योग",
      powerOptions: "पावर विकल्प",
      inchModels: "इंच मॉडल"
    }
  };

  const t = isHindi ? translations.hindi : translations.english;

  const products = [
    { name: 'Half Dala Machine', id: 'half-dala-machine' },
    { name: 'Bhoosi Tank Model', id: 'bhoosi-tank-model' },
    { name: 'Balwan Tank Model', id: 'balwan-tank-model' },
    { name: 'Balwan Half Dala', id: 'balwan-half-dala' },
    { name: 'Bran Expert', id: 'bran-expert' },
    { name: 'Custom Manufacturing', id: 'custom-manufacturing' },
    { name: 'Spare Parts', id: 'spare-parts' },
    { name: 'Technical Support', id: 'technical-support' }
  ];

  const handleSearch = (query: string) => {
    const searchTerm = query.toLowerCase().trim();
    
    // Find matching product
    const matchedProduct = products.find(product => 
      product.name.toLowerCase().includes(searchTerm)
    );
    
    if (matchedProduct) {
      // Redirect to products section with specific product
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
        // You could also highlight the specific product here
        console.log(`Navigating to product: ${matchedProduct.name}`);
      }
    } else if (searchTerm) {
      // If no exact match, still go to products section
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
        console.log(`No exact match for "${query}", navigating to products section`);
      }
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Auto-search as user types (optional)
    if (value.length > 2) {
      handleSearch(value);
    }
  };

  const [selectedLocationKey, setSelectedLocationKey] = useState<string>('');

  const handleLocationChange = (locationKey: string, location: string, langCode: LanguageCode) => {
    if (locationKey === 'auto') {
      detectLocationAutomatically();
      return;
    }
    setUserLocation(location);
    setSelectedLocationKey(locationKey);
    setLanguage(langCode);
    setIsAutoDetected(false); // Mark as manually selected
    setIsLocationMenuOpen(false);
  };

  const locationOptions = [
    { key: 'auto', name: '🌍 Auto Detect', location: '', langCode: 'en' as LanguageCode, isAuto: true },
    { key: 'divider1', name: '', location: '', langCode: 'en' as LanguageCode, isDivider: true },
    // India (Hindi)
    { key: 'india', name: 'India (Hindi)', location: 'India', langCode: 'hi' as LanguageCode },
    { key: 'up', name: 'Uttar Pradesh, India', location: 'Uttar Pradesh, India', langCode: 'hi' as LanguageCode },
    { key: 'mp', name: 'Madhya Pradesh, India', location: 'Madhya Pradesh, India', langCode: 'hi' as LanguageCode },
    { key: 'bihar', name: 'Bihar, India', location: 'Bihar, India', langCode: 'hi' as LanguageCode },
    { key: 'rajasthan', name: 'Rajasthan, India', location: 'Rajasthan, India', langCode: 'hi' as LanguageCode },
    { key: 'haryana', name: 'Haryana, India', location: 'Haryana, India', langCode: 'hi' as LanguageCode },
    { key: 'delhi', name: 'Delhi, India', location: 'Delhi, India', langCode: 'hi' as LanguageCode },
    { key: 'divider2', name: '', location: '', langCode: 'en' as LanguageCode, isDivider: true },
    // English UI for all other regions
    { key: 'us', name: 'United States', location: 'United States', langCode: 'en' as LanguageCode },
    { key: 'uk', name: 'United Kingdom', location: 'United Kingdom', langCode: 'en' as LanguageCode },
    { key: 'ca', name: 'Canada', location: 'Canada', langCode: 'en' as LanguageCode },
    { key: 'au', name: 'Australia', location: 'Australia', langCode: 'en' as LanguageCode },
    { key: 'es', name: 'Spain', location: 'Spain', langCode: 'en' as LanguageCode },
    { key: 'mx', name: 'Mexico', location: 'Mexico', langCode: 'en' as LanguageCode },
    { key: 'fr', name: 'France', location: 'France', langCode: 'en' as LanguageCode },
    { key: 'de', name: 'Germany', location: 'Germany', langCode: 'en' as LanguageCode },
    { key: 'it', name: 'Italy', location: 'Italy', langCode: 'en' as LanguageCode },
    { key: 'pt', name: 'Portugal', location: 'Portugal', langCode: 'en' as LanguageCode },
    { key: 'br', name: 'Brazil', location: 'Brazil', langCode: 'en' as LanguageCode },
    { key: 'cn', name: 'China', location: 'China', langCode: 'en' as LanguageCode },
    { key: 'jp', name: 'Japan', location: 'Japan', langCode: 'en' as LanguageCode },
    { key: 'ru', name: 'Russia', location: 'Russia', langCode: 'en' as LanguageCode },
    { key: 'sa', name: 'Saudi Arabia', location: 'Saudi Arabia', langCode: 'en' as LanguageCode },
    { key: 'divider3', name: '', location: '', langCode: 'en' as LanguageCode, isDivider: true },
    { key: 'international', name: 'International', location: 'International', langCode: 'en' as LanguageCode },
  ];

  const megaNav = [
    {
      id: 'products',
      label: 'Products',
      href: '#products',
      columns: [
        {
          title: 'Agricultural Machinery',
          items: ['Half Dala Machine', 'Bhoosi Tank Model', 'Balwan Tank Model', 'Balwan Half Dala', 'Bran Expert'],
        },
        {
          title: 'By Size',
          items: ['6 Inch Models', '8 Inch Models'],
        },
      ],
    },
    {
      id: 'specifications',
      label: 'Specifications',
      href: '#features',
      columns: [
        { title: 'Technical', items: ['Capacity: 1 Ton/Hour', 'Power Requirements', 'Material Specifications'] },
        { title: 'Features', items: ['Heavy Iron Construction', 'Cast Iron Components', 'Long-lasting Performance'] },
      ],
    },
    {
      id: 'applications',
      label: 'Applications',
      href: '#features',
      columns: [
        { title: 'Industries', items: ['Agricultural Processing', 'Industrial Manufacturing', 'Commercial Use'] },
        { title: 'Power Options', items: ['39 HP Tractor', '30 HP Electric Motor'] },
      ],
    },
    { 
      id: 'about', 
      label: 'About Us',
      href: '#about',
      columns: [] 
    },
    { 
      id: 'contact', 
      label: 'Contact',
      href: '#contact',
      columns: [] 
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 border-b border-amber-700 shadow-2xl transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Location Button - Top Left Corner */}
      <div className="fixed top-2 left-4 z-[9999] location-menu-container">
        <button
          onClick={() => setIsLocationMenuOpen(!isLocationMenuOpen)}
          className="bg-gradient-to-r from-green-600 to-green-700 text-white px-2 py-1 rounded-full shadow-lg flex items-center gap-1.5 hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 relative z-[10000]"
          title={isAutoDetected ? (isHindi ? 'स्वचालित रूप से पता लगाया गया' : 'Auto-detected') : (isHindi ? 'मैन्युअल रूप से चुना गया' : 'Manually selected')}
        >
          <MapPin className="h-3 w-3" />
          <span className="text-[10px] font-semibold">
            {isDetectingLocation ? 'Detecting...' : (userLocation || 'Location')}
          </span>
          {isAutoDetected && !isDetectingLocation && (
            <span className="text-[8px] opacity-75">⚡</span>
          )}
          <ChevronDown className={`h-2.5 w-2.5 transition-transform duration-200 ${isLocationMenuOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {/* Location Dropdown Menu */}
        {isLocationMenuOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border-2 border-green-500 overflow-hidden z-[10001]">
            <div className="p-2 bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-bold px-4 py-2">
              {isHindi ? 'स्थान चुनें' : 'Select Location'}
            </div>
            <div className="max-h-80 overflow-y-auto">
              {locationOptions.map((option, index) => {
                if (option.isDivider) {
                  return <div key={index} className="border-t border-gray-200 my-1"></div>;
                }
                
                if (option.isAuto) {
                  return (
                    <button
                      key={index}
                      onClick={() => handleLocationChange(option.key, option.location, option.langCode)}
                      className="w-full text-left px-4 py-3 text-sm hover:bg-blue-50 transition-colors duration-200 flex items-center justify-between bg-blue-50 font-semibold text-blue-700"
                    >
                      <span className="flex items-center gap-2">
                        <span>{option.name}</span>
                        {isDetectingLocation && (
                          <span className="text-xs text-blue-500">Detecting...</span>
                        )}
                      </span>
                      {isAutoDetected && !isDetectingLocation && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </button>
                  );
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => handleLocationChange(option.key, option.location, option.langCode)}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-green-50 transition-colors duration-200 flex items-center justify-between ${
                      selectedLocationKey === option.key ? 'bg-green-100 font-semibold' : ''
                    }`}
                  >
                    <span>{option.name}</span>
                    {selectedLocationKey === option.key && (
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
      
      {/* Backdrop overlay when location menu is open */}
      {isLocationMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-[9998]"
          onClick={() => setIsLocationMenuOpen(false)}
        />
      )}

      {/* Utility bar */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white text-xs relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between">
          <div className="hidden sm:block ml-40">
            <span className="font-bold text-amber-300">{t.qualityManufacturing}</span> 
            <span className="text-green-300 font-semibold ml-2">{t.heavyIronMachinery}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/request-quote" className="hover:text-amber-300 transition-colors duration-200 font-medium">{t.requestQuote}</Link>
            <a href="#" className="hover:text-amber-300 transition-colors duration-200 font-medium">{t.factoryVisit}</a>
            <a href="#contact" className="flex items-center gap-2 hover:text-amber-300 transition-colors duration-200 font-medium">
              <PhoneCall className="h-4 w-4" /> 
              <span className="font-bold">+91 7860686213, 9415139283, 7007821888</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="h-32 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="#home" className="flex items-center gap-3">
            <div className="relative">
              <img src="/images/logo/logo_aman-removebg-preview (1).png" alt="Vishwakarma Foundry Works Logo" className="h-28 w-28 object-contain drop-shadow-xl " />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-20 rounded-full blur-xl "></div>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">Vishwakarma</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">Foundry Works</span>
            </div>
          </Link>

          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-xl items-center bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-amber-500 rounded-3xl px-4 py-1.5 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Search className="h-5 w-5 text-amber-600" />
            <input 
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-1 bg-transparent px-3 outline-none text-sm font-medium text-gray-800 placeholder-gray-600" 
              placeholder={t.searchPlaceholder}
            />
            <button type="submit" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1.5 rounded-2xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 font-bold text-sm shadow-lg transform hover:scale-105">{t.searchButton}</button>
          </form>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setIsLoginModalOpen(true)} title={t.account} className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg transform hover:scale-110 ">
              <User className="h-6 w-6 text-white" />
            </button>
            <button onClick={() => setIsInquiryModalOpen(true)} title={t.inquiry} className="bg-gradient-to-r from-gray-900 to-black p-3 rounded-full hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg transform hover:scale-110  ">
              <HelpCircle className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg transform hover:scale-110" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mega menu (desktop) - Background only, no menu items */}
        <nav className="hidden md:flex items-center gap-6 h-16 border-t border-amber-600">
        </nav>

        {/* Mobile drawer */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-3 ">
            <div className="mb-3 flex items-center bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2">
              <Search className="h-5 w-5 text-neutral-500" />
              <input className="flex-1 bg-transparent px-2 outline-none text-sm" placeholder="Search products" />
            </div>
          </div>
        )}
      </div>

      {/* Login/Signup Modal - Rendered via Portal to appear over entire page */}
      {isLoginModalOpen && createPortal(
        <div
          className="fixed inset-0 bg-black/50 z-[99999] overflow-y-auto"
          onClick={() => setIsLoginModalOpen(false)}
        >
          <div
            className="min-h-screen flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900">
                {isLoginMode ? 'Sign In' : 'Sign Up'}
              </h2>
              <button 
                onClick={() => setIsLoginModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <form onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission here
                console.log('Form submitted:', formData);
                setIsLoginModalOpen(false);
              }}>
                {isLoginMode ? (
                  // Login Form
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-neutral-600">Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-primary-600 hover:text-primary-700">Forgot password?</a>
                    </div>
                  </div>
                ) : (
                  // Signup Form
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      />
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" required className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
                      <span className="ml-2 text-sm text-neutral-600">
                        I agree to the <a href="#" className="text-primary-600 hover:text-primary-700">Terms and Conditions</a>
                      </span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 mt-6"
                >
                  {isLoginMode ? 'Sign In' : 'Sign Up'}
                </button>
              </form>

              {/* Switch between Login and Signup */}
              <div className="mt-6 text-center">
                <p className="text-sm text-neutral-600">
                  {isLoginMode ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={() => setIsLoginMode(!isLoginMode)}
                    className="ml-1 text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    {isLoginMode ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>,
        document.body
      )}

      {/* Inquiry Modal - Rendered via Portal to appear over entire page */}
      {isInquiryModalOpen && createPortal(
        <div
          className="fixed inset-0 bg-black/50 z-[99999] overflow-y-auto"
          onClick={() => setIsInquiryModalOpen(false)}
        >
          <div
            className="min-h-screen flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 sticky top-0 bg-white z-10">
              <h2 className="text-2xl font-bold text-neutral-900">
                {isHindi ? 'पूछताछ' : 'Inquiry'}
              </h2>
              <button 
                onClick={() => setIsInquiryModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column - Form */}
                <div>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission here
                    console.log('Inquiry submitted:', formData);
                    setIsInquiryModalOpen(false);
                  }}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          {isHindi ? 'पूरा नाम *' : 'Full Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder={isHindi ? 'अपना नाम' : 'Enter your full name'}
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          {isHindi ? 'ईमेल पता' : 'Email Address *'}
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder={isHindi ? 'अपना ईमेल' : 'Enter your email'}
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          {isHindi ? 'फोन नंबर' : 'Phone Number *'}
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder={isHindi ? 'फोन नंबर' : 'Enter your phone number'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          {isHindi ? 'पूछताछ प्रकार *' : 'Inquiry Type *'}
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                        >
                          <option value="">{isHindi ? 'उत्पाद चुनें' : 'Select Product'}</option>
                          <option value="">{isHindi ? 'तकनीकी सहायता' : 'Technical Support'}</option>
                          <option value="">{isHindi ? 'सामान्य पूछताछ' : 'General Inquiry'}</option>
                          <option value="">{isHindi ? 'कारखाना भ्रमण' : 'Factory Visit'}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          {isHindi ? 'संदेश *' : 'Message *'}
                        </label>
                        <textarea
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder={isHindi ? 'अपनी पूछताछ का विवरण लिखें...' : 'Describe your inquiry...'}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-3 rounded-lg font-semibold hover:from-gray-800 hover:to-gray-900 transition-colors duration-300 mt-6"
                    >
                      {isHindi ? 'जमा करें' : 'Submit Inquiry'}
                    </button>
                  </form>
                </div>

                {/* Right Column - Info and Images */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                    <h3 className="text-lg font-bold text-amber-800 mb-4">
                      {isHindi ? 'हमें क्यों चुनें?' : 'Why Choose Us?'}
                    </h3>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                        <span>{isHindi ? 'विशेषज्ञ विनिर्माण' : 'Expert Manufacturing'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <span>{isHindi ? 'गुणवत्ता सुनिश्चित' : 'Quality Assured'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                        <span>{isHindi ? '24/7 सहायता' : '24/7 Support'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                    <h4 className="text-md font-bold text-gray-800 mb-4">
                      {isHindi ? 'हमारी सेवाएँ' : 'Our Services'}
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                        <span>{isHindi ? 'मशीन रिपेयर' : 'Machine Repair'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"></div>
                        <span>{isHindi ? 'स्पेयर पार्ट्स' : 'Spare Parts'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
                        <span>{isHindi ? 'कस्टम ऑर्डर' : 'Custom Orders'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="text-md font-bold text-gray-800 mb-4">
                      {isHindi ? 'संपर्क जानकारी' : 'Contact Information'}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                        <span>{isHindi ? 'कॉल: +91 9415139283' : 'Call: +91 9415139283'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                        <span>{isHindi ? 'ईमेल: info@vishwakarmafoundry.com' : 'Email: info@vishwakarmafoundry.com'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <span>{isHindi ? 'व्हाट्सएप: +91 7007821888' : 'WhatsApp: +91 7007821888'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <img 
                      src="/images/logo/logo_aman-removebg-preview (1).png" 
                      alt="Vishwakarma Foundry Works" 
                      className="h-20 w-20 mx-auto rounded-lg shadow-lg"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      {isHindi ? '1985 से विश्वसनीय' : 'Trusted Since 1985'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>,
        document.body
      )}
    </header>
  );
}