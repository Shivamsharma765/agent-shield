import { ScamMessage } from "@/data/mockScamData";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { MessageSquare, Bot, Eye, EyeOff } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { formatDistanceToNow } from "date-fns";

interface MessagePanelProps {
  messages: ScamMessage[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function MessagePanel({ messages, selectedId, onSelect }: MessagePanelProps) {
  return (
    <div className="glass-card rounded-2xl h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-lg">Incoming Messages</h2>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-destructive/20 text-destructive font-medium">
            {messages.filter(m => m.status === 'scam').length} threats
          </span>
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            onClick={() => onSelect(message.id)}
            className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
              selectedId === message.id
                ? 'bg-primary/10 border-2 border-primary/50 shadow-glow-primary'
                : 'bg-muted/30 border border-border/50 hover:bg-muted/50 hover:border-border'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  message.status === 'scam' 
                    ? 'bg-destructive/20 text-destructive' 
                    : message.status === 'suspicious'
                    ? 'bg-warning/20 text-warning'
                    : 'bg-success/20 text-success'
                }`}>
                  {message.sender[0]}
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{message.sender}</p>
                  <p className="text-xs text-muted-foreground">{message.phoneNumber}</p>
                </div>
              </div>
              {!message.isRead && (
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
              )}
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {message.preview}
            </p>

            <div className="flex items-center justify-between">
              <StatusBadge status={message.status} confidence={message.confidence} size="sm" />
              <span className="text-xs text-muted-foreground">
                {formatDistanceToNow(message.timestamp, { addSuffix: true })}
              </span>
            </div>

            {/* Action Buttons */}
            {message.status === 'scam' && (
              <div className="flex gap-2 mt-3 pt-3 border-t border-border/30">
                <button className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg bg-muted/50 hover:bg-muted text-xs font-medium transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                  View
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg bg-muted/50 hover:bg-muted text-xs font-medium transition-colors">
                  <EyeOff className="w-3.5 h-3.5" />
                  Ignore
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg bg-primary/20 hover:bg-primary/30 text-xs font-medium text-primary transition-colors">
                  <Bot className="w-3.5 h-3.5" />
                  AI Handle
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
