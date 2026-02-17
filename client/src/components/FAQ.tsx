import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "How is this different from other lead gen agencies?",
        answer: "Most agencies use human SDR teams making 100 cold calls a day. They charge $8K–$15K/month and deliver inconsistent results because they're limited by headcount and turnover. Our AI-powered system researches, personalizes, and delivers outreach at a quality level that manual teams can't match — at a fraction of the cost. Think of it as replacing a sales team with a pipeline engine."
    },
    {
        question: "How long until I see meetings on my calendar?",
        answer: "Most clients see their first qualified meetings within 3–6 weeks. Weeks 1–2 are setup and infrastructure (domain warmup, ICP mapping, messaging approval). Weeks 3+ are active campaigning with meetings flowing in. Our 60-day guarantee means you're covered — if it takes longer, we extend at no cost."
    },
    {
        question: "What if I've been burned by agencies before?",
        answer: "That's exactly who we built this for. If you've paid $8K/month for an agency that delivered garbage meetings with people who had no budget — we get it. Our system is different because it's smarter, not bigger. AI-powered personalization at scale beats a room full of junior SDRs reading scripts. And our 60-day guarantee means you're never stuck paying for something that isn't working."
    },
    {
        question: "Do I need to provide my own lead lists?",
        answer: "No. We handle everything end-to-end — lead sourcing, data verification, ICP targeting, messaging, delivery, reply management, and meeting scheduling. You just show up to qualified meetings on your calendar. If you do have existing lists or CRM data, we can incorporate those too."
    },
    {
        question: "What industries do you work with?",
        answer: "Any B2B company selling to other businesses. We've delivered results in manufacturing, industrial distribution, supply chain, IT services, SaaS, and professional services. The system works best when your average deal size is $25K+ and you're selling to identifiable decision-makers at companies you can target by industry, size, or geography."
    },
    {
        question: "What does it cost?",
        answer: "Our service tiers range from $2,995 to $6,495 per month depending on campaign volume and complexity. That's a fraction of the cost of hiring an SDR ($111K–$148K/year fully loaded) or using a traditional agency ($5K–$15K/month). We're transparent about pricing on our strategy calls — no hidden fees, no long-term contracts, and a 60-day guarantee backing every engagement."
    },
    {
        question: "How much of my time does this require?",
        answer: "About 1 hour per week. After the initial 30-minute strategy call, your ongoing involvement is reviewing weekly performance reports and showing up to the qualified meetings we book. We handle all the campaign execution, reply management, and optimization. Your sales team focuses 100% on closing."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="bg-[#111111] py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-[800px]">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-3xl font-bold text-white mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#9CA3AF] text-base">
                        Straight answers to the questions we hear most.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-lg border transition-all duration-300 ${openIndex === index
                                    ? "bg-[#1A1A1A] border-[#F59E0B]"
                                    : "bg-[#1A1A1A] border-[#2A2A2A] hover:border-[#F59E0B]/50"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-white font-semibold text-base md:text-lg pr-8">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-[#F59E0B] flex-shrink-0" size={20} />
                                ) : (
                                    <ChevronDown className="text-[#F59E0B] flex-shrink-0" size={20} />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100 px-6 pb-6" : "max-h-0 opacity-0 px-6"
                                    }`}
                            >
                                <div className="border-t border-[#2A2A2A] pt-4">
                                    <p className="text-[#D1D5DB] text-[15px] leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
