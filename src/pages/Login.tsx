import React, { useState } from 'react';
import { 
  Activity, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ShieldCheck,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export const Login: React.FC<{ onLogin: () => void; onSignup: () => void }> = ({ onLogin, onSignup }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background-light flex items-center justify-center p-4 relative">
      <button 
        onClick={() => window.location.href = '/'} 
        className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-text-muted hover:text-primary transition-all group"
      >
        <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>
      <div className="absolute top-0 left-0 w-full h-full radial-glow pointer-events-none opacity-50"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[1100px] bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100"
      >
        {/* Left Side: Branding/Visual */}
        <div className="md:w-1/2 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Activity className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">BioPredict</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                Advancing Thyroid <br/>
                Diagnostics with <br/>
                <span className="text-primary-light">Explainable AI.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-sm leading-relaxed">
                Join thousands of healthcare professionals using our FDA-cleared platform for high-precision nodule detection.
              </p>
            </div>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <ShieldCheck className="text-primary-light w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold">HIPAA Compliant</p>
                <p className="text-xs text-white/40">Enterprise-grade security standards</p>
              </div>
            </div>
            <p className="text-xs text-white/40">© 2024 BioPredict AI Systems. All rights reserved.</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 p-12 md:p-20 bg-white">
          <div className="max-w-sm mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
              <p className="text-text-muted">Enter your credentials to access the clinical portal.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    type="email" 
                    placeholder="dr.chen@hospital.org"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Password</label>
                  <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot Password?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium"
                  />
                  <button 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
              <label htmlFor="remember" className="text-sm text-text-muted font-medium">Remember this device for 30 days</label>
            </div>

            <button 
              onClick={onLogin}
              className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 transform active:scale-[0.98]"
            >
              Log In to Portal
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-bold text-sm">
                <Globe className="w-4 h-4 text-slate-400" />
                SSO Login
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-slate-400" />
                SmartCard
              </button>
            </div>

            <p className="text-center text-sm text-text-muted">
              Don't have an account? <button onClick={onSignup} className="text-primary font-bold hover:underline">Request Access</button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
