import chrisImg from "../assets/founder_chris_barkhurst.jpg";
import hariImg from "../assets/tech_lead_hari.jpg";

export default function FounderSection() {
    return (
        <section className="bg-[#0F0F0F] border-y border-[#2A2A2A] py-10 md:py-[60px]">
            <div className="container mx-auto px-4 md:px-6 max-w-[900px]">

                {/* Section Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-[28px] font-bold text-white mb-2">
                        Built by People Who've Been in the Trenches
                    </h2>
                    <p className="text-[#9CA3AF] text-[14px] max-w-[550px] mx-auto">
                        Not career salespeople. Engineers and data leaders who got tired of watching broken pipelines.
                    </p>
                </div>

                {/* Two Profiles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Profile 1 - Chris Barkhurst */}
                    <div className="flex flex-col items-center md:items-start">
                        <img
                            src={chrisImg}
                            alt="Chris Barkhurst"
                            className="w-20 h-20 rounded-full border-2 border-[#F59E0B] object-cover shadow-[0_0_20px_rgba(245,158,11,0.1)] mb-3"
                        />
                        <div className="text-center md:text-left">
                            <h3 className="text-[18px] font-bold text-white">
                                Chris Barkhurst
                            </h3>
                            <p className="text-[#9CA3AF] text-[13px] mb-3">
                                Founder, Spartan Flow
                            </p>
                            <p className="text-[#D1D5DB] text-[14px] leading-[1.7] mb-3">
                                After 20+ years leading data and technology teams at enterprise companies, I kept seeing the same problem — B2B sales teams drowning in prospecting instead of closing. I built Spartan Flow to fix that. Our AI-powered system replaces the guesswork with a pipeline engine that actually delivers.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                {[
                                    "20+ Years Data & AI Leadership",
                                    "University of Chicago",
                                    "Enterprise Director-Level Experience",
                                    "Fortune 500 Background"
                                ].map((badge, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#1A1A1A] border border-[#2A2A2A] text-[#9CA3AF] px-3 py-1.5 rounded text-[11px] font-medium"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Profile 2 - Hari Rajashekar */}
                    <div className="flex flex-col items-center md:items-start">
                        <img
                            src={hariImg}
                            alt="Hari Rajashekar"
                            className="w-20 h-20 rounded-full border-2 border-[#F59E0B] object-cover shadow-[0_0_20px_rgba(245,158,11,0.1)] mb-3"
                        />
                        <div className="text-center md:text-left">
                            <h3 className="text-[18px] font-bold text-white">
                                Hari Rajashekar
                            </h3>
                            <p className="text-[#9CA3AF] text-[13px] mb-3">
                                Technical Lead, Spartan Flow
                            </p>
                            <p className="text-[#D1D5DB] text-[14px] leading-[1.7] mb-3">
                                I've spent my career building automation systems that save companies from throwing money at manual processes. At Accenture and Roche, I designed AI workflows that prevented millions in regulatory penalties. At Spartan Flow, I architect the outreach engine — from lead intelligence to personalized email delivery at scale.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                {[
                                    "Former Accenture & Roche",
                                    "IEEE Published Researcher",
                                    "Google Gen AI Certified",
                                    "AI Automation Architect"
                                ].map((badge, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#1A1A1A] border border-[#2A2A2A] text-[#9CA3AF] px-3 py-1.5 rounded text-[11px] font-medium"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
