/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  LayoutDashboard, 
  Wallet, 
  Gamepad2, 
  CheckSquare, 
  User as UserIcon,
  TrendingUp,
  Award,
  Zap,
  ArrowRight
} from 'lucide-react';
import { TaskTier, User } from './types';
import { CURRENCY_SYMBOL, TIER_CONFIG } from './constants';

import TasksPage from './pages/Tasks';
import WalletPage from './pages/Wallet';
import GamesPage from './pages/Games';
import ProfilePage from './pages/Profile';

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className="h-full"
  >
    {children}
  </motion.div>
);

const Dashboard = ({ user }: { user: User }) => (
  <PageTransition>
    <div className="space-y-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h1 className="text-[80px] md:text-[120px] font-black leading-[0.85] tracking-tight uppercase italic text-white">
            Get<br/>Paid.
          </h1>
          <p className="text-slate-400 text-lg leading-snug mt-6 max-w-md">
            Earn real money by completing tasks. Every point is a step closer to your bank balance.
          </p>
        </div>
        <div className="flex flex-col items-end">
           <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold mb-2">Account Badge</span>
           <div className="px-4 py-2 bg-emerald-500 text-slate-950 text-xs font-black rounded-sm rotate-1 flex items-center gap-2 uppercase tracking-wide">
             <Zap size={14} className="fill-current" />
             {TIER_CONFIG[user.currentTier].label} Status
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Available Balance', value: `${CURRENCY_SYMBOL}${(user.balance / 1000).toFixed(2)}`, sub: `${user.balance} accumulated points`, icon: Wallet, color: 'text-emerald-400' },
          { label: 'Current Level', value: `Lv. ${user.level}`, sub: `${user.experience}/1000 EXP to next tier`, icon: TrendingUp, color: 'text-blue-400' },
          { label: 'Tasks Verified', value: user.tasksCompleted, sub: 'Legit tasks completed', icon: Award, color: 'text-purple-400' },
        ].map((stat, i) => (
          <div key={i} className="card-dark group">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
                <h3 className={`mt-4 text-4xl font-black uppercase tracking-tight ${stat.color}`}>{stat.value}</h3>
                <p className="mt-2 text-xs font-medium text-slate-500">{stat.sub}</p>
              </div>
              <stat.icon className="text-slate-700 group-hover:text-slate-500 transition-colors" size={28} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card-dark">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Tier Scaling</h2>
          <div className="space-y-6">
            {Object.entries(TIER_CONFIG).map(([tier, config]) => {
              const isCurrent = user.currentTier === tier;
              return (
                <div key={tier} className={`group p-6 rounded-2xl border transition-all ${isCurrent ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-slate-800 bg-slate-900/50 grayscale opacity-60 hover:grayscale-0 hover:opacity-100'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold uppercase tracking-wide text-white">{config.label}</span>
                    {isCurrent && <span className="text-[10px] bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-sm font-black uppercase">ACTIVE</span>}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">{config.unlockCriteria}</p>
                  {!isCurrent && (
                    <Link to="/tasks" className="mt-4 flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase tracking-widest group-hover:gap-3 transition-all">
                      Unlock Now <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="card-dark flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black uppercase tracking-tight">Active Ops</h2>
              <Link to="/tasks" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors uppercase tracking-widest">View All</Link>
            </div>
            <div className="space-y-4">
               <Link to="/tasks" className="group flex items-center p-5 bg-slate-950 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all">
                 <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 mr-4 group-hover:scale-110 transition-transform">
                   <CheckSquare size={24} />
                 </div>
                 <div className="flex-1">
                   <h3 className="text-sm font-black uppercase tracking-wide text-white">Watch Video</h3>
                   <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">+10 POINTS • 30S</p>
                 </div>
                 <ArrowRight size={18} className="text-slate-700 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
               </Link>
               <Link to="/games" className="group flex items-center p-5 bg-slate-950 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all">
                 <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 mr-4 group-hover:scale-110 transition-transform">
                   <Gamepad2 size={24} />
                 </div>
                 <div className="flex-1">
                   <h3 className="text-sm font-black uppercase tracking-wide text-white">Simple Puzzle</h3>
                   <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">+50 POINTS • LEVEL 1</p>
                 </div>
                 <ArrowRight size={18} className="text-slate-700 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
               </Link>
            </div>
          </div>
          
          <div className="p-8 bg-emerald-500 rounded-3xl text-slate-950 flex items-center justify-between group cursor-pointer overflow-hidden relative">
            <div className="absolute right-0 top-0 opacity-10 -rotate-12 translate-x-1/4 -translate-y-1/4">
               <TrendingUp size={160} />
            </div>
            <div className="relative z-10">
               <h3 className="text-2xl font-black uppercase tracking-tighter italic">Instant<br/>Withdrawal</h3>
               <p className="text-xs font-bold uppercase tracking-widest mt-2 opacity-70">Payouts verified in seconds</p>
            </div>
            <Link to="/wallet" className="relative z-10 w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-all">
               <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </PageTransition>
);

export default function App() {
  const [user, setUser] = useState<User>({
    uid: '123',
    displayName: 'Player One',
    email: 'player@example.com',
    balance: 750,
    currentTier: TaskTier.BEGINNER,
    level: 2,
    experience: 240,
    tasksCompleted: 12,
    withdrawnTotal: 0,
  });

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col md:flex-row font-sans uppercase-none">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-900 p-8 flex flex-col hidden md:flex h-screen sticky top-0 bg-slate-950">
          <div className="flex items-center gap-3 mb-12 px-2">
            <div className="w-8 h-8 rounded-sm bg-emerald-500 rotate-45 flex items-center justify-center text-slate-950 font-black">
              <span className="-rotate-45">E</span>
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase">Earnify.</span>
          </div>

          <nav className="flex-1 space-y-2">
            {[
              { to: '/', icon: LayoutDashboard, label: 'Board' },
              { to: '/tasks', icon: CheckSquare, label: 'Tasks' },
              { to: '/games', icon: Gamepad2, label: 'Games' },
              { to: '/wallet', icon: Wallet, label: 'Wallet' },
              { to: '/profile', icon: UserIcon, label: 'User' },
            ].map((item) => (
              <NavLink key={item.to} to={item.to} icon={item.icon} label={item.label} />
            ))}
          </nav>

          <footer className="mt-auto pt-8 border-t border-slate-900">
             <div className="flex flex-col gap-1 mb-4">
                <span className="text-[10px] text-slate-500 font-bold tracking-widest">LIVE POOL</span>
                <span className="text-xl font-black text-emerald-400">{CURRENCY_SYMBOL}1,248.50</span>
             </div>
             <div className="flex items-center gap-2 text-[8px] font-bold text-slate-600 tracking-widest uppercase">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                Secure Gateway Active
             </div>
          </footer>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12 max-w-6xl mx-auto w-full overflow-x-hidden">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Dashboard user={user} />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/wallet" element={<WalletPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Mobile Nav */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 flex justify-around p-4 z-50 backdrop-blur-xl bg-opacity-80">
          <MobileNavLink to="/" icon={LayoutDashboard} />
          <MobileNavLink to="/tasks" icon={CheckSquare} />
          <MobileNavLink to="/games" icon={Gamepad2} />
          <MobileNavLink to="/wallet" icon={Wallet} />
          <MobileNavLink to="/profile" icon={UserIcon} />
        </nav>
      </div>
    </Router>
  );
}

function NavLink({ to, icon: Icon, label }: { to: string; icon: any; label: string; key?: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`flex items-center gap-4 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
        isActive 
          ? 'bg-slate-900 text-emerald-400 border border-slate-800 shadow-xl' 
          : 'text-slate-500 hover:text-white hover:bg-slate-900/50'
      }`}
    >
      <Icon size={18} className={isActive ? 'text-emerald-400' : 'text-slate-600'} />
      {label}
    </Link>
  );
}

function MobileNavLink({ to, icon: Icon }: { to: string; icon: any }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`p-3 rounded-2xl transition-all ${isActive ? 'text-emerald-400 bg-slate-800 shadow-inner' : 'text-slate-600 hover:text-slate-300'}`}>
      <Icon size={22} />
    </Link>
  );
}
