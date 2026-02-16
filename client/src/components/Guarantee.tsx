import { ShieldCheck, Check } from "lucide-react";
import BookCallButton from "./BookCallButton";

export default function Guarantee() {
    return (
        <section className="bg-gradient-to-b from-[#FFB800]/10 to-[#FFB800]/5 py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                <div className="flex justify-center mb-8 animate-pulse">
                    <ShieldCheck className="w-20 h-20 text-primary stroke-[1.5]" />
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Our 60-Day Pipeline Guarantee
                </h2>

                <p className="text-xl md:text-2xl text-secondary-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
                    If we don't book at least <span className="text-primary font-bold">8 qualified meetings</span> that show up
                    in your first 60 days, we'll work for free until we do.
                    <br /><br />
                    No fine print. No excuses. Just results.
                </p>

                <div className="bg-white/5 border border-primary/30 rounded-lg p-8 md:p-10 mb-12 text-left max-w-2xl mx-auto backdrop-blur-sm">
                    <h3 className="text-lg text-white font-bold mb-4 border-b border-white/10 pb-2">
                        What Counts as a 'Qualified Meeting'?
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Decision-maker or influencer attends (VP+, Director, Owner)",
                            "Matches your ideal customer profile (industry, size, need)",
                            "Expresses genuine interest in your solution",
                            "Meeting lasts 15+ minutes with substantive discussion"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span className="text-secondary-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <BookCallButton className="bg-primary text-black hover:bg-white font-bold text-xl px-12 py-5 rounded-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
                        See If You Qualify
                    </BookCallButton>
                    <p className="text-xs text-secondary-foreground/60 max-w-md">
                        Subject to campaign terms and ICP qualification.
                        We reserve the right to decline clients who aren't a fit.
                    </p>
                </div>
            </div>
        </section>
    );
}
