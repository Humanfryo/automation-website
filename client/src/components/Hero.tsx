import { ArrowRight, CalendarCheck, TrendingUp, Users } from "lucide-react";
import BookCallButton from "./BookCallButton";

interface HeroProps {
  onOpenLeadMagnet: () => void;
}

export default function Hero({ onOpenLeadMagnet }: HeroProps) {
  const stats = [
    {
      value: "8-12",
      label: "Qualified Meetings Per Month",
      subtext: "Average across active clients",
      icon: CalendarCheck,
    },
    {
      value: "140+",
      label: "Meetings Booked to Date",
      subtext: "For B2B companies nationwide",
      icon: Users,
    },
    {
      value: "22%",
      label: "Average Reply Rate",
      subtext: "vs. 3% industry standard",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
              B2B Appointment Setting That Actually Works
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Fill Your Sales Pipeline with{" "}
            <span className="text-primary-500">Qualified Decision-Makers</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We book meetings with the buyers your sales team needs to close —
            so you can stop chasing leads and start growing revenue.
            Built for recruiting firms, MSPs, SaaS companies, and B2B service businesses.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col items-center gap-4 mb-14">
            <BookCallButton className="bg-accent-500 text-white font-semibold text-base px-8 py-4 rounded-lg hover:bg-accent-600 transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2">
              Book Your Free Strategy Call <ArrowRight className="w-4 h-4" />
            </BookCallButton>

            {/* Trust Line */}
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-2">
              <span>No long-term contracts</span>
              <span className="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full" />
              <span>Results in 30-60 days</span>
              <span className="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-50 rounded-lg mb-3">
                  <stat.icon className="w-5 h-5 text-primary-500" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-800 font-medium text-sm mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
