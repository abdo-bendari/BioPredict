import React, { useState } from 'react';
import { api } from '../services/api';
import { 
  Stethoscope, 
  Building2, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  User, 
  Mail, 
  Briefcase, 
  ShieldCheck, 
  Lock,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../types';

export const Signup: React.FC<{ onComplete: (token: string) => void; onLogin: () => void }> = ({ onComplete, onLogin }) => {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<'individual' | 'organization' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    licenseId: '',
    specialization: 'Radiologist',
    password: '',
    passwordConfirm: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await api.signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        passwordConfirm: formData.passwordConfirm,
        role: 'user' // Default role
      });

      if (res.status === 'success') {
        onComplete(res.token);
      } else {
        setError(res.message || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-light flex items-center justify-center p-4 relative">
      <button 
        onClick={() => window.location.href = '/'} 
        className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-text-muted hover:text-primary transition-all group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>
      <div className="absolute top-0 left-0 w-full h-full radial-glow pointer-events-none opacity-50"></div>
      
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <Activity className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">BioPredict</span>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 px-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300",
                step >= s ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-white border border-slate-200 text-slate-400"
              )}>
                {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
              </div>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest",
                step >= s ? "text-primary" : "text-slate-400"
              )}>
                {s === 1 ? 'Account' : s === 2 ? 'Details' : 'Security'}
              </span>
            </div>
          ))}
          <div className="absolute left-1/2 -translate-x-1/2 w-48 h-0.5 bg-slate-100 -z-10 top-[11.5rem]">
            <div className={cn(
              "h-full bg-primary transition-all duration-500",
              step === 1 ? "w-0" : step === 2 ? "w-1/2" : "w-full"
            )}></div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-[32px] shadow-xl border border-slate-100 p-10 space-y-8"
            >
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-slate-900">Choose Account Type</h1>
                <p className="text-text-muted">Select the option that best describes your clinical practice.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button 
                  onClick={() => setAccountType('individual')}
                  className={cn(
                    "p-8 rounded-3xl border-2 transition-all text-left group relative overflow-hidden",
                    accountType === 'individual' ? "border-primary bg-primary/5" : "border-slate-100 hover:border-primary/30 hover:bg-slate-50"
                  )}
                >
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all",
                    accountType === 'individual' ? "bg-primary text-white" : "bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary"
                  )}>
                    <Stethoscope className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Individual Practitioner</h3>
                  <p className="text-sm text-text-muted leading-relaxed">For independent radiologists, endocrinologists, or private clinics.</p>
                  {accountType === 'individual' && <CheckCircle2 className="absolute top-6 right-6 text-primary w-6 h-6" />}
                </button>

                <button 
                  onClick={() => setAccountType('organization')}
                  className={cn(
                    "p-8 rounded-3xl border-2 transition-all text-left group relative overflow-hidden",
                    accountType === 'organization' ? "border-primary bg-primary/5" : "border-slate-100 hover:border-primary/30 hover:bg-slate-50"
                  )}
                >
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all",
                    accountType === 'organization' ? "bg-primary text-white" : "bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary"
                  )}>
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Healthcare Organization</h3>
                  <p className="text-sm text-text-muted leading-relaxed">For hospitals, multi-specialty centers, or diagnostic networks.</p>
                  {accountType === 'organization' && <CheckCircle2 className="absolute top-6 right-6 text-primary w-6 h-6" />}
                </button>
              </div>

              <button 
                disabled={!accountType}
                onClick={() => setStep(2)}
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Details
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-[32px] shadow-xl border border-slate-100 p-10 space-y-8"
            >
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-slate-900">Professional Details</h1>
                <p className="text-text-muted">Tell us more about yourself and your medical background.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Dr. Sarah Chen"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="sarah.chen@hospital.org"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Medical License ID</label>
                  <div className="relative">
                    <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      name="licenseId"
                      value={formData.licenseId}
                      onChange={handleInputChange}
                      placeholder="ML-8829102"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Specialization</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <select
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                    >
                      <option>Radiologist</option>
                      <option>Endocrinologist</option>
                      <option>General Surgeon</option>
                      <option>Oncologist</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="flex-[2] py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  Continue to Security
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-[32px] shadow-xl border border-slate-100 p-10 space-y-8"
            >
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-slate-900">Security Setup</h1>
                <p className="text-text-muted">Protect your account with a strong password and MFA.</p>
              </div>

              <div className="space-y-6">
                {error && <p className="text-red-500 text-sm text-center font-bold">{error}</p>}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Create Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="password"
                      name="passwordConfirm"
                      value={formData.passwordConfirm}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <ShieldCheck className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Two-Factor Authentication</p>
                        <p className="text-xs text-text-muted">Recommended for HIPAA compliance</p>
                      </div>
                    </div>
                    <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                  <label htmlFor="terms" className="text-xs text-text-muted leading-relaxed">
                    I agree to the <a href="#" className="text-primary font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-primary font-bold hover:underline">Privacy Policy</a>, including HIPAA data processing agreements.
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setStep(2)}
                  className="flex-1 py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button 
                  onClick={handleSignup}
                  disabled={loading}
                  className="flex-[2] py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Complete Registration'}
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center mt-8 text-sm text-text-muted">
          Already have an account? <button onClick={onLogin} className="text-primary font-bold hover:underline">Log In</button>
        </p>
      </div>
    </div>
  );
};
