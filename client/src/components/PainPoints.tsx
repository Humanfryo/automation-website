import { UserX, MailWarning, TrendingDown } from "lucide-react";

export default function PainPoints() {
    const points = [
        {
            icon: UserX,
            title: "The SDR Revolving Door",
            description: "You hired salespeople at $80K+ per year. They burned through your lead list, booked garbage meetings, and quit in 9 months. Now you're starting over."
        },
        {
            icon: MailWarning,
            title: "DIY Cold Email That Flopped",
            description: "You tried doing outreach yourself. Bought a tool, watched the tutorials, sent 5,000 emails. Got 12 replies and zero meetings. Sound about right?"
        },
        {
            icon: TrendingDown,
            title: "The $8K/Month Agency That Disappointed",
            description: "You hired a lead gen agency that promised the world. Got a few meetings with people who had no budget and no authority. Cancelled after 3 months."
        }
    ];

    const scrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('how-it-works');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-[#111111] py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Sound Familiar?
                    </h2>
                    <p className="text-[#9CA3AF] text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                        You've invested in growth. But your pipeline still looks the same.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
                    {points.map((point, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-900/10 transition-all duration-300 group"
                        >
                            <div className="mb-6 inline-block p-3 bg-[#2A2A2A]/50 rounded-lg group-hover:bg-[#F59E0B]/10 transition-colors">
                                <point.icon className="text-[#F59E0B]" size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">
                                {point.title}
                            </h3>
                            <p className="text-[#D1D5DB] text-sm leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:mt-16 text-center">
                    <p className="text-[#F59E0B] font-semibold text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        There's a better way. It runs 24/7, never calls in sick, and costs less than one junior sales rep.
                    </p>

                    <a
                        href="#how-it-works"
                        onClick={scrollToHowItWorks}
                        className="inline-block border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black font-bold py-3.5 px-8 rounded-lg transition-all duration-300"
                    >
                        See How It Works
                    </a>
                </div>
            </div>
        </section>
    );
}
