import { Calendar, Mail, Database, Globe, Layers, Zap, Sliders, Check, Linkedin } from "lucide-react";

export default function Integrations() {
    const tools = [
        { icon: Database, name: "HubSpot" },
        { icon: Globe, name: "Salesforce" },
        { icon: Calendar, name: "Google Calendar" },
        { icon: Mail, name: "Outlook" },
        { icon: Sliders, name: "Calendly" },
        { icon: Layers, name: "Slack" },
        { icon: Zap, name: "Zapier" },
        { icon: Linkedin, name: "Sales Navigator" },
    ];

    return (
        <section className="bg-black py-20 px-4 border-t border-white/5">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Integrates with Your Calendar & CRM
                </h2>
                <p className="text-secondary-foreground text-lg mb-16 max-w-2xl mx-auto">
                    We work with your existing tools—no platform switching required.
                </p>

                {/* Logo Row */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-105"
                        >
                            <tool.icon className="w-10 h-10 md:w-12 md:h-12 text-white group-hover:text-primary transition-colors" strokeWidth={1.5} />
                            <span className="text-[10px] uppercase tracking-wider text-white/0 group-hover:text-white/60 transition-colors duration-300 -mb-4 group-hover:mb-0">
                                {tool.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Proof Line */}
                <div className="flex flex-wrap justify-center gap-4 text-sm text-[#9CA3AF] font-medium mb-8">
                    <span className="flex items-center gap-2">Live data sync in under 5 minutes</span>
                    <span className="hidden md:inline text-white/20">•</span>
                    <span className="flex items-center gap-2">No developer needed</span>
                    <span className="hidden md:inline text-white/20">•</span>
                    <span className="flex items-center gap-2">SOC 2 compliant</span>
                </div>

                {/* Callout Card */}
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4 inline-flex items-center gap-3 max-w-md mx-auto shadow-lg">
                    <div className="bg-primary/20 p-1.5 rounded-full">
                        <Zap className="w-3.5 h-3.5 text-primary fill-primary" />
                    </div>
                    <span className="text-[13px] text-[#D1D5DB]">
                        Most popular: <span className="font-semibold text-white">HubSpot + Google Calendar</span> — used by 73% of our clients
                    </span>
                </div>
            </div>
        </section>
    );
}
