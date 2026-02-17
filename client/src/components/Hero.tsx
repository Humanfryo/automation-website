import { ArrowRight, CheckCircle2 } from "lucide-react";
import BookCallButton from "./BookCallButton";

interface HeroProps {
  onOpenLeadMagnet: () => void;
}

export default function Hero({ onOpenLeadMagnet }: HeroProps) {
  const stats = [
    {
      value: "8-12",
      label: "Qualified Meetings Per Month",
      subtext: "Avg. across active clients, 2024–2025"
    },
    {
      value: "10x",
      label: "Cheaper Than Hiring an SDR",
      subtext: "$312/meeting vs. $800+ with internal teams"
    },
    {
      value: "22%",
      label: "Average Reply Rate",
      subtext: "vs. 3% industry standard"
    }
  ];

  return (
    <div className="relative isolate pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#111111]">
      {/* Background Gradient/Effects (Optional but nice for depth) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[50%] -translate-x-[50%] w-[600px] h-[600px] bg-[#F59E0B]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-[2px] border border-[#F59E0B]/20 bg-[#F59E0B]/10 px-3 py-1.5 rounded-full">
              AI-Powered Appointment Setting for B2B Companies
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
            Fill Your Sales Calendar with Qualified B2B Buyers — Without Hiring a Single SDR
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-[#D1D5DB] mb-10 max-w-2xl mx-auto leading-relaxed">
            Built for B2B companies doing $1M–$50M who need meetings with decision-makers, not another sales hire that quits in 6 months.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto text-left md:text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 hover:border-[#F59E0B]/30 transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#F59E0B] mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-sm md:text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#9CA3AF]">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4">
            <BookCallButton className="bg-[#F59E0B] text-black font-bold text-base px-10 py-4 rounded-lg hover:bg-[#D97706] hover:scale-[1.02] transition-all duration-200 shadow-[0_4px_20px_rgba(245,158,11,0.2)]">
              Book Your Pipeline Strategy Call
            </BookCallButton>

            <button
              onClick={onOpenLeadMagnet}
              className="text-sm text-[#D1D5DB] hover:text-[#F59E0B] hover:underline transition-colors mt-1"
            >
              Or Download: The $312/Meeting Framework (PDF)
            </button>

            {/* Trust Line */}
            <div className="flex items-center gap-2 text-[13px] text-[#6B7280] mt-4 font-medium">
              <span>60-day pipeline guarantee</span>
              <span className="w-1 h-1 bg-[#2A2A2A] rounded-full" />
              <span>No long-term contracts</span>
              <span className="w-1 h-1 bg-[#2A2A2A] rounded-full" />
              <span>AI-powered, not human SDR teams</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
