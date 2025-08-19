
import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BookShowcase = () => {
  const books = [
    {
      id: 1,
      title: "Bumi Manusia",
      author: "Pramoedya Ananta Toer",
      price: 85000,
      originalPrice: 100000,
      rating: 4.8,
      image: "/api/placeholder/200/280",
      category: "Novel"
    },
    {
      id: 2,
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
      price: 75000,
      originalPrice: 90000,
      rating: 4.9,
      image: "/api/placeholder/200/280",
      category: "Novel"
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      price: 120000,
      originalPrice: 150000,
      rating: 4.7,
      image: "/api/placeholder/200/280",
      category: "Self Help"
    },
    {
      id: 4,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      price: 110000,
      originalPrice: 135000,
      rating: 4.6,
      image: "/api/placeholder/200/280",
      category: "Science"
    },
    {
      id: 5,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 95000,
      originalPrice: 120000,
      rating: 4.5,
      image: "/api/placeholder/200/280",
      category: "Finance"
    },
    {
      id: 6,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 100000,
      originalPrice: 125000,
      rating: 4.8,
      image: "/api/placeholder/200/280",
      category: "Finance"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="books" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Koleksi Buku Terbaru
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilihan buku terbaik dengan harga spesial untuk Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <Card key={book.id} className="card-hover border border-gray-200">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <div className="text-sm font-medium">{book.title}</div>
                      <div className="text-xs">{book.author}</div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                    {book.category}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground line-clamp-2">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                  
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-foreground">{book.rating}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="font-bold text-primary text-lg">
                        {formatPrice(book.price)}
                      </div>
                      <div className="text-sm text-muted-foreground line-through">
                        {formatPrice(book.originalPrice)}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="btn-primary flex-1">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Beli
                    </Button>
                    <Button size="sm" variant="outline" className="px-3">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="btn-primary">
            Lihat Semua Buku
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookShowcase;
