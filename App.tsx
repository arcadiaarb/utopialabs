import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import StatsSection from './components/StatsSection';
import Terminal from './components/Terminal';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-green-500 selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative z-20 -mt-20 mb-20 px-6">
           <Terminal />
        </div>

        <AboutSection />

        <Features />
        
        <StatsSection />
        
        {/* Marquee Section */}
        <div className="py-8 bg-green-500 overflow-hidden flex items-center">
          <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] font-display font-black text-black text-4xl uppercase flex gap-12">
             <span>Market Making</span>
             <span>•</span>
             <span>VC Deal Flow</span>
             <span>•</span>
             <span>OTC Liquidity</span>
             <span>•</span>
             <span>Strategic Marketing</span>
             <span>•</span>
             <span>Market Making</span>
             <span>•</span>
             <span>VC Deal Flow</span>
             <span>•</span>
             <span>OTC Liquidity</span>
             <span>•</span>
             <span>Strategic Marketing</span>
             <span>•</span>
          </div>
        </div>
        
        <section id="partners" className="py-24 bg-black relative border-t border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-black to-black opacity-50 pointer-events-none"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
             <h2 className="text-3xl font-display font-bold mb-16 text-white tracking-widest">STRATEGIC PARTNERS</h2>
             
             <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
                
                {/* Reform DAO */}
                <div className="group relative cursor-pointer">
                   <div className="absolute -inset-4 bg-green-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <div className="relative text-4xl md:text-5xl font-black font-display tracking-tighter text-gray-500 group-hover:text-green-400 transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-[0_0_25px_rgba(74,222,128,0.6)] transform group-hover:scale-110">
                      REFORM <span className="text-gray-600 group-hover:text-white transition-colors">DAO</span>
                   </div>
                </div>

                {/* Kairon Labs */}
                <div className="group relative cursor-pointer">
                   <div className="absolute -inset-4 bg-cyan-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <div className="relative text-4xl md:text-5xl font-black font-display tracking-tighter text-gray-500 group-hover:text-cyan-400 transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.6)] transform group-hover:scale-110">
                      KAIRON <span className="text-gray-600 group-hover:text-white transition-colors">LABS</span>
                   </div>
                </div>

                {/* Top Tier VCs */}
                <div className="group relative cursor-pointer">
                   <div className="absolute inset-0 bg-white/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <div className="relative text-2xl md:text-3xl font-bold font-mono text-gray-600 group-hover:text-white border-2 border-transparent group-hover:border-white/50 px-6 py-3 rounded transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform group-hover:-translate-y-1">
                      TOP TIER VCs
                   </div>
                </div>

                {/* Tier 1 Exchanges */}
                <div className="group relative cursor-pointer">
                   <div className="absolute inset-0 bg-purple-500/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <div className="relative text-2xl md:text-3xl font-bold font-mono text-gray-600 group-hover:text-purple-400 border-2 border-transparent group-hover:border-purple-500/50 px-6 py-3 rounded transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(192,132,252,0.3)] transform group-hover:-translate-y-1">
                      TIER 1 EXCHANGES
                   </div>
                </div>

             </div>
          </div>
        </section>

        <ContactSection />

      </main>

      <Footer />
      
      {/* Global CSS for marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default App;