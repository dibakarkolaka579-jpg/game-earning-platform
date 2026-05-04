/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  User as UserIcon, 
  Mail, 
  ShieldCheck, 
  Smartphone, 
  Banknote, 
  Settings, 
  LogOut,
  ChevronRight,
  Bell,
  HelpCircle,
  FileText,
  Clock,
  Trophy,
  Plus,
  Lock
} from 'lucide-react';
import { CURRENCY_SYMBOL } from '../constants';

export default function ProfilePage() {
  const user = {
    displayName: 'Alex Revenant',
    email: 'alex.r@protocol.io',
    phone: '+91 9876543210',
    upiId: '9820-EX-PRO',
    bankAccount: 'HDFC **** 8821',
    level: 5,
    tasksCompleted: 142
  };

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="relative group">
          <div className="w-40 h-40 rounded-[2.5rem] bg-emerald-500 flex items-center justify-center border-4 border-slate-950 shadow-2xl relative z-10 group-hover:rotate-6 transition-transform duration-500">
            <UserIcon size={80} className="text-slate-950" />
          </div>
          <div className="absolute inset-0 bg-slate-800 rounded-[2.5rem] translate-x-3 translate-y-3"></div>
          <button className="absolute -bottom-2 -right-2 p-3 bg-white text-slate-950 rounded-xl shadow-lg z-20 hover:scale-110 transition-transform">
            <Settings size={20} />
          </button>
        </div>
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
            <h1 className="text-5xl font-black uppercase tracking-tighter italic text-white">{user.displayName}</h1>
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-sm">VERIFIED</span>
          </div>
          <p className="text-slate-500 text-lg font-bold uppercase tracking-widest">Master Extractor • Lv. {user.level}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-black text-white uppercase tracking-widest">{user.email}</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-black text-white uppercase tracking-widest">ID: 8829-X</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Completed', value: user.tasksCompleted.toString(), icon: ShieldCheck, color: 'text-emerald-400' },
          { label: 'Avg Payout', value: '12m', icon: Clock, color: 'text-blue-400' },
          { label: 'Reputation', value: '98%', icon: ShieldCheck, color: 'text-purple-400' },
          { label: 'Rank', size: 32, value: '#42', icon: Trophy, color: 'text-amber-400' },
        ].map((stat, i) => (
          <div key={i} className="card-dark group hover:border-slate-700 transition-all">
            <div className="flex items-center gap-6">
              <stat.icon className={`${stat.color} group-hover:scale-110 transition-transform`} size={32} />
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-black text-white italic">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <h3 className="text-2xl font-black uppercase tracking-tight italic text-white">Security Protocol</h3>
           <div className="card-dark space-y-6">
             <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between group hover:border-emerald-500/30 transition-all cursor-pointer">
               <div className="flex items-center gap-6">
                 <Smartphone size={32} className="text-slate-500 group-hover:text-emerald-400 transition-colors" />
                 <div>
                   <h4 className="text-lg font-black uppercase tracking-tight text-white mb-1 italic">Identity Protection</h4>
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">2-Factor Auth Active</p>
                 </div>
               </div>
               <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
                 <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
               </div>
             </div>

             <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between group hover:border-emerald-500/30 transition-all cursor-pointer">
               <div className="flex items-center gap-6">
                 <Lock size={32} className="text-slate-500 group-hover:text-emerald-400 transition-colors" />
                 <div>
                   <h4 className="text-lg font-black uppercase tracking-tight text-white mb-1 italic">Private Sessions</h4>
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Hide activity from local pool</p>
                 </div>
               </div>
               <div className="w-12 h-6 bg-slate-800 rounded-full relative">
                 <div className="absolute left-1 top-1 w-4 h-4 bg-slate-600 rounded-full shadow-sm"></div>
               </div>
             </div>

             <button className="w-full py-6 border-2 border-slate-800 text-slate-500 font-black rounded-2xl hover:border-slate-600 hover:text-white transition-all uppercase tracking-widest text-sm">
                Advanced Security Dossier
             </button>
           </div>
        </div>

        <div className="space-y-8">
           <h3 className="text-2xl font-black uppercase tracking-tight italic text-white">Verified Methods</h3>
           <div className="card-dark space-y-6">
             <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between group hover:border-emerald-500/30 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-10 bg-slate-900 border border-slate-800 rounded flex items-center justify-center p-2">
                    <div className="w-full h-full bg-emerald-500/10 rounded flex items-center justify-center text-[8px] font-black italic text-emerald-400">BANK</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-tight text-white mb-1 italic">{user.bankAccount}</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Main Extraction Target</p>
                  </div>
                </div>
                <button className="text-slate-500 hover:text-rose-500 transition-colors">
                  <LogOut size={20} />
                </button>
             </div>

             <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between group hover:border-emerald-500/30 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-10 bg-slate-900 border border-slate-800 rounded flex items-center justify-center p-2">
                    <div className="w-full h-full bg-purple-500/10 rounded flex items-center justify-center text-[8px] font-black italic text-purple-400">PHONEPE</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-tight text-white mb-1 italic">{user.upiId}</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Secondary UPI Protocol</p>
                  </div>
                </div>
                <button className="text-slate-500 hover:text-rose-500 transition-colors">
                  <LogOut size={20} />
                </button>
             </div>

             <button className="w-full py-6 bg-slate-950 border-2 border-dashed border-slate-800 text-slate-500 font-black rounded-2xl hover:border-emerald-500/50 hover:text-emerald-400 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                <Plus size={20} /> Add Payment Method
             </button>
           </div>
        </div>
      </div>

      <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex items-center gap-8">
          <button className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-emerald-400 transition-colors font-mono">Privacy Policy</button>
          <button className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-emerald-400 transition-colors font-mono">Terms of Ops</button>
          <button className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-emerald-400 transition-colors font-mono">Support Dossier</button>
        </div>
        <button className="px-10 py-5 bg-rose-500 text-slate-950 font-black rounded-2xl hover:bg-rose-600 transition-all uppercase italic text-xl tracking-tighter flex items-center gap-3">
          <LogOut size={24} /> Terminate Session
        </button>
      </div>
    </div>
  );
}

function SettingRow({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
        <p className="text-sm font-medium text-gray-900 mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function MenuButton({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <button className="w-full p-5 bg-white rounded-3xl border border-gray-100 flex items-center justify-between group hover:border-indigo-100 hover:bg-indigo-50/20 transition-all">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-white group-hover:text-indigo-600 border border-transparent group-hover:border-indigo-100 flex items-center justify-center text-gray-400 transition-all">
          <Icon size={20} />
        </div>
        <span className="text-sm font-medium text-gray-700 transition-colors">{label}</span>
      </div>
      <ChevronRight size={18} className="text-gray-300 group-hover:text-indigo-400 transition-all" />
    </button>
  );
}
