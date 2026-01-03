import React from 'react';

interface GlitchHeaderProps {
  text: string;
  subtext?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const GlitchHeader: React.FC<GlitchHeaderProps> = ({ text, subtext, size = 'lg' }) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-8xl'
  };

  return (
    <div className="relative group cursor-default">
      <h1 className={`font-display font-black text-white ${sizeClasses[size]} leading-tight relative z-10 mix-blend-difference`}>
        {text}
      </h1>
      {/* Glitch Layers */}
      <h1 className={`font-display font-black text-green-500 ${sizeClasses[size]} leading-tight absolute top-0 left-0 -z-10 opacity-0 group-hover:opacity-70 group-hover:translate-x-[3px] transition-all duration-75 animate-pulse`}>
        {text}
      </h1>
      <h1 className={`font-display font-black text-pink-500 ${sizeClasses[size]} leading-tight absolute top-0 left-0 -z-10 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[3px] transition-all duration-75 delay-75`}>
        {text}
      </h1>
      
      {subtext && (
        <p className="mt-4 font-mono text-green-400/80 tracking-widest text-lg uppercase border-l-2 border-green-500 pl-4">
          {subtext}
        </p>
      )}
    </div>
  );
};

export default GlitchHeader;
