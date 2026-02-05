import { Shield, Bot, Database, Zap, Lock, FileText } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Detect Scams Automatically",
    description: "Advanced ML models analyze incoming messages in real-time to identify fraud patterns, phishing attempts, and social engineering tactics.",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Bot,
    title: "AI Talks to Scammers Safely",
    description: "Our intelligent AI personas engage scammers in believable conversations, wasting their time while extracting valuable intelligence.",
    gradient: "from-secondary to-secondary/50",
  },
  {
    icon: Database,
    title: "Extracts Fraud Intelligence",
    description: "Automatically identifies and extracts bank accounts, UPI IDs, phishing links, and other scam infrastructure for reporting.",
    gradient: "from-success to-success/50",
  },
];

const additionalFeatures = [
  { icon: Zap, title: "Real-time Processing", description: "Instant scam detection under 100ms" },
  { icon: Lock, title: "Privacy First", description: "All data is encrypted and redacted" },
  { icon: FileText, title: "Auto Reports", description: "Generate detailed scam reports" },
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to protect yourself and gather intelligence on scammers
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-3xl hover:scale-105 transition-transform duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:shadow-glow-primary transition-shadow`}>
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              
              {/* Step Number */}
              <div className="mt-6 flex items-center gap-2">
                <span className="text-5xl font-black gradient-text opacity-30">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-5 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
