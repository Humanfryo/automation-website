import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "How is this different from other lead gen agencies?",
        answer: "Most agencies use human SDR teams making 100 cold calls a day. They deliver inconsistent results because they're limited by headcount and turnover. Our AI-powered system researches, personalizes, and delivers outreach at a quality level that manual teams can't match. Think of it as replacing a sales team with a pipeline engine.",
    },
    {
        question: "How long until I see meetings on my calendar?",
        answer: "Most clients see their first qualified meetings within 3-6 weeks. Weeks 1-2 are setup and infrastructure (domain warmup, ICP mapping, messaging approval). Weeks 3+ are active campaigning with meetings flowing in. Our 60-day guarantee means you're covered if it takes longer.",
    },
    {
        question: "What if I've been burned by agencies before?",
        answer: "That's exactly who we built this for. Our system is different because it's smarter, not bigger. AI-powered personalization at scale beats a room full of junior SDRs reading scripts. And our 60-day guarantee means you're never stuck paying for something that isn't working.",
    },
    {
        question: "Do I need to provide my own lead lists?",
        answer: "No. We handle everything end-to-end — lead sourcing, data verification, ICP targeting, messaging, delivery, reply management, and meeting scheduling. You just show up to qualified meetings on your calendar. If you have existing lists or CRM data, we can incorporate those too.",
    },
    {
        question: "What industries do you work with?",
        answer: "We work with B2B companies across recruiting and staffing, managed IT services (MSPs), B2B SaaS, IT services, marketing agencies, and professional services. The system works best when you're selling to identifiable decision-makers at companies you can target by industry, size, or geography.",
    },
    {
        question: "How much of my time does this require?",
        answer: "About 1 hour per week. After the initial 30-minute strategy call, your ongoing involvement is reviewing weekly performance reports and showing up to the qualified meetings we book. We handle all the campaign execution, reply management, and optimization.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-base">
                        Straight answers to the questions we hear most.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-lg border transition-all duration-300 ${
                                openIndex === index
                                    ? "bg-white border-primary-200 shadow-sm"
                                    : "bg-white border-gray-200 hover:border-gray-300"
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                            >
                                <span className="text-gray-900 font-semibold text-base pr-8">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-primary-500 flex-shrink-0" size={18} />
                                ) : (
                                    <ChevronDown className="text-gray-400 flex-shrink-0" size={18} />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index
                                        ? "max-h-[500px] opacity-100 px-5 pb-5"
                                        : "max-h-0 opacity-0 px-5"
                                }`}
                            >
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="text-gray-600 text-sm leading-relaxed">
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
