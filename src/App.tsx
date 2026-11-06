/**
 * Sachitel Telecom Equipment Trading L.L.C
 * Single-Page Responsive Web Application
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SolutionsSection } from './components/SolutionsSection';
import { LifecycleSection } from './components/LifecycleSection';
import { EstimatorSection } from './components/EstimatorSection';
import { ClientsSection } from './components/ClientsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProfilePdfModal } from './components/ProfilePdfModal';
import { ChevronUp, MessageCircle } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [pdfModalOpen, setPdfModalOpen] = useState<boolean>(false);
  const [selectedSolutionForRfq, setSelectedSolutionForRfq] = useState<string | null>(null);
  const [transferredEstimate, setTransferredEstimate] = useState<{
    drops: number;
    cameras: number;
    rooms: number;
    racks: number;
    sla: string;
    totalAed: string;
    timeline: string;
  } | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with browser hash routing for smooth in-page scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track active section with IntersectionObserver as the user scrolls
  useEffect(() => {
    const sectionIds = ['home', 'about', 'solutions', 'how-we-work', 'clients', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { threshold: 0.25 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.location.hash = `#${sectionId}`;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTransferEstimate = (estimateDetails: {
    drops: number;
    cameras: number;
    rooms: number;
    racks: number;
    sla: string;
    totalAed: string;
    timeline: string;
  }) => {
    setTransferredEstimate(estimateDetails);
    handleNavigate('contact');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#EDF2F7] text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      
      {/* Sticky Glassmorphic Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections (Smooth Single-Page Layout in Exact Logical Order) */}
      <main className="flex-1">
        
        {/* Home / Hero Section */}
        <Hero
          onNavigate={handleNavigate}
          onOpenPdfModal={() => setPdfModalOpen(true)}
        />

        {/* 01 · About Section */}
        <AboutSection
          onOpenPdfModal={() => setPdfModalOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* 02 · Solutions Section */}
        <SolutionsSection
          onNavigate={handleNavigate}
          onSelectSolutionForRfq={(solutionTitle) => {
            setSelectedSolutionForRfq(solutionTitle);
            handleNavigate('contact');
          }}
        />

        {/* 03 · How We Work (7-Stage Delivery) */}
        <LifecycleSection />

        {/* 04 · Clients Section */}
        <ClientsSection />

        {/* Interactive Enterprise RFP & BOQ Estimator */}
        <EstimatorSection
          onTransferEstimateToRfq={handleTransferEstimate}
        />

        {/* 05 · Contact & Site Survey Portal */}
        <ContactSection
          initialSolution={selectedSolutionForRfq}
          transferredEstimate={transferredEstimate}
        />

      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPdfModal={() => setPdfModalOpen(true)}
      />

      {/* Corporate Profile PDF Preview & Download Modal */}
      <ProfilePdfModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
      />

      {/* Floating Quick Action Docks */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 no-print pointer-events-none">
        
        {/* Quick WhatsApp Dispatch Button */}
        <a
          href={`https://wa.me/971553481239?text=${encodeURIComponent('Hello Sachitel Telecom, I would like to schedule a site survey or request a project quotation.')}`}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto p-3 rounded-full bg-[#10B981] hover:bg-[#059669] text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
          title="Direct WhatsApp Support"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-mono font-bold pl-0 group-hover:pl-2">
            WhatsApp NOC
          </span>
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-white/95 border border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 shadow-md hover:scale-105 active:scale-95 transition-all"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
}
