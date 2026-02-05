import { ExtractedIntelligence } from "@/data/mockScamData";
import { Database, CreditCard, Link2, Copy, Flag, CheckCircle, Clock, MessageSquare, AlertTriangle } from "lucide-react";

interface IntelligencePanelProps {
  intelligence: ExtractedIntelligence[];
  messageCount: number;
  duration: string;
  confidence: number;
}

const typeConfig = {
  bank_account: {
    icon: CreditCard,
    label: 'Bank Account',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    borderColor: 'border-secondary/30',
  },
  upi_id: {
    icon: Database,
    label: 'UPI ID',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30',
  },
  phishing_link: {
    icon: Link2,
    label: 'Phishing Link',
    color: 'text-destructive',
    bgColor: 'bg-destructive/10',
    borderColor: 'border-destructive/30',
  },
};

export function IntelligencePanel({ intelligence, messageCount, duration, confidence }: IntelligencePanelProps) {
  return (
    <div className="glass-card rounded-2xl h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-lg">Extracted Intelligence</h2>
          </div>
          <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-success/20 text-success border border-success/30">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
            Live
          </span>
        </div>
      </div>

      {/* Intelligence Cards */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
        {intelligence.map((intel, index) => {
          const config = typeConfig[intel.type];
          const Icon = config.icon;

          return (
            <div 
              key={intel.id}
              className={`p-4 rounded-xl ${config.bgColor} border ${config.borderColor} animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg ${config.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${config.color}`} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${config.color}`}>{config.label}</p>
                    <p className="text-xs text-muted-foreground">
                      Extracted at {intel.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-xs text-success font-medium">{intel.confidence}%</span>
                </div>
              </div>

              <div className="bg-background/50 rounded-lg p-3 mb-3">
                <code className="text-sm font-mono text-foreground">{intel.maskedValue}</code>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-background/50 hover:bg-background/80 text-xs font-medium transition-colors">
                  <Copy className="w-3.5 h-3.5" />
                  Copy Redacted
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-destructive/20 hover:bg-destructive/30 text-xs font-medium text-destructive transition-colors">
                  <Flag className="w-3.5 h-3.5" />
                  Flag Intel
                </button>
              </div>
            </div>
          );
        })}

        {/* Risk Analysis */}
        <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-warning" />
            Scam Pattern Analysis
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Pattern Type</span>
              <span className="font-medium text-destructive">Lottery Fraud</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Risk Level</span>
              <span className="font-medium text-destructive">Critical</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Similar Cases</span>
              <span className="font-medium text-foreground">2,847</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="p-4 border-t border-border/50">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
              <Clock className="w-4 h-4" />
            </div>
            <p className="text-lg font-bold text-foreground">{duration}</p>
            <p className="text-xs text-muted-foreground">Duration</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
              <MessageSquare className="w-4 h-4" />
            </div>
            <p className="text-lg font-bold text-foreground">{messageCount}</p>
            <p className="text-xs text-muted-foreground">Messages</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <p className="text-lg font-bold text-destructive">{confidence}%</p>
            <p className="text-xs text-muted-foreground">Confidence</p>
          </div>
        </div>

        {/* Confidence Meter */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
            <span>Scam Confidence</span>
            <span>{confidence}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-warning via-destructive to-destructive rounded-full transition-all duration-500"
              style={{ width: `${confidence}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
