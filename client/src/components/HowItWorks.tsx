import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Target, Settings, Rocket, CalendarCheck, ChevronDown } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            icon: Target,
            title: "Strategy & Setup",
            description: "We analyze your ideal customer profile and identify 300-500 decision-makers who match your best customers.",
            details: [
                "Target account list (300-500 qualified prospects)",
                "ICP validation & refinement workshop",
                "Messaging framework review & approval",
                "CRM and calendar integration complete"
            ]
        },
        {
            icon: Settings,
            title: "Infrastructure Setup",
            description: "We build the email infrastructure, warm up domains, and create personalized outreach sequences.",
            details: [
                "Dedicated email infrastructure live & warmed",
                "3-5 personalized outreach sequences created",
                "Sample emails for your review and approval",
                "Response handling protocols established"
            ]
        },
        {
            icon: Rocket,
            title: "Campaign Launch",
            description: "We deploy campaigns in waves, continuously optimizing based on response rates.",
            details: [
                "First campaign wave deployed (50-100 prospects)",
                "Initial responses and engagement tracked",
                "First qualified meetings booked",
                "Weekly performance dashboard access"
            ]
        },
        {
            icon: CalendarCheck,
            title: "Meetings Start Flowing",
            description: "Qualified decision-makers appear on your calendar. We provide pre-meeting research briefs.",
            details: [
                "8-12 qualified meetings booked per month",
                "Pre-meeting research brief for each prospect",
                "Meeting quality feedback loop",
                "Pipeline reporting and ROI tracking"
            ]
        }
    ];

    return (
        <section id="how-it-works" className="bg-black py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <div className="inline-block bg-primary px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-black mb-4">
                        The Process
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
                    <p className="text-secondary-foreground text-lg max-w-2xl mx-auto">
                        Four simple steps from strategy call to meetings flowing into your calendar.
                        No wasted time, no unqualified leads.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-dashed border-t-2 border-primary/30 -z-0" />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-card border-l-4 border-primary rounded-xl p-6 md:p-8 relative z-10 hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,184,0,0.1)] group"
                        >
                            {/* Step Number Badge */}
                            <div className="absolute -top-6 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-xl text-black shadow-lg">
                                0{index + 1}
                            </div>

                            {/* Icon */}
                            <div className="flex justify-center mb-6 mt-4">
                                <step.icon className="w-14 h-14 text-primary stroke-[1.5]" />
                            </div>

                            <h3 className="text-xl font-bold text-white text-center mb-4">{step.title}</h3>
                            <p className="text-secondary-foreground text-center mb-6 text-sm leading-relaxed">
                                {step.description}
                            </p>

                            {/* Expandable Details */}
                            <Accordion type="single" collapsible>
                                <AccordionItem value={`item-${index}`} className="border-t border-white/10">
                                    <AccordionTrigger className="w-full flex items-center justify-between py-3 text-xs text-secondary-foreground/70 uppercase tracking-wider hover:text-primary transition-colors">
                                        What You'll See
                                        <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="space-y-2 pb-2">
                                            {step.details.map((detail, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-secondary-foreground">
                                                    <span className="text-primary mt-1">•</span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <a href="#book" className="bg-primary text-black font-bold px-8 py-4 rounded-lg hover:bg-white transition-colors shadow-lg shadow-primary/20">
                        Book Your Strategy Call
                    </a>
                </div>
                <p className="text-center text-xs text-secondary-foreground mt-4">
                    14-minute qualification call—see if we're a fit
                </p>
            </div>
        </section>
    );
}
