import {
  ShieldCheck,
  GitBranch,
  Droplets,
  ArrowUpFromLine,
  ScanSearch,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  GitBranch,
  Droplets,
  ArrowUpFromLine,
  ScanSearch,
  FlaskConical,
};

type ServiceIconProps = {
  name: string;
  className?: string;
};

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = iconMap[name] || Droplets;
  return <Icon className={className} />;
}
