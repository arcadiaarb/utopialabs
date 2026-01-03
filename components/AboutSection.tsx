import React from 'react';
import { Target, Eye, Database } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative border-t border-white/10 overflow-hidden">
      {/* Abstract Tech Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-900/20 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-900/20 rounded-full blur-[80px]"></div>
         {/* Grid lines */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <span className="text-green-500 font-mono text-xs tracking-widest uppercase mb-2 block">// IDENTITY_VERIFIED</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                ARCHITECTS OF <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  DECENTRALIZED FINANCE
                </span>
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Utopia Labs is not just a firm; we are the engine room of the crypto economy. 
              Born from the convergence of algorithmic trading and venture capital, we exist to 
              bridge the gap between chaotic innovation and institutional stability.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-white/5 border border-white/10 rounded group-hover:border-green-500/50 transition-colors">
                  <Target className="text-green-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-xl mb-1">OUR MISSION</h4>
                  <p className="text-gray-500 font-mono text-sm">
                    To accelerate the transition to a decentralized financial future through strategic liquidity injection and high-conviction capital allocation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-white/5 border border-white/10 rounded group-hover:border-cyan-500/50 transition-colors">
                  <Eye className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-xl mb-1">OUR VISION</h4>
                  <p className="text-gray-500 font-mono text-sm">
                    To become the central nervous system of Web3, providing the critical infrastructure that allows protocols to scale from zero to infinity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual/Values Grid */}
          <div className="relative">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-green-950/10 border border-green-500/20 backdrop-blur-sm rounded-lg transform sm:translate-y-8 hover:bg-green-900/20 transition-all duration-300">
                   <h3 className="font-mono text-green-400 text-sm mb-2">01 // PRECISION</h3>
                   <p className="text-white font-display font-bold text-2xl">ALGORITHMIC ACCURACY</p>
                </div>
                <div className="p-6 bg-black/40 border border-white/10 backdrop-blur-sm rounded-lg hover:border-green-500/30 transition-all duration-300">
                   <h3 className="font-mono text-gray-500 text-sm mb-2">02 // VELOCITY</h3>
                   <p className="text-white font-display font-bold text-2xl">EXECUTION SPEED</p>
                </div>
                <div className="p-6 bg-black/40 border border-white/10 backdrop-blur-sm rounded-lg hover:border-green-500/30 transition-all duration-300">
                   <h3 className="font-mono text-gray-500 text-sm mb-2">03 // SOVEREIGNTY</h3>
                   <p className="text-white font-display font-bold text-2xl">TRUE OWNERSHIP</p>
                </div>
                <div className="p-6 bg-cyan-950/10 border border-cyan-500/20 backdrop-blur-sm rounded-lg transform sm:translate-y-8 hover:bg-cyan-900/20 transition-all duration-300">
                   <h3 className="font-mono text-cyan-400 text-sm mb-2">04 // NETWORK</h3>
                   <p className="text-white font-display font-bold text-2xl">GLOBAL REACH</p>
                </div>
             </div>
             
             {/* Center connector decoration */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/5 rounded-full flex items-center justify-center animate-spin-slow pointer-events-none hidden sm:flex">
                <div className="w-16 h-16 border border-green-500/30 rounded-full"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;