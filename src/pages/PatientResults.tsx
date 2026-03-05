import React from 'react';
import { 
  ArrowLeft, 
  Download, 
  AlertTriangle, 
  CheckCircle2, 
  Info,
  Maximize2,
  Layers,
  Zap,
  FileText,
  Stethoscope,
  Activity
} from 'lucide-react';
import { cn } from '../types';

export const PatientResults: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background-light p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Activity className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Your AI Screening Results</h1>
              <p className="text-sm text-text-muted">Preliminary Assessment • Scan ID: #BP-7742</p>
            </div>
          </div>
          <button 
            onClick={onBack}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Visual Analysis */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
              <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-xl">
                    <Maximize2 className="text-primary w-5 h-5" />
                  </div>
                  <h2 className="font-bold text-slate-900">AI Visual Analysis</h2>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-xs font-bold border border-primary/10">AI Overlay Active</span>
                </div>
              </div>
              
              <div className="relative aspect-video bg-slate-900">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsZyBESF1tWr0sNkVlNfGeGZpLx_EDD6bn4S7IUp-ZU_LQCLn0qMi8OVDSK18SnQoxMwo1QgV3U5pyBsi1osO13nc7rw3pt4dsZ2SVVNVILVQnMx7q6uXhRGwA0Ho5lVvIaE_zbQWxuCkWlj1FpzEJu4xWA_FV1myrFZSxTTKf3iDMgkmnjc-OinOJNjt7eUh4VlobneyV2CAUYLXUsEQaNoE6lgJs_urSxXN-0y7ze19lunIT3omdmBdUAssYt6GlRQkSBZhSJNqW" 
                  alt="Ultrasound Analysis" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute top-[20%] left-[30%] w-[180px] h-[140px] border-2 border-orange-500 rounded-full flex items-start justify-end p-2">
                  <div className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">Detected Nodule</div>
                </div>
                
                <div className="absolute bottom-6 left-6 flex gap-3">
                  <div className="px-3 py-2 bg-black/40 backdrop-blur-md text-white rounded-xl flex items-center gap-2 text-xs font-bold">
                    <Layers className="w-4 h-4" />
                    Segmentation
                  </div>
                  <div className="px-3 py-2 bg-black/40 backdrop-blur-md text-white rounded-xl flex items-center gap-2 text-xs font-bold">
                    <Zap className="w-4 h-4" />
                    Heatmap
                  </div>
                </div>
              </div>
              
              <div className="p-8 grid grid-cols-3 gap-8 bg-slate-50/30">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Composition</p>
                  <p className="text-sm font-bold text-slate-800">Solid Nodule</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Size</p>
                  <p className="text-sm font-bold text-slate-800">1.2 x 0.8 cm</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Shape</p>
                  <p className="text-sm font-bold text-slate-800">Regular</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 p-8 space-y-6">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <FileText className="text-primary w-6 h-6" />
                Understanding Your Results
              </h3>
              <div className="prose prose-slate max-w-none text-text-muted leading-relaxed">
                <p>
                  The AI analysis of your thyroid ultrasound has identified a <strong>solid nodule</strong> in the right lobe. The nodule measures approximately <strong>1.2 cm</strong>. 
                </p>
                <p className="mt-4">
                  Based on the visual features, the system has classified this as a <strong>TI-RADS 3</strong> finding. This typically indicates a low to moderate risk level. Most nodules of this type are benign (non-cancerous), but clinical follow-up is important.
                </p>
                <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-2xl flex gap-3">
                  <Info className="text-amber-500 w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-700 leading-relaxed font-medium">
                    <strong>Important Note:</strong> This AI-generated report is for screening purposes only. It is not a final diagnosis. Please share these results with your doctor for a professional clinical evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Risk & Next Steps */}
          <div className="lg:col-span-5 space-y-8">
            {/* Risk Card */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
              <div className="bg-orange-500 px-8 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="text-white w-6 h-6" />
                  <h3 className="font-bold text-white text-lg">Moderate Risk</h3>
                </div>
                <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">TI-RADS 3</span>
              </div>
              <div className="p-8 space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">AI Confidence</p>
                    <p className="text-5xl font-black text-slate-900">98.4%</p>
                  </div>
                  <div className="w-24 h-24 relative">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path className="text-slate-100" strokeDasharray="100, 100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-orange-500" strokeDasharray="98, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-orange-600">High</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-widest">Key Findings:</p>
                  {[
                    { label: 'Solid Composition', status: 'Detected', color: 'text-orange-600' },
                    { label: 'Regular Margins', status: 'Clear', color: 'text-emerald-600' },
                    { label: 'No Calcifications', status: 'Clear', color: 'text-emerald-600' },
                  ].map((factor, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className={cn("w-5 h-5", factor.status === 'Clear' ? "text-emerald-500" : "text-orange-500")} />
                        <span className="text-sm font-bold text-slate-700">{factor.label}</span>
                      </div>
                      <span className={cn("text-[10px] font-bold uppercase", factor.color)}>{factor.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 p-8 space-y-6">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <Stethoscope className="text-primary w-6 h-6" />
                What should you do next?
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-primary/5 rounded-3xl border border-primary/10">
                  <div className="w-10 h-10 bg-primary text-white rounded-2xl flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Consult an Endocrinologist</p>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">Schedule an appointment to review these results and discuss potential follow-up scans.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-10 h-10 bg-slate-200 text-slate-600 rounded-2xl flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Monitor Symptoms</p>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">Keep track of any changes in swallowing, voice, or neck swelling.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <button 
                  onClick={() => {
                    onBack();
                    setTimeout(() => {
                      const el = document.getElementById('medication-search');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  Search for a recommendation
                  <Zap className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-[10px] text-text-muted text-center leading-relaxed px-4">
              BioPredict AI is a decision support tool. It does not replace the clinical judgment of a healthcare professional. All medical decisions should be made in consultation with your doctor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
