import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "This isn't just lead generation — it's pipeline engineering. We went from 2 meetings a month to 10+ with qualified hiring managers. 47% turned into real placement opportunities.",
            name: "Mike Patterson",
            title: "VP of Business Development",
            company: "National Staffing Agency",
            badge: "STAFFING",
            photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
        },
        {
            quote: "I was skeptical about outsourcing outbound, but Spartan Flow proved me wrong. The meetings they book are with CTOs and IT Directors who actually have budget and authority.",
            name: "Lisa Chen",
            title: "Founder & CEO",
            company: "Managed IT Services Provider",
            badge: "MSP",
            photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=120&h=120&fit=crop&crop=face",
        },
        {
            quote: "We finally have a predictable pipeline. Before Spartan Flow, our revenue was a rollercoaster. Now we can forecast 6 months out with confidence.",
            name: "James Rodriguez",
            title: "Managing Partner",
            company: "B2B Marketing Agency",
            badge: "MARKETING",
            photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Hear from business leaders who transformed their pipeline.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-7 border border-gray-200 flex flex-col hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Industry Badge */}
                            <span className="self-start text-xs font-semibold text-primary-500 bg-primary-50 px-3 py-1 rounded-full mb-4">
                                {t.badge}
                            </span>

                            {/* Quote Icon */}
                            <Quote className="w-8 h-8 text-gray-200 mb-3" />

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="fill-amber-400 text-amber-400 w-4 h-4" strokeWidth={0} />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                                "{t.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                                <img
                                    src={t.photo}
                                    alt={t.name}
                                    className="w-11 h-11 rounded-full object-cover"
                                    loading="lazy"
                                />
                                <div>
                                    <div className="text-gray-900 font-semibold text-sm">
                                        {t.name}
                                    </div>
                                    <div className="text-gray-500 text-xs">
                                        {t.title}
                                    </div>
                                    <div className="text-gray-400 text-xs">
                                        {t.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
