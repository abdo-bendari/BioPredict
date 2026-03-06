import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  BarChart3, 
  Download, 
  History, 
  Lightbulb, 
  Calendar, 
  MessageSquare, 
  Stethoscope, 
  Share2,
  Phone
} from 'lucide-react';
import { cn } from '../types';

const trendData = [
  { month: 'Jan', score: 2 },
  { month: 'Mar', score: 2 },
  { month: 'May', score: 2.5 },
  { month: 'Jul', score: 3 },
  { month: 'Sep', score: 3 },
  { month: 'Nov', score: 4 },
];

const sizeData = [
  { quarter: "Q1 '23", size: 1.2 },
  { quarter: "Q2 '23", size: 1.3 },
  { quarter: "Q3 '23", size: 1.4 },
  { quarter: "Q4 '23", size: 1.6 },
  { quarter: "Q1 '24", size: 1.7 },
  { quarter: "Q2 '24", size: 1.84 },
];

export const PatientProfile: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Patient Header Summary */}
      <header className="bg-white rounded-2xl shadow-sm border border-border-light p-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFyd0CgbM-y3WhUpzRWntM_GJeUvZsYkiOBtSFb5nNIBHnbR4y1xabI3at3XpXz90pWqHo5OBz6bv-W-Izyib3iZMAbNEyn89TJrq48tH3cFWBljzok2_uwMBxyVZxk01tLMH4YsBHnErYqjgDyK59kvp7ZnrMNrEYD90EvpXzhVBTf6STN4PUkeC8DPCsaK8W1NDceA-Cbpb5a-xfL5LCJrja1hB9sR5BYkuM7jbHh9GfBJSThNSqrAWr1pcryxOFZt_wPQmg-wPZ" 
              alt="Eleanor Thompson" 
              className="w-16 h-16 rounded-2xl object-cover"
            />
            <span className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Eleanor Thompson</h1>
            <div className="flex items-center gap-3 text-sm text-text-muted mt-1">
              <span>ID: #TH-90210</span>
              <span>•</span>
              <span>DOB: 05/12/1958 (65y)</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-primary font-semibold">
                <History className="w-4 h-4" /> Last Seen: 2 days ago
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-600">
                <Phone className="w-4 h-4" /> +1 (555) 123-4567
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          {[
            { label: 'Current TI-RADS', value: 'TR-4', color: 'text-amber-500' },
            { label: 'Status', value: 'Monitoring', color: 'text-red-500' },
            { label: 'Max Size', value: '1.84 cm', color: 'text-slate-800' },
          ].map((stat, i) => (
            <div key={i} className="px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl text-center min-w-[120px]">
              <p className="text-[10px] uppercase tracking-wider font-bold text-text-muted mb-1">{stat.label}</p>
              <p className={cn("text-xl font-bold", stat.color)}>{stat.value}</p>
            </div>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Analytics & Reports */}
        <div className="lg:col-span-9 space-y-6">
          {/* Analytics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* TI-RADS Score Chart */}
            <div className="bg-white p-6 rounded-2xl border border-border-light shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <TrendingUp className="text-primary w-5 h-5" />
                  TI-RADS Score Trends
                </h3>
                <span className="text-xs font-bold text-text-muted">Last 12 Months</span>
              </div>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="month" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }}
                    />
                    <YAxis hide domain={[0, 5]} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#13abec" 
                      strokeWidth={3} 
                      dot={{ fill: '#13abec', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Nodule Size Chart */}
            <div className="bg-white p-6 rounded-2xl border border-border-light shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <BarChart3 className="text-primary w-5 h-5" />
                  Nodule Size (cm)
                </h3>
                <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-bold">+12% Growth</span>
              </div>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sizeData}>
                    <XAxis 
                      dataKey="quarter" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }}
                    />
                    <YAxis hide />
                    <Tooltip 
                      cursor={{ fill: '#f8fafc' }}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="size" radius={[6, 6, 0, 0]}>
                      {sizeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === sizeData.length - 1 ? '#13abec' : '#13abec33'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent Reports Table */}
          <div className="bg-white rounded-2xl border border-border-light shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-border-light flex items-center justify-between">
              <h3 className="font-bold text-slate-800">Historical Scans & Reports</h3>
              <button className="text-xs text-primary font-bold hover:underline">View All Records</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-text-muted font-bold">
                  <tr>
                    <th className="px-6 py-3">Scan Date</th>
                    <th className="px-6 py-3">Radiologist</th>
                    <th className="px-6 py-3">TI-RADS Level</th>
                    <th className="px-6 py-3">Key Findings</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light text-sm">
                  {[
                    { date: 'Oct 12, 2023', dr: 'Dr. Sarah Jenkins', level: 'TR-4', color: 'bg-amber-100 text-amber-700', findings: 'Hypoechoic, irregular margins, microcalcifications...' },
                    { date: 'Apr 08, 2023', dr: 'Dr. Michael Chen', level: 'TR-3', color: 'bg-yellow-100 text-yellow-700', findings: 'Stable isoechoic nodule, no peripheral vascularity.' },
                    { date: 'Nov 15, 2022', dr: 'Dr. Michael Chen', level: 'TR-3', color: 'bg-yellow-100 text-yellow-700', findings: 'Baseline scan, 1.2cm solid nodule.' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4 font-medium text-slate-700 italic">{row.date}</td>
                      <td className="px-6 py-4">{row.dr}</td>
                      <td className="px-6 py-4">
                        <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase", row.color)}>
                          {row.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-text-muted truncate max-w-[200px]">{row.findings}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary hover:text-primary/70 transition-colors">
                          <Download className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          {/* Current Recommendations */}
          <div className="bg-white rounded-2xl border border-border-light shadow-sm overflow-hidden">
            <div className="bg-slate-800 px-5 py-3 flex items-center gap-2">
              <Lightbulb className="text-amber-400 w-5 h-5" />
              <h3 className="font-bold text-white text-sm">AI Recommendations</h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                <p className="text-xs font-bold text-red-700 mb-1">Critical Follow-up</p>
                <p className="text-xs text-red-600 leading-relaxed">
                  Nodule size increase &gt; 0.5cm observed in last 6 months. <strong>Fine-needle aspiration (FNA)</strong> is recommended for TI-RADS 4.
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-700 mb-1">Standard Protocol</p>
                <p className="text-xs text-slate-600 leading-relaxed">Repeat Ultrasound in 3 months if biopsy is benign. Monitor TSH levels.</p>
              </div>
              <button className="w-full py-2.5 text-xs font-bold text-primary bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors">
                Accept & Update Plan
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-border-light shadow-sm p-5">
            <h3 className="font-bold text-slate-800 text-sm mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-sm font-bold">
                <Calendar className="w-5 h-5" />
                Schedule Follow-up
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-border-light text-slate-700 rounded-xl hover:bg-slate-50 transition-colors text-sm font-bold">
                <MessageSquare className="w-5 h-5 text-primary" />
                Message Patient
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-border-light text-slate-700 rounded-xl hover:bg-slate-50 transition-colors text-sm font-bold">
                <Stethoscope className="w-5 h-5 text-primary" />
                Refer to Surgery
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-border-light text-slate-700 rounded-xl hover:bg-slate-50 transition-colors text-sm font-bold">
                <Share2 className="w-5 h-5 text-primary" />
                Export Health Summary
              </button>
            </div>
          </div>

          {/* Care Circle */}
          <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3">Patient Details</p>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] font-bold text-text-muted uppercase">Medical History</p>
                <p className="text-xs text-slate-700 leading-relaxed">Chronic hypertension, family history of thyroid nodules, previous appendectomy (2015).</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold text-text-muted uppercase">Smoking Status</p>
                <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">Current Smoker</span>
              </div>
            </div>
          </div>

          {/* Care Circle */}
          <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3">Care Circle</p>
            <div className="flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4PVQTtBLsQSbG-6UVKtluoLWS9_9zBeGRfxdoiUXVwNowIMnFp_8KMhRcAwTq4KyyVCnqczPdjl_NeqfTNEalCjjO1B4MseWstAB4fdjXBwwCiTeqXZbZyHQh7T530wyiyzID0RLMdGf_bXMBVeNB_QX1L_ypcDaoDk-NZ_Gq6D1GX7HgDlAScwR68pWxckJ-WgVhtyVQs3m2shFSvLwx3hLMnElHzdkpmfJ90e8zjqK49w2VAaQ8uxDkOVmgC98goxepMKjYY5cL" 
                alt="Dr. David Smith" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-bold">Dr. David Smith</p>
                <p className="text-xs text-text-muted">Primary Physician</p>
              </div>
              <button className="text-primary p-2 hover:bg-primary/10 rounded-full transition-colors">
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
