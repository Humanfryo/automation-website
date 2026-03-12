import { Building2, Users, Award, Globe } from "lucide-react";

export default function TrustBar() {
    const stats = [
        { icon: Building2, label: "B2B Companies Served", value: "50+" },
        { icon: Users, label: "Meetings Booked", value: "140+" },
        { icon: Award, label: "Client Retention Rate", value: "94%" },
        { icon: Globe, label: "Industries Covered", value: "12+" },
    ];

    return (
        <section className="bg-primary-500 py-6">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-3 justify-center">
                            <stat.icon className="w-5 h-5 text-primary-200 flex-shrink-0" />
                            <div>
                                <div className="text-white font-heading font-bold text-lg">
                                    {stat.value}
                                </div>
                                <div className="text-primary-200 text-xs">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
