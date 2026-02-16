import { Check, X } from "lucide-react";
import BookCallButton from "./BookCallButton";

export default function Qualification() {
    const goodFit = [
        "Industrial companies with $2M+ annual revenue",
        "Products or services with $10K+ deal sizes",
        "Sales cycles 3+ months (complex B2B)",
        "Existing sales team or founder-led sales ready to close",
        "Can dedicate 2 hours/week to meeting follow-up",
        "Committed to growing through outbound prospecting"
    ];

    const badFit = [
        "Need 100+ meetings/month (we focus on quality over quantity)",
        "Transactional B2C or low-ticket B2B (<$5K deals)",
        "Startup without product-market fit or clear ICP",
        "No time or process for sales follow-up",
        "Looking for quick-fix magic bullet (this takes 60-90 days)",
        "Unwilling to invest $3K+/month in growth"
    ];

    return (
        <section className="bg-secondary py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Is Spartan Flow Right for You?</h2>
                    <p className="text-secondary-foreground text-lg">
                        We're selective about who we work with. Here's how to know if we're a fit.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                    {/* Divider Line (Desktop) */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

                    {/* Good Fit Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="bg-primary/20 p-2 rounded-full">
                                <Check className="w-6 h-6 text-primary" strokeWidth={3} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">This Works Best For:</h3>
                        </div>
                        <ul className="space-y-6">
                            {goodFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                    <span className="text-white/90 leading-relaxed text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-secondary-foreground italic pl-9 border-l-2 border-primary/30 ml-2">
                            If this sounds like you, we should talk.
                        </p>
                    </div>

                    {/* Bad Fit Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="bg-destructive/20 p-2 rounded-full">
                                <X className="w-6 h-6 text-destructive" strokeWidth={3} />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary-foreground">Not a Fit If:</h3>
                        </div>
                        <ul className="space-y-6">
                            {badFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                                    <span className="text-secondary-foreground leading-relaxed text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-secondary-foreground/60 italic pl-9 border-l-2 border-white/10 ml-2">
                            That's okay—we're not for everyone. We'd rather be honest upfront.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-20 gap-4">
                    <BookCallButton className="bg-primary text-black hover:bg-white font-bold text-xl px-12 py-5 rounded-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
                        I Check These Boxes—Let's Talk
                    </BookCallButton>
                    <p className="text-sm text-secondary-foreground">
                        14-minute strategy call to see if we're a mutual fit
                    </p>
                </div>
            </div>
        </section>
    );
}
