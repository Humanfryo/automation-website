import { Blocks } from "lucide-react";

export default function TrustBar() {
    const logos = [
        "HubSpot",
        "Salesforce",
        "Google Calendar",
        "Microsoft Outlook",
        "Calendly",
        "Slack",
        "LinkedIn Sales Nav"
    ];

    return (
        <section className="bg-[#0F0F0F] border-y border-[#2A2A2A] py-5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4">
                    <span className="text-[10px] text-[#6B7280] uppercase tracking-[0.2em] font-medium">
                        Integrates With Your Existing Tools
                    </span>
                </div>

                {/* Desktop/Tablet Row */}
                <div className="hidden md:flex justify-center items-center gap-8 lg:gap-12 flex-wrap">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="text-[#4B5563] text-xl font-bold grayscale hover:grayscale-0 hover:text-white transition-all duration-300 cursor-default select-none"
                        >
                            {/* In a real production build, these would be SVG logos */}
                            {logo}
                        </div>
                    ))}
                </div>

                {/* Mobile Scrollable Row */}
                <div className="md:hidden overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                    <div className="flex gap-8 w-max mx-auto">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="text-[#4B5563] text-lg font-bold whitespace-nowrap"
                            >
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
