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
    const sectionIds = ['home', 'solutions', 'lifecycle', 'about', 'clients', 'contact'];
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
    <div className="min-h-screen bg-[#050B14] text-[#dce3f0] flex flex-col selection:bg-[#00F0FF]/25 selection:text-white">
      
      {/* Sticky Glassmorphic Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenPdfModal={() => setPdfModalOpen(true)}
      />

      {/* Main Content Sections (Smooth Single-Page Layout) */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onNavigate={handleNavigate}
          onOpenPdfModal={() => setPdfModalOpen(true)}
        />

        {/* Core Technology Solutions Hub */}
        <SolutionsSection
          onNavigate={handleNavigate}
          onSelectSolutionForRfq={(solutionTitle) => {
            setSelectedSolutionForRfq(solutionTitle);
            handleNavigate('contact');
          }}
        />

        {/* 7-Stage Turnkey Delivery Lifecycle */}
        <LifecycleSection />

        {/* Executive Profile & Corporate Track Record */}
        <AboutSection
          onOpenPdfModal={() => setPdfModalOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* Interactive Enterprise RFP & BOQ Estimator */}
        <EstimatorSection
          onTransferEstimateToRfq={handleTransferEstimate}
        />

        {/* Verified Enterprise Clients & Continuous Marquee */}
        <ClientsSection />

        {/* Contact & RFQ Portal */}
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
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 no-print">
        
        {/* Quick WhatsApp Dispatch Button */}
        <a
          href={`https://wa.me/971553481239?text=${encodeURIComponent('Hello Sachitel Telecom, I would like to schedule a site survey or request a project quotation.')}`}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-[#10B981] hover:bg-[#059669] text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
          title="Direct WhatsApp Support"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-mono font-bold pl-0 group-hover:pl-2">
            WhatsApp NOC
          </span>
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#081325]/90 border border-white/20 hover:border-[#00F0FF] text-white hover:text-[#00F0FF] shadow-lg backdrop-blur-md hover:scale-105 active:scale-95 transition-all"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
}
