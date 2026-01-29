import Header from './components/Header';
import PromoStrip from './components/PromoStrip';
import Hero from './components/Hero';
import About from './components/About';
import Properties from './components/Properties';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-red-400 to-purple-500 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-20 animate-spin"></div>
        <div className="absolute bottom-1/3 right-10 w-88 h-88 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s linear infinite`,
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


