import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Send, Cpu, Wifi } from 'lucide-react';
import { sendToMainframe } from '../services/geminiService';
import { ChatMessage, ConnectionStatus } from '../types';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<ChatMessage[]>([
    { role: 'system', text: 'UTOPIA_MAINFRAME_v9.0.1 INITIALIZED...', timestamp: Date.now() },
    { role: 'system', text: 'AWAITING_INPUT // ASK_ABOUT_PROTOCOL', timestamp: Date.now() + 100 }
  ]);
  const [status, setStatus] = useState<ConnectionStatus>(ConnectionStatus.CONNECTED);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setHistory(prev => [...prev, userMsg]);
    setInput('');
    setStatus(ConnectionStatus.CONNECTING);

    const responseText = await sendToMainframe(input);
    
    setStatus(ConnectionStatus.CONNECTED);
    setHistory(prev => [...prev, { role: 'model', text: responseText, timestamp: Date.now() }]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-lg backdrop-blur-sm border border-green-500/30">
      <div className="bg-black/90 rounded-md overflow-hidden shadow-2xl border border-green-900/50 flex flex-col h-[500px]">
        {/* Terminal Header */}
        <div className="bg-green-900/10 p-2 flex items-center justify-between border-b border-green-800/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="font-mono text-xs text-green-400 ml-2">root@utopia-labs:~</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-green-500/60">
            <span className="flex items-center gap-1">
              <Cpu size={12} /> MEM: 64TB
            </span>
            <span className="flex items-center gap-1">
              <Wifi size={12} className={status === ConnectionStatus.CONNECTING ? 'animate-pulse' : ''} /> 
              {status}
            </span>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          ref={scrollRef}
          className="flex-1 p-4 overflow-y-auto font-mono text-sm space-y-3"
        >
          {history.map((msg, idx) => (
            <div key={idx} className={`${msg.role === 'user' ? 'text-white' : 'text-green-400'} animate-in fade-in slide-in-from-left-2`}>
              <span className="opacity-50 mr-2">[{new Date(msg.timestamp).toLocaleTimeString()}]</span>
              <span className="font-bold mr-2">{msg.role === 'user' ? '>' : '#'}</span>
              <span>{msg.text}</span>
            </div>
          ))}
          {status === ConnectionStatus.CONNECTING && (
            <div className="text-green-400 animate-pulse">
              <span className="font-bold mr-2">#</span>
              PROCESSING_REQUEST...
            </div>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-3 bg-green-900/5 border-t border-green-800/30 flex gap-2">
          <span className="text-green-500 font-mono py-2">{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-white font-mono focus:outline-none placeholder-green-700/30"
            placeholder="ACCESS_MAINFRAME..."
            autoFocus
          />
          <button 
            type="submit" 
            disabled={status === ConnectionStatus.CONNECTING}
            className="p-2 text-green-500 hover:text-white hover:bg-green-500/20 rounded transition-colors"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Terminal;
