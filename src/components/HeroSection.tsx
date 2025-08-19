
import React, { useState } from 'react';
import { Search, Sparkles, TrendingUp, Users, BookOpen, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Here you would implement actual search functionality
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const stats = [
    { icon: BookOpen, label: 'Koleksi Buku', value: '50,000+', color: 'text-accent' },
    { icon: Users, label: 'Pembaca Aktif', value: '25,000+', color: 'text-secondary' },
    { icon: TrendingUp, label: 'Rating AI', value: '98%', color: 'text-accent' }
  ];

  const quickSearches = [
    'Novel romantis',
    'Buku motivasi',
    'Sci-fi terbaru',
    'Biografi inspiratif'
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
              <Sparkles className="h-4 w-4" />
              <span>Platform Buku Bertenaga AI Terdepan</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
                Temukan Buku
                <span className="block text-gradient">Impianmu</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                AI Personal Librarian yang memahami selera bacamu. 
                Dapatkan rekomendasi buku yang sempurna berdasarkan mood dan preferensi unik Anda.
              </p>
            </div>

            {/* AI Search Bar */}
            <div className="space-y-4">
              <div className="relative max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-center space-x-3 bg-card border border-border rounded-2xl p-2 shadow-lg">
                  <div className="flex-1 flex items-center space-x-3">
                    <Search className="h-5 w-5 text-muted-foreground ml-3" />
                    <Input
                      placeholder="Tanya AI: 'Buku tentang perjalanan waktu yang tidak terlalu rumit...'"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 text-lg"
                    />
                  </div>
                  <Button
                    onClick={handleSearch}
                    className="bg-gradient-to-r from-primary to-accent text-white rounded-xl px-6 py-3 font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Tanya AI
                  </Button>
                </div>
              </div>

              {/* Quick Search Tags */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="text-sm text-muted-foreground mr-2">Populer:</span>
                {quickSearches.map((search, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(search)}
                    className="rounded-full text-foreground border-border hover:bg-accent/10 hover:border-accent"
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark rounded-full px-8 py-4 text-lg font-semibold">
                Mulai Jelajahi
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted rounded-full px-8 py-4 text-lg">
                Lihat Demo AI
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 ${stat.color} mb-2`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Floating Book Cards */}
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Main Featured Book */}
              <Card className="absolute z-20 w-64 h-80 book-card bg-gradient-to-br from-primary to-accent rounded-2xl shadow-2xl">
                <CardContent className="p-6 h-full flex flex-col justify-between text-center">
                  <div>
                    <div className="w-16 h-20 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white font-serif text-xl font-bold mb-2">AI Recommendations</h3>
                    <p className="text-white/80 text-sm">Personalized just for you</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-white/80 text-xs">
                      <span>AI Match</span>
                      <span className="font-bold">98%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 w-[98%]"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Side Books */}
              <Card className="absolute -top-4 -left-8 z-10 w-48 h-64 book-card bg-card border-border shadow-xl rounded-xl float-animation">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-16 bg-secondary/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">The Midnight Library</h4>
                  <p className="text-muted-foreground text-xs">Matt Haig</p>
                  <div className="mt-2 text-accent text-xs font-bold">95% Match</div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-8 -right-4 z-10 w-48 h-64 book-card bg-card border-border shadow-xl rounded-xl float-animation" style={{animationDelay: '2s'}}>
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-16 bg-accent/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">Atomic Habits</h4>
                  <p className="text-muted-foreground text-xs">James Clear</p>
                  <div className="mt-2 text-secondary text-xs font-bold">92% Match</div>
                </CardContent>
              </Card>

              {/* Sparkle Effects */}
              <Sparkles className="absolute top-10 right-20 h-6 w-6 text-accent animate-pulse" />
              <Sparkles className="absolute bottom-20 left-10 h-4 w-4 text-secondary animate-pulse" style={{animationDelay: '1s'}} />
              <Sparkles className="absolute top-1/3 left-1/4 h-5 w-5 text-accent animate-pulse" style={{animationDelay: '3s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
