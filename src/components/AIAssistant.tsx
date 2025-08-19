
import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'assistant',
      content: 'Halo! Saya AI Assistant BookSphere. Saya bisa membantu Anda menemukan buku yang perfect! Apa yang sedang Anda cari hari ini?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickPrompts = [
    'Buku motivasi ringan',
    'Novel romantis happy ending',
    'Sci-fi untuk pemula',
    'Buku tentang produktivitas'
  ];

  const aiResponses = [
    'Berdasarkan permintaan Anda, saya merekomendasikan beberapa buku yang mungkin Anda suka. Apakah Anda ingin saya berikan daftar lengkapnya atau ada preferensi genre tertentu?',
    'Saya menemukan beberapa buku yang sempurna untuk mood Anda saat ini! Mau saya jelaskan mengapa buku-buku ini cocok untuk Anda?',
    'Wah, pilihan yang menarik! Berdasarkan analisis AI, saya punya 3 rekomendasi TOP yang 98% cocok dengan selera baca Anda.',
    'Saya sudah menganalisis preferensi Anda dan menemukan beberapa hidden gems yang jarang orang tahu tapi amazing! Mau lihat?'
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputValue
    };

    // Simulate AI response
    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
    const aiResponse: Message = {
      id: Date.now() + 1,
      type: 'assistant',
      content: randomResponse
    };

    setMessages(prev => [...prev, userMessage, aiResponse]);
    setInputValue('');
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputValue(prompt);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-hero shadow-glow hover:shadow-xl transition-all duration-300 pulse-glow"
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <div className="relative">
          <Brain className="h-6 w-6 text-white" />
          <Sparkles className="h-3 w-3 text-secondary absolute -top-1 -right-1 animate-pulse" />
        </div>
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white shadow-2xl border-0 overflow-hidden flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-hero p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="h-6 w-6 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-semibold text-white">AI Assistant</h3>
                <p className="text-xs text-white/80">Online • Siap membantu</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickPrompt(prompt)}
                  className="text-xs rounded-full border-primary/30 hover:bg-primary/10"
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                placeholder="Tanya tentang buku..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 rounded-full border-primary/30 focus:border-primary"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="rounded-full bg-primary hover:bg-primary-dark disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default AIAssistant;
