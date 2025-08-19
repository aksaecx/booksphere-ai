
import React from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BookShowcase = () => {
  const featuredBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      rating: 4.8,
      reviews: 12543,
      price: "Rp 89.000",
      originalPrice: "Rp 120.000",
      cover: "/api/placeholder/300/400",
      genre: "Fiction",
      mood: "Inspiring",
      aiMatch: 98
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear", 
      rating: 4.9,
      reviews: 25431,
      price: "Rp 95.000",
      originalPrice: "Rp 125.000",
      cover: "/api/placeholder/300/400",
      genre: "Self-Help",
      mood: "Motivational", 
      aiMatch: 95
    },
    {
      id: 3,
      title: "Dune",
      author: "Frank Herbert",
      rating: 4.7,
      reviews: 18764,
      price: "Rp 110.000",
      originalPrice: "Rp 150.000",
      cover: "/api/placeholder/300/400",
      genre: "Sci-Fi",
      mood: "Epic",
      aiMatch: 92
    },
    {
      id: 4,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      rating: 4.6,
      reviews: 15234,
      price: "Rp 85.000",
      originalPrice: "Rp 115.000", 
      cover: "/api/placeholder/300/400",
      genre: "Thriller",
      mood: "Suspenseful",
      aiMatch: 89
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Rekomendasi AI
            <span className="text-gradient block">Khusus Untukmu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Buku-buku pilihan yang dipersonalisasi berdasarkan preferensi dan mood Anda
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="group book-card bg-white border-0 overflow-hidden">
              <div className="relative">
                {/* Book Cover */}
                <div className="aspect-[3/4] bg-gradient-hero rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-white text-center p-6">
                    <div className="w-16 h-20 bg-white/20 rounded-lg mb-4 mx-auto"></div>
                    <h3 className="font-serif text-lg font-bold mb-2">{book.title}</h3>
                    <p className="text-sm opacity-80">{book.author}</p>
                  </div>
                  
                  {/* AI Match Badge */}
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                    {book.aiMatch}% Match
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Book Info */}
                <CardContent className="p-6 space-y-4">
                  {/* Title & Author */}
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{book.author}</p>
                  </div>

                  {/* Rating & Reviews */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= Math.floor(book.rating) ? 'text-secondary fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">{book.rating}</span>
                    <span className="text-xs text-muted-foreground">({book.reviews.toLocaleString()})</span>
                  </div>

                  {/* Genre & Mood Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {book.genre}
                    </span>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                      {book.mood}
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
                  <Button className="w-full bg-primary hover:bg-primary-dark text-white rounded-full font-semibold">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Tambah ke Keranjang
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="px-8 py-4 rounded-full border-primary text-primary hover:bg-primary hover:text-white">
            Lihat Semua Rekomendasi AI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookShowcase;
