import { UserX, MailWarning, TrendingDown, ArrowRight } from "lucide-react";

export default function PainPoints() {
    const points = [
        {
            icon: UserX,
            title: "The SDR Revolving Door",
            description: "You hired salespeople who burned through your lead list, booked low-quality meetings, and left within a year. Now you're back to square one — again.",
            color: "text-red-500",
            bgColor: "bg-red-50",
        },
        {
            icon: MailWarning,
            title: "DIY Outreach That Flopped",
            description: "You bought the tools, watched the tutorials, sent thousands of emails. The result? A handful of replies and zero qualified meetings on the calendar.",
            color: "text-amber-500",
            bgColor: "bg-amber-50",
        },
        {
            icon: TrendingDown,
            title: "The Agency That Under-Delivered",
            description: "You invested in a lead gen agency that promised the world. You got meetings with people who had no budget, no authority, and no real interest.",
            color: "text-orange-500",
            bgColor: "bg-orange-50",
        },
    ];

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                        Does This Sound Like Your Business?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
                        You've invested in growth — but your pipeline hasn't kept up.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {points.map((point, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-7 hover:shadow-lg hover:border-gray-300 transition-all duration-300 group"
                        >
                            <div className={`mb-5 inline-flex items-center justify-center w-12 h-12 ${point.bgColor} rounded-lg`}>
                                <point.icon className={point.color} size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">
                                {point.title}
                            </h3>
                            <p className="text-gray-600 text-body leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-primary-500 font-heading font-semibold text-lg md:text-xl max-w-2xl mx-auto mb-6">
                        There's a better way — one that runs 24/7, never misses a follow-up, and delivers meetings that actually convert.
                    </p>

                    <a
                        href="#how-it-works"
                        className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-600 font-semibold transition-colors"
                    >
                        See How It Works <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
