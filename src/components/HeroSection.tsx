
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Play, BookOpen, Brain, Star } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <Brain className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white">Powered by Advanced AI</span>
              <Sparkles className="h-4 w-4 text-secondary animate-pulse" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight">
                Temukan Buku
                <span className="block text-gradient">Impianmu</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl">
                Platform penjualan buku bertenaga AI yang memahami selera bacamu. 
                Dari mood hingga minat, kami bantu temukan buku yang tepat untukmu.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-white/70 text-sm">Buku Digital</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-white/70 text-sm">Akurasi AI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/70 text-sm">AI Assistant</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('books')}
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Mulai Eksplorasi AI
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('ai-features')}
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full backdrop-blur-sm"
              >
                <Play className="mr-2 h-4 w-4" />
                Lihat Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-secondary fill-current" />
                ))}
              </div>
              <span className="text-white/70 text-sm">4.9/5 dari 10K+ pengguna</span>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative flex justify-center">
            {/* Main Book Display */}
            <div className="relative">
              {/* Floating Books */}
              <div className="absolute -top-10 -left-10 glass-dark rounded-lg p-4 float-animation">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <div className="absolute -bottom-10 -right-10 glass-dark rounded-lg p-4 float-animation delay-1000">
                <Brain className="h-8 w-8 text-secondary" />
              </div>

              {/* Central Book Stack */}
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="book-card bg-white rounded-lg p-8 w-80 h-96 flex flex-col justify-center items-center space-y-4">
                  <div className="w-full h-48 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <BookOpen className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="font-serif text-xl font-bold">AI Recommendations</h3>
                      <p className="text-sm opacity-90">Personal & Cerdas</p>
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <h4 className="font-serif text-lg font-semibold text-primary">Buku Pilihan AI</h4>
                    <p className="text-sm text-muted-foreground">Disesuaikan dengan preferensi dan mood Anda</p>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent/20 rounded-full animate-ping"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-secondary/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary-light/20 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-white/70">
          <span className="text-sm">Scroll untuk eksplorasi</span>
          <div className="w-1 h-8 bg-white/30 rounded-full">
            <div className="w-1 h-3 bg-accent rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
