import React from 'react';
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  Share2, 
  AlertTriangle, 
  CheckCircle2, 
  Info,
  Maximize2,
  Layers,
  Zap,
  ChevronRight,
  FileText,
  Stethoscope
} from 'lucide-react';
import { cn } from '../types';

export const ReportDetail: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Reports
        </button>
        <div className="flex gap-3">
          <button className="p-2.5 bg-white border border-border-light rounded-xl text-text-muted hover:text-primary transition-all shadow-sm">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2.5 bg-white border border-border-light rounded-xl text-text-muted hover:text-primary transition-all shadow-sm">
            <Printer className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            <Download className="w-4 h-4" />
            Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Visual Analysis */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl border border-border-light shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border-light flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Maximize2 className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">AI Visual Segmentation</h2>
                  <p className="text-xs text-text-muted">Robert Williamson • Scan ID: #RW-7721</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-slate-100 text-text-main rounded-lg text-xs font-bold border border-slate-200 hover:bg-slate-200 transition-all">Original</button>
                <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-bold shadow-sm">AI Overlay</button>
              </div>
            </div>
            
            <div className="relative aspect-video bg-slate-900 group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsZyBESF1tWr0sNkVlNfGeGZpLx_EDD6bn4S7IUp-ZU_LQCLn0qMi8OVDSK18SnQoxMwo1QgV3U5pyBsi1osO13nc7rw3pt4dsZ2SVVNVILVQnMx7q6uXhRGwA0Ho5lVvIaE_zbQWxuCkWlj1FpzEJu4xWA_FV1myrFZSxTTKf3iDMgkmnjc-OinOJNjt7eUh4VlobneyV2CAUYLXUsEQaNoE6lgJs_urSxXN-0y7ze19lunIT3omdmBdUAssYt6GlRQkSBZhSJNqW" 
                alt="Ultrasound Analysis" 
                className="w-full h-full object-cover opacity-90"
              />
              {/* AI Bounding Box & Annotations */}
              <div className="absolute top-[20%] left-[30%] w-[180px] h-[140px] border-2 border-red-500 rounded-full flex items-start justify-end p-2">
                <div className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg">TR5: Suspicious</div>
              </div>
              
              {/* Measurement lines */}
              <div className="absolute top-[35%] left-[32%] w-[150px] h-[1px] bg-primary-light/60 flex items-center justify-center">
                <span className="bg-primary-light text-white text-[8px] px-1 rounded -mt-4">2.4 cm</span>
              </div>
              
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button className="p-2 bg-black/40 backdrop-blur-md text-white rounded-lg hover:bg-black/60 transition-all">
                  <Layers className="w-5 h-5" />
                </button>
                <button className="p-2 bg-black/40 backdrop-blur-md text-white rounded-lg hover:bg-black/60 transition-all">
                  <Zap className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 grid grid-cols-3 gap-6 bg-slate-50/50">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Composition</p>
                <p className="text-sm font-bold text-slate-800">Solid / Almost Solid</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Echogenicity</p>
                <p className="text-sm font-bold text-slate-800">Very Hypoechoic</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Shape</p>
                <p className="text-sm font-bold text-slate-800">Taller-than-wide</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border-light shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FileText className="text-primary w-5 h-5" />
              Clinical Findings Summary
            </h3>
            <div className="prose prose-sm max-w-none text-text-muted leading-relaxed">
              <p>
                The ultrasound of the thyroid gland reveals a highly suspicious nodule in the <strong>right lobe</strong>, measuring approximately <strong>2.4 x 1.8 x 1.6 cm</strong>. The nodule is predominantly solid and demonstrates marked hypoechogenicity compared to the surrounding thyroid parenchyma.
              </p>
              <p className="mt-4">
                AI-assisted analysis identifies <strong>microcalcifications</strong> and an <strong>irregular, lobulated margin</strong>. The shape is noted to be taller-than-wide in the transverse plane, which is a significant indicator of potential malignancy. No significant cervical lymphadenopathy is visualized at this time.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: AI Insights & Actions */}
        <div className="lg:col-span-5 space-y-6">
          {/* AI Score Card */}
          <div className="bg-white rounded-2xl border border-border-light shadow-sm overflow-hidden">
            <div className="bg-red-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-white w-6 h-6" />
                <h3 className="font-bold text-white">High Risk Detected</h3>
              </div>
              <span className="text-xs font-bold bg-white/20 text-white px-2 py-1 rounded-lg backdrop-blur-sm">TI-RADS 5</span>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Malignancy Probability</p>
                  <p className="text-4xl font-black text-slate-900">87.2%</p>
                </div>
                <div className="w-20 h-20 relative">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path className="text-slate-100" strokeDasharray="100, 100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-red-500" strokeDasharray="87, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-red-600">High</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-text-main">Contributing Factors:</p>
                {[
                  { label: 'Microcalcifications', weight: 'High', color: 'text-red-600' },
                  { label: 'Irregular Margins', weight: 'High', color: 'text-red-600' },
                  { label: 'Solid Composition', weight: 'Medium', color: 'text-amber-600' },
                  { label: 'Hypoechogenicity', weight: 'Medium', color: 'text-amber-600' },
                ].map((factor, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-slate-700">{factor.label}</span>
                    </div>
                    <span className={cn("text-[10px] font-bold uppercase", factor.color)}>{factor.weight} Impact</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl border border-border-light shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Stethoscope className="text-primary w-5 h-5" />
              Recommended Next Steps
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <p className="text-sm font-bold text-text-main">Fine Needle Aspiration (FNA)</p>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">Urgent biopsy is recommended due to suspicious features and size &gt; 1cm.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <p className="text-sm font-bold text-text-main">Surgical Consultation</p>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">Refer to endocrine surgery for evaluation of potential thyroidectomy.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <button className="w-full py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                Generate Referral Letter
              </button>
              <button className="w-full py-3 bg-white border border-border-light text-text-main rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
                Schedule Biopsy
              </button>
            </div>
          </div>

          {/* Patient Info Quick View */}
          <div className="p-5 bg-slate-900 rounded-2xl text-white">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC73mrrkrNiRj4eHqGFDyrJUjynmyRgPJrQDiECSacZSHjEj7yJfFkQhpJSCNESeyW-_f9bSPw_Jf6qnYUb-0HHhNx5456WgdvayT8_6WrCUWzLvo2QWwY5FZZErFdO_t8gr-aOF00RWH8fUzfe8NePNAKqe1yzP0VRnbr0TSncz2s9TyEg9Z2Wy6K2B7_JpZJjbDIzyboKAneFuMjnHD9NRsbXn1uq85VsDMuoJffizKCadyq9viKrcGWraz03kHw3D8HnGJNv8u22" 
                alt="Robert Williamson" 
                className="w-12 h-12 rounded-xl object-cover border border-white/20"
              />
              <div>
                <p className="font-bold">Robert Williamson</p>
                <p className="text-xs text-white/60">Male, 52 years old</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <p className="text-white/40 uppercase font-bold tracking-widest">Phone</p>
                <p className="font-bold">+1 (555) 987-6543</p>
              </div>
              <div className="space-y-1">
                <p className="text-white/40 uppercase font-bold tracking-widest">Smoking Status</p>
                <p className="font-bold text-red-400">Smoker</p>
              </div>
              <div className="space-y-1 col-span-2 pt-2 border-t border-white/10">
                <p className="text-white/40 uppercase font-bold tracking-widest">Medical History</p>
                <p className="text-white/80 leading-relaxed">Type 2 Diabetes, hyperlipidemia, previous thyroid biopsy (benign, 2019).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
