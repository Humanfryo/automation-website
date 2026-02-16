import { ArrowDown, CheckCircle } from "lucide-react";
import BookCallButton from "./BookCallButton";

export default function Hero({ onOpenLeadMagnet }: { onOpenLeadMagnet?: () => void }) {
  const metrics = [
    { value: "8-12", label: "Qualified meetings per month" },
    { value: "$312", label: "Average cost per meeting" },
    { value: "22%", label: "Average show rate (vs 8% avg)" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black pt-32 pb-20 overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

      {/* Abstract Background Pattern (Optional - simplified as subtle circles) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider text-black mb-8 animate-fade-in-up">
          B2B Appointment Setting for Industrial Companies
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-4xl mb-6 tracking-tight animate-fade-in-up delay-100">
          Fill Your Sales Calendar with{" "}
          <span className="text-primary">Qualified Industrial Buyers</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mb-12 leading-relaxed animate-fade-in-up delay-200">
          We book 8-12 qualified meetings per month with decision-makers in manufacturing,
          distribution, and supply chain—so your sales team can focus on closing deals, not chasing leads.
        </p>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl animate-fade-in-up delay-300">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card border border-white/5 p-6 rounded-xl hover:border-primary/30 transition-colors group flex flex-col justify-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">
                {metric.value}
              </div>
              <div className="text-sm text-white/80 font-medium">
                {metric.label}
              </div>
              <div className="text-xs text-[#9CA3AF] font-normal mt-1">
                {index === 0 && "Avg. across active clients, 2024–2025"}
                {index === 1 && "Total outreach conversations tracked since launch"}
                {index === 2 && "Vs. 3% industry avg. response rate"}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 animate-fade-in-up delay-400">
          <BookCallButton className="bg-primary text-black hover:bg-accent font-bold text-xl px-12 py-5 rounded-lg shadow-[0_0_30px_rgba(255,184,0,0.3)] hover:shadow-[0_0_50px_rgba(255,184,0,0.5)] transition-all transform hover:-translate-y-1">
            See If You Qualify (14-Min Call)
          </BookCallButton>
          <p className="text-xs text-secondary-foreground uppercase tracking-wider font-medium">
            💼 Only for companies doing $2M+ revenue
          </p>

          <button
            onClick={(e) => { e.preventDefault(); onOpenLeadMagnet?.(); }}
            className="mt-4 text-white hover:text-primary underline decoration-primary/50 underline-offset-4 transition-colors cursor-pointer"
          >
            Or Download: The $312/Meeting Framework (PDF)
          </button>
        </div>

        {/* Trust Badge Row */}
        <div className="mt-16 pt-8 border-t border-white/5 w-full max-w-2xl flex flex-wrap justify-center gap-6 text-sm text-secondary-foreground animate-fade-in-up delay-500">
          <span className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Trusted by 50+ industrial companies</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> $12M+ pipeline generated</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> 8.7/10 avg meeting quality</span>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
