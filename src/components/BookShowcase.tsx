
import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BookShowcase = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = ['all', 'fiction', 'self-help', 'sci-fi', 'thriller'];
  
  const featuredBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      rating: 4.8,
      reviews: 12543,
      price: "Rp 89.000",
      originalPrice: "Rp 120.000",
      genre: "Fiction",
      category: "fiction",
      description: "Antara hidup dan mati ada perpustakaan, dan di rak-raknya terdapat cerita-cerita yang mungkin Anda jalani."
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear", 
      rating: 4.9,
      reviews: 25431,
      price: "Rp 95.000",
      originalPrice: "Rp 125.000",
      genre: "Self-Help",
      category: "self-help",
      description: "Panduan praktis untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk."
    },
    {
      id: 3,
      title: "Dune",
      author: "Frank Herbert",
      rating: 4.7,
      reviews: 18764,
      price: "Rp 110.000",
      originalPrice: "Rp 150.000",
      genre: "Sci-Fi",
      category: "sci-fi",
      description: "Epik fiksi ilmiah yang mengisahkan perjuangan politik dan spiritual di planet gurun Arrakis."
    },
    {
      id: 4,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      rating: 4.6,
      reviews: 15234,
      price: "Rp 85.000",
      originalPrice: "Rp 115.000", 
      genre: "Thriller",
      category: "thriller",
      description: "Thriller psikologis tentang seorang wanita yang menolak berbicara setelah membunuh suaminya."
    },
    {
      id: 5,
      title: "Becoming",
      author: "Michelle Obama",
      rating: 4.8,
      reviews: 20156,
      price: "Rp 120.000",
      originalPrice: "Rp 160.000",
      genre: "Biography",
      category: "self-help",
      description: "Memoar intim dan kuat dari mantan First Lady Amerika Serikat."
    },
    {
      id: 6,
      title: "Project Hail Mary",
      author: "Andy Weir",
      rating: 4.7,
      reviews: 16789,
      price: "Rp 99.000",
      originalPrice: "Rp 130.000",
      genre: "Sci-Fi",
      category: "sci-fi",
      description: "Petualangan luar angkasa yang mendebarkan tentang misi menyelamatkan umat manusia."
    }
  ];

  const filteredBooks = selectedCategory === 'all' 
    ? featuredBooks 
    : featuredBooks.filter(book => book.category === selectedCategory);

  const toggleFavorite = (bookId: number) => {
    setFavorites(prev => 
      prev.includes(bookId) 
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    );
  };

  return (
    <section id="books" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Koleksi Buku
            <span className="text-gradient block">Terpilih</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Temukan buku-buku terbaik dari berbagai genre dan penulis terkenal
          </p>
        </div>

        {/* Filter & View Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <div className="flex space-x-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full capitalize ${
                    selectedCategory === category 
                      ? 'btn-primary' 
                      : 'text-foreground border-border hover:bg-muted'
                  }`}
                >
                  {category === 'all' ? 'Semua' : category}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="text-foreground"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode('list')}
              className="text-foreground"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Books Grid/List */}
        <div className={`gap-8 ${viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3' : 'space-y-6'}`}>
          {filteredBooks.map((book) => (
            <Card key={book.id} className={`group book-card bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300 ${
              viewMode === 'list' ? 'flex flex-row' : 'flex flex-col'
            }`}>
              <div className={`relative ${viewMode === 'list' ? 'w-48' : 'w-full'}`}>
                {/* Book Cover */}
                <div className={`bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center relative overflow-hidden ${
                  viewMode === 'list' ? 'aspect-[3/4] h-full' : 'aspect-[3/4]'
                }`}>
                  <div className="text-white text-center p-4">
                    <div className="w-12 h-16 bg-white/20 rounded-lg mb-3 mx-auto"></div>
                    <h3 className="font-serif text-sm font-bold mb-1">{book.title}</h3>
                    <p className="text-xs opacity-80">{book.author}</p>
                  </div>
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className={`rounded-full ${favorites.includes(book.id) ? 'bg-accent text-accent-foreground' : ''}`}
                      onClick={() => toggleFavorite(book.id)}
                    >
                      <Heart className={`h-4 w-4 ${favorites.includes(book.id) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Book Info */}
              <CardContent className={`p-6 space-y-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                {/* Title & Author */}
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>

                {viewMode === 'list' && (
                  <p className="text-sm text-muted-foreground line-clamp-2">{book.description}</p>
                )}

                {/* Rating & Reviews */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`h-4 w-4 ${star <= Math.floor(book.rating) ? 'text-yellow-500 fill-current' : 'text-muted-foreground/30'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">{book.rating}</span>
                  <span className="text-xs text-muted-foreground">({book.reviews.toLocaleString()})</span>
                </div>

                {/* Genre Tag */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20">
                    {book.genre}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-foreground">{book.price}</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">{book.originalPrice}</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  className="w-full btn-primary rounded-full font-semibold"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Tambah ke Keranjang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="px-8 py-4 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Lihat Semua Buku
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookShowcase;
