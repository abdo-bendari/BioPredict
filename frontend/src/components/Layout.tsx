import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  LogOut,
  Folder,
  BarChart3,
  ChevronRight,
  Activity,
  Pill
} from 'lucide-react';
import { cn } from '../types';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: any) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'reports', label: 'Reports', icon: Folder },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'analysis', label: 'Analysis', icon: BarChart3 },
    { id: 'medication-search', label: 'Meds Search', icon: Pill },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 w-20 md:w-64 bg-white border-r border-border-light flex flex-col z-50 transition-all duration-300">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
          <Activity className="text-white w-6 h-6" />
        </div>
        <span className="hidden md:block font-bold text-xl tracking-tight text-primary">BioPredict</span>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id === 'patients' ? 'patient-profile' : item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group",
              currentPage === item.id || (item.id === 'patients' && currentPage === 'patient-profile')
                ? "bg-primary/10 text-primary font-semibold"
                : "text-text-muted hover:bg-slate-50 hover:text-primary"
            )}
          >
            <item.icon className={cn("w-6 h-6 shrink-0", currentPage === item.id ? "text-primary" : "text-slate-400 group-hover:text-primary")} />
            <span className="hidden md:block">{item.label}</span>
          </button>
        ))}
        
        <div className="pt-4 mt-4 border-t border-border-light">
          <button
            onClick={() => onNavigate('landing')}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-text-muted hover:bg-slate-50 hover:text-primary transition-all duration-200 group"
          >
            <LogOut className="w-6 h-6 shrink-0 text-slate-400 group-hover:text-primary rotate-180" />
            <span className="hidden md:block">Back to Landing</span>
          </button>
        </div>
      </nav>

      <div className="p-4 border-t border-border-light">
        <div className="flex items-center gap-3 px-2 py-2">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC73mrrkrNiRj4eHqGFDyrJUjynmyRgPJrQDiECSacZSHjEj7yJfFkQhpJSCNESeyW-_f9bSPw_Jf6qnYUb-0HHhNx5456WgdvayT8_6WrCUWzLvo2QWwY5FZZErFdO_t8gr-aOF00RWH8fUzfe8NePNAKqe1yzP0VRnbr0TSncz2s9TyEg9Z2Wy6K2B7_JpZJjbDIzyboKAneFuMjnHD9NRsbXn1uq85VsDMuoJffizKCadyq9viKrcGWraz03kHw3D8HnGJNv8u22" 
            alt="Dr. Sarah Chen"
            className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
          />
          <div className="hidden md:block flex-1 overflow-hidden">
            <p className="text-sm font-semibold truncate">Dr. Sarah Chen</p>
            <p className="text-xs text-text-muted truncate">Radiologist</p>
          </div>
          <button className="hidden md:block text-slate-400 hover:text-primary transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export const TopNav: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-border-light h-20 flex items-center justify-between px-8 ml-20 md:ml-64">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 text-xs font-medium text-text-muted mb-1">
          <button onClick={() => onNavigate('landing')} className="hover:text-primary transition-colors">Landing Page</button>
          <ChevronRight className="w-3 h-3" />
          <span>Dashboard</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary capitalize">{currentPage.replace('-', ' ')}</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-text-main capitalize">
          {currentPage === 'dashboard' ? 'Clinical Overview' : currentPage.replace('-', ' ')}
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search patient ID..." 
            className="pl-10 pr-4 py-2 bg-slate-50 border border-border-light rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none w-64 transition-all"
          />
        </div>
        
        <button 
          onClick={() => onNavigate('new-analysis')}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
        >
          <Plus className="w-4 h-4" />
          New Scan
        </button>

        <div className="relative cursor-pointer group">
          <Bell className="text-text-muted group-hover:text-primary transition-colors" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </div>
      </div>
    </nav>
  );
};
