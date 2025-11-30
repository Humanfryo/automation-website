import { motion } from "framer-motion";

interface MetricBadgeProps {
  label: string;
  value: string;
  delay?: number;
}

export default function MetricBadge({ label, value, delay = 0 }: MetricBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center px-6 py-4 border border-border rounded-md bg-card"
      data-testid={`metric-badge-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
        {label}
      </span>
      <span className="text-2xl md:text-3xl font-mono font-bold text-primary">
        {value}
      </span>
    </motion.div>
  );
}
