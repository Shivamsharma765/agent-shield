import { ScamMessage, ChatMessage, AIPersona } from "@/data/mockScamData";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TypingIndicator } from "@/components/ui/TypingIndicator";
import { Bot, AlertTriangle, Send, Shield } from "lucide-react";

interface ConversationPanelProps {
  message?: ScamMessage;
  conversation: ChatMessage[];
  persona: AIPersona;
}

export function ConversationPanel({ message, conversation, persona }: ConversationPanelProps) {
  if (!message) {
    return (
      <div className="glass-card rounded-2xl h-full flex items-center justify-center">
        <p className="text-muted-foreground">Select a message to view conversation</p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <StatusBadge status={message.status} size="md" />
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium flex items-center gap-1">
                  AI Agent: {persona.name}
                  <span className="text-lg">{persona.avatar}</span>
                </p>
                <p className="text-xs text-success">Actively handling conversation</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/30">
            <Shield className="w-4 h-4 text-success" />
            <span className="text-xs text-success font-medium">AI has taken over</span>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
        {conversation.map((msg, index) => (
          <div 
            key={msg.id}
            className={`flex gap-3 ${msg.sender === 'ai' ? 'justify-end' : 'justify-start'} animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {msg.sender === 'scammer' && (
              <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-4 h-4 text-destructive" />
              </div>
            )}

            <div className={`max-w-[70%] ${
              msg.sender === 'scammer' ? 'chat-bubble-scammer' : 'chat-bubble-ai'
            } px-4 py-3`}>
              <p className="text-sm leading-relaxed">{msg.message}</p>
              
              {/* Extracted Intel Highlights */}
              {msg.extractedIntel && msg.extractedIntel.length > 0 && (
                <div className="mt-3 pt-3 border-t border-success/20 space-y-2">
                  {msg.extractedIntel.map((intel) => (
                    <div 
                      key={intel.id}
                      className="flex items-center gap-2 text-xs bg-success/10 rounded-lg px-2 py-1.5"
                    >
                      <span className="text-success">✓ Extracted:</span>
                      <code className="bg-success/20 px-1.5 py-0.5 rounded font-mono text-success">
                        {intel.maskedValue}
                      </code>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-xs text-muted-foreground mt-2">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>

            {msg.sender === 'ai' && (
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary" />
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Bot className="w-4 h-4 text-primary" />
          </div>
          <div className="chat-bubble-ai px-4 py-3">
            <TypingIndicator />
          </div>
        </div>
      </div>

      {/* Input Area (Disabled) */}
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/30 border border-border/50">
            <span className="text-sm text-muted-foreground flex-1">
              AI is handling this conversation automatically...
            </span>
            <Bot className="w-5 h-5 text-primary animate-pulse" />
          </div>
          <button className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center" disabled>
            <Send className="w-5 h-5 text-primary" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">
          Manual intervention available for authorized operators only
        </p>
      </div>
    </div>
  );
}
