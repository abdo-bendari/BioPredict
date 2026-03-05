import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Calendar, 
  FileText, 
  ChevronRight, 
  Search, 
  Filter,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { cn } from '../types';

const scanHistory = [
  {
    id: 'BP-7742',
    date: 'Oct 24, 2024',
    type: 'Thyroid Ultrasound',
    risk: 'Moderate',
    status: 'Completed',
    tirads: '3',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsZyBESF1tWr0sNkVlNfGeGZpLx_EDD6bn4S7IUp-ZU_LQCLn0qMi8OVDSK18SnQoxMwo1QgV3U5pyBsi1osO13nc7rw3pt4dsZ2SVVNVILVQnMx7q6uXhRGwA0Ho5lVvIaE_zbQWxuCkWlj1FpzEJu4xWA_FV1myrFZSxTTKf3iDMgkmnjc-OinOJNjt7eUh4VlobneyV2CAUYLXUsEQaNoE6lgJs_urSxXN-0y7ze19lunIT3omdmBdUAssYt6GlRQkSBZhSJNqW'
  },
  {
    id: 'BP-6612',
    date: 'Aug 12, 2024',
    type: 'Follow-up Scan',
    risk: 'Low',
    status: 'Completed',
    tirads: '2',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsZyBESF1tWr0sNkVlNfGeGZpLx_EDD6bn4S7IUp-ZU_LQCLn0qMi8OVDSK18SnQoxMwo1QgV3U5pyBsi1osO13nc7rw3pt4dsZ2SVVNVILVQnMx7q6uXhRGwA0Ho5lVvIaE_zbQWxuCkWlj1FpzEJu4xWA_FV1myrFZSxTTKf3iDMgkmnjc-OinOJNjt7eUh4VlobneyV2CAUYLXUsEQaNoE6lgJs_urSxXN-0y7ze19lunIT3omdmBdUAssYt6GlRQkSBZhSJNqW'
  },
  {
    id: 'BP-5521',
    date: 'May 05, 2024',
    type: 'Initial Screening',
    risk: 'High',
    status: 'Completed',
    tirads: '5',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsZyBESF1tWr0sNkVlNfGeGZpLx_EDD6bn4S7IUp-ZU_LQCLn0qMi8OVDSK18SnQoxMwo1QgV3U5pyBsi1osO13nc7rw3pt4dsZ2SVVNVILVQnMx7q6uXhRGwA0Ho5lVvIaE_zbQWxuCkWlj1FpzEJu4xWA_FV1myrFZSxTTKf3iDMgkmnjc-OinOJNjt7eUh4VlobneyV2CAUYLXUsEQaNoE6lgJs_urSxXN-0y7ze19lunIT3omdmBdUAssYt6GlRQkSBZhSJNqW'
  }
];

export const UserHistory: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-background-light">
      {/* Simple Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <button onClick={() => onNavigate('landing')} className="flex items-center gap-2">
            <Activity className="text-primary w-6 h-6" />
            <span className="text-xl font-bold tracking-tight text-text-main">BioPredict</span>
          </button>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('landing')} className="text-sm font-bold text-text-muted hover:text-primary transition-colors">Home</button>
            <button onClick={() => onNavigate('login')} className="text-sm font-bold text-primary">Doctor Portal</button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-slate-900">Scan History</h1>
              <p className="text-text-muted">View all your previous AI-powered thyroid analyses.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input type="text" placeholder="Search ID..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-primary w-48" />
              </div>
              <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-primary transition-all">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            {scanHistory.map((scan, i) => (
              <motion.div 
                key={scan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[32px] border border-slate-200 p-6 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl hover:border-primary/20 transition-all group"
              >
                <div className="w-full md:w-48 aspect-video rounded-2xl overflow-hidden bg-slate-900 shrink-0">
                  <img src={scan.img} alt="Scan" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scan ID</p>
                    <p className="font-bold text-slate-900">{scan.id}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</p>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-primary" />
                      <p className="font-bold text-slate-700">{scan.date}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Risk Level</p>
                    <div className={cn(
                      "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                      scan.risk === 'High' ? "bg-red-50 text-red-600" : 
                      scan.risk === 'Moderate' ? "bg-orange-50 text-orange-600" : "bg-emerald-50 text-emerald-600"
                    )}>
                      {scan.risk === 'High' ? <AlertCircle className="w-3 h-3" /> : 
                       scan.risk === 'Moderate' ? <Clock className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                      {scan.risk}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">TI-RADS</p>
                    <p className="font-bold text-slate-900">Score: {scan.tirads}</p>
                  </div>
                </div>

                <button className="w-full md:w-auto px-6 py-3 bg-slate-50 text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                  View Results
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="p-8 bg-primary/5 rounded-[40px] border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-900">Need a new analysis?</h3>
              <p className="text-sm text-text-muted">Upload your latest ultrasound for an instant AI-powered screening.</p>
            </div>
            <button 
              onClick={() => onNavigate('landing')}
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              Start New Scan
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
