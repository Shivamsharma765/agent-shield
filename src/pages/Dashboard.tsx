import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, FileText } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { MessagePanel } from "@/components/dashboard/MessagePanel";
import { ConversationPanel } from "@/components/dashboard/ConversationPanel";
import { IntelligencePanel } from "@/components/dashboard/IntelligencePanel";
import { mockScamMessages, mockConversation, mockExtractedIntelligence, aiPersonas } from "@/data/mockScamData";

const Dashboard = () => {
  const [selectedMessageId, setSelectedMessageId] = useState<string>("1");
  const selectedMessage = mockScamMessages.find(m => m.id === selectedMessageId);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-bold text-lg">Scam Honeypot</h1>
                  <p className="text-xs text-muted-foreground">Live Detection Dashboard</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Live Status */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/30">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                <span className="text-sm text-success font-medium">System Active</span>
              </div>

              <Link to="/report">
                <GlowButton variant="secondary" size="sm">
                  <FileText className="w-4 h-4" />
                  View Report
                </GlowButton>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Grid */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-140px)]">
          {/* Left Panel - Messages */}
          <div className="col-span-3">
            <MessagePanel 
              messages={mockScamMessages}
              selectedId={selectedMessageId}
              onSelect={setSelectedMessageId}
            />
          </div>

          {/* Center Panel - Conversation */}
          <div className="col-span-5">
            <ConversationPanel 
              message={selectedMessage}
              conversation={mockConversation}
              persona={aiPersonas[0]}
            />
          </div>

          {/* Right Panel - Intelligence */}
          <div className="col-span-4">
            <IntelligencePanel 
              intelligence={mockExtractedIntelligence}
              messageCount={mockConversation.length}
              duration="7 min 32 sec"
              confidence={selectedMessage?.confidence || 0}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
