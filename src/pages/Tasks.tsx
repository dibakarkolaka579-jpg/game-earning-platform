/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Brain, 
  ClipboardList, 
  Trophy, 
  Lock, 
  CheckCircle2,
  ChevronRight,
  Info
} from 'lucide-react';
import { TaskTier } from '../types';
import { TASKS, TIER_CONFIG } from '../constants';

export default function TasksPage() {
  const [selectedTier, setSelectedTier] = useState<TaskTier>(TaskTier.BEGINNER);
  
  const currentUserTier = TaskTier.BEGINNER; 

  const filteredTasks = TASKS.filter(task => task.tier === selectedTier);

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-6xl font-black uppercase tracking-tight italic">Operations</h1>
          <p className="text-slate-500 text-sm mt-3 uppercase font-bold tracking-widest">Select your combat tier to begin extraction</p>
        </div>
        
        <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-xl w-full md:w-auto">
          {Object.entries(TIER_CONFIG).map(([tier, config]) => {
            const isActive = selectedTier === tier;
            const isLocked = tier === TaskTier.EXPERT;
            const canShowLock = isLocked && (tier as TaskTier) !== currentUserTier;
            
            return (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier as TaskTier)}
                className={`flex-1 md:flex-none px-6 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                  isActive 
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' 
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                {config.label}
                {canShowLock && <Lock size={12} />}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div 
        key={selectedTier}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`card-dark overflow-hidden relative group ${
          selectedTier === TaskTier.BEGINNER ? 'border-emerald-500/30' :
          selectedTier === TaskTier.INTERMEDIATE ? 'border-blue-500/30' :
          'border-purple-500/30'
        }`}
      >
        <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 translate-x-1/4 -translate-y-1/4">
          {selectedTier === TaskTier.BEGINNER && <Play size={200} />}
          {selectedTier === TaskTier.INTERMEDIATE && <Brain size={200} />}
          {selectedTier === TaskTier.EXPERT && <Trophy size={200} />}
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
             <span className={`px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest ${
               selectedTier === TaskTier.BEGINNER ? 'bg-emerald-500 text-slate-950' :
               selectedTier === TaskTier.INTERMEDIATE ? 'bg-blue-500 text-white' :
               'bg-purple-500 text-white'
             }`}>
               Tier Intelligence
             </span>
             <div className="flex items-center gap-2">
               <span className="text-[10px] font-black text-slate-500 tracking-widest">MULTIPLIER</span>
               <span className="text-xl font-black text-white italic">{TIER_CONFIG[selectedTier].multiplier}X</span>
             </div>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">{TIER_CONFIG[selectedTier].label} Protocol</h2>
          <p className="text-slate-400 text-sm mt-4 max-w-xl leading-relaxed font-medium">
            {TIER_CONFIG[selectedTier].unlockCriteria}. Complete assignments in this tier to maintain your reputation and scale your bankroll.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <motion.div
              layout
              key={task.id}
              whileHover={{ scale: 1.02 }}
              className="group p-8 bg-slate-900 border border-slate-800 rounded-[2rem] hover:border-emerald-500/50 hover:bg-slate-800/30 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                  {task.type === 'video' && <Play size={24} />}
                  {task.type === 'quiz' && <Brain size={24} />}
                  {task.type === 'survey' && <ClipboardList size={24} />}
                  {task.type === 'game' && <Trophy size={24} />}
                  {task.type === 'social' && <CheckCircle2 size={24} />}
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black italic group-hover:text-emerald-400 transition-colors text-white">+{task.points}</p>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Pts Ready</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2">{task.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-medium line-clamp-2">{task.description}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">
                <span className="text-[10px] font-black text-slate-500 group-hover:text-white uppercase tracking-[0.2em] transition-colors">
                  MISSION: {task.type}
                </span>
                <span className="text-[10px] font-black text-emerald-400 opacity-0 group-hover:opacity-100 flex items-center gap-2 uppercase tracking-widest transition-all">
                  EXECUTE <ChevronRight size={14} />
                </span>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center card-dark opacity-50">
            <p className="text-slate-500 font-bold uppercase tracking-widest">No active deployments identified</p>
          </div>
        )}
      </div>
    </div>
  );
}
