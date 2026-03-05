import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  PlayCircle, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Microscope,
  Upload,
  FileText,
  Image as ImageIcon,
  Loader2,
  Lock,
  AlertCircle,
  Globe
} from 'lucide-react';
import { cn } from '../types';

interface LandingProps {
  onNavigate: (page: any) => void;
}

export const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  const [uploadStep, setUploadStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [files, setFiles] = useState<{ image: File | null }>({
    image: null,
  });
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    phone: '',
    medicalHistory: '',
    isSmoker: false,
  });
  const [symptomSearch, setSymptomSearch] = useState('');
  const [suggestedMeds, setSuggestedMeds] = useState<{ name: string; type: string; desc: string }[]>([]);

  const handleFileChange = (file: File | null) => {
    setFiles({ image: file });
    if (file) setUploadStep(2);
  };

  const handleDataSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setUploadStep(3);
    }, 3000);
  };

  const handleSymptomSearch = () => {
    if (!symptomSearch) return;
    // Mock medication suggestions
    const meds = [
      { name: 'Paracetamol', type: 'Painkiller', desc: 'Effective for mild to moderate pain and fever.' },
      { name: 'Ibuprofen', type: 'NSAID', desc: 'Reduces inflammation and relieves pain.' },
      { name: 'Levothyroxine', type: 'Hormone', desc: 'Commonly prescribed for hypothyroidism.' },
    ];
    setSuggestedMeds(meds);
  };

  return (
    <div className="min-h-screen bg-background-light overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10">
                <Activity className="text-primary w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-text-main">BioPredict</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => onNavigate('about')} className="text-sm font-medium text-text-muted hover:text-primary transition-colors">About Us</button>
              <button onClick={() => onNavigate('future')} className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Future Features</button>
              <button onClick={() => onNavigate('user-history')} className="text-sm font-medium text-text-muted hover:text-primary transition-colors">My History</button>
              <button onClick={() => onNavigate('contact')} className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Contact</button>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg border border-slate-200">
                <Lock className="w-3 h-3 text-slate-400" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Doctor Only</span>
              </div>
              <button 
                onClick={() => onNavigate('login')}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
              >
                Log In
              </button>
              <button 
                onClick={() => onNavigate('signup')}
                className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/20"
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] radial-glow pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">FDA Cleared AI Solution</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-text-main">
                Precision AI for <br/>
                <span className="text-primary">Thyroid Nodule</span> <br/>
                Detection.
              </h1>
              
              <p className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed">
                Empowering radiologists with instant, high-accuracy classification and automated reporting for thyroid ultrasound scans using next-generation neural networks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#patient-portal"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-xl shadow-primary/25 text-center"
                >
                  Patient Quick Scan
                </a>
                <button 
                  onClick={() => onNavigate('tour')}
                  className="flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  <PlayCircle className="w-6 h-6" />
                  Watch Product Tour
                </button>
              </div>
              
              <div className="flex items-center gap-6 pt-8 border-t border-slate-200">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/150?u=${i}`} 
                      alt="User" 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <p className="text-sm text-text-muted">
                  Trusted by <span className="text-text-main font-semibold">500+ clinics</span> worldwide
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              {/* Main UI Mockup */}
              <div className="relative z-20 w-full max-w-md bg-white rounded-2xl border border-slate-100 p-4 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-primary-light"></div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Zap className="text-primary w-4 h-4" />
                    <span className="text-xs font-bold text-text-muted">REAL-TIME ANALYSIS</span>
                  </div>
                  <span className="text-[10px] bg-primary/5 text-primary px-2 py-0.5 rounded border border-primary/10 font-bold">ID: BP-7742</span>
                </div>
                
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 mb-4">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsZyBESF1tWr0sNkVlNfGeGZpLx_EDD6bn4S7IUp-ZU_LQCLn0qMi8OVDSK18SnQoxMwo1QgV3U5pyBsi1osO13nc7rw3pt4dsZ2SVVNVILVQnMx7q6uXhRGwA0Ho5lVvIaE_zbQWxuCkWlj1FpzEJu4xWA_FV1myrFZSxTTKf3iDMgkmnjc-OinOJNjt7eUh4VlobneyV2CAUYLXUsEQaNoE6lgJs_urSxXN-0y7ze19lunIT3omdmBdUAssYt6GlRQkSBZhSJNqW" 
                    alt="Ultrasound" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-1/4 left-1/3 w-24 h-20 border-2 border-primary-light/80 rounded flex items-start justify-end p-1">
                    <div className="w-2 h-2 bg-primary-light rounded-full animate-ping"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1 font-bold">Confidence Score</p>
                    <p className="text-xl font-bold text-primary">98.4%</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1 font-bold">Classification</p>
                    <p className="text-xl font-bold text-text-main">TIRADS 3</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-4 z-30 bg-white border border-slate-100 p-3 rounded-xl shadow-xl max-w-[160px] transform rotate-3"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1 rounded bg-primary/10">
                    <Microscope className="text-primary w-4 h-4" />
                  </div>
                  <span className="text-[11px] text-text-muted font-bold">Dimensions</span>
                </div>
                <p className="text-sm font-bold text-text-main">1.2 × 0.8 cm</p>
                <p className="text-[10px] text-text-muted">Composition: Solid</p>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 z-30 bg-white border border-slate-100 p-4 rounded-xl shadow-xl min-w-[200px] transform -rotate-2"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-text-main">Patient Profile</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-2/3"></div>
                  </div>
                  <div className="h-1.5 w-3/4 bg-slate-100 rounded-full"></div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-[10px] text-text-muted font-bold">Risk Assessment:</span>
                  <span className="text-[10px] font-bold text-orange-600 px-1.5 py-0.5 rounded bg-orange-50 border border-orange-100 uppercase">Moderate</span>
                </div>
              </motion.div>

              {/* Decorative Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-primary/5 rounded-full"></div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0A5C7E 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </section>

      {/* Patient Portal Section */}
      <section id="patient-portal" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                <ShieldCheck className="text-emerald-500 w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Secure Patient Portal</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Scan and Analyze Your <br/>
                <span className="text-primary">Thyroid Health</span> Instantly.
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                Upload your thyroid ultrasound images and provide your health details to receive an AI-powered preliminary analysis. Our system helps you understand your results before your doctor's appointment.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'Upload X-Ray/Ultrasound', desc: 'High-resolution images for visual segmentation.' },
                  { title: 'Enter Patient Data', desc: 'Provide name, age, and medical history for context.' },
                  { title: 'Receive AI Insights', desc: 'Detailed breakdown of findings and risk levels.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-1">{i + 1}</div>
                    <div>
                      <p className="font-bold text-slate-800">{item.title}</p>
                      <p className="text-sm text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-200 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              
              <AnimatePresence mode="wait">
                {uploadStep === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <ImageIcon className="text-primary w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Step 1: Upload Scan</h3>
                      <p className="text-sm text-text-muted">Upload your ultrasound or X-ray image.</p>
                    </div>
                    
                    <div 
                      className="border-2 border-dashed border-slate-300 rounded-3xl p-12 text-center hover:border-primary transition-all cursor-pointer bg-white group"
                      onClick={() => document.getElementById('image-upload')?.click()}
                    >
                      <input 
                        type="file" 
                        id="image-upload" 
                        className="hidden" 
                        accept="image/*"
                        onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                      />
                      <Upload className="w-10 h-10 text-slate-400 mx-auto mb-4 group-hover:text-primary transition-colors" />
                      <p className="font-bold text-slate-700">Drop your image here</p>
                      <p className="text-xs text-slate-400 mt-1">Supports JPG, PNG, DICOM</p>
                    </div>
                  </motion.div>
                )}

                {uploadStep === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-slate-900">Step 2: Patient Information</h3>
                      <p className="text-sm text-text-muted">Please provide your details for accurate analysis.</p>
                    </div>
                    
                    <form onSubmit={handleDataSubmit} className="space-y-4 bg-white p-6 rounded-3xl border border-slate-200">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Full Name</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Enter your full name"
                          className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-primary"
                          value={patientData.name}
                          onChange={(e) => setPatientData({...patientData, name: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-400 uppercase">Age</label>
                          <input 
                            type="number" 
                            required
                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-primary"
                            value={patientData.age}
                            onChange={(e) => setPatientData({...patientData, age: e.target.value})}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-400 uppercase">Phone Number</label>
                          <input 
                            type="tel" 
                            required
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-primary"
                            value={patientData.phone}
                            onChange={(e) => setPatientData({...patientData, phone: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Medical History</label>
                        <textarea 
                          required
                          placeholder="Previous conditions, surgeries, etc."
                          className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-primary h-20 resize-none"
                          value={patientData.medicalHistory}
                          onChange={(e) => setPatientData({...patientData, medicalHistory: e.target.value})}
                        ></textarea>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <input 
                          type="checkbox" 
                          id="smoker"
                          className="w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary"
                          checked={patientData.isSmoker}
                          onChange={(e) => setPatientData({...patientData, isSmoker: e.target.checked})}
                        />
                        <label htmlFor="smoker" className="text-sm font-medium text-slate-700">I am a smoker</label>
                      </div>
                      
                      <button 
                        type="submit"
                        disabled={isProcessing}
                        className="w-full py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                      >
                        {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Submit for AI Analysis'}
                      </button>
                    </form>
                    <button 
                      onClick={() => setUploadStep(1)}
                      className="text-xs font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-1 mx-auto"
                    >
                      <ArrowRight className="w-3 h-3 rotate-180" /> Back to image upload
                    </button>
                  </motion.div>
                )}

                {uploadStep === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-8 py-8"
                  >
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="text-emerald-600 w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900">Screening Complete</h3>
                      <p className="text-text-muted">Your preliminary AI assessment has been processed.</p>
                    </div>
                    <div className="p-6 bg-white rounded-3xl border border-slate-200 text-left space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400 uppercase">Preliminary Risk</span>
                        <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">Moderate (TI-RADS 3)</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 w-1/2"></div>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed italic">
                        * This is a preliminary screening. Only a certified medical professional can access the full clinical dashboard and provide a definitive diagnosis.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={() => onNavigate('patient-results')}
                        className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                      >
                        View My Analysis Results
                        <ArrowRight className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => setUploadStep(1)}
                        className="w-full py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all"
                      >
                        Start New Screening
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Medication Search Section */}
      <section id="medication-search" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
              <Zap className="text-primary w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Medication Assistant</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Find Relief for Your Symptoms</h2>
            <p className="text-lg text-text-muted">Enter your symptoms below to see suggested medications and painkillers.</p>
            
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text" 
                placeholder="e.g. Headache, muscle pain, fatigue..."
                className="w-full pl-6 pr-32 py-4 bg-white border border-slate-200 rounded-2xl shadow-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                value={symptomSearch}
                onChange={(e) => setSymptomSearch(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSymptomSearch()}
              />
              <button 
                onClick={handleSymptomSearch}
                className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-all"
              >
                Search
              </button>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl flex gap-3 text-left max-w-xl mx-auto">
              <AlertCircle className="text-amber-500 w-5 h-5 shrink-0" />
              <p className="text-xs text-amber-700 leading-relaxed font-bold">
                DISCLAIMER: This is an AI-powered suggestion tool. Always consult a qualified medical professional before taking any medication or painkillers.
              </p>
            </div>

            <AnimatePresence>
              {suggestedMeds.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
                >
                  {suggestedMeds.map((med, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-left hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded uppercase">{med.type}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">{med.name}</h4>
                      <p className="text-xs text-text-muted leading-relaxed">{med.desc}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer / Links */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Activity className="text-primary w-6 h-6" />
                <span className="text-xl font-bold tracking-tight">BioPredict</span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                Advancing thyroid diagnostics through precision AI and explainable neural networks.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/60">Company</h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li><button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors">About Us</button></li>
                <li><button onClick={() => onNavigate('future')} className="hover:text-primary transition-colors">Future Features</button></li>
                <li><button onClick={() => onNavigate('user-history')} className="hover:text-primary transition-colors">My History</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-primary transition-colors">Contact Us</button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/60">Legal</h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">HIPAA Compliance</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/60">Support</h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">System Status</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/20">© 2024 BioPredict AI Systems. All rights reserved.</p>
            <div className="flex gap-6">
              <Globe className="w-4 h-4 text-white/20 hover:text-primary cursor-pointer transition-colors" />
              <Activity className="w-4 h-4 text-white/20 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
