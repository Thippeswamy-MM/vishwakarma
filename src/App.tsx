import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PromoStrip from './components/PromoStrip';
import Hero from './components/Hero';
import About from './components/About';
import Properties from './components/Properties';
import InteractiveHoverSection from './components/InteractiveHoverSection';
import ExperienceInnovation from './components/ExperienceInnovation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RequestQuote from './components/RequestQuote';
import WhatsAppInquiry from './components/WhatsAppInquiry';
import HalfDalaDetail from './components/HalfDalaDetail';
import BalwanBhoosiDetail from './components/BalwanBhoosiDetail';
import VFWHalfDalaDetail from './components/VFWHalfDalaDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import WarrantyPolicy from './components/WarrantyPolicy';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Machinery Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 animate-machine-gear"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-machine-crank animate-delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-red-400 to-purple-500 rounded-full opacity-20 animate-machine-piston animate-delay-400"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-20 animate-machine-rotate animate-delay-600"></div>
        <div className="absolute bottom-1/3 right-10 w-88 h-88 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-20 animate-machine-hammer animate-delay-800"></div>
      </div>

      {/* Machinery Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `machine-vibrate ${0.1 + Math.random() * 0.2}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <Header />
      <main className="relative z-10">
        <PromoStrip />
        <Hero />
        <About />
        <Properties />
        <InteractiveHoverSection />
        <Contact />
      </main>
      <Footer />
      
      {/* Add custom animation to head */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
            }
            25% {
              transform: translateY(-20px) translateX(10px);
            }
            50% {
              transform: translateY(10px) translateX(-10px);
            }
            75% {
              transform: translateY(-10px) translateX(20px);
            }
          }
        `
      }} />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/request-quote" element={<RequestQuote />} />
      <Route path="/whatsapp-inquiry" element={<WhatsAppInquiry />} />
      <Route path="/half-dala-detail" element={<HalfDalaDetail />} />
      <Route path="/balwan-bhoosi-detail" element={<BalwanBhoosiDetail />} />
      <Route path="/vfw-half-dala-detail" element={<VFWHalfDalaDetail />} />
      <Route path="/experience-innovation" element={<ExperienceInnovation />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/warranty-policy" element={<WarrantyPolicy />} />
    </Routes>
  );
}