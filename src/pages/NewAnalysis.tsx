import React, { useState } from 'react';
import { 
  Upload, 
  FileUp, 
  User, 
  Calendar, 
  Hash, 
  Activity, 
  CheckCircle2, 
  X, 
  Loader2,
  AlertCircle,
  ChevronRight,
  ArrowRight,
  Zap,
  Phone
} from 'lucide-react';
import { cn } from '../types';

export const NewAnalysis: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [patientData, setPatientData] = useState({
    name: '',
    id: '',
    dob: '',
    indication: 'Palpable Nodule',
    phone: '',
    medicalHistory: '',
    isSmoker: false
  });

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setStep(2);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Progress Stepper */}
      <div className="flex items-center justify-center mb-12">
        {[
          { id: 1, label: 'Upload Scans' },
          { id: 2, label: 'Patient Info' },
          { id: 3, label: 'AI Processing' },
        ].map((s, i) => (
          <React.Fragment key={s.id}>
            <div className="flex flex-col items-center relative">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300",
                step >= s.id ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-slate-200 text-slate-500"
              )}>
                {step > s.id ? <CheckCircle2 className="w-6 h-6" /> : s.id}
              </div>
              <span className={cn(
                "absolute -bottom-7 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap",
                step >= s.id ? "text-primary" : "text-slate-400"
              )}>
                {s.label}
              </span>
            </div>
            {i < 2 && (
              <div className={cn(
                "w-24 h-0.5 mx-4 transition-all duration-500",
                step > s.id ? "bg-primary" : "bg-slate-200"
              )}></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {step === 1 && (
        <div className="bg-white rounded-3xl border border-border-light shadow-xl p-10 text-center space-y-8">
          <div className="max-w-md mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Upload Ultrasound Scans</h2>
            <p className="text-text-muted">Drag and drop DICOM or high-resolution image files for AI-assisted thyroid nodule analysis.</p>
          </div>

          <div 
            className={cn(
              "border-2 border-dashed rounded-3xl p-16 transition-all cursor-pointer group relative overflow-hidden",
              file ? "border-primary bg-primary/5" : "border-slate-200 hover:border-primary/50 hover:bg-slate-50"
            )}
            onClick={() => !file && document.getElementById('fileInput')?.click()}
          >
            <input 
              type="file" 
              id="fileInput" 
              className="hidden" 
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            
            {isUploading ? (
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-16 h-16 text-primary animate-spin" />
                <p className="text-lg font-bold text-primary">Uploading & Pre-processing...</p>
                <div className="w-64 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary animate-[upload_2s_ease-in-out_infinite]"></div>
                </div>
              </div>
            ) : file ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <FileUp className="text-primary w-10 h-10" />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">{file.name}</p>
                  <p className="text-sm text-text-muted">{(file.size / (1024 * 1024)).toFixed(2)} MB • Ready to analyze</p>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); setFile(null); }}
                  className="text-red-500 hover:text-red-600 text-sm font-bold flex items-center gap-1"
                >
                  <X className="w-4 h-4" /> Remove
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-6">
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Upload className="text-slate-400 w-10 h-10 group-hover:text-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-bold text-slate-800">Click or drag to upload</p>
                  <p className="text-sm text-text-muted">Supports .dcm, .jpg, .png, .tiff (Max 50MB)</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-wider">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-wider">End-to-End Encrypted</span>
            </div>
          </div>

          <button 
            disabled={!file || isUploading}
            onClick={handleUpload}
            className="w-full max-w-sm py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98]"
          >
            Continue to Patient Info
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white rounded-3xl border border-border-light shadow-xl p-10 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">Patient Demographics</h2>
            <p className="text-text-muted">Enter patient details to link with the ultrasound analysis.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="e.g. Robert Williamson"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  value={patientData.name}
                  onChange={(e) => setPatientData({...patientData, name: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Patient ID / MRN</label>
              <div className="relative">
                <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="e.g. #RW-7721"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  value={patientData.id}
                  onChange={(e) => setPatientData({...patientData, id: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Date of Birth</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="date" 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  value={patientData.dob}
                  onChange={(e) => setPatientData({...patientData, dob: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  value={patientData.phone}
                  onChange={(e) => setPatientData({...patientData, phone: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Medical History</label>
              <textarea 
                placeholder="Previous conditions, surgeries, etc."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all h-24 resize-none"
                value={patientData.medicalHistory}
                onChange={(e) => setPatientData({...patientData, medicalHistory: e.target.value})}
              ></textarea>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Clinical Indication</label>
              <div className="relative">
                <Activity className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none"
                  value={patientData.indication}
                  onChange={(e) => setPatientData({...patientData, indication: e.target.value})}
                >
                  <option>Palpable Nodule</option>
                  <option>Incidental Finding</option>
                  <option>Follow-up Exam</option>
                  <option>Abnormal TSH</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 mt-auto">
              <input 
                type="checkbox" 
                id="smoker"
                className="w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary"
                checked={patientData.isSmoker}
                onChange={(e) => setPatientData({...patientData, isSmoker: e.target.checked})}
              />
              <label htmlFor="smoker" className="text-sm font-medium text-slate-700">Patient is a smoker</label>
            </div>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl flex gap-3">
            <AlertCircle className="text-amber-500 w-5 h-5 shrink-0" />
            <p className="text-xs text-amber-700 leading-relaxed">
              Ensure the patient ID matches the clinical records system for seamless integration. AI processing will begin immediately after submission.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              onClick={() => setStep(1)}
              className="flex-1 py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all"
            >
              Back
            </button>
            <button 
              onClick={() => setStep(3)}
              className="flex-[2] py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              Start AI Analysis
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white rounded-3xl border border-border-light shadow-xl p-10 text-center space-y-12">
          <div className="space-y-4">
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 border-4 border-primary/10 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="text-primary w-12 h-12 animate-pulse" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Analyzing Scan...</h2>
            <p className="text-text-muted max-w-sm mx-auto">Our neural networks are segmenting the thyroid gland and identifying suspicious nodules.</p>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            {[
              { label: 'Image Quality Check', status: 'complete' },
              { label: 'Gland Segmentation', status: 'complete' },
              { label: 'Nodule Detection', status: 'processing' },
              { label: 'TI-RADS Classification', status: 'pending' },
            ].map((task, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  {task.status === 'complete' ? (
                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                  ) : task.status === 'processing' ? (
                    <Loader2 className="text-primary w-5 h-5 animate-spin" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
                  )}
                  <span className={cn(
                    "text-sm font-bold",
                    task.status === 'complete' ? "text-slate-900" : "text-slate-400"
                  )}>
                    {task.label}
                  </span>
                </div>
                {task.status === 'complete' && <span className="text-[10px] font-bold text-emerald-600 uppercase">Success</span>}
              </div>
            ))}
          </div>

          <button 
            onClick={onComplete}
            className="w-full max-w-sm py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            View Results
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};
