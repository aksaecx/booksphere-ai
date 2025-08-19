
import React from 'react';
import { Search, ArrowRight, BookOpen, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/20 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
                  <span className="text-white">Temukan Buku</span>
                  <span className="block text-white/90">
                    Impian Anda
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/80 max-w-2xl leading-relaxed">
                  Platform penjualan buku online terlengkap dengan teknologi AI untuk membantu Anda menemukan buku yang sempurna
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-lg mx-auto lg:mx-0">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Cari buku favorit Anda..."
                    className="pl-12 pr-4 py-4 text-lg bg-white border-0 shadow-lg"
                  />
                  <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="btn-primary px-8 py-4 text-lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Jelajahi Koleksi
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-white/10 text-white border-white/30 hover:bg-white/20">
                  <Users className="mr-2 h-5 w-5" />
                  Daftar Sekarang
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-white/70">Koleksi Buku</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white">5K+</div>
                  <div className="text-white/70">Pengguna Aktif</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start">
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    <span className="text-3xl font-bold text-white ml-2">4.9</span>
                  </div>
                  <div className="text-white/70">Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Book Showcase */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* Featured Books */}
                {[
                  { title: "The Midnight Library", author: "Matt Haig", color: "from-blue-600 to-purple-600" },
                  { title: "Atomic Habits", author: "James Clear", color: "from-green-600 to-blue-600" },
                  { title: "Dune", author: "Frank Herbert", color: "from-orange-600 to-red-600" },
                  { title: "The Silent Patient", author: "Alex Michaelides", color: "from-purple-600 to-pink-600" }
                ].map((book, index) => (
                  <div 
                    key={index}
                    className={`book-card bg-gradient-to-br ${book.color} p-6 rounded-lg text-white transform hover:scale-105 transition-all duration-300 ${
                      index % 2 === 0 ? 'mt-0' : 'mt-8'
                    }`}
                  >
                    <div className="aspect-[3/4] bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-white/80" />
                    </div>
                    <h3 className="font-serif text-lg font-bold mb-1 line-clamp-2">{book.title}</h3>
                    <p className="text-white/80 text-sm">{book.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
