import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
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
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await api.getHistory();
        if (res.status === 'success') {
          setData(res.data.history);
        }
      } catch (err) {
        console.error('Failed to fetch history', err);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

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
            {data.map((item, i) => (
              <motion.div 
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[32px] border border-slate-200 p-6 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl hover:border-primary/20 transition-all group"
              >
                <div className="w-full md:w-48 aspect-video rounded-2xl overflow-hidden bg-slate-900 shrink-0">
                  <Activity className="w-full h-full text-primary p-12 opacity-20" />
                </div>
                
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Action</p>
                    <p className="font-bold text-slate-900">{item.action}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</p>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-primary" />
                      <p className="font-bold text-slate-700">{new Date(item.timestamp).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="space-y-1 col-span-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Details</p>
                    <p className="text-xs text-text-muted">{JSON.stringify(item.details)}</p>
                  </div>
                </div>

                <button className="w-full md:w-auto px-6 py-3 bg-slate-50 text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                  View Detail
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
