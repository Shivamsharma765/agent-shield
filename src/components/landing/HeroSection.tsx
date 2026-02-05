import { Link } from "react-router-dom";
import { GlowButton } from "@/components/ui/GlowButton";
import { Shield, Bot, Database, ArrowRight, Sparkles } from "lucide-react";
import { AnimatedChatDemo } from "./AnimatedChatDemo";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(hsl(215 25% 15% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(215 25% 15% / 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI-Powered Cyber Defense
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="block text-foreground">AI Scam</span>
              <span className="gradient-text">Honeypot System</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl">
              An AI that <span className="text-primary font-semibold">detects scams</span>, 
              talks to scammers for you, and <span className="text-secondary font-semibold">collects their fake details</span> — 
              all automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/dashboard">
                <GlowButton variant="primary" size="xl">
                  Try Live Demo
                  <ArrowRight className="w-5 h-5" />
                </GlowButton>
              </Link>
              <Link to="/report">
                <GlowButton variant="secondary" size="xl">
                  View Sample Report
                </GlowButton>
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-success" />
                Real-time Detection
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 text-sm text-muted-foreground">
                <Bot className="w-4 h-4 text-primary" />
                AI Conversations
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 text-sm text-muted-foreground">
                <Database className="w-4 h-4 text-secondary" />
                Intel Extraction
              </div>
            </div>
          </div>

          {/* Right Side - Animated Demo */}
          <div className="lg:pl-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <AnimatedChatDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
