import React, { useState } from 'react';
import { 
  Zap, 
  Search, 
  AlertCircle, 
  Pill, 
  Info,
  ChevronRight,
  Stethoscope,
  ShieldAlert
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const MedicationSearch: React.FC = () => {
  const [symptomSearch, setSymptomSearch] = useState('');
  const [suggestedMeds, setSuggestedMeds] = useState<{ name: string; type: string; desc: string; dosage: string; interactions: string }[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSymptomSearch = () => {
    if (!symptomSearch) return;
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      const meds = [
        { 
          name: 'Levothyroxine', 
          type: 'Hormone Replacement', 
          desc: 'Synthetic version of the hormone thyroxine (T4), used to treat hypothyroidism.',
          dosage: '25-200 mcg daily, taken on an empty stomach.',
          interactions: 'Calcium, iron, antacids, and certain foods can interfere with absorption.'
        },
        { 
          name: 'Methimazole', 
          type: 'Antithyroid Agent', 
          desc: 'Used to treat hyperthyroidism by preventing the thyroid gland from producing excess thyroid hormone.',
          dosage: '5-60 mg daily, usually divided into 3 doses.',
          interactions: 'Warfarin, digoxin, and beta-blockers may require monitoring.'
        },
        { 
          name: 'Propranolol', 
          type: 'Beta-Blocker', 
          desc: 'Used to manage symptoms of hyperthyroidism like rapid heart rate and tremors.',
          dosage: '10-40 mg 3-4 times daily as needed.',
          interactions: 'May mask symptoms of hypoglycemia in diabetic patients.'
        },
        { 
          name: 'Ibuprofen', 
          type: 'NSAID', 
          desc: 'Effective for managing pain and inflammation associated with subacute thyroiditis.',
          dosage: '400-800 mg every 6-8 hours as needed.',
          interactions: 'Aspirin, anticoagulants, and corticosteroids.'
        },
        { 
          name: 'Propylthiouracil (PTU)', 
          type: 'Antithyroid Agent', 
          desc: 'Used for hyperthyroidism, especially in the first trimester of pregnancy.',
          dosage: '100-300 mg daily in divided doses.',
          interactions: 'Similar to Methimazole; requires liver function monitoring.'
        }
      ];
      setSuggestedMeds(meds.filter(m => 
        m.name.toLowerCase().includes(symptomSearch.toLowerCase()) || 
        m.type.toLowerCase().includes(symptomSearch.toLowerCase()) ||
        m.desc.toLowerCase().includes(symptomSearch.toLowerCase())
      ).length > 0 ? meds.filter(m => 
        m.name.toLowerCase().includes(symptomSearch.toLowerCase()) || 
        m.type.toLowerCase().includes(symptomSearch.toLowerCase()) ||
        m.desc.toLowerCase().includes(symptomSearch.toLowerCase())
      ) : meds.slice(0, 3));
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Clinical Medication Assistant</h1>
          <p className="text-sm text-text-muted">Search for thyroid-related medications, dosages, and contraindications.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-xl">
          <ShieldAlert className="text-primary w-4 h-4" />
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Clinical Reference Only</span>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-border-light shadow-xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Pill className="text-primary w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Therapeutic Search</h2>
          <p className="text-text-muted">Enter a medication name, symptom, or drug class to retrieve clinical data.</p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by drug name or clinical indication..."
              className="w-full pl-12 pr-32 py-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-inner focus:ring-2 focus:ring-primary/20 focus:bg-white outline-none transition-all"
              value={symptomSearch}
              onChange={(e) => setSymptomSearch(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSymptomSearch()}
            />
            <button 
              onClick={handleSymptomSearch}
              disabled={isSearching}
              className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              {isSearching ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : 'Search'}
            </button>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex gap-3 text-left max-w-xl mx-auto">
            <Info className="text-blue-500 w-5 h-5 shrink-0" />
            <p className="text-[10px] text-blue-700 leading-relaxed font-bold uppercase tracking-wider">
              Note: This tool provides reference data from clinical guidelines. Final prescription decisions must be based on individual patient assessment and local protocols.
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {suggestedMeds.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="flex items-center justify-between px-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Stethoscope className="text-primary w-5 h-5" />
                Clinical Results
              </h3>
              <span className="text-xs text-text-muted">{suggestedMeds.length} medications found</span>
            </div>
            
            {suggestedMeds.map((med, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-border-light shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded uppercase mb-2 inline-block tracking-widest">{med.type}</span>
                        <h4 className="text-xl font-bold text-slate-900">{med.name}</h4>
                      </div>
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">{med.desc}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Standard Dosage</p>
                        <p className="text-xs font-medium text-slate-700">{med.dosage}</p>
                      </div>
                      <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                        <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Key Interactions</p>
                        <p className="text-xs font-medium text-amber-700">{med.interactions}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
