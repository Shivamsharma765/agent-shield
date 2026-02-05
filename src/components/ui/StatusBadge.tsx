import { cn } from "@/lib/utils";
import { Shield, AlertTriangle, ShieldAlert } from "lucide-react";

type Status = 'safe' | 'suspicious' | 'scam';

interface StatusBadgeProps {
  status: Status;
  confidence?: number;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const statusConfig = {
  safe: {
    label: 'Safe',
    icon: Shield,
    className: 'badge-safe',
  },
  suspicious: {
    label: 'Suspicious',
    icon: AlertTriangle,
    className: 'badge-suspicious',
  },
  scam: {
    label: 'Scam Detected',
    icon: ShieldAlert,
    className: 'badge-scam',
  },
};

const sizeClasses = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-1.5',
};

export function StatusBadge({ status, confidence, showIcon = true, size = 'md' }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={cn(
      "inline-flex items-center gap-1.5 rounded-full font-medium",
      config.className,
      sizeClasses[size]
    )}>
      {showIcon && <Icon className="w-3.5 h-3.5" />}
      <span>{config.label}</span>
      {confidence !== undefined && (
        <span className="opacity-70">({confidence}%)</span>
      )}
    </div>
  );
}
