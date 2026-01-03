import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', vol: 120 },
  { name: 'Feb', vol: 190 },
  { name: 'Mar', vol: 150 },
  { name: 'Apr', vol: 280 },
  { name: 'May', vol: 250 },
  { name: 'Jun', vol: 390 },
  { name: 'Jul', vol: 450 },
];

const StatsSection: React.FC = () => {
  return (
    <div className="w-full bg-black/50 border-t border-b border-green-500/20 py-12 backdrop-blur-sm">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
          <h3 className="text-3xl font-display font-bold text-white">
            MARKET <span className="text-green-500">VELOCITY</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-green-900/10 border-l-2 border-green-500">
              <div className="text-xs font-mono text-green-400 mb-1">24H VOLUME</div>
              <div className="text-3xl font-bold font-display text-white">$45M+</div>
            </div>
            <div className="p-4 bg-green-900/10 border-l-2 border-cyan-500">
              <div className="text-xs font-mono text-cyan-400 mb-1">CAPITAL DEPLOYED</div>
              <div className="text-3xl font-bold font-display text-white">$120M</div>
            </div>
            <div className="p-4 bg-green-900/10 border-l-2 border-pink-500">
              <div className="text-xs font-mono text-pink-400 mb-1">ACTIVE DEALS</div>
              <div className="text-3xl font-bold font-display text-white">14</div>
            </div>
            <div className="p-4 bg-green-900/10 border-l-2 border-yellow-500">
              <div className="text-xs font-mono text-yellow-400 mb-1">PARTNER NETWORK</div>
              <div className="text-3xl font-bold font-display text-white">50+</div>
            </div>
          </div>
          <p className="font-mono text-sm text-gray-400">
            *Real-time liquidity provision and deal flow aggregation via Kairon Labs & Utopia ecosystem.
          </p>
        </div>

        <div className="h-[300px] w-full bg-black/40 border border-white/5 rounded-lg p-4 relative overflow-hidden group">
          <div className="absolute top-2 right-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-mono text-green-500">LIQUIDITY DEPTH</span>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorVol" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#39ff14" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#39ff14" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
              <XAxis dataKey="name" stroke="#666" tick={{fontFamily: 'Share Tech Mono', fontSize: 10}} />
              <YAxis stroke="#666" tick={{fontFamily: 'Share Tech Mono', fontSize: 10}} />
              <Tooltip 
                contentStyle={{backgroundColor: '#000', border: '1px solid #39ff14', color: '#fff', fontFamily: 'Share Tech Mono'}}
                itemStyle={{color: '#39ff14'}}
              />
              <Area 
                type="monotone" 
                dataKey="vol" 
                stroke="#39ff14" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorVol)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;