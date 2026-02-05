import { Shield, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Scam Honeypot</span>
          </div>

          {/* Disclaimer */}
          <div className="text-center max-w-xl">
            <p className="text-sm text-muted-foreground">
              ⚠️ <span className="font-medium">Ethical Disclaimer:</span> This prototype is created for 
              <span className="text-primary"> cybersecurity research</span> and 
              <span className="text-success"> scam prevention</span> purposes only. 
              No real financial transactions are performed.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors">
              <Github className="w-5 h-5 text-muted-foreground" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors">
              <Twitter className="w-5 h-5 text-muted-foreground" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors">
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Scam Honeypot AI. Built for Hackathon Demo.
          </p>
        </div>
      </div>
    </footer>
  );
}
