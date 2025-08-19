
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, LogIn, UserPlus, Book } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Book className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">BookSphere</h1>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
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
              Katalog
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Kontak
            </button>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center max-w-md mx-8 flex-1">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Cari buku..." 
                className="pl-10 bg-white border-gray-300"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="btn-primary hidden sm:flex">
              <UserPlus className="h-4 w-4 mr-2" />
              Daftar
            </Button>
            
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Input 
                placeholder="Cari buku..." 
                className="bg-white border-gray-300"
              />
              <nav className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="text-left p-2 text-foreground hover:text-primary hover:bg-secondary rounded"
                >
                  Beranda
                </button>
                <button 
                  onClick={() => scrollToSection('books')} 
                  className="text-left p-2 text-foreground hover:text-primary hover:bg-secondary rounded"
                >
                  Katalog
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-left p-2 text-foreground hover:text-primary hover:bg-secondary rounded"
                >
                  Kontak
                </button>
              </nav>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                <Button variant="outline" size="sm" className="justify-start">
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
