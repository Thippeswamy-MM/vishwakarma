import { Target, Award, Factory, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { isHindi } = useLanguage();
  
  const translations = {
    english: {
      builtWith: "🔧 Built with heavy iron sheets and cast iron components",
      capacity: "⚙️ Our machines deliver up to 1 ton per hour capacity",
      performance: "🚜 Smooth, reliable performance for farms and industries",
      aboutTitle: "About Vishwakarma Foundry Works",
      aboutDesc: "Leading manufacturer of premium agricultural machinery with decades of expertise in foundry work and metal fabrication.",
      mission: "Our Mission",
      missionText1: "At Vishwakarma Foundry Works, we are dedicated to manufacturing high-quality agricultural machinery that enhances productivity and efficiency for farmers. Our commitment to excellence ensures durable, reliable equipment built to withstand the toughest agricultural conditions.",
      missionText2: "Using premium materials like heavy iron sheets, iron angles, and cast iron components, we create machinery that delivers consistent performance and long-lasting value to our customers.",
      quality: "Quality",
      qualityDesc: "Premium materials and expert craftsmanship",
      durable: "Durable",
      durableDesc: "Built with heavy iron for long-lasting performance",
      efficient: "Efficient",
      efficientDesc: "1 ton/hour capacity for maximum productivity",
      trusted: "Trusted",
      trustedDesc: "Decades of industry experience and expertise",
      heritage: "Our Heritage & Vision",
      heritageText1: "At Vishwakarma Foundry Works, we combine decades of foundry expertise with the latest industry insights to build machines that meet today's agricultural demands. In a competitive market where durability, efficiency, and ROI are key, our products are engineered for maximum output, minimal downtime, and long-term value.",
      heritageText2: "Drawing inspiration from the precision of Lord Vishwakarma, we use robust iron construction and advanced manufacturing processes to deliver machinery that stands strong in real-world performance — from small farms to large-scale processing units. Our focus on quality, reliability, and innovation makes us a trusted choice in the evolving agricultural landscape.",
      customers: "Satisfied Customers Across India",
      states: "States Where Our Machines Run Successfully",
      uptime: "Machine Uptime & Quality Assurance"
    },
    hindi: {
      builtWith: "🔧 भारी लोहे की शीट और कास्ट आयरन घटकों से निर्मित",
      capacity: "⚙️ हमारी मशीनें प्रति घंटे 1 टन तक की क्षमता प्रदान करती हैं",
      performance: "🚜 खेतों और उद्योगों के लिए सुचारू, विश्वसनीय प्रदर्शन",
      aboutTitle: "विश्वकर्मा फाउंड्री वर्क्स के बारे में",
      aboutDesc: "दशकों के अनुभव के साथ प्रीमियम कृषि मशीनरी के अग्रणी निर्माता।",
      mission: "हमारा मिशन",
      missionText1: "विश्वकर्मा फाउंड्री वर्क्स में, हम उच्च गुणवत्ता वाली कृषि मशीनरी के निर्माण के लिए समर्पित हैं जो किसानों के लिए उत्पादकता और दक्षता बढ़ाती है। उत्कृष्टता के प्रति हमारी प्रतिबद्धता सबसे कठोर कृषि परिस्थितियों का सामना करने के लिए निर्मित टिकाऊ, विश्वसनीय उपकरण सुनिश्चित करती है।",
      missionText2: "भारी लोहे की शीट, लोहे के कोण और कास्ट आयरन घटकों जैसी प्रीमियम सामग्री का उपयोग करके, हम ऐसी मशीनरी बनाते हैं जो हमारे ग्राहकों को लगातार प्रदर्शन और दीर्घकालिक मूल्य प्रदान करती है।",
      quality: "गुणवत्ता",
      qualityDesc: "प्रीमियम सामग्री और विशेषज्ञ शिल्प कौशल",
      durable: "टिकाऊ",
      durableDesc: "लंबे समय तक चलने वाले प्रदर्शन के लिए भारी लोहे से निर्मित",
      efficient: "कुशल",
      efficientDesc: "अधिकतम उत्पादकता के लिए 1 टन/घंटा क्षमता",
      trusted: "विश्वसनीय",
      trustedDesc: "दशकों का उद्योग अनुभव और विशेषज्ञता",
      heritage: "हमारी विरासत और दृष्टि",
      heritageText1: "विश्वकर्मा फाउंड्री वर्क्स में, हम आज की कृषि मांगों को पूरा करने वाली मशीनें बनाने के लिए दशकों के फाउंड्री विशेषज्ञता को नवीनतम उद्योग अंतर्दृष्टि के साथ जोड़ते हैं। एक प्रतिस्पर्धी बाजार में जहां टिकाऊपन, दक्षता और ROI महत्वपूर्ण हैं, हमारे उत्पाद अधिकतम आउटपुट, न्यूनतम डाउनटाइम और दीर्घकालिक मूल्य के लिए इंजीनियर हैं।",
      heritageText2: "भगवान विश्वकर्मा की सटीकता से प्रेरणा लेते हुए, हम मजबूत लोहे के निर्माण और उन्नत विनिर्माण प्रक्रियाओं का उपयोग करते हैं ताकि वास्तविक दुनिया के प्रदर्शन में मजबूत खड़ी मशीनरी प्रदान करें - छोटे खेतों से लेकर बड़े पैमाने के प्रसंस्करण इकाइयों तक। गुणवत्ता, विश्वसनीयता और नवाचार पर हमारा फोकस हमें विकसित हो रहे कृषि परिदृश्य में एक विश्वसनीय विकल्प बनाता है।",
      customers: "भारत भर में संतुष्ट ग्राहक",
      states: "राज्य जहां हमारी मशीनें सफलतापूर्वक चलती हैं",
      uptime: "मशीन अपटाइम और गुणवत्ता आश्वासन"
    }
  };
  
  const t = isHindi ? translations.hindi : translations.english;
  return (
    <section id="about" className="pt-0 pb-24 md:pt-0 md:py-32 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Sliding Text Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 mb-4 shadow-2xl -mx-6 sm:-mx-8 lg:-mx-12">
          <div className="flex animate-slide">
            <div className="flex whitespace-nowrap py-2 px-8">
              <span className="text-white text-sm md:text-base font-bold mx-6">
                {t.builtWith}
              </span>
              <span className="text-gray-300 text-sm md:text-base font-bold mx-6">
                {t.capacity}
              </span>
              <span className="text-white text-sm md:text-base font-bold mx-6">
                {t.performance}
              </span>
              <span className="text-gray-300 text-sm md:text-base font-bold mx-6">
                {t.builtWith}
              </span>
              <span className="text-white text-sm md:text-base font-bold mx-6">
                {t.capacity}
              </span>
              <span className="text-gray-300 text-sm md:text-base font-bold mx-6">
                {t.performance}
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 mt-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neutral-900 via-primary-800 to-secondary-800 bg-clip-text text-transparent mb-8">{t.aboutTitle}</h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t.aboutDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary-700 to-secondary-700 bg-clip-text text-transparent mb-8">{t.mission}</h3>
            <p className="text-neutral-600 text-xl mb-8 leading-relaxed">
              {t.missionText1}
            </p>
            <p className="text-neutral-600 text-xl leading-relaxed">
              {t.missionText2}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-premium text-center hover:shadow-premium-lg transition-all duration-300 border border-neutral-100 hover:border-primary-200 hover:scale-105 group" style={{animationDelay: '100ms'}}>
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Factory className="h-10 w-10 text-primary-600" />
              </div>
              <h4 className="text-2xl font-bold text-neutral-900 mb-3">{t.quality}</h4>
              <p className="text-neutral-600 leading-relaxed">{t.qualityDesc}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-premium text-center hover:shadow-premium-lg transition-all duration-300 border border-neutral-100 hover:border-secondary-200 hover:scale-105 group" style={{animationDelay: '200ms'}}>
              <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="h-10 w-10 text-secondary-600" />
              </div>
              <h4 className="text-2xl font-bold text-neutral-900 mb-3">{t.durable}</h4>
              <p className="text-neutral-600 leading-relaxed">{t.durableDesc}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-premium text-center hover:shadow-premium-lg transition-all duration-300 border border-neutral-100 hover:border-accent-200 hover:scale-105 group" style={{animationDelay: '300ms'}}>
              <div className="bg-gradient-to-br from-accent-100 to-accent-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-10 w-10 text-accent-600" />
              </div>
              <h4 className="text-2xl font-bold text-neutral-900 mb-3">{t.efficient}</h4>
              <p className="text-neutral-600 leading-relaxed">{t.efficientDesc}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-premium text-center hover:shadow-premium-lg transition-all duration-300 border border-neutral-100 hover:border-success-200 hover:scale-105 group" style={{animationDelay: '400ms'}}>
              <div className="bg-gradient-to-br from-success-100 to-success-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-success-600" />
              </div>
              <h4 className="text-2xl font-bold text-neutral-900 mb-3">{t.trusted}</h4>
              <p className="text-neutral-600 leading-relaxed">{t.trustedDesc}</p>
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-white/80 backdrop-blur-md rounded-4xl shadow-premium-xl p-12 md:p-16 border border-white/50">
          <div className="text-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-primary-700 to-secondary-700 bg-clip-text text-transparent mb-8">{t.heritage}</h3>
            <p className="text-lg text-neutral-600 max-w-5xl mx-auto mb-12 leading-relaxed">
              {t.heritageText1}
            </p>
            <p className="text-lg text-neutral-600 max-w-5xl mx-auto mb-12 leading-relaxed">
              {t.heritageText2}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              <div className="text-center" style={{animationDelay: '500ms'}}>
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-4">500+</div>
                <p className="text-neutral-600 text-lg">{t.customers}</p>
              </div>
              <div className="text-center" style={{animationDelay: '600ms'}}>
                <div className="text-5xl font-bold bg-gradient-to-r from-secondary-600 to-secondary-700 bg-clip-text text-transparent mb-4">15+</div>
                <p className="text-neutral-600 text-lg">{t.states}</p>
              </div>
              <div className="text-center" style={{animationDelay: '700ms'}}>
                <div className="text-5xl font-bold bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent mb-4">99.9%</div>
                <p className="text-neutral-600 text-lg">{t.uptime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}