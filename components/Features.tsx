import React from 'react';
import { Zap, Shield, Globe, Layers, TrendingUp, Handshake, Megaphone, Lock } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Market Making",
    desc: "Institutional-grade liquidity provision powered by Kairon Labs. Algorithmic strategies for stable growth."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "VC Deal Flow",
    desc: "Exclusive access to seed and private rounds from top-tier ventures and alpha syndicates."
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "OTC Desk",
    desc: "High-volume block trading with zero slippage and maximum privacy for institutional exits and entries."
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Strategic Marketing",
    desc: "Amplifying reach through Reform DAO partnerships, KOL networks, and viral narrative construction."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Advisory Services",
    desc: "Tokenomics design, exchange listings, and go-to-market strategy for next-gen protocols."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Project Incubation",
    desc: "From whitepaper to TGE. We provide the capital, connections, and code to launch."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
       <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.8)_2px,transparent_2px),linear-gradient(90deg,rgba(18,18,18,0.8)_2px,transparent_2px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            STUDIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">SERVICES</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div 
              key={index}
              className="group p-8 border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-green-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-green-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>

              <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;