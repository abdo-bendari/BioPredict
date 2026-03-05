import React, { useState } from 'react';
import { Sidebar, TopNav } from './components/Layout';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { Reports } from './pages/Reports';
import { PatientProfile } from './pages/PatientProfile';
import { ReportDetail } from './pages/ReportDetail';
import { NewAnalysis } from './pages/NewAnalysis';
import { Analysis } from './pages/Analysis';
import { PatientResults } from './pages/PatientResults';
import { Settings } from './pages/Settings';
import { About } from './pages/About';
import { FutureFeatures } from './pages/FutureFeatures';
import { Contact } from './pages/Contact';
import { UserHistory } from './pages/UserHistory';
import { ProductTour } from './pages/ProductTour';
import { MedicationSearch } from './pages/MedicationSearch';
import { Page, cn } from './types';
import { motion, AnimatePresence } from 'motion/react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('landing');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing onNavigate={handleNavigate} />;
      case 'login':
        return <Login onLogin={handleLogin} onSignup={() => handleNavigate('signup')} />;
      case 'signup':
        return <Signup onComplete={handleLogin} onLogin={() => handleNavigate('login')} />;
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'reports':
        return <Reports onNavigate={handleNavigate} />;
      case 'patient-profile':
        return <PatientProfile />;
      case 'report-detail':
        return <ReportDetail onBack={() => handleNavigate('reports')} />;
      case 'new-analysis':
        return <NewAnalysis onComplete={() => handleNavigate('report-detail')} />;
      case 'analysis':
        return <Analysis />;
      case 'patient-results':
        return <PatientResults onBack={() => handleNavigate('landing')} />;
      case 'settings':
        return <Settings />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'future':
        return <FutureFeatures onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'user-history':
        return <UserHistory onNavigate={handleNavigate} />;
      case 'medication-search':
        return <MedicationSearch />;
      case 'tour':
        return <ProductTour onNavigate={handleNavigate} />;
      default:
        return <Landing onNavigate={handleNavigate} />;
    }
  };

  const isAuthPage = ['landing', 'login', 'signup', 'about', 'future', 'contact', 'user-history', 'tour', 'patient-results'].includes(currentPage);

  return (
    <div className="min-h-screen bg-background-light">
      {!isAuthPage && isAuthenticated && (
        <>
          <Sidebar currentPage={currentPage} onNavigate={handleNavigate} />
          <TopNav currentPage={currentPage} onNavigate={handleNavigate} />
        </>
      )}
      
      <main className={cn(
        "transition-all duration-300",
        !isAuthPage && isAuthenticated ? "ml-20 md:ml-64 p-8" : ""
      )}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
