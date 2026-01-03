import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Hexagon className="text-green-500 w-8 h-8 group-hover:rotate-180 transition-transform duration-700" strokeWidth={2.5} />
          <span className="font-display font-bold text-xl tracking-wider text-white">
            UTOPIA<span className="text-green-500">LABS</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          <a href="#about" onClick={scrollToSection('about')} className="text-gray-300 hover:text-green-400 transition-colors">ABOUT US</a>
          <a href="#partners" onClick={scrollToSection('partners')} className="text-gray-300 hover:text-green-400 transition-colors">PARTNERS</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-b border-green-900/50 p-6 flex flex-col gap-4 md:hidden">
            <a href="#about" onClick={scrollToSection('about')} className="text-white hover:text-green-400 font-mono">ABOUT US</a>
            <a href="#partners" onClick={scrollToSection('partners')} className="text-white hover:text-green-400 font-mono">PARTNERS</a>
            <Button variant="primary" className="w-full">
              LAUNCH APP
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;