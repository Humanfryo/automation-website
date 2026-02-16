
export default function SocialProof() {
    const stats = [
        { icon: "🟢", text: "3 Strategy Calls Booked This Week" },
        { icon: "📊", text: "Running Campaigns for 12 Industrial Companies" },
        { icon: "✉️", text: "4,200+ Qualified Prospects Contacted This Month" },
        { icon: "⭐", text: "8.7/10 Average Meeting Quality Rating" },
    ];

    return (
        <section className="bg-black py-8 border-b-2 border-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900 to-black opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
                    Right Now
                </div>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 items-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                            <span className="text-xl">{stat.icon}</span>
                            <span className="text-white text-sm md:text-base font-medium">{stat.text}</span>
                            {index < stats.length - 1 && (
                                <div className="hidden lg:block w-px h-6 bg-primary mx-4" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
