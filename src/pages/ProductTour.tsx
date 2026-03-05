import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Microscope,
  Cpu,
  Database,
  LineChart
} from 'lucide-react';

interface ProductTourProps {
  onNavigate: (page: any) => void;
}

export const ProductTour: React.FC<ProductTourProps> = ({ onNavigate }) => {
  const steps = [
    {
      title: "AI Image Segmentation",
      desc: "Our neural network automatically identifies and segments thyroid nodules with sub-millimeter precision.",
      icon: Microscope,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Feature Extraction",
      desc: "The system analyzes composition, echogenicity, shape, margins, and echogenic foci according to TI-RADS standards.",
      icon: Cpu,
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Instant Classification",
      desc: "Receive a TI-RADS score and malignancy risk assessment in under 3 seconds.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      title: "Automated Reporting",
      desc: "Generate professional, standardized reports that can be directly integrated into hospital EMR systems.",
      icon: Database,
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <div className="min-h-screen bg-background-light">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <button onClick={() => onNavigate('landing')} className="flex items-center gap-2">
            <Activity className="text-primary w-6 h-6" />
            <span className="text-xl font-bold tracking-tight text-text-main">BioPredict</span>
          </button>
          <button 
            onClick={() => onNavigate('landing')}
            className="text-sm font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
              Experience the Future of <br/>
              <span className="text-primary">Thyroid Diagnostics</span>
            </h1>
            <p className="text-lg text-text-muted">
              See how our AI-powered platform streamlines the diagnostic workflow for radiologists and improves patient outcomes.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="relative max-w-5xl mx-auto aspect-video bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group cursor-pointer mb-24">
            <img 
              src="https://picsum.photos/seed/medical-tech/1920/1080" 
              alt="Product Tour" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform">
                <Play className="text-white w-10 h-10 fill-current" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-white font-bold text-xl">Platform Overview</p>
                <p className="text-white/60 text-sm">Duration: 2:45</p>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold">4K ULTRA HD</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-slate-200 hover:border-primary/20 hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className={`w-7 h-7 ${step.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-slate-900 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Ready to transform your <br/>
                clinical workflow?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => onNavigate('signup')}
                  className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                >
                  Request a Demo
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Activity className="text-primary w-5 h-5" />
            <span className="font-bold text-slate-900">BioPredict AI</span>
          </div>
          <p className="text-sm text-text-muted">© 2024 BioPredict AI Systems. All rights reserved.</p>
          <div className="flex gap-8">
            <button onClick={() => onNavigate('landing')} className="text-sm font-bold text-text-muted hover:text-primary transition-colors">Home</button>
            <button onClick={() => onNavigate('about')} className="text-sm font-bold text-text-muted hover:text-primary transition-colors">About</button>
            <button onClick={() => onNavigate('contact')} className="text-sm font-bold text-text-muted hover:text-primary transition-colors">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
};
