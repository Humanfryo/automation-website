import { Star, Check, Linkedin } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "This isn't just lead generation—it's pipeline engineering. We went from 2 meetings a month to 10+ with qualified buyers. 47% turned into real opportunities.",
            name: "Mike Patterson",
            title: "VP of Sales",
            company: "Industrial Equipment Distributor",
            badge: "MANUFACTURING",
            result: "$2.1M PIPELINE"
        },
        {
            quote: "I was skeptical about outsourcing, but Spartan Flow proved me wrong. The meetings they book are with people who already understand our value.",
            name: "Lisa Chen",
            title: "Founder & CEO",
            company: "Supply Chain Software",
            badge: "LOGISTICS",
            result: "$1.8M PIPELINE"
        },
        {
            quote: "We finally have a predictable pipeline. Before Spartan Flow, our revenue was a rollercoaster. Now we can forecast 6 months out with confidence.",
            name: "James Rodriguez",
            title: "Managing Partner",
            company: "Automation Consultancy",
            badge: "AUTOMATION",
            result: "14 OPPORTUNITIES"
        }
    ];

    return (
        <section className="bg-black py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">What Clients Say</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-card p-8 rounded-xl border-b-4 border-primary flex flex-col relative min-h-[400px]">
                            {/* Result Tag */}
                            <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-2 py-1 rounded shadow-lg transform -rotate-1">
                                {t.result}
                            </div>

                            {/* Industry Badge */}
                            <div className="absolute top-4 right-4 bg-primary/15 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase">
                                {t.badge}
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-2 mt-10">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="fill-[#F59E0B] text-[#F59E0B] w-4 h-4" strokeWidth={0} />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-lg text-white leading-relaxed mb-8">
                                "{t.quote}"
                            </p>

                            <div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-4">
                                {/* Photo Placeholder */}
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-lg border border-primary/50 shrink-0">
                                    {t.name.split(' ').map(n => n[0]).join('')}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <div className="text-white font-bold truncate">{t.name}</div>
                                        {/* Verified Badge */}
                                        <div className="flex items-center gap-1 bg-green-900/20 px-1.5 py-0.5 rounded border border-green-500/20">
                                            <div className="bg-[#22C55E] rounded-full p-0.5">
                                                <Check size={8} className="text-black stroke-[4]" />
                                            </div>
                                            <span className="text-[10px] font-bold text-[#22C55E] uppercase tracking-wide">Verified</span>
                                        </div>
                                        {/* LinkedIn Icon */}
                                        <Linkedin size={14} className="text-[#6B7280] hover:text-[#0A66C2] transition-colors cursor-pointer" />
                                    </div>
                                    <div className="text-secondary-foreground text-sm truncate">{t.title}</div>
                                    <div className="text-secondary-foreground/60 text-xs italic truncate">{t.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
