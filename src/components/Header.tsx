
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Book, Menu, X, LogIn, UserPlus } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <Book className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-primary">BookSphere</h1>
              <p className="text-xs text-muted-foreground -mt-1">AI-Powered</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('books')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Jelajah
            </button>
            <button 
              onClick={() => scrollToSection('ai-features')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              AI Features
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Cari buku..." 
                className="pl-10 pr-4 bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Login Buttons */}
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-muted hidden sm:flex">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="btn-primary hidden sm:flex">
              <UserPlus className="h-4 w-4 mr-2" />
              Daftar
            </Button>
            
            <Button variant="ghost" size="sm" className="relative text-foreground hover:bg-muted">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                0
              </span>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/30 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Input 
                placeholder="Cari buku..." 
                className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
              <nav className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="text-foreground hover:text-primary transition-colors text-left font-medium"
                >
                  Beranda
                </button>
                <button 
                  onClick={() => scrollToSection('books')} 
                  className="text-foreground hover:text-primary transition-colors text-left font-medium"
                >
                  Jelajah
                </button>
                <button 
                  onClick={() => scrollToSection('ai-features')} 
                  className="text-foreground hover:text-primary transition-colors text-left font-medium"
                >
                  AI Features
                </button>
              </nav>
              <div className="flex flex-col space-y-2 pt-3 border-t border-border/30">
                <Button variant="ghost" size="sm" className="text-foreground hover:bg-muted justify-start">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="btn-primary justify-start">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Daftar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
