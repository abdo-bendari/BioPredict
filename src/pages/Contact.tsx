import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 2000);
  };

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
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                  Get in Touch with <br/>
                  <span className="text-primary">Our Experts.</span>
                </h1>
                <p className="text-xl text-text-muted leading-relaxed">
                  Whether you're a healthcare provider looking for a demo or a researcher interested in collaboration, we're here to help.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Mail, title: 'Email Us', detail: 'contact@biopredict.ai', sub: 'Response within 24 hours' },
                  { icon: Phone, title: 'Call Us', detail: '+1 (555) 000-0000', sub: 'Mon-Fri, 9am-6pm EST' },
                  { icon: MapPin, title: 'Visit Us', detail: '123 Innovation Way', sub: 'Cambridge, MA 02139' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <item.icon className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-lg text-slate-700">{item.detail}</p>
                      <p className="text-xs text-text-muted font-medium uppercase tracking-wider">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-200 shadow-2xl relative">
              {isSent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="text-emerald-600 w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                    <p className="text-text-muted">Thank you for reaching out. One of our specialists will contact you shortly.</p>
                  </div>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">First Name</label>
                      <input required type="text" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-primary transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Last Name</label>
                      <input required type="text" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-primary transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input required type="email" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Organization</label>
                    <input type="text" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                    <textarea required className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-primary transition-all h-32 resize-none"></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
