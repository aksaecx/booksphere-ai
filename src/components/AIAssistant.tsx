
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Brain, Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'assistant',
      content: 'Halo! Saya AI Assistant BookSphere. Saya bisa membantu Anda menemukan buku yang perfect! Apa yang sedang Anda cari hari ini?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'Buku motivasi ringan',
    'Novel romantis happy ending', 
    'Sci-fi untuk pemula',
    'Buku tentang produktivitas',
    'Thriller psikologis',
    'Biografi inspiratif'
  ];

  const aiResponses = [
    'Berdasarkan permintaan Anda, saya menemukan beberapa buku yang sangat cocok! "The 7 Habits of Highly Effective People" dan "Atomic Habits" sangat direkomendasikan untuk produktivitas. Mau saya jelaskan lebih detail?',
    'Wah, pilihan yang menarik! Untuk sci-fi pemula, saya sarankan "The Martian" oleh Andy Weir - mudah dibaca tapi seru banget! Atau "Ender\'s Game" yang klasik. Mana yang menarik perhatian Anda?',
    'Perfect! Untuk novel romantis dengan happy ending, "Beach Read" oleh Emily Henry dan "The Hating Game" oleh Sally Thorne pasti bikin baper! Keduanya light, funny, dan dijamin happy ending 💕',
    'Saya punya beberapa rekomendasi thriller psikologis yang bikin deg-degan! "Gone Girl", "The Silent Patient", atau "Sharp Objects" - semuanya page-turner! Mau yang level suspense berapa?'
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiResponse: Message = {
        id: Date.now() + 1,
        type: 'assistant',
        content: randomResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputValue(prompt);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsListening(!isListening);
      // Here you would implement actual speech recognition
      console.log('Voice input toggled:', !isListening);
    } else {
      console.log('Speech recognition not supported');
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent shadow-2xl hover:shadow-xl transition-all duration-300 pulse-glow"
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <div className="relative">
          <Brain className="h-6 w-6 text-white" />
          <Sparkles className="h-3 w-3 text-white absolute -top-1 -right-1 animate-pulse" />
        </div>
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-card border-border shadow-2xl overflow-hidden flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="h-6 w-6 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-light rounded-full animate-pulse"></div>
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
              className="text-white hover:bg-white/20 rounded-full p-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-muted/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl relative ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground ml-4'
                      : 'bg-card text-card-foreground border border-border mr-4'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <span className={`text-xs opacity-70 mt-1 block ${
                    message.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-card border border-border p-3 rounded-2xl mr-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-4 pb-2 bg-background border-t border-border">
            <div className="flex flex-wrap gap-2 py-2 max-h-20 overflow-y-auto">
              {quickPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickPrompt(prompt)}
                  className="text-xs rounded-full border-border text-foreground hover:bg-accent/10 hover:border-accent whitespace-nowrap"
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex space-x-2 items-end">
              <div className="flex-1">
                <Input
                  placeholder="Tanya tentang buku..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="rounded-xl border-border focus:border-accent bg-background text-foreground"
                  disabled={isTyping}
                />
              </div>
              <Button
                onClick={toggleVoiceInput}
                variant="outline"
                size="sm"
                className={`rounded-xl p-2 ${isListening ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-muted'}`}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="rounded-xl bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 disabled:opacity-50 p-2"
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
