
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Book, Sparkles, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <Book className="h-8 w-8 text-accent animate-pulse" />
              <Sparkles className="h-4 w-4 text-secondary absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-gradient">BookSphere</h1>
              <p className="text-xs text-muted-foreground -mt-1">AI-Powered</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-foreground hover:text-accent transition-colors"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('books')} 
              className="text-foreground hover:text-accent transition-colors"
            >
              Jelajah
            </button>
            <button 
              onClick={() => scrollToSection('ai-features')} 
              className="text-foreground hover:text-accent transition-colors"
            >
              AI Features
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Tanya AI: 'Buku tentang petualangan fantasi...'" 
                className="pl-10 pr-4 bg-white/10 border-white/20 text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Sparkles className="h-4 w-4 text-accent animate-pulse" />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="relative hover:bg-white/10">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-white/10">
              <User className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <Input 
                placeholder="Cari buku dengan AI..." 
                className="bg-white/10 border-white/20 text-foreground placeholder:text-muted-foreground"
              />
              <nav className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="text-foreground hover:text-accent transition-colors text-left"
                >
                  Beranda
                </button>
                <button 
                  onClick={() => scrollToSection('books')} 
                  className="text-foreground hover:text-accent transition-colors text-left"
                >
                  Jelajah
                </button>
                <button 
                  onClick={() => scrollToSection('ai-features')} 
                  className="text-foreground hover:text-accent transition-colors text-left"
                >
                  AI Features
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
