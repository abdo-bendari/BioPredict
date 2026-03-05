import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Page = 
  | 'landing' 
  | 'login' 
  | 'signup' 
  | 'dashboard' 
  | 'reports' 
  | 'patient-profile' 
  | 'report-detail' 
  | 'new-analysis'
  | 'analysis'
  | 'patient-results'
  | 'settings'
  | 'about'
  | 'future'
  | 'contact'
  | 'user-history'
  | 'medication-search'
  | 'tour';

export interface Patient {
  id: string;
  name: string;
  dob: string;
  age: number;
  lastSeen: string;
  tiRads: string;
  status: string;
  maxSize: string;
  image?: string;
}

export interface Report {
  id: string;
  patientInitials: string;
  date: string;
  radiologist: string;
  tiRads: string;
  maxSize: string;
  composition: string;
  findings: string;
  image: string;
}
