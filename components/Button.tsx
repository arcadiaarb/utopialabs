import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  glitch?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  glitch = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative font-mono font-bold py-3 px-8 transition-all duration-200 uppercase tracking-wider clip-path-polygon";
  
  const variants = {
    primary: "bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] border-2 border-transparent",
    secondary: "bg-transparent text-green-500 border-2 border-green-500 hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]",
    danger: "bg-red-600 text-white hover:bg-red-500 border-2 border-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} group overflow-hidden`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {glitch && <span className="w-2 h-2 bg-current animate-pulse inline-block" />}
        {children}
      </span>
      
      {/* Slanted background effect */}
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12 origin-bottom-left" />
    </button>
  );
};

export default Button;
