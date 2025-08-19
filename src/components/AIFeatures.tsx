
import React from 'react';
import { Brain, MessageSquare, Search, Sparkles, BookOpen, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AIFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Personal Librarian",
      description: "Assistant cerdas yang memahami selera bacamu dan memberikan rekomendasi personal 24/7",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: MessageSquare,
      title: "Smart Book Chat",
      description: "Tanya apa saja tentang buku: 'Carikan buku romantis tapi tidak terlalu cheesy'",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Search,
      title: "Semantic Search",
      description: "Cari berdasarkan mood, perasaan, atau deskripsi vague - AI kami akan paham",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Sparkles,
      title: "Mood-Based Discovery",
      description: "Temukan buku berdasarkan suasana hati: happy, melancholic, adventurous, atau curious",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: BookOpen,
      title: "Smart Summaries",
      description: "Ringkasan buku yang dihasilkan AI dalam berbagai panjang sesuai kebutuhanmu",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Zap,
      title: "Predictive Recommendations",
      description: "AI memprediksi buku yang akan kamu sukai bahkan sebelum kamu tahu kamu menginginkannya",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

  return (
    <section id="ai-features" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/30"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-2">
            <Brain className="h-5 w-5 text-accent" />
            <span className="font-semibold text-accent">Teknologi AI Terdepan</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Fitur AI yang Mengubah
            <span className="text-gradient block">Cara Anda Membaca</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            BookSphere AI menggunakan kecerdasan buatan canggih untuk memberikan pengalaman 
            berbelanja buku yang personal, intuitif, dan menyenangkan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 bg-white/50 backdrop-blur-sm"
            >
              <CardHeader className="space-y-4">
                <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demo Section */}
        <div className="mt-20">
          <div className="glass rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-serif font-bold text-foreground">
                  Coba AI Assistant Sekarang
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Rasakan sendiri bagaimana AI kami memahami kebutuhan baca Anda dengan percakapan natural.
                </p>
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-2xl p-4">
                    <p className="text-sm text-muted-foreground mb-2">Anda:</p>
                    <p className="text-foreground">"Saya butuh buku yang bisa motivasi tapi tidak terlalu heavy"</p>
                  </div>
                  <div className="bg-accent/10 rounded-2xl p-4">
                    <p className="text-sm text-muted-foreground mb-2">AI Assistant:</p>
                    <p className="text-foreground">
                      "Saya rekomendasikan 'Atomic Habits' oleh James Clear - ringan dibaca tapi powerful, 
                      atau 'The Subtle Art of Not Giving a F*ck' yang motivational dengan gaya santai. Mau lihat preview?"
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-hero rounded-3xl flex items-center justify-center">
                    <div className="text-white text-center space-y-4">
                      <Brain className="h-20 w-20 mx-auto animate-pulse" />
                      <h4 className="text-2xl font-serif font-bold">AI Brain</h4>
                      <p className="text-white/80">Always Learning</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
