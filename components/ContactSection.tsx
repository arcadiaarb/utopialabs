import React, { useState } from 'react';
import Button from './Button';
import { Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert('TRANSMISSION_RECEIVED // AWAIT_RESPONSE');
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-black relative border-t border-white/10 overflow-hidden" id="contact">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-900/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            INITIATE <span className="text-green-500">CONTACT</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm max-w-lg mx-auto">
            Secure channel open for partnership inquiries, deal flow access, and incubation requests.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-lg backdrop-blur-sm relative group">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500/50 group-hover:border-green-500 transition-colors"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500/50 group-hover:border-green-500 transition-colors"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500/50 group-hover:border-green-500 transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500/50 group-hover:border-green-500 transition-colors"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="name" className="block text-green-500 text-xs font-mono mb-2 uppercase tracking-wider">
                Identity / Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition-all font-mono placeholder-gray-700"
                placeholder="ENTER_NAME"
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-green-500 text-xs font-mono mb-2 uppercase tracking-wider">
                Comms Link / Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition-all font-mono placeholder-gray-700"
                placeholder="ENTER_EMAIL"
                required
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-green-500 text-xs font-mono mb-2 uppercase tracking-wider">
              Transmission Data / Message
            </label>
            <textarea 
              id="message" 
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition-all font-mono placeholder-gray-700 resize-none"
              placeholder="ENCRYPTED_MESSAGE_CONTENT..."
              required
            ></textarea>
          </div>

          <div className="text-center">
            <Button type="submit" variant="primary" glitch className="w-full md:w-auto min-w-[200px]">
              TRANSMIT DATA <Send className="w-4 h-4 ml-2 inline" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;