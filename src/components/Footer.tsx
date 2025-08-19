
import React from 'react';
import { Book, Sparkles, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Book className="h-8 w-8 text-accent animate-pulse" />
                <Sparkles className="h-4 w-4 text-secondary absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold">BookSphere</h3>
                <p className="text-sm text-white/70">AI-Powered</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Platform penjualan buku bertenaga AI yang memahami selera bacamu. 
              Temukan buku impianmu dengan teknologi kecerdasan buatan terdepan.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Jelajahi</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Beranda</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Katalog Buku</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Fitur AI</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Kategori</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Best Sellers</a></li>
            </ul>
          </div>

          {/* AI Features */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Teknologi AI</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Personal Librarian</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Smart Recommendations</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Mood Detection</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Voice Search</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">AI Chat Assistant</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-white/80 text-sm">info@booksphere.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-white/80 text-sm">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-white/80 text-sm">Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h5 className="font-medium">Newsletter AI</h5>
              <p className="text-sm text-white/70">Dapatkan rekomendasi buku personal dan update teknologi AI terbaru</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Email Anda" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50 rounded-full"
                />
                <Button className="bg-accent hover:bg-accent-dark rounded-full px-6">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/70 text-sm">
            © 2024 BookSphere AI. All rights reserved. Powered by Advanced Artificial Intelligence.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/70 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-accent transition-colors">AI Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
