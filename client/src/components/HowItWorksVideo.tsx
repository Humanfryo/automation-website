import { Target, Calendar, Lock } from "lucide-react";
import BookCallButton from "./BookCallButton";

export default function HowItWorksVideo() {
    return (
        <section className="bg-[#0F0F0F] border-y border-[#2A2A2A] py-16 md:py-24 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Heading & Subheading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        See How Spartan Flow Works
                    </h2>
                    <p className="text-[#9CA3AF] text-[16px] md:text-[18px] max-w-2xl mx-auto">
                        2 minutes. No fluff. Just how we fill your sales calendar.
                    </p>
                </div>

                {/* Video Embed */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-[#2A2A2A]">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/s7X65EdjCq8"
                            title="How Spartan Flow Works"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>

                {/* 3-Column Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                    {/* Column 1 */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="w-12 h-12 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg flex items-center justify-center mb-5">
                            <Target className="text-[#F59E0B] w-6 h-6" />
                        </div>
                        <h3 className="text-[18px] font-bold text-white mb-3">
                            We Build Your Outbound System
                        </h3>
                        <p className="text-[#D1D5DB] text-[15px] leading-relaxed">
                            Targeting, personalized outreach, follow-up sequences, and real-time analytics — built from scratch for your business.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="w-12 h-12 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg flex items-center justify-center mb-5">
                            <Calendar className="text-[#F59E0B] w-6 h-6" />
                        </div>
                        <h3 className="text-[18px] font-bold text-white mb-3">
                            Qualified Meetings Hit Your Calendar
                        </h3>
                        <p className="text-[#D1D5DB] text-[15px] leading-relaxed">
                            No chasing leads yourself. No managing reps. Just conversations with prospects who actually fit your ideal client profile.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="w-12 h-12 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg flex items-center justify-center mb-5">
                            <Lock className="text-[#F59E0B] w-6 h-6" />
                        </div>
                        <h3 className="text-[18px] font-bold text-white mb-3">
                            You Own Everything
                        </h3>
                        <p className="text-[#D1D5DB] text-[15px] leading-relaxed">
                            Email accounts, lead data, workflows, campaign results — it's all yours. If you ever leave, you keep the entire infrastructure.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <BookCallButton className="bg-[#F59E0B] text-black font-bold text-base px-10 py-4 rounded-lg hover:bg-[#D97706] hover:scale-[1.02] transition-all duration-200 shadow-[0_4px_20px_rgba(245,158,11,0.2)]">
                        Book a 15-Minute Discovery Call
                    </BookCallButton>
                </div>
            </div>
        </section>
    );
}
