
import React from 'react';
import { Search, ArrowRight, BookOpen, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-20 bg-gradient-to-br from-primary to-accent min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Toko Buku Online
            <span className="block text-accent-foreground">Terlengkap</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Temukan ribuan buku berkualitas dengan harga terbaik. 
            Dari novel hingga buku akademik, semuanya ada di sini.
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Cari buku favorit Anda..."
                className="pl-12 pr-4 py-4 text-lg bg-white text-black"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              <BookOpen className="mr-2 h-5 w-5" />
              Lihat Katalog
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              <Users className="mr-2 h-5 w-5" />
              Daftar Sekarang
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-white/80">Koleksi Buku</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/80">Pelanggan</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
                <span className="text-3xl font-bold text-white ml-2">4.8</span>
              </div>
              <div className="text-white/80">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
