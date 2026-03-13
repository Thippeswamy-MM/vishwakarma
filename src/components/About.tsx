import { Target, Award, Factory, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../translations';

export default function About() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  
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