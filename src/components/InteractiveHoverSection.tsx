import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Factory, Shield, Wrench, ArrowRight, Sparkles, Cpu, Gauge } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function InteractiveHoverSection() {
  const { isHindi } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const translations = {
    english: {
      interactiveExperience: "Interactive Experience",
      discoverExcellence: "Discover Our Excellence",
      hoverDescription: "Hover over the cards below to explore our advanced manufacturing capabilities and innovative solutions",
      smartManufacturing: "Smart Manufacturing",
      advancedTechnology: "Advanced Technology",
      smartManufacturingDesc: "Cutting-edge manufacturing processes with precision engineering",
      heavyDutyPerformance: "Heavy Duty Performance",
      builtToLast: "Built to Last",
      heavyDutyDesc: "Industrial-grade machinery designed for maximum durability",
      precisionEngineering: "Precision Engineering",
      expertCraftsmanship: "Expert Craftsmanship",
      precisionDesc: "Meticulously engineered components for optimal performance",
      powerEfficiency: "Power & Efficiency",
      maximumOutput: "Maximum Output",
      powerDesc: "High-performance machinery with exceptional efficiency",
      exploreMore: "Explore More",
      experienceInnovation: "Experience Our Innovation",
      features: {
        aiControl: "AI-Powered Quality Control",
        automatedLines: "Automated Production Lines",
        realTimeMonitoring: "Real-time Monitoring",
        heavyIron: "Heavy Iron Construction",
        weatherResistant: "Weather Resistant",
        lowMaintenance: "Low Maintenance",
        tightTolerances: "Tight Tolerances",
        qualityMaterials: "Quality Materials",
        expertAssembly: "Expert Assembly",
        energyEfficient: "Energy Efficient",
        highCapacity: "High Capacity",
        fastProcessing: "Fast Processing"
      }
    },
    hindi: {
      interactiveExperience: "इंटरैक्टिव अनुभव",
      discoverExcellence: "हमारी उत्कृष्टता की खोज करें",
      hoverDescription: "हमारी उन्नत विनिर्माण क्षमताओं और नवाचार समाधानों का अन्वेषण करने के लिए नीचे दिए गए कार्ड पर होवर करें",
      smartManufacturing: "स्मार्ट विनिर्माण",
      advancedTechnology: "उन्नत प्रौद्योगिकी",
      smartManufacturingDesc: "सटीक इंजीनियरिंग के साथ अत्याधुनिक विनिर्माण प्रक्रियाएं",
      heavyDutyPerformance: "भारी ड्यूटी प्रदर्शन",
      builtToLast: "लंबे समय तक चलने के लिए निर्मित",
      heavyDutyDesc: "अधिकतम स्थायित्व के लिए डिज़ाइन किया गया औद्योगिक-ग्रेड मशीनरी",
      precisionEngineering: "सटीक इंजीनियरिंग",
      expertCraftsmanship: "विशेषज्ञ शिल्प कौशल",
      precisionDesc: "इष्टतम प्रदर्शन के लिए सावधानीपूर्वक इंजीनियर किए गए घटक",
      powerEfficiency: "शक्ति और दक्षता",
      maximumOutput: "अधिकतम आउटपुट",
      powerDesc: "असाधारण दक्षता के साथ उच्च प्रदर्शन मशीनरी",
      exploreMore: "और अधिक जानें",
      experienceInnovation: "हमारे नवाचार का अनुभव करें",
      features: {
        aiControl: "AI-संचालित गुणवत्ता नियंत्रण",
        automatedLines: "स्वचालित उत्पादन लाइनें",
        realTimeMonitoring: "रीयल-टाइम मॉनिटरिंग",
        heavyIron: "भारी लोहे का निर्माण",
        weatherResistant: "मौसम प्रतिरोधी",
        lowMaintenance: "कम रखरखाव",
        tightTolerances: "तंग सहनशीलता",
        qualityMaterials: "गुणवत्ता सामग्री",
        expertAssembly: "विशेषज्ञ असेंबली",
        energyEfficient: "ऊर्जा कुशल",
        highCapacity: "उच्च क्षमता",
        fastProcessing: "तेज़ प्रसंस्करण"
      }
    }
  };

  const t = isHindi ? translations.hindi : translations.english;

  const hoverCards = [
    {
      id: 1,
      title: t.smartManufacturing,
      subtitle: t.advancedTechnology,
      icon: Cpu,
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      description: t.smartManufacturingDesc,
      features: [t.features.aiControl, t.features.automatedLines, t.features.realTimeMonitoring],
      image: "/images/products/WhatsApp Image 2026-01-23 at 5.24.42 PM.jpeg"
    },
    {
      id: 2,
      title: t.heavyDutyPerformance,
      subtitle: t.builtToLast,
      icon: Shield,
      color: "from-amber-600 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      description: t.heavyDutyDesc,
      features: [t.features.heavyIron, t.features.weatherResistant, t.features.lowMaintenance],
      image: "/images/products/1.jpeg"
    },
    {
      id: 3,
      title: t.precisionEngineering,
      subtitle: t.expertCraftsmanship,
      icon: Wrench,
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      description: t.precisionDesc,
      features: [t.features.tightTolerances, t.features.qualityMaterials, t.features.expertAssembly],
      image: "/images/products/5.jpeg"
    },
    {
      id: 4,
      title: t.powerEfficiency,
      subtitle: t.maximumOutput,
      icon: Zap,
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      description: t.powerDesc,
      features: [t.features.energyEfficient, t.features.highCapacity, t.features.fastProcessing],
      image: "/images/products/WhatsApp Image 2026-01-23 at 5.24.43 PM.jpeg"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-gray-50 via-amber-50 to-orange-50 overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-10 animate-machine-gear"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-10 animate-machine-crank animate-delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-10 animate-machine-piston animate-delay-400"></div>
      </div>

      {/* Cursor Follow Effect */}
      <div 
        className="absolute w-96 h-96 rounded-full pointer-events-none z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.1) 0%, transparent 50%)`,
          left: 0,
          top: 0,
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
          opacity: hoveredCard !== null ? 1 : 0.3
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-amber-600" />
            <span className="text-amber-800 font-semibold">{t.interactiveExperience}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            {t.discoverExcellence}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.hoverDescription}
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hoverCards.map((card) => {
            const isHovered = hoveredCard === card.id;
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container */}
                <div className={`
                  relative h-80 rounded-2xl transition-all duration-700 ease-out
                  ${isHovered ? 'transform scale-105 shadow-2xl' : 'shadow-lg'}
                `}>
                  {/* Background Gradient */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${card.bgColor} rounded-2xl
                    transition-all duration-700 ease-out
                    ${isHovered ? 'opacity-100' : 'opacity-70'}
                  `} />

                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    {/* Top Section */}
                    <div>
                      {/* Icon */}
                      <div className={`
                        w-16 h-16 rounded-xl bg-gradient-to-r ${card.color} 
                        flex items-center justify-center mb-4
                        transition-all duration-700 ease-out
                        ${isHovered ? 'transform rotate-12 scale-110' : ''}
                      `}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Bottom Section */}
                    <div>
                      {/* Description */}
                      <p className={`
                        text-gray-700 text-sm mb-4 leading-relaxed
                        transition-all duration-700 ease-out
                        ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
                      `}>
                        {card.description}
                      </p>

                      {/* Features List */}
                      <div className={`
                        space-y-2 mb-4
                        transition-all duration-700 ease-out delay-100
                        ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
                      `}>
                        {card.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full" />
                            <span className="text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Arrow */}
                      <div className={`
                        flex items-center space-x-2 text-amber-600 font-semibold
                        transition-all duration-700 ease-out delay-200
                        ${isHovered ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-4'}
                      `}>
                        <span className="text-sm">{t.exploreMore}</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Reveal Image Overlay */}
                  <div className={`
                    absolute inset-0 rounded-2xl overflow-hidden
                    transition-all duration-700 ease-out
                    ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                  `}>
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-white text-xl font-bold mb-2">{card.title}</h4>
                      <p className="text-white/90 text-sm">{card.description}</p>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 pointer-events-none
                    transition-all duration-700 ease-out
                    ${isHovered ? 'opacity-100' : ''}
                  `}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-20 rounded-2xl blur-xl`} />
                  </div>
                </div>

                {/* Floating Particles */}
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-pulse"
                        style={{
                          left: `${20 + (i * 15)}%`,
                          top: `${10 + (i * 12)}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: `${2 + (i * 0.3)}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link 
            to="/experience-innovation"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Factory className="h-5 w-5" />
            <span>{t.experienceInnovation}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
