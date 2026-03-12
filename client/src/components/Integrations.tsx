import {
    Calendar,
    Mail,
    MessageSquare,
    Database,
    Zap,
    Linkedin,
} from "lucide-react";

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
        <section className="bg-gray-50 py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-3">
                        Plugs Into What You Already Use
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
                        No new tools to learn. We integrate with your existing stack seamlessly.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {integrations.map((tool, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 h-[72px] rounded-lg flex items-center justify-center gap-2.5 text-gray-500 hover:text-primary-500 hover:border-primary-200 hover:shadow-sm transition-all"
                        >
                            <tool.icon size={20} className="opacity-70" />
                            <span className="font-medium text-sm text-gray-700">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
