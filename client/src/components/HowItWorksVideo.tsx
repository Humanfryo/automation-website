import { Target, Calendar, Lock } from "lucide-react";
import BookCallButton from "./BookCallButton";

export default function HowItWorksVideo() {
    const highlights = [
        {
            icon: Target,
            title: "We Build Your Outbound System",
            description: "Targeting, personalized outreach, follow-up sequences, and real-time analytics — built from scratch for your business.",
        },
        {
            icon: Calendar,
            title: "Qualified Meetings Hit Your Calendar",
            description: "No chasing leads. No managing reps. Just conversations with prospects who match your ideal client profile.",
        },
        {
            icon: Lock,
            title: "You Own Everything",
            description: "Email accounts, lead data, workflows, campaign results — it's all yours. You keep the entire infrastructure.",
        },
    ];

    return (
        <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                        See How Spartan Flow Works
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        2 minutes. No fluff. Just how we fill your sales calendar.
                    </p>
                </div>

                {/* Video Embed */}
                <div className="max-w-4xl mx-auto mb-14">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/s7X65EdjCq8"
                            title="How Spartan Flow Works"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* 3-Column Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
                    {highlights.map((item, index) => (
                        <div key={index} className="text-center md:text-left">
                            <div className="inline-flex items-center justify-center w-11 h-11 bg-primary-50 rounded-lg mb-4">
                                <item.icon className="w-5 h-5 text-primary-500" />
                            </div>
                            <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <BookCallButton className="bg-accent-500 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-600 transition-all shadow-sm">
                        Book a 15-Minute Discovery Call
                    </BookCallButton>
                </div>
            </div>
        </section>
    );
}
