import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { 
  Users, 
  FileText, 
  AlertCircle, 
  TrendingUp, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  ChevronRight,
  Activity,
  Search
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
  Bar
} from 'recharts';
import { cn } from '../types';

const activityData = [
  { day: 'Mon', scans: 12 },
  { day: 'Tue', scans: 18 },
  { day: 'Wed', scans: 15 },
  { day: 'Thu', scans: 22 },
  { day: 'Fri', scans: 28 },
  { day: 'Sat', scans: 10 },
  { day: 'Sun', scans: 5 },
];

export const Dashboard: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.getStats();
        if (res.status === 'success') {
          setStats(res.data);
        }
      } catch (err) {
        console.error('Failed to fetch stats', err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const statCards = [
    { label: 'Total Patients', value: stats?.patientCount || '0', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { label: 'Scans Analyzed', value: stats?.analysisCount || '0', change: '+8%', icon: Activity, color: 'bg-primary' },
    { label: 'High Risk (TR5)', value: stats?.highRiskCount || '0', change: '-3%', icon: AlertCircle, color: 'bg-red-500' },
    { label: 'Pending Reviews', value: stats?.pendingCount || '0', change: 'New', icon: Clock, color: 'bg-amber-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-border-light shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-3 rounded-xl text-white shadow-lg", stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className={cn(
                "text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1",
                stat.change.startsWith('+') ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
              )}>
                {stat.change.startsWith('+') ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
            <p className="text-sm font-medium text-text-muted">{stat.label}</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-border-light shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Clinical Activity</h3>
                <p className="text-xs text-text-muted">Volume of scans processed over the last 7 days</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-slate-50 text-text-muted rounded-lg text-xs font-bold border border-slate-200">Weekly</button>
                <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-bold shadow-sm">Monthly</button>
              </div>
            </div>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData}>
                  <defs>
                    <linearGradient id="colorScans" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#13abec" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#13abec" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="day" 
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
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="scans" 
                    stroke="#13abec" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorScans)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Patient Queue */}
          <div className="bg-white rounded-2xl border border-border-light shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-border-light flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Patient Queue</h3>
              <button 
                onClick={() => onNavigate('reports')}
                className="text-xs text-primary font-bold hover:underline flex items-center gap-1"
              >
                View Full List <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="divide-y divide-border-light">
              {(stats?.recentReports || []).map((report: any, i: number) => (
                <div
                  key={i}
                  className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group"
                  onClick={() => onNavigate('report-detail', report._id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-primary">
                      {report.patientId?.name ? report.patientId.name.split(' ').map((n: string) => n[0]).join('') : 'P'}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{report.patientId?.name || 'Unknown Patient'}</p>
                      <p className="text-[10px] text-text-muted font-medium uppercase tracking-wider">#{report.id?.slice(-4).toUpperCase()} • {new Date(report.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded",
                      report.riskLevel === 'High' ? "bg-red-50 text-red-600" :
                      report.riskLevel === 'Moderate' ? "bg-orange-50 text-orange-600" : "bg-emerald-50 text-emerald-600"
                    )}>
                      {report.riskLevel === 'High' ? 'TR5' : report.riskLevel === 'Moderate' ? 'TR4' : 'TR2'}
                    </span>
                    <button className="text-slate-400 group-hover:text-primary transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Upcoming Appointments */}
          <div className="bg-white p-6 rounded-2xl border border-border-light shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="text-primary w-5 h-5" />
                Today's Schedule
              </h3>
              <span className="text-[10px] font-bold text-text-muted uppercase">Oct 24, 2023</span>
            </div>
            <div className="space-y-4">
              {[
                { time: '09:00 AM', patient: 'John Doe', type: 'Ultrasound Scan' },
                { time: '10:30 AM', patient: 'Alice Smith', type: 'FNA Biopsy' },
                { time: '01:00 PM', patient: 'David Miller', type: 'Consultation' },
                { time: '02:30 PM', patient: 'Emma Wilson', type: 'Follow-up' },
              ].map((appt, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="text-[10px] font-bold text-primary whitespace-nowrap pt-1">{appt.time}</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{appt.patient}</p>
                    <p className="text-xs text-text-muted">{appt.type}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 text-primary rounded-xl text-xs font-bold hover:bg-primary/10 transition-all border border-slate-100">
              View Full Calendar
            </button>
          </div>

          {/* AI Insights */}
          <div className="bg-slate-900 p-6 rounded-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="text-primary-light w-5 h-5" />
                AI Performance
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-white/60 uppercase tracking-widest">Detection Accuracy</span>
                    <span className="text-primary-light">99.2%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-light w-[99%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-white/60 uppercase tracking-widest">Processing Time</span>
                    <span className="text-primary-light">1.4s</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-light w-[85%]"></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[10px] text-white/40 leading-relaxed italic">
                    "AI model v4.2.0 is currently operating at optimal efficiency with zero reported false negatives this week."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
