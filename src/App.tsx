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
    <div className="min-h-screen bg-[#fff7e6] pt-48">

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