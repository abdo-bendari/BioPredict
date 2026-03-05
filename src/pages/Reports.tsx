import React from 'react';
import { 
  Download, 
  Eye, 
  Plus, 
  Search, 
  List, 
  Grid, 
  TrendingUp,
  AlertCircle,
  ChevronRight,
  Printer
} from 'lucide-react';
import { cn } from '../types';

const reports = [
  { id: '82910', initials: 'J.D.', date: 'Oct 24, 2023', dr: 'Dr. Aris Thorne', level: 'TR5', color: 'text-red-600 bg-red-50 border-red-200', size: '1.8 cm', composition: 'Solid', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_BlrJHvqxRhSle7pgnBQetc1lM2tfw2HmqZ0tpfpt6KeejK93z1JwK2zt4cWiCxvK8ZZAwNBTbkeRbvtLTIplWIrXdyVN-2F7p42fcEskze3sgtYSIzpzBk0Q8pdJnZIZyXi9J5P52KgNQGW7nyCM3161e8YxW4Sgm5bkPxwk0HTEd9TgTnhGbFBwGJNDj_XA6NepMktDp835gw1WJWhw32XfTmOAdxkMc0L1VnawAyFZQqTBeJCOk12UC9Mtbwmv7wvyCZrR4BEa' },
  { id: '77211', initials: 'S.K.', date: 'Oct 23, 2023', dr: 'Dr. Aris Thorne', level: 'TR4', color: 'text-orange-600 bg-orange-50 border-orange-200', size: '0.9 cm', composition: 'Cystic', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdjMxYrIf6lsXDqlPYNNOKzI-n_I0u1PxQUfwjEycAA5X92CPrlADRnor2lCu4faWMc_IkPC-LFeSSbaVDxDNmlY6q6jyVa0sPsJl66GbPJ5WoSsvfZb8sFl8IPTiM2hRp-qonUa9GvWkUKv4e3kF4lNtqji70xHaM3StUu2A2l_s6aUY2XzrnlDJsNXJQ2jWq9eia2ua0-sbpv48-ydBACNCeP-5rKf7zzru8drMs_MYUHaRtwHVChSiUeD6nLUTZpJrnkqkOfEFS' },
  { id: '29103', initials: 'M.A.', date: 'Oct 22, 2023', dr: 'Dr. Aris Thorne', level: 'TR2', color: 'text-emerald-600 bg-emerald-50 border-emerald-200', size: '0.4 cm', composition: 'Benign', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQQUCAz0i64loaclN30xsF_ZwfG5WBdG97fjHCt8cwt0gK3jYMJQ6_XaNvu4X1k37pHLWTD7ZS7LpL9Um3fVJFU25rdqQhyyHxKgagmLk8fdDQ37HPATmlRouUmttnxx7qhwJTxZ7tMrgn4M1Xb3jbLPXnXHCQ-_Ql3paNEM-w5owlddn6wuJhZikXNelavDbG41JDY_5xb8Odtqkceju8kqyb1xn1kZ3QFh0Y3mB5cYfXy_VIiqYcu0YbRJl3ZtJkX-d9rpyODb3F' },
  { id: '11029', initials: 'R.F.', date: 'Oct 21, 2023', dr: 'Dr. Aris Thorne', level: 'TR3', color: 'text-yellow-600 bg-yellow-50 border-yellow-200', size: '1.2 cm', composition: 'Mixed', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf9zMqubEVJDUcqD0-qbRBwmMCovKLKGDLWaMEXHo_n68X495ZEklL92RXEpC2tpyBXBGKjJ45NEQqhaLfc6UL1LmxNe87soS4-4QAHSnDxTscog_W0wG5HxtVoF3Bdo5a2XuHF34y-Bt69QWEzdz-7aXkiiIShDsXREtaLZjW-Mv8hd5bjexwregTrQaezxDxMB4JHn-kHXfzsY0OFfNtwPrUpN8-CNRqRIa-POtB0tAVgrLCtrlH0VdwCTZp2Lt7xXBpJWC1I7q5' },
  { id: '00234', initials: 'T.W.', date: 'Oct 20, 2023', dr: 'Dr. Aris Thorne', level: 'TR5', color: 'text-red-600 bg-red-50 border-red-200', size: '2.1 cm', composition: 'Solid', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKvTiZM1DOApz4vUDERSo2AIEGY_GyeqifWpQ5vJagtmvn5WdB2pBm0JFNp5cbE36oHp0PnzYPitIR8WQea73Gv8Kty_ny2-uBSeyMb8odWePbouMcntaUio9b5YuDXMpfVQhmhdTsPApp0oJ0daJRyRGy7G53tkWI4E-85v0syTLGYNp12q9xWvJSIy_JPgGxnDfms5aqX2kiBey935-ENOenBfLFJaMCdhHB0eiV8IechJgO-a46Z-TQ6Idh1dhwzJY87AZEquCd' },
  { id: '44582', initials: 'L.P.', date: 'Oct 19, 2023', dr: 'Dr. Aris Thorne', level: 'TR1', color: 'text-emerald-600 bg-emerald-50 border-emerald-200', size: 'N/A', composition: 'Normal', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0_K5GA6cf3aqb3hAnsjbo44doMe55sBuyuqOf__m15Rbh4MTtfjFf0Wc9N17O2kCDLZ7Nas2ZdGCCMr34RaPSeSirMS99XP6T5gu4Nm4QdIM7AuK149V25bw0P-4EmxbuD9XJembFNWTKOqvXW44UdXRQXpSILiu2aqT-EnNCpxM5Njy3NfKe6NWxz6yVpqS9zObDfMtIUSHJvS6RDna30n_XnVzpYnvI_LygX5d2iS5Z-cY1Tfj8TujyEivzETzLGQSJz4oPcCm0' },
];

export const Reports: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div 
              key={report.id} 
              className="group bg-white rounded-2xl border border-border-light overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onClick={() => onNavigate('report-detail')}
            >
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                <img 
                  src={report.image} 
                  alt="Ultrasound" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-primary/90 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">AI Detected</div>
                {report.level === 'TR5' && (
                  <div className="absolute inset-0 border-[3px] border-red-500/40 rounded-full w-24 h-20 top-1/4 left-1/3 blur-[1px]"></div>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg mb-0.5 text-slate-900">
                      {report.initials} <span className="text-xs font-mono text-text-muted ml-2">#ID-{report.id}</span>
                    </h3>
                    <p className="text-xs text-text-muted">{report.date} • {report.dr}</p>
                  </div>
                  <span className={cn("text-[10px] font-bold px-2.5 py-1 rounded-full border", report.color)}>
                    TIRADS {report.level.replace('TR', '')}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <p className="text-[10px] text-text-muted uppercase font-bold tracking-tight">Max Size</p>
                    <p className="text-sm font-bold text-text-main">{report.size}</p>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <p className="text-[10px] text-text-muted uppercase font-bold tracking-tight">Composition</p>
                    <p className="text-sm font-bold text-text-main">{report.composition}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-white hover:bg-primary/90 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-wider">View Report</button>
                  <button className="w-10 h-10 flex items-center justify-center bg-slate-100 text-text-muted rounded-xl hover:text-primary transition-all border border-border-light">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <aside className="w-80 bg-white border-l border-border-light p-6 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
        <h2 className="text-lg font-bold mb-6 text-text-main">Quick Summary</h2>
        
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">This Month</span>
            <TrendingUp className="text-primary w-4 h-4" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-text-main">124</span>
            <span className="text-xs text-text-muted font-bold">Reports Generated</span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">Risk Breakdown</h3>
          <div className="space-y-4">
            {[
              { label: 'TR5', val: 15, color: 'bg-red-500', text: 'text-red-600' },
              { label: 'TR4', val: 25, color: 'bg-orange-500', text: 'text-orange-600' },
              { label: 'TR3', val: 30, color: 'bg-yellow-500', text: 'text-yellow-600' },
              { label: 'TR1-2', val: 30, color: 'bg-emerald-500', text: 'text-emerald-600' },
            ].map((risk) => (
              <div key={risk.label} className="space-y-1.5">
                <div className="flex justify-between items-center text-[10px] font-bold">
                  <span className={risk.text}>{risk.label}</span>
                  <span className="text-text-main">{risk.val}%</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className={cn("h-full", risk.color)} style={{ width: `${risk.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Needs Review</h3>
            <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">4 Urgent</span>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Patient J.D.', desc: 'High suspicious nodule (TR5)', urgent: true },
              { name: 'Patient T.W.', desc: 'Macro-calcifications (TR5)', urgent: true },
              { name: 'Patient S.K.', desc: 'Follow-up needed (TR4)', urgent: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:shadow-md cursor-pointer transition-all group">
                <div className={cn("w-2 h-2 rounded-full", item.urgent ? "bg-red-500 shadow-sm shadow-red-200" : "bg-orange-500")}></div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-text-main">{item.name}</p>
                  <p className="text-[10px] text-text-muted font-medium">{item.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <button className="w-full py-3 bg-white border border-border-light text-text-main rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
            <Printer className="w-4 h-4" />
            Full Audit Export
          </button>
        </div>
      </aside>
    </div>
  );
};
