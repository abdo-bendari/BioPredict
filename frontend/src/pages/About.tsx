import React from 'react';
import { motion } from 'motion/react';
import { Activity, Users, Globe, Award, ShieldCheck, ArrowRight } from 'lucide-react';

export const About: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
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
        <div className="max-w-4xl mx-auto px-4 space-y-20">
          {/* Hero */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-slate-900 leading-tight">
              Pioneering the Future of <br/>
              <span className="text-primary">Thyroid Diagnostics.</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              BioPredict is a medical technology company dedicated to improving patient outcomes through advanced artificial intelligence and explainable neural networks.
            </p>
          </div>

          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-text-muted leading-relaxed">
                We believe that every patient deserves access to high-precision diagnostic tools. Our mission is to bridge the gap between complex medical imaging and actionable clinical insights, reducing unnecessary biopsies and accelerating treatment paths.
              </p>
              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, text: 'FDA Cleared Algorithms' },
                  { icon: Globe, text: 'Global Clinical Network' },
                  { icon: Award, text: 'Award-winning AI Research' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="text-primary w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
                alt="Medical Research" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <p className="text-4xl font-bold text-primary">99.4%</p>
                <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Diagnostic Accuracy</p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900">Led by Experts</h2>
              <p className="text-text-muted">A multidisciplinary team of radiologists, AI researchers, and engineers.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'Dr. Sarah Chen', role: 'Chief Medical Officer', img: 'https://i.pravatar.cc/150?u=sarah' },
                { name: 'Marcus Thorne', role: 'Head of AI', img: 'https://i.pravatar.cc/150?u=marcus' },
                { name: 'Elena Rodriguez', role: 'Lead Engineer', img: 'https://i.pravatar.cc/150?u=elena' },
                { name: 'Dr. James Wilson', role: 'Clinical Advisor', img: 'https://i.pravatar.cc/150?u=james' },
              ].map((member, i) => (
                <div key={i} className="text-center space-y-3">
                  <img src={member.img} alt={member.name} className="w-24 h-24 rounded-2xl mx-auto object-cover border-2 border-primary/10" />
                  <div>
                    <p className="font-bold text-slate-900">{member.name}</p>
                    <p className="text-xs text-text-muted">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
