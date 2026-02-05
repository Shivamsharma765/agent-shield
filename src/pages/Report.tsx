import { Link } from "react-router-dom";
import { Shield, ArrowLeft, Download, FileJson, FileSpreadsheet, FileText, Clock, MessageSquare, AlertTriangle } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { mockExtractedIntelligence, mockConversation } from "@/data/mockScamData";

const Report = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Dashboard</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-bold text-lg">Scam Report</h1>
                  <p className="text-xs text-muted-foreground">Case #SCM-2026-00142</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <GlowButton variant="secondary" size="sm">
                <FileSpreadsheet className="w-4 h-4" />
                Export CSV
              </GlowButton>
              <GlowButton variant="secondary" size="sm">
                <FileJson className="w-4 h-4" />
                Export JSON
              </GlowButton>
              <GlowButton variant="primary" size="sm">
                <Download className="w-4 h-4" />
                Download Report
              </GlowButton>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {/* Scam Confidence */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Scam Confidence</h3>
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <div className="relative w-24 h-24 mx-auto">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="40" 
                  stroke="hsl(var(--muted))" 
                  strokeWidth="8" 
                  fill="none" 
                />
                <circle 
                  cx="50" cy="50" r="40" 
                  stroke="url(#gradient)" 
                  strokeWidth="8" 
                  fill="none"
                  strokeDasharray={`${94 * 2.51327} ${100 * 2.51327}`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(0 85% 60%)" />
                    <stop offset="100%" stopColor="hsl(330 80% 55%)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-destructive">94%</span>
              </div>
            </div>
            <p className="text-center text-sm text-destructive mt-2 font-medium">High Risk</p>
          </div>

          {/* Duration */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Duration</h3>
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <p className="text-4xl font-bold text-foreground">7:32</p>
            <p className="text-sm text-muted-foreground mt-2">Minutes engaged</p>
          </div>

          {/* Messages */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Messages</h3>
              <MessageSquare className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-4xl font-bold text-foreground">{mockConversation.length}</p>
            <p className="text-sm text-muted-foreground mt-2">Total exchanged</p>
          </div>

          {/* Intel Extracted */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Intel Extracted</h3>
              <FileText className="w-5 h-5 text-success" />
            </div>
            <p className="text-4xl font-bold text-foreground">{mockExtractedIntelligence.length}</p>
            <p className="text-sm text-muted-foreground mt-2">Actionable items</p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="glass-card p-6 rounded-2xl mb-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Conversation Timeline
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-6">
              {mockConversation.map((msg, index) => (
                <div key={msg.id} className="relative flex gap-4 pl-4">
                  <div className={`w-5 h-5 rounded-full z-10 flex items-center justify-center ${
                    msg.sender === 'scammer' 
                      ? 'bg-destructive/20 ring-2 ring-destructive' 
                      : 'bg-primary/20 ring-2 ring-primary'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      msg.sender === 'scammer' ? 'bg-destructive' : 'bg-primary'
                    }`} />
                  </div>
                  
                  <div className="flex-1 pb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm font-medium ${
                        msg.sender === 'scammer' ? 'text-destructive' : 'text-primary'
                      }`}>
                        {msg.sender === 'scammer' ? 'Scammer' : 'AI Agent (Anita)'}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {msg.timestamp.toLocaleTimeString()}
                      </span>
                      {msg.extractedIntel && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-success/20 text-success border border-success/30">
                          Intel Extracted
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Extracted Intelligence Data
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Redacted Value</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Confidence</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Timestamp</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockExtractedIntelligence.map((intel) => (
                  <tr key={intel.id} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        intel.type === 'bank_account' 
                          ? 'bg-secondary/20 text-secondary' 
                          : intel.type === 'upi_id'
                          ? 'bg-primary/20 text-primary'
                          : 'bg-destructive/20 text-destructive'
                      }`}>
                        {intel.type === 'bank_account' && '🏦 Bank Account'}
                        {intel.type === 'upi_id' && '💳 UPI ID'}
                        {intel.type === 'phishing_link' && '🔗 Phishing Link'}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <code className="text-sm bg-muted/50 px-2 py-1 rounded font-mono">
                        {intel.maskedValue}
                      </code>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                            style={{ width: `${intel.confidence}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">{intel.confidence}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">
                      {intel.timestamp.toLocaleTimeString()}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button className="text-xs px-2 py-1 rounded bg-muted/50 hover:bg-muted text-muted-foreground transition-colors">
                          Copy
                        </button>
                        <button className="text-xs px-2 py-1 rounded bg-destructive/20 hover:bg-destructive/30 text-destructive transition-colors">
                          Flag
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            ⚠️ All extracted data is automatically redacted for privacy. 
            Full data available only to authorized cybersecurity personnel.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Report;
