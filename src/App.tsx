import React, { useState } from 'react';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { FloatingQuickActions } from './components/common/FloatingQuickActions';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { QuickStatsBanner } from './components/sections/QuickStatsBanner';
import { PhilosophyGurukul } from './components/sections/PhilosophyGurukul';
import { SportsShowcase } from './components/sections/SportsShowcase';
import { BoardingLifeTimeline } from './components/sections/BoardingLifeTimeline';
import { CampusVirtualTour } from './components/sections/CampusVirtualTour';
import { AwardsRankings } from './components/sections/AwardsRankings';
import { DignitariesHall } from './components/sections/DignitariesHall';
import { TestimonialsGoogle } from './components/sections/TestimonialsGoogle';
import { CollaborationsGlobal } from './components/sections/CollaborationsGlobal';
import { AdmissionCalculatorModal } from './components/sections/AdmissionCalculatorModal';
import { InquiryDrawerModal } from './components/sections/InquiryDrawerModal';
import { VirtualTourModal } from './components/sections/VirtualTourModal';

export const App: React.FC = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [prefilledGrade, setPrefilledGrade] = useState('Class IV');

  const handleOpenInquiryWithGrade = (grade: string) => {
    setPrefilledGrade(grade);
    setIsInquiryOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-brand-cream text-neutral-900 dark:bg-brand-dark dark:text-neutral-100 font-sans transition-colors duration-300 antialiased selection:bg-brand-crimson selection:text-white">
      {/* 1. Interactive Mouse Follower Custom Cursor */}
      <CustomCursor />

      {/* 2. Scroll Reading Progress Bar */}
      <ScrollProgress />

      {/* 3. Sticky Navigation Bar with Theme Switcher & Announcements */}
      <Navbar
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="relative z-10">
        {/* Hero Experience */}
        <HeroSection
          onOpenInquiry={() => setIsInquiryOpen(true)}
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        />

        {/* Apex Stats & Rankings Counter Banner */}
        <QuickStatsBanner />

        {/* The Modern Gurukul Concept (Mind, Body, Soul Triad) */}
        <PhilosophyGurukul onOpenInquiry={() => setIsInquiryOpen(true)} />

        {/* 16+ Olympic Sports Disciplines */}
        <SportsShowcase onOpenInquiry={() => setIsInquiryOpen(true)} />

        {/* 24/7 Boarding Life Diurnal Schedule */}
        <BoardingLifeTimeline onOpenInquiry={() => setIsInquiryOpen(true)} />

        {/* 22-Acre Campus Explorer & 360 Showcase */}
        <CampusVirtualTour onOpenVirtualTour={() => setIsVirtualTourOpen(true)} />

        {/* Awards, Rankings & Trophies */}
        <AwardsRankings />

        {/* Influential Personalities & Dignitaries On Campus */}
        <DignitariesHall />

        {/* Authentic Parent Testimonials & Google Reviews (4.9 ★) */}
        <TestimonialsGoogle />

        {/* 12+ Global International Collaborations */}
        <CollaborationsGlobal />
      </main>

      {/* Comprehensive Academic Footer */}
      <Footer
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Floating Action Dock (Apply Now, WhatsApp, Helpline, Fee Estimator) */}
      <FloatingQuickActions
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Interactive Modals */}
      <AdmissionCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onProceedToInquiry={handleOpenInquiryWithGrade}
      />

      <InquiryDrawerModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        prefilledGrade={prefilledGrade}
      />

      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />
    </div>
  );
};

export default App;
