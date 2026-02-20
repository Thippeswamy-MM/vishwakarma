import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, PhoneCall, User, HelpCircle, MapPin } from 'lucide-react';
import { useLanguage, LanguageCode } from '../contexts/LanguageContext';
import { getTranslations } from '../translations';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = getTranslations(language);
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

  // Map Indian state/region to regional language
  const getLanguageFromRegion = (countryCode: string, region: string, regionCode: string, city: string): LanguageCode => {
    if (countryCode !== 'IN') return 'en';
    const r = region.toLowerCase();
    const c = city.toLowerCase();
    // Karnataka - Kannada
    if (r.includes('karnataka') || regionCode === 'KA' || c.includes('bangalore') || c.includes('bengaluru') || c.includes('mysore') || c.includes('mangalore')) return 'kn';
    // Tamil Nadu - Tamil
    if (r.includes('tamil nadu') || regionCode === 'TN' || c.includes('chennai') || c.includes('madurai') || c.includes('coimbatore')) return 'ta';
    // Kerala - Malayalam
    if (r.includes('kerala') || regionCode === 'KL' || c.includes('kochi') || c.includes('trivandrum') || c.includes('thiruvananthapuram')) return 'ml';
    // Andhra Pradesh, Telangana - Telugu
    if (r.includes('andhra pradesh') || r.includes('telangana') || regionCode === 'AP' || regionCode === 'TG' || c.includes('hyderabad') || c.includes('vizag') || c.includes('vijayawada')) return 'te';
    // West Bengal - Bengali
    if (r.includes('west bengal') || regionCode === 'WB' || c.includes('kolkata') || c.includes('howrah')) return 'bn';
    // Maharashtra - Marathi
    if (r.includes('maharashtra') || regionCode === 'MH' || c.includes('mumbai') || c.includes('pune') || c.includes('nagpur')) return 'mr';
    // Gujarat - Gujarati
    if (r.includes('gujarat') || regionCode === 'GJ' || c.includes('ahmedabad') || c.includes('surat') || c.includes('vadodara')) return 'gu';
    // Punjab - Punjabi
    if (r.includes('punjab') || regionCode === 'PB' || c.includes('chandigarh') || c.includes('ludhiana') || c.includes('amritsar')) return 'pa';
    // Hindi-speaking states (UP, MP, Bihar, Rajasthan, Haryana, Delhi, etc.)
    if (r.includes('uttar pradesh') || r.includes('madhya pradesh') || r.includes('bihar') || r.includes('rajasthan') || r.includes('haryana') || r.includes('delhi') || regionCode === 'UP' || regionCode === 'MP' || regionCode === 'BR' || regionCode === 'RJ' || regionCode === 'HR' || regionCode === 'DL') return 'hi';
    // Default for rest of India - Hindi
    return 'hi';
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
          const regionCode = ipData.region_code || '';
          
          // Get language based on region (Indian states -> regional language)
          const detectedLang = getLanguageFromRegion(country, region, regionCode, city);
          setLanguage(detectedLang);
          
          // Set location display and key
          let locationKey = '';
          if (country === 'IN') {
            const regionLower = region.toLowerCase();
            if (regionLower.includes('karnataka') || regionCode === 'KA' || city.toLowerCase().includes('bangalore') || city.toLowerCase().includes('bengaluru')) {
              setUserLocation('Karnataka, India');
              locationKey = 'karnataka';
            } else if (regionLower.includes('tamil nadu') || regionCode === 'TN') {
              setUserLocation('Tamil Nadu, India');
              locationKey = 'tn';
            } else if (regionLower.includes('kerala') || regionCode === 'KL') {
              setUserLocation('Kerala, India');
              locationKey = 'kerala';
            } else if (regionLower.includes('andhra pradesh') || regionCode === 'AP') {
              setUserLocation('Andhra Pradesh, India');
              locationKey = 'ap';
            } else if (regionLower.includes('telangana') || regionCode === 'TG') {
              setUserLocation('Telangana, India');
              locationKey = 'tg';
            } else if (regionLower.includes('west bengal') || regionCode === 'WB') {
              setUserLocation('West Bengal, India');
              locationKey = 'wb';
            } else if (regionLower.includes('maharashtra') || regionCode === 'MH') {
              setUserLocation('Maharashtra, India');
              locationKey = 'mh';
            } else if (regionLower.includes('gujarat') || regionCode === 'GJ') {
              setUserLocation('Gujarat, India');
              locationKey = 'gujarat';
            } else if (regionLower.includes('punjab') || regionCode === 'PB') {
              setUserLocation('Punjab, India');
              locationKey = 'punjab';
            } else if (regionLower.includes('uttar pradesh') || regionCode === 'UP') {
              setUserLocation('Uttar Pradesh, India');
              locationKey = 'up';
            } else if (regionLower.includes('madhya pradesh') || regionCode === 'MP') {
              setUserLocation('Madhya Pradesh, India');
              locationKey = 'mp';
            } else if (regionLower.includes('bihar') || regionCode === 'BR') {
              setUserLocation('Bihar, India');
              locationKey = 'bihar';
            } else if (regionLower.includes('rajasthan') || regionCode === 'RJ') {
              setUserLocation('Rajasthan, India');
              locationKey = 'rajasthan';
            } else if (regionLower.includes('haryana') || regionCode === 'HR') {
              setUserLocation('Haryana, India');
              locationKey = 'haryana';
            } else if (regionLower.includes('delhi') || regionCode === 'DL') {
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
      const langCode = browserLang.split('-')[0].toLowerCase() as LanguageCode;
      const supportedLangs: LanguageCode[] = ['en', 'hi', 'kn', 'ta', 'te', 'ml', 'bn', 'mr', 'gu', 'pa'];
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
    // Indian states with regional languages
    { key: 'karnataka', name: 'Karnataka (Kannada)', location: 'Karnataka, India', langCode: 'kn' as LanguageCode },
    { key: 'tn', name: 'Tamil Nadu (Tamil)', location: 'Tamil Nadu, India', langCode: 'ta' as LanguageCode },
    { key: 'kerala', name: 'Kerala (Malayalam)', location: 'Kerala, India', langCode: 'ml' as LanguageCode },
    { key: 'ap', name: 'Andhra Pradesh (Telugu)', location: 'Andhra Pradesh, India', langCode: 'te' as LanguageCode },
    { key: 'tg', name: 'Telangana (Telugu)', location: 'Telangana, India', langCode: 'te' as LanguageCode },
    { key: 'wb', name: 'West Bengal (Bengali)', location: 'West Bengal, India', langCode: 'bn' as LanguageCode },
    { key: 'mh', name: 'Maharashtra (Marathi)', location: 'Maharashtra, India', langCode: 'mr' as LanguageCode },
    { key: 'gujarat', name: 'Gujarat (Gujarati)', location: 'Gujarat, India', langCode: 'gu' as LanguageCode },
    { key: 'punjab', name: 'Punjab (Punjabi)', location: 'Punjab, India', langCode: 'pa' as LanguageCode },
    { key: 'divider2', name: '', location: '', langCode: 'en' as LanguageCode, isDivider: true },
    // Hindi-speaking states
    { key: 'india', name: 'India (Hindi)', location: 'India', langCode: 'hi' as LanguageCode },
    { key: 'up', name: 'Uttar Pradesh, India', location: 'Uttar Pradesh, India', langCode: 'hi' as LanguageCode },
    { key: 'mp', name: 'Madhya Pradesh, India', location: 'Madhya Pradesh, India', langCode: 'hi' as LanguageCode },
    { key: 'bihar', name: 'Bihar, India', location: 'Bihar, India', langCode: 'hi' as LanguageCode },
    { key: 'rajasthan', name: 'Rajasthan, India', location: 'Rajasthan, India', langCode: 'hi' as LanguageCode },
    { key: 'haryana', name: 'Haryana, India', location: 'Haryana, India', langCode: 'hi' as LanguageCode },
    { key: 'delhi', name: 'Delhi, India', location: 'Delhi, India', langCode: 'hi' as LanguageCode },
    { key: 'divider3', name: '', location: '', langCode: 'en' as LanguageCode, isDivider: true },
    // International - English
    { key: 'us', name: 'United States', location: 'United States', langCode: 'en' as LanguageCode },
    { key: 'uk', name: 'United Kingdom', location: 'United Kingdom', langCode: 'en' as LanguageCode },
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
    <header className={`fixed top-0 left-0 right-0 z-50 bg-amber-800 border-b border-amber-700 shadow-2xl transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Location Button - Top Left Corner */}
      <div className="fixed top-2 left-4 z-[9999] location-menu-container">
        <button
          onClick={() => setIsLocationMenuOpen(!isLocationMenuOpen)}
          className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 relative z-[10000]"
          title={isAutoDetected ? t.autoDetected : t.manuallySelected}
        >
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-semibold">
            {isDetectingLocation ? t.detecting : (userLocation || t.location)}
          </span>
          {isAutoDetected && !isDetectingLocation && (
            <span className="text-xs opacity-75">⚡</span>
          )}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isLocationMenuOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {/* Location Dropdown Menu */}
        {isLocationMenuOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border-2 border-green-500 overflow-hidden z-[10001]">
            <div className="p-2 bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-bold px-4 py-2">
                  {t.selectLocation}
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
      <div className="bg-gradient-to-r from-gray-900 to-black text-white text-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="hidden sm:block ml-40">
            <span className="font-bold text-amber-300 text-sm">{t.qualityManufacturing}</span> 
            <span className="text-green-300 font-semibold ml-2 text-sm">{t.heavyIronMachinery}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/request-quote" className="hover:text-amber-300 transition-colors duration-200 font-medium text-sm">{t.requestQuote}</Link>
            <a href="#" className="hover:text-amber-300 transition-colors duration-200 font-medium text-sm">{t.factoryVisit}</a>
            <div className="flex items-center gap-2 font-medium">
              <PhoneCall className="h-4 w-4" /> 
              <span className="font-bold text-sm">+91 7860686213, 9415139283, 7007821888</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="h-40 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="#home" className="flex items-center gap-4">
            <div className="relative">
              <img src="/images/logo/logo.png" alt="Vishwakarma Foundry Works Logo" className="h-40 w-40 object-contain drop-shadow-xl " />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-20 rounded-full blur-xl "></div>
            </div>
            <div className="flex flex-col -ml-6">
              <span className="text-5xl font-black bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">Vishwakarma</span>
              <span className="text-3xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">Foundry Works</span>
            </div>
          </Link>

          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-lg items-center bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-amber-500 rounded-2xl px-3 py-1.5 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Search className="h-4 w-4 text-amber-600" />
            <input 
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-1 bg-transparent px-2 outline-none text-xs font-medium text-gray-800 placeholder-gray-600" 
              placeholder={t.searchPlaceholder}
            />
            <button type="submit" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1.5 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 font-bold text-xs shadow-lg transform hover:scale-105">{t.searchButton}</button>
          </form>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4 -ml-4">
            <button onClick={() => setIsLoginModalOpen(true)} title={t.account} className="bg-gradient-to-r from-blue-600 to-blue-700 p-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg transform hover:scale-110 ">
              <User className="h-5 w-5 text-white" />
            </button>
            <button onClick={() => setIsInquiryModalOpen(true)} title={t.inquiry} className="bg-gradient-to-r from-gray-900 to-black p-2.5 rounded-full hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg transform hover:scale-110  ">
              <HelpCircle className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg transform hover:scale-110" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

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
                {t.inquiryModalTitle}
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
                          {t.fullNameRequired}
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder={t.enterName}
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          {t.emailRequired}
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder={t.enterEmail}
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          {t.phoneRequired}
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder={t.enterPhone}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          {t.inquiryTypeRequired}
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                        >
                          <option value="">{t.selectProduct}</option>
                          <option value="technical">{t.technicalSupport}</option>
                          <option value="general">{t.generalInquiry}</option>
                          <option value="factory">{t.factoryVisitOption}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          {t.messageRequired}
                        </label>
                        <textarea
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder={t.inquiryMessagePlaceholder}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-3 rounded-lg font-semibold hover:from-gray-800 hover:to-gray-900 transition-colors duration-300 mt-6"
                    >
                      {t.submitInquiry}
                    </button>
                  </form>
                </div>

                {/* Right Column - Info and Images */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                    <h3 className="text-lg font-bold text-amber-800 mb-4">
                      {t.whyChooseUs}
                    </h3>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                        <span>{t.expertManufacturing}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <span>{t.qualityAssured}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                        <span>{t.support24_7}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                    <h4 className="text-md font-bold text-gray-800 mb-4">
                      {t.ourServices}
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                        <span>{t.machineRepair}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"></div>
                        <span>{t.spareParts}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
                        <span>{t.customOrders}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="text-md font-bold text-gray-800 mb-4">
                      {t.contactInfo}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                        <span>Call: +91 7860686213</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                        <span>Email: info@vishwakarmafoundry.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        <span>WhatsApp: +91 7860686213</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <img 
                      src="/images/logo/logo.png" 
                      alt="Vishwakarma Foundry Works" 
                      className="h-20 w-20 mx-auto rounded-lg shadow-lg"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      {t.trustedSince1985}
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