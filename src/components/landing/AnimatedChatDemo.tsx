import { useState, useEffect } from "react";
import { Shield, Bot, Database, AlertTriangle } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TypingIndicator } from "@/components/ui/TypingIndicator";

const demoMessages = [
  { sender: 'scammer', message: '🎉 Congratulations! You won ₹50 Lakhs! Send ₹5000 to claim.' },
  { sender: 'system', message: '🚨 SCAM DETECTED - AI Taking Over...' },
  { sender: 'ai', message: 'Wow! ₹50 Lakhs? Where do I send the money?' },
  { sender: 'scammer', message: 'Send to UPI: scammer@paytm or A/C: 4532XXXX6789' },
  { sender: 'system', message: '✅ Intelligence Extracted: UPI ID, Bank Account' },
];

export function AnimatedChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (visibleMessages < demoMessages.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // Reset animation loop
      const resetTimer = setTimeout(() => {
        setVisibleMessages(0);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [visibleMessages]);

  return (
    <div className="glass-card p-6 rounded-3xl max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Honeypot AI</h3>
            <p className="text-xs text-success flex items-center gap-1">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
              Active Protection
            </p>
          </div>
        </div>
        <StatusBadge status="scam" size="sm" />
      </div>

      {/* Chat Messages */}
      <div className="space-y-4 min-h-[280px]">
        {demoMessages.slice(0, visibleMessages).map((msg, index) => (
          <div 
            key={index}
            className={`animate-slide-up ${
              msg.sender === 'system' ? 'text-center' : ''
            }`}
          >
            {msg.sender === 'scammer' && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <div className="chat-bubble-scammer px-4 py-2.5 max-w-[85%]">
                  <p className="text-sm">{msg.message}</p>
                </div>
              </div>
            )}
            
            {msg.sender === 'ai' && (
              <div className="flex gap-3 justify-end">
                <div className="chat-bubble-ai px-4 py-2.5 max-w-[85%]">
                  <p className="text-sm">{msg.message}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
              </div>
            )}

            {msg.sender === 'system' && (
              <div className="flex justify-center">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium ${
                  msg.message.includes('SCAM') 
                    ? 'bg-destructive/20 text-destructive border border-destructive/30' 
                    : 'bg-success/20 text-success border border-success/30'
                }`}>
                  {msg.message.includes('SCAM') ? (
                    <Shield className="w-3.5 h-3.5" />
                  ) : (
                    <Database className="w-3.5 h-3.5" />
                  )}
                  {msg.message}
                </div>
              </div>
            )}
          </div>
        ))}

        {isTyping && visibleMessages < demoMessages.length && (
          <div className="flex gap-3 animate-fade-up">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="chat-bubble-ai px-4 py-3">
              <TypingIndicator />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
