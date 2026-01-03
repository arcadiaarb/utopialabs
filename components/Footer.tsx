import React from 'react';
import { Twitter, Github, Disc } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h4 className="font-display font-bold text-2xl text-white">UTOPIA</h4>
          <p className="text-gray-500 font-mono text-sm mt-2">© {new Date().getFullYear()} Utopia Labs Inc.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://x.com/utopialabsxyz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110">
            <Disc size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;