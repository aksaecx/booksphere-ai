
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AIFeatures from '@/components/AIFeatures';
import BookShowcase from '@/components/BookShowcase';
import AIAssistant from '@/components/AIAssistant';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AIFeatures />
      <BookShowcase />
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Index;
