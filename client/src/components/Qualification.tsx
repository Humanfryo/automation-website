import { Check, X } from "lucide-react";
import BookCallButton from "./BookCallButton";

export default function Qualification() {
    return (
        <section className="bg-[#111111] py-12 md:py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-[900px]">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Is Spartan Flow Right for You?
                    </h2>
                    <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mx-auto">
                        We're selective about who we work with — not because we're exclusive, but because our system works best for a specific type of company.
                    </p>
                </div>

                {/* Columns Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">

                    {/* Left Column: Built For You */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8">
                        <h3 className="text-xl font-bold text-green-500 mb-6">
                            This Is Built for You If:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "You're a B2B company selling products or services to other businesses",
                                "You have 20+ employees and revenue of $1M–$50M+",
                                "Your average deal size is $25K+ (enough to justify targeted outreach)",
                                "You've tried hiring salespeople or agencies without consistent results",
                                "You have a sales team that can close once meetings are booked",
                                "You're ready to commit to at least 90 days (campaigns compound over time)"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 min-w-[16px]">
                                        <Check size={16} className="text-green-500" strokeWidth={3} />
                                    </div>
                                    <span className="text-[#D1D5DB] text-sm leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Not For You */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8">
                        <h3 className="text-xl font-bold text-red-500 mb-6">
                            This Probably Isn't for You If:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "You sell directly to consumers (B2C) — our system is built for B2B",
                                "Your average deal size is under $5,000 — the math won't work",
                                "You need meetings tomorrow — our system takes 2-4 weeks to ramp",
                                "You want to own and operate the tools yourself — we handle everything",
                                "You're not ready to invest $2,995–$6,495/month in pipeline generation"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 min-w-[16px]">
                                        <X size={16} className="text-red-500" strokeWidth={3} />
                                    </div>
                                    <span className="text-[#D1D5DB] text-sm leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* CTA */}
                <div className="text-center">
                    <BookCallButton className="bg-[#F59E0B] text-black font-bold text-base px-8 py-3.5 rounded-lg hover:bg-[#D97706] transition-colors inline-block shadow-[0_4px_20px_rgba(245,158,11,0.2)] mb-4">
                        I Check These Boxes — Let's Talk
                    </BookCallButton>
                    <p className="text-[#9CA3AF] text-[13px]">
                        14-minute strategy call to see if we're a mutual fit
                    </p>
                </div>

            </div>
        </section>
    );
}
