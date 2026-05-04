/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Gamepad2, 
  Crown, 
  Star, 
  ArrowRight,
  TrendingUp,
  Coins,
  Lock
} from 'lucide-react';
import { CURRENCY_SYMBOL } from '../constants';

export default function GamesPage() {
  const games = [
    {
      id: 'g1',
      title: 'Crypto Runner',
      description: 'Collect coins and avoid obstacles to earn points.',
      earnings: 'Up to 50 pts/lvl',
      level: 12,
      tier: 'Beginner',
      image: 'https://images.unsplash.com/photo-1614290154458-531e8d0d1d2b?w=400&h=250&fit=crop',
      color: 'emerald'
    },
    {
      id: 'g2',
      title: 'Logic Matrix',
      description: 'Battle other players in quick mathematical challenges.',
      earnings: '100 pts/win',
      level: 4,
      tier: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
      color: 'blue'
    },
    {
      id: 'g3',
      title: 'Hyper Empire',
      description: 'Build your kingdom. High stakes, high rewards.',
      earnings: 'Up to 2000 pts/mission',
      level: 0,
      tier: 'Expert',
      isLocked: true,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop',
      color: 'purple'
    }
  ];

  return (
    <div className="space-y-12 pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-6xl font-black uppercase tracking-tight italic">The Arena</h1>
          <p className="text-slate-500 text-sm mt-3 uppercase font-bold tracking-widest">Level up your skill to maximize extraction rates</p>
        </div>
        <div className="hidden sm:flex items-center gap-6 px-6 py-3 bg-slate-900 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-2">
            <Star className="text-emerald-500 fill-current" size={18} />
            <span className="text-xs font-black text-white uppercase tracking-widest">Lv. 5</span>
          </div>
          <div className="w-px h-6 bg-slate-800"></div>
          <div className="flex items-center gap-2">
            <TrendingUp className="text-emerald-500" size={18} />
            <span className="text-xs font-black text-white uppercase tracking-widest">TOP 1%</span>
          </div>
        </div>
      </div>

      <div className="relative group overflow-hidden rounded-[3rem] bg-slate-900 h-80 md:h-96 shadow-2xl shadow-emerald-500/10 border border-slate-800">
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" 
          alt="Featured Game" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-sm">DAILY SECTOR</span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-[0.2em]">2X REWARDS ACTIVE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">Hyper-Loop</h2>
            <p className="mt-4 text-slate-400 text-sm font-medium leading-relaxed">Conquer the loop. Verified mission for high-tier earn rates. Expert clearance recommended for full pool access.</p>
          </div>
          <button className="px-12 py-5 bg-white text-slate-950 font-black rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 uppercase italic text-xl tracking-tighter">
            Initiate Play <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <motion.div 
            key={game.id}
            whileHover={{ y: -8 }}
            className="flex flex-col card-dark overflow-hidden group border-slate-800 p-0"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={game.image} alt={game.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              {game.isLocked && (
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center text-white">
                  <Lock size={40} className="mb-4 text-white/30" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Locked Section</span>
                </div>
              )}
              <div className="absolute top-6 left-6 px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-[10px] font-black text-white uppercase tracking-widest">
                {game.tier}
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-black uppercase tracking-tight italic text-white">{game.title}</h3>
                {game.id === 'g1' && <Crown size={24} className="text-emerald-500" />}
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">{game.description}</p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-600">
                  <span>Sync Progress</span>
                  <span>{game.level}/50 LVL</span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(game.level / 50) * 100}%` }}></div>
                </div>
              </div>

              <div className="mt-auto pt-8 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest mb-1">Current Yield</span>
                  <div className="flex items-center gap-2">
                    <Coins size={16} className="text-emerald-500" />
                    <span className="text-sm font-black text-white uppercase italic">{game.earnings}</span>
                  </div>
                </div>
                <button 
                  disabled={game.isLocked}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all border ${
                    game.isLocked ? 'text-slate-800 border-slate-900 bg-slate-950 cursor-not-allowed' : 'text-emerald-400 border-slate-800 bg-slate-950 hover:border-emerald-500/50 hover:scale-110'
                  }`}
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-12 bg-emerald-500 rounded-[3rem] text-slate-950 overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-10 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-slate-950">
          <div>
            <h2 className="text-5xl font-black tracking-tighter uppercase italic leading-none">Scale Your<br/>Capital.</h2>
            <p className="mt-6 text-slate-950 font-bold text-lg leading-snug">
              Unlock the Expert Tier by investing. Gain access to elite operations where rewards reach {CURRENCY_SYMBOL}500 daily.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-12 py-5 bg-slate-950 text-emerald-400 font-black rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 uppercase italic text-xl">
                Invest {CURRENCY_SYMBOL}100 <ArrowRight size={20} />
              </button>
              <button className="px-12 py-4 border-2 border-slate-950 text-slate-950 font-black rounded-2xl hover:bg-slate-950/10 transition-all uppercase tracking-widest text-sm">
                Full Dossier
              </button>
            </div>
          </div>
          <div className="bg-slate-950/10 border border-slate-950/20 rounded-[2.5rem] p-10 space-y-6">
             {[
               { label: 'Hyper Multiplier', sub: 'Fixed 3.0x on all extraction missions', icon: TrendingUp },
               { label: 'Priority Payout', sub: 'Instant verification for expert assets', icon: Zap },
               { label: 'Elite Ops Only', sub: 'Locked restricted-game pool access', icon: Gamepad2 }
             ].map((benefit, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950/20 flex items-center justify-center text-slate-950 shrink-0 border border-slate-950/10">
                    <benefit.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight italic leading-tight">{benefit.label}</h4>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60 mt-1">{benefit.sub}</p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Zap({ size, className }: { size: number; className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M4 14.71 14.71 4 10 14.71h10L9.29 20 14 9.29z"/>
    </svg>
  );
}
