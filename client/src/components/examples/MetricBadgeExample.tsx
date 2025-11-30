import MetricBadge from '../MetricBadge';

export default function MetricBadgeExample() {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      <MetricBadge label="Booking Time Reduction" value="90%" delay={0} />
      <MetricBadge label="Revenue Growth" value="10x" delay={0.1} />
      <MetricBadge label="System Uptime" value="99.8%" delay={0.2} />
    </div>
  );
}
