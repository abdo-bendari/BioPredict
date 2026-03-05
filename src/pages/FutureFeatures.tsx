import React from 'react';
import { motion } from 'motion/react';
import { Activity, Zap, Brain, Microscope, Smartphone, Database, ArrowRight } from 'lucide-react';

export const FutureFeatures: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-background-light">
      {/* Simple Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <button onClick={() => onNavigate('landing')} className="flex items-center gap-2">
            <Activity className="text-primary w-6 h-6" />
            <span className="text-xl font-bold tracking-tight text-text-main">BioPredict</span>
          </button>
          <button onClick={() => onNavigate('landing')} className="text-sm font-bold text-primary">Back to Home</button>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 space-y-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
              <Zap className="text-primary w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Product Roadmap</span>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 leading-tight">
              The Future of <br/>
              <span className="text-primary">Medical Intelligence.</span>
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              We are constantly pushing the boundaries of what's possible in diagnostic AI. Here's a look at what's coming next to the BioPredict platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Multi-Organ Support',
                desc: 'Expanding our diagnostic engine to support parathyroid, lymph node, and salivary gland analysis.',
                icon: Microscope,
                status: 'In Development',
                color: 'bg-blue-50 text-blue-600'
              },
              {
                title: 'Predictive Biopsy Outcomes',
                desc: 'Advanced neural networks that predict the likelihood of malignancy with genomic-level precision.',
                icon: Brain,
                status: 'Research Phase',
                color: 'bg-purple-50 text-purple-600'
              },
              {
                title: 'Mobile Patient Companion',
                desc: 'A dedicated mobile app for patients to track their thyroid health and communicate with specialists.',
                icon: Smartphone,
                status: 'Q3 2024',
                color: 'bg-emerald-50 text-emerald-600'
              },
              {
                title: 'Global Health Integration',
                desc: 'Seamless FHIR and HL7 integration with major hospital systems worldwide for instant data sync.',
                icon: Database,
                status: 'Beta Testing',
                color: 'bg-orange-50 text-orange-600'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm space-y-6"
              >
                <div className="flex justify-between items-start">
                  <div className={cn("p-4 rounded-2xl", feature.color)}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-100 text-slate-500 rounded-full">
                    {feature.status}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed">{feature.desc}</p>
                </div>
                <button className="flex items-center gap-2 text-primary font-bold text-sm group">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary rounded-[40px] p-12 text-center text-white space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <h2 className="text-3xl font-bold">Have a feature request?</h2>
            <p className="text-white/80 max-w-xl mx-auto">We build BioPredict for the medical community. If you have an idea that can improve diagnostic workflows, we want to hear it.</p>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-xl"
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
