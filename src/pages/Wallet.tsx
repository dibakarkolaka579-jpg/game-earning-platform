/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Banknote, 
  Smartphone,
  Info,
  Clock,
  CheckCircle2,
  AlertCircle,
  Zap,
  Loader2
} from 'lucide-react';
import { CURRENCY_SYMBOL } from '../constants';

export default function WalletPage() {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState<'phonepe' | 'bank' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const balancePoints = 750;
  const balanceCurrency = (balancePoints / 1000).toFixed(2);

  const handleWithdrawal = () => {
    if (!amount || !method) return;
    setIsProcessing(true);
    // Simulate instant verification
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="space-y-12 pb-20">
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-10 left-0 right-0 z-[100] flex justify-center px-6"
          >
            <div className="bg-emerald-500 text-slate-950 px-8 py-4 rounded-2xl font-black uppercase tracking-tighter italic flex items-center gap-4 shadow-2xl">
              <CheckCircle2 size={24} />
              Instant Transfer Initiated to {method === 'phonepe' ? 'PhonePe' : 'Bank'}!
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <h1 className="text-6xl font-black uppercase tracking-tight italic text-white flex items-center gap-4">
          The Vault
          <span className="text-xs bg-white/10 text-emerald-400 px-3 py-1 rounded-sm not-italic font-black tracking-widest border border-emerald-500/20">INSTANT ACTIVE</span>
        </h1>
        <p className="text-slate-500 text-sm mt-3 uppercase font-bold tracking-widest">Liquidate your current earnings into PhonePe or Bank account</p>
      </div>

      <div className="flex overflow-hidden bg-slate-900 border-y border-slate-800 py-3 relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-12"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <span className="text-emerald-400">● LIVE PAYOUT</span>
              <span className="text-white">user_88{i}x</span>
              <span>withdrew</span>
              <span className="text-emerald-400 italic italic tracking-tighter text-sm font-black">{CURRENCY_SYMBOL}{(Math.random() * 50 + 10).toFixed(2)}</span>
              <span className="text-white">via PhonePe</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 relative overflow-hidden p-12 bg-emerald-500 rounded-[3rem] text-slate-950 shadow-2xl shadow-emerald-500/20">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Wallet size={160} />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4">Secured Balance</p>
          <div className="flex items-baseline gap-4">
            <h2 className="text-[100px] font-black tracking-tighter leading-none italic">{CURRENCY_SYMBOL}{balanceCurrency}</h2>
            <span className="text-slate-950/60 font-bold uppercase tracking-widest">{balancePoints} PTS</span>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-5 bg-slate-950 text-emerald-400 font-black rounded-2xl flex items-center justify-center gap-3 uppercase tracking-widest hover:scale-105 transition-all">
              <ArrowDownLeft size={20} /> Top Up
            </button>
            <button className="px-10 py-5 border-2 border-slate-950 text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 uppercase tracking-widest hover:bg-slate-950/10 transition-all">
              <ArrowUpRight size={20} /> Withdrawal
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="card-dark group">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 text-emerald-400 flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform">
                <ArrowDownLeft size={32} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Yield</p>
                <p className="text-3xl font-black text-white italic">{CURRENCY_SYMBOL}124.50</p>
              </div>
            </div>
          </div>
          <div className="card-dark group">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 text-rose-500 flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform">
                <ArrowUpRight size={32} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Out</p>
                <p className="text-3xl font-black text-white italic">{CURRENCY_SYMBOL}50.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-black uppercase tracking-tight italic">Initiate Payout</h3>
          <div className="card-dark space-y-8">
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Extraction Amount</label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-400 font-black text-xl">{CURRENCY_SYMBOL}</span>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-12 pr-6 py-6 bg-slate-950 border-2 border-slate-800 rounded-2xl focus:outline-none focus:border-emerald-500/50 text-2xl font-black italic tracking-tighter transition-all"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Method of Transfer</label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setMethod('phonepe')}
                  className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-4 transition-all relative overflow-hidden ${
                    method === 'phonepe' ? 'border-emerald-500 bg-emerald-500/5 text-emerald-400' : 'border-slate-800 bg-slate-950 text-slate-500 hover:border-slate-600'
                  }`}
                >
                  <div className="absolute top-2 right-2 flex items-center gap-1 text-[8px] font-black text-emerald-400 opacity-60">
                    <Zap size={8} fill="currentColor" /> INSTANT
                  </div>
                  <Smartphone size={32} />
                  <span className="text-[10px] font-black uppercase tracking-widest">PhonePe / UPI</span>
                </button>
                <button 
                  onClick={() => setMethod('bank')}
                  className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-4 transition-all ${
                    method === 'bank' ? 'border-emerald-500 bg-emerald-500/5 text-emerald-400' : 'border-slate-800 bg-slate-950 text-slate-500 hover:border-slate-600'
                  }`}
                >
                  <Banknote size={32} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Bank Direct</span>
                </button>
              </div>
            </div>

            <button 
              onClick={handleWithdrawal}
              className="w-full py-6 bg-emerald-500 text-slate-950 font-black text-xl rounded-2xl hover:bg-emerald-400 transition-all uppercase tracking-tighter italic disabled:opacity-30 disabled:grayscale flex items-center justify-center gap-3" 
              disabled={!amount || !method || isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 size={24} className="animate-spin" />
                  Verifying Transaction...
                </>
              ) : (
                'Confirm Extraction'
              )}
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-black uppercase tracking-tight italic">Audit Log</h3>
          <div className="space-y-4">
            {[
              { type: 'earn', title: 'Ad Revenue: Alpha', date: 'Oct 24, 10:20 AM', amount: '+10', status: 'completed' },
              { type: 'withdraw', title: 'PhonePe: Out', date: 'Oct 23, 04:15 PM', amount: '-500', status: 'pending' },
              { type: 'earn', title: 'Legacy Lvl 4: Bonus', date: 'Oct 22, 09:30 PM', amount: '+50', status: 'completed' },
              { type: 'earn', title: 'Monthly Retainer', date: 'Oct 20, 11:00 AM', amount: '+100', status: 'failed' },
            ].map((tx, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-[2rem] flex items-center justify-between group hover:border-slate-700 transition-all">
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-950 border border-slate-800 ${
                    tx.type === 'earn' ? 'text-emerald-400' : 'text-rose-500'
                  }`}>
                    {tx.type === 'earn' ? <ArrowDownLeft size={24} /> : <ArrowUpRight size={24} />}
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-tight text-white">{tx.title}</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-xl font-black italic tracking-tighter ${tx.type === 'earn' ? 'text-emerald-400' : 'text-rose-500'}`}>{tx.amount} PTS</p>
                  <div className="flex items-center justify-end gap-2 mt-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      tx.status === 'completed' ? 'bg-emerald-500' : tx.status === 'pending' ? 'bg-amber-500' : 'bg-rose-500'
                    }`}></span>
                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{tx.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
