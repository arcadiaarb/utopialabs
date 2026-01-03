import React from 'react';
import GlitchHeader from './GlitchHeader';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 inline-block">
          <span className="bg-green-500/10 text-green-400 border border-green-500/30 px-3 py-1 text-xs font-mono rounded tracking-widest uppercase">
            Deal Flow Optimized
          </span>
        </div>
        
        <GlitchHeader text="UTOPIA LABS" subtext="Premier Deal Flow Studio" size="xl" />
        
        <p className="mt-8 text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
          The ultimate nexus for <span className="text-white font-semibold">Market Making</span>, 
          <span className="text-white font-semibold"> VC Allocations</span>, and 
          <span className="text-white font-semibold"> Strategic Marketing</span>. 
          Partnered with industry titans <span className="text-green-400 font-mono">REFORM DAO</span> and <span className="text-green-400 font-mono">KAIRON LABS</span>.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6">
          <Button variant="primary" glitch>
            VIEW ACTIVE DEALS <ArrowRight className="inline-block ml-2 w-4 h-4" />
          </Button>
          <Button variant="secondary">
            APPLY FOR INCUBATION
          </Button>
        </div>

        {/* Decorative Grid Floor */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-900/10 to-transparent pointer-events-none transform perspective-[2000px] rotate-x-60 origin-bottom">
           <div className="w-full h-full bg-[linear-gradient(0deg,transparent_24%,rgba(57,255,20,.1)_25%,rgba(57,255,20,.1)_26%,transparent_27%,transparent_74%,rgba(57,255,20,.1)_75%,rgba(57,255,20,.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(57,255,20,.1)_25%,rgba(57,255,20,.1)_26%,transparent_27%,transparent_74%,rgba(57,255,20,.1)_75%,rgba(57,255,20,.1)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;