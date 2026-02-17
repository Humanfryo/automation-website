import {
    Calendar,
    Mail,
    MessageSquare,
    Database,
    Zap,
    Linkedin
} from "lucide-react";

// Since actual SVG logos might not be available, using Lucide icons as placeholders 
// or if I can find standard SVGs. For now, consistently using placeholders with labels
// is safer if assets aren't confirmed, but the prompt requests specific tools.
// I will use text/icon combos that look professional.

const integrations = [
    { name: "HubSpot", icon: Database },
    { name: "Salesforce", icon: Database },
    { name: "Google Calendar", icon: Calendar },
    { name: "Outlook", icon: Mail },
    { name: "Calendly", icon: Calendar },
    { name: "Slack", icon: MessageSquare },
    { name: "Zapier", icon: Zap },
    { name: "Sales Navigator", icon: Linkedin },
];

export default function Integrations() {
    return (
        <section className="bg-[#111111] py-12 md:py-20 border-b border-[#2A2A2A]">
            <div className="container mx-auto px-4 md:px-6 max-w-[1000px]">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-3xl font-bold text-white mb-3">
                        Plugs Into What You Already Use
                    </h2>
                    <p className="text-[#9CA3AF] text-sm md:text-base max-w-xl mx-auto">
                        No new tools to learn. No complex setup. We integrate with your existing stack in under 5 minutes.
                    </p>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
                    {integrations.map((tool, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] border border-[#2A2A2A] h-[80px] rounded-lg flex items-center justify-center gap-3 text-[#6B7280] hover:text-white hover:border-[#F59E0B]/30 hover:bg-[#1A1A1A]/80 transition-all group cursor-default"
                        >
                            <tool.icon size={24} className="opacity-70 group-hover:opacity-100 group-hover:text-[#F59E0B] transition-opacity" />
                            <span className="font-semibold text-sm">{tool.name}</span>
                        </div>
                    ))}
                </div>

                {/* Most Popular Card (Preserved from previous/requested) */}
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold mb-1">Not Ready for a Call?</h4>
                        <p className="text-[#9CA3AF] text-sm">Download our framework and see how the math works for your specific industry.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
