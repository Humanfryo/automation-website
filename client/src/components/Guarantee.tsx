import { ShieldCheck, Calendar, RefreshCw, Handshake } from "lucide-react";
import BookCallButton from "./BookCallButton";

export default function Guarantee() {
    return (
        <section className="bg-primary-50 py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-5">
                    <ShieldCheck className="w-7 h-7 text-primary-500" />
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                    Our 60-Day Pipeline Guarantee
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
                    If you don't see qualified meetings on your calendar within 60 days, we'll extend your service at no cost until you do. No fine print. No excuses.
                </p>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {[
                        { icon: Calendar, title: "60 days to see results", sub: "Performance period" },
                        { icon: RefreshCw, title: "Free extension", sub: "If we miss the mark" },
                        { icon: Handshake, title: "No long-term contracts", sub: "Cancel anytime" },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="inline-flex items-center justify-center w-10 h-10 bg-white border border-primary-200 rounded-lg mb-3">
                                <item.icon className="w-5 h-5 text-primary-500" />
                            </div>
                            <div className="text-gray-900 text-sm font-semibold">{item.title}</div>
                            <div className="text-gray-500 text-xs">{item.sub}</div>
                        </div>
                    ))}
                </div>

                <BookCallButton className="bg-primary-500 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-primary-600 transition-all shadow-sm">
                    Start Risk-Free — Book Your Strategy Call
                </BookCallButton>
            </div>
        </section>
    );
}
