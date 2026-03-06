import React from 'react';
import { 
  User, 
  Bell, 
  Lock, 
  Shield, 
  Globe, 
  Database, 
  Smartphone,
  ChevronRight,
  Mail,
  Camera,
  LogOut,
  CreditCard,
  Zap
} from 'lucide-react';
import { cn } from '../types';

export const Settings: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-4 space-y-2">
          {[
            { id: 'profile', label: 'Profile Settings', icon: User, active: true },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'security', label: 'Security & Privacy', icon: Lock },
            { id: 'billing', label: 'Billing & Plans', icon: CreditCard },
            { id: 'integrations', label: 'Integrations', icon: Zap },
            { id: 'advanced', label: 'Advanced', icon: Database },
          ].map((item) => (
            <button
              key={item.id}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium",
                item.active 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-text-muted hover:bg-white hover:text-primary border border-transparent hover:border-border-light"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
          <div className="pt-8">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all text-sm font-bold">
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="md:col-span-8 space-y-6">
          {/* Profile Section */}
          <div className="bg-white rounded-2xl border border-border-light shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border-light">
              <h3 className="font-bold text-slate-900">Personal Information</h3>
              <p className="text-xs text-text-muted">Update your professional profile and contact details.</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC73mrrkrNiRj4eHqGFDyrJUjynmyRgPJrQDiECSacZSHjEj7yJfFkQhpJSCNESeyW-_f9bSPw_Jf6qnYUb-0HHhNx5456WgdvayT8_6WrCUWzLvo2QWwY5FZZErFdO_t8gr-aOF00RWH8fUzfe8NePNAKqe1yzP0VRnbr0TSncz2s9TyEg9Z2Wy6K2B7_JpZJjbDIzyboKAneFuMjnHD9NRsbXn1uq85VsDMuoJffizKCadyq9viKrcGWraz03kHw3D8HnGJNv8u22" 
                    alt="Profile"
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-100 group-hover:opacity-80 transition-opacity"
                  />
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="text-white w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900">Dr. Sarah Chen</h4>
                  <p className="text-xs text-text-muted">Senior Radiologist • ID: #DR-9921</p>
                  <button className="text-xs font-bold text-primary hover:underline">Change Photo</button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Full Name</label>
                  <input type="text" defaultValue="Sarah Chen" className="w-full px-4 py-2.5 bg-slate-50 border border-border-light rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Email Address</label>
                  <input type="email" defaultValue="sarah.chen@hospital.org" className="w-full px-4 py-2.5 bg-slate-50 border border-border-light rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Specialization</label>
                  <input type="text" defaultValue="Radiology" className="w-full px-4 py-2.5 bg-slate-50 border border-border-light rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider">License Number</label>
                  <input type="text" defaultValue="ML-8829102" className="w-full px-4 py-2.5 bg-slate-50 border border-border-light rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none" />
                </div>
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t border-border-light flex justify-end">
              <button className="px-6 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                Save Changes
              </button>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-white rounded-2xl border border-border-light shadow-sm p-6 space-y-6">
            <h3 className="font-bold text-slate-900">Security & Privacy</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Two-Factor Authentication</p>
                    <p className="text-xs text-text-muted">Add an extra layer of security to your account.</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Session Management</p>
                    <p className="text-xs text-text-muted">Manage your active sessions and logged-in devices.</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-primary hover:underline">Manage</button>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-2xl border border-border-light shadow-sm p-6 space-y-6">
            <h3 className="font-bold text-slate-900">System Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">Language</p>
                  <p className="text-xs text-text-muted">Select your preferred interface language.</p>
                </div>
                <select className="bg-slate-50 border border-border-light rounded-lg px-3 py-1.5 text-xs font-bold outline-none">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">Timezone</p>
                  <p className="text-xs text-text-muted">Set your local timezone for report timestamps.</p>
                </div>
                <select className="bg-slate-50 border border-border-light rounded-lg px-3 py-1.5 text-xs font-bold outline-none">
                  <option>UTC-08:00 (Pacific Time)</option>
                  <option>UTC+00:00 (GMT)</option>
                  <option>UTC+01:00 (CET)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
