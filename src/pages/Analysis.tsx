import React from 'react';
import { 
  TrendingUp, 
  Activity, 
  Users, 
  AlertCircle, 
  ArrowUpRight, 
  ArrowDownRight,
  Filter,
  Download,
  Calendar,
  ChevronDown
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { cn } from '../types';

const volumeData = [
  { month: 'Jan', scans: 120, biopsies: 45 },
  { month: 'Feb', scans: 145, biopsies: 52 },
  { month: 'Mar', scans: 132, biopsies: 48 },
  { month: 'Apr', scans: 168, biopsies: 61 },
  { month: 'May', scans: 189, biopsies: 72 },
  { month: 'Jun', scans: 210, biopsies: 85 },
];

const riskDistribution = [
  { name: 'TI-RADS 1/2', value: 45, color: '#10b981' },
  { name: 'TI-RADS 3', value: 30, color: '#f59e0b' },
  { name: 'TI-RADS 4', value: 15, color: '#f97316' },
  { name: 'TI-RADS 5', value: 10, color: '#ef4444' },
];

const accuracyTrend = [
  { week: 'W1', accuracy: 98.2 },
  { week: 'W2', accuracy: 98.5 },
  { week: 'W3', accuracy: 98.4 },
  { week: 'W4', accuracy: 99.1 },
  { week: 'W5', accuracy: 98.9 },
  { week: 'W6', accuracy: 99.4 },
];

export const Analysis: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3 bg-white p-1 rounded-xl border border-border-light shadow-sm">
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold shadow-sm">Overview</button>
          <button className="px-4 py-2 text-text-muted hover:text-primary rounded-lg text-xs font-bold transition-all">Clinical</button>
          <button className="px-4 py-2 text-text-muted hover:text-primary rounded-lg text-xs font-bold transition-all">Operational</button>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border-light rounded-xl text-xs font-bold text-text-main hover:bg-slate-50 transition-all">
            <Calendar className="w-4 h-4 text-primary" />
            Last 6 Months
            <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Primary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Diagnostic Accuracy', value: '99.4%', change: '+0.5%', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Avg. Processing Time', value: '1.2s', change: '-15%', icon: TrendingUp, color: 'text-primary', bg: 'bg-primary/5' },
          { label: 'Malignancy Detection', value: '94.8%', change: '+2.1%', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
        ].map((metric, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-border-light shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-3 rounded-xl", metric.bg)}>
                <metric.icon className={cn("w-6 h-6", metric.color)} />
              </div>
              <span className={cn(
                "text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1",
                metric.change.startsWith('+') ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
              )}>
                {metric.change}
              </span>
            </div>
            <p className="text-sm font-medium text-text-muted">{metric.label}</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">{metric.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Volume Analysis */}
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-border-light shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Scan & Biopsy Volume</h3>
              <p className="text-xs text-text-muted">Monthly throughput of diagnostic procedures</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-[10px] font-bold text-text-muted uppercase">Scans</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <span className="text-[10px] font-bold text-text-muted uppercase">Biopsies</span>
              </div>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="scans" fill="#13abec" radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="biopsies" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Distribution */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-border-light shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-2">TI-RADS Distribution</h3>
          <p className="text-xs text-text-muted mb-8">Classification breakdown of all analyzed nodules</p>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-4">
            {riskDistribution.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs font-medium text-slate-600">{item.name}</span>
                </div>
                <span className="text-xs font-bold text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accuracy Trend */}
        <div className="lg:col-span-12 bg-white p-6 rounded-2xl border border-border-light shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900">AI Model Precision Trend</h3>
              <p className="text-xs text-text-muted">Weekly accuracy performance of the diagnostic engine</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100">
              <TrendingUp className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase">Optimal Performance</span>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={accuracyTrend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="week" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }}
                  dy={10}
                />
                <YAxis 
                  domain={[97, 100]}
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#64748b', fontWeight: 600 }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="accuracy" 
                  stroke="#13abec" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#13abec', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
