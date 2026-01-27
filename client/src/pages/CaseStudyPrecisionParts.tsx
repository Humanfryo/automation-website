import React from 'react';
import { FileText, CheckCircle, ArrowRight, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import BookCallButton from '../components/BookCallButton';

const CaseStudyPrecisionParts = () => {
    React.useEffect(() => {
        document.title = "Case Study 1: 47 Meetings in 90 Days - Precision Parts Case Study | Spartan Flow";
    }, []);

    return (
        <div className="bg-black text-white selection:bg-yellow selection:text-black font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 border-b border-gray-dark/50">
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="container mx-auto px-4 max-w-[900px]">
                    {/* Breadcrumb */}
                    <div className="text-sm text-[#A0A0A0] mb-8 font-medium">
                        <Link href="/" className="hover:text-yellow transition-colors">Home</Link> &gt; <a href="/#results" className="hover:text-yellow transition-colors">Results</a> &gt; <span className="text-white">Precision Parts Case Study</span>
                    </div>

                    <div className="text-center">
                        <span className="inline-block bg-yellow text-black text-xs font-bold uppercase py-2 px-4 rounded mb-6 tracking-widest">
                            Spotlight Case Study
                        </span>

                        <h1 className="text-4xl md:text-[64px] font-bold text-white leading-tight mb-8">
                            Precision Parts Manufacturer Books 47 Qualified Meetings in 90 Days
                        </h1>

                        <div className="flex flex-wrap justify-center gap-4 text-[#A0A0A0] text-base mb-12 font-medium">
                            <span>Industrial Equipment & Precision Parts</span>
                            <span className="text-yellow">•</span>
                            <span>$35M Revenue</span>
                            <span className="text-yellow">•</span>
                            <span>120 Employees</span>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: "Meetings Booked", value: "47" },
                                { label: "Pipeline Created", value: "$1.8M" },
                                { label: "Days to Results", value: "90" },
                            ].map((stat, i) => (
                                <div key={i} className="bg-[#151515] border border-gray-dark rounded-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-[48px] font-bold text-yellow mb-2">{stat.value}</div>
                                    <div className="text-white font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 max-w-[800px] py-16 space-y-24">

                {/* Section 1: The Challenge */}
                <section>
                    <h2 className="text-4xl font-bold text-white mb-8 inline-block relative pb-2">
                        The Challenge
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-yellow"></span>
                    </h2>

                    <div className="bg-[#151515] border-l-4 border-yellow p-8 rounded-r mb-10">
                        <h3 className="text-lg font-bold text-white mb-4">Company Background</h3>
                        <p className="text-[#F5F5F5] leading-relaxed">
                            Midwest Precision Manufacturing (name changed for privacy) is a 28-year-old precision parts manufacturer serving the automotive, aerospace, and industrial equipment sectors. They specialize in CNC machining, metal stamping, and custom fabrication for mid-to-large OEMs.
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-6">The Problem</h3>
                    <ul className="space-y-4 mb-10">
                        {[
                            "Sales reps spent 65% of their time prospecting instead of closing deals",
                            "Only 2-3 qualified meetings per month across the entire 5-person team",
                            "No formal outbound prospecting process—reps relied on referrals, trade shows, and cold calling",
                            "Sales manager was drowning in trying to coordinate prospecting efforts while managing deals",
                            "Pipeline was unpredictable—some months were strong, others had zero new opportunities"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-lg text-[#F5F5F5] leading-relaxed">
                                <span className="text-yellow mt-1.5">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="bg-yellow/5 border-l-4 border-yellow p-8 rounded-r my-10">
                        <p className="text-xl text-white italic leading-relaxed mb-4">
                            "Our reps are excellent at technical sales and relationship building, but terrible at cold outreach. We were losing deals simply because we weren't getting in front of enough buyers. Our close rate was 35% when we got meetings—we just weren't getting enough meetings."
                        </p>
                        <p className="text-[#A0A0A0] font-medium">— Michael Rodriguez, VP of Sales</p>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-6">What They Tried Before</h3>
                    <ul className="space-y-4">
                        {[
                            "Hired an SDR in 2023—Quit after 4 months, couldn't handle rejection",
                            "Bought ZoomInfo database—Sat unused because nobody had time to work it",
                            "Attended 3 trade shows per year—$45K investment, generated 12 leads total",
                            "Cold calling internally—Sporadic efforts, no consistency"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-lg text-[#F5F5F5] leading-relaxed">
                                <span className="text-yellow font-bold mt-1">{i + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Section 2: The Solution */}
                <section>
                    <h2 className="text-4xl font-bold text-white mb-8 inline-block relative pb-2">
                        The Solution
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-yellow"></span>
                    </h2>
                    <h3 className="text-2xl font-bold text-white mb-8">What SpartanFlow Did:</h3>

                    <div className="space-y-12">
                        {/* Week 1 */}
                        <div>
                            <span className="inline-block bg-white text-black text-xs font-bold px-3 py-1 rounded mb-4">WEEK 1</span>
                            <h4 className="text-xl font-bold text-white mb-4">Strategy & ICP Refinement</h4>
                            <p className="text-lg text-[#F5F5F5] leading-relaxed mb-6">
                                We conducted a 60-minute discovery session to understand ideal customer profile, deal size ($80K-$250K), sales cycle (4-6 months), and key decision-makers (Procurement Directors, VP Operations).
                            </p>
                            <div className="bg-[#151515] border border-gray-dark p-6 rounded">
                                <h5 className="text-yellow text-sm font-bold uppercase mb-2">REFINED ICP</h5>
                                <ul className="text-[#A0A0A0] space-y-1 text-sm">
                                    <li>• OEMs with $50M-$500M revenue</li>
                                    <li>• Purchasing precision parts</li>
                                    <li>• Located in Midwest/Southeast</li>
                                </ul>
                            </div>
                        </div>

                        {/* Week 2-3 */}
                        <div>
                            <span className="inline-block bg-white text-black text-xs font-bold px-3 py-1 rounded mb-4">WEEK 2-3</span>
                            <h4 className="text-xl font-bold text-white mb-4">Infrastructure Setup</h4>

                            <div className="bg-[#0D0D0D] border border-gray-dark p-6 rounded-lg mb-6">
                                <h5 className="text-yellow text-sm font-bold mb-4">Sample Email (First Touch)</h5>
                                <pre className="font-mono text-sm text-[#F5F5F5] whitespace-pre-wrap leading-relaxed">
                                    {`Subject: Your Tennessee facility expansion - supplier capacity

Hey [First Name],

Saw [Company] opened your new 85,000 sq ft facility in Chattanooga 
last quarter. Quick question: is your current precision parts supplier 
keeping pace with your expanded production capacity?

We work with OEMs like [Similar Company] who've scaled fast and needed 
a supplier who could handle:
• Tight tolerances (±0.0005")
• Quick turnarounds (5-7 days for prototypes)
• Volume flexibility (100-10,000 units)

Worth a 15-minute conversation to see if we're a fit?

[Calendar Link]

Thanks,
Chris Thompson
Midwest Precision Manufacturing`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: The Results */}
                <section>
                    <h2 className="text-4xl font-bold text-white mb-8 inline-block relative pb-2">
                        The Results
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-yellow"></span>
                    </h2>
                    <h3 className="text-2xl font-bold text-white mb-8">Overall Performance (90 Days)</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-[#151515] border border-gray-dark p-8 rounded-lg">
                            <h4 className="text-xl font-bold text-white mb-6">Email Performance</h4>
                            <ul className="space-y-6">
                                {[
                                    { label: "Emails Sent", value: "6,000", sub: "500/week × 12 weeks" },
                                    { label: "Open Rate", value: "23%", sub: "1,380 emails opened" },
                                    { label: "Meetings Booked", value: "47", sub: "0.78% conversion" },
                                ].map((stat, i) => (
                                    <li key={i}>
                                        <div className="text-2xl font-bold text-yellow">{stat.value}</div>
                                        <div className="text-white">{stat.label}</div>
                                        <div className="text-sm text-[#A0A0A0]">{stat.sub}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[#151515] border border-gray-dark p-8 rounded-lg">
                            <h4 className="text-xl font-bold text-white mb-6">Pipeline Impact</h4>
                            <ul className="space-y-6">
                                {[
                                    { label: "Pipeline Created", value: "$1.8M", sub: "$130K avg deal" },
                                    { label: "Deals Closed", value: "3", sub: "$285K revenue" },
                                    { label: "ROI (Closed)", value: "31.7x", sub: "In 90 days" },
                                ].map((stat, i) => (
                                    <li key={i}>
                                        <div className="text-2xl font-bold text-yellow">{stat.value}</div>
                                        <div className="text-white">{stat.label}</div>
                                        <div className="text-sm text-[#A0A0A0]">{stat.sub}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Breakdown Table */}
                    <div className="bg-[#151515] border border-gray-dark rounded-lg overflow-hidden">
                        <div className="p-6 bg-yellow text-black font-bold text-lg">Breakdown by Week</div>
                        <div className="grid grid-cols-3 p-4 border-b border-gray-dark/50 font-bold text-[#A0A0A0] text-sm uppercase tracking-wider">
                            <div>Week</div>
                            <div>Emails</div>
                            <div>Booked</div>
                        </div>
                        {[
                            { week: "1-3 (Setup)", emails: "0", booked: "0" },
                            { week: "Week 4", emails: "500", booked: "2" },
                            { week: "Week 5", emails: "500", booked: "4" },
                            { week: "Week 6", emails: "500", booked: "5" },
                            { week: "Week 7", emails: "500", booked: "6" },
                            { week: "Week 8", emails: "500", booked: "7" },
                            { week: "Week 9", emails: "500", booked: "5" },
                            { week: "Week 12", emails: "500", booked: "7" },
                        ].map((row, i) => (
                            <div key={i} className={`grid grid-cols-3 p-4 border-b border-gray-dark/20 text-[#E0E0E0] ${i % 2 === 1 ? 'bg-[#0D0D0D]' : ''}`}>
                                <div>{row.week}</div>
                                <div>{row.emails}</div>
                                <div className="font-bold text-yellow">{row.booked}</div>
                            </div>
                        ))}
                        <div className="p-4 text-xs text-[#777] italic text-center bg-[#0D0D0D]">
                            Total: 47 Meetings Booked
                        </div>
                    </div>
                </section>

                {/* Section 6: Testimonial */}
                <section>
                    <div className="bg-[#151515] border-2 border-yellow p-10 rounded-lg shadow-[0_8px_32px_rgba(253,183,44,0.1)]">
                        <div className="text-yellow text-xl mb-6">★★★★★</div>
                        <p className="text-xl md:text-2xl text-white italic leading-relaxed mb-8">
                            "The 3-week setup seemed long at first, but once campaigns launched, we had qualified meetings every week. Best outsourcing decision we've made."
                        </p>
                        <div className="border-t border-gray-dark pt-8">
                            <div className="font-bold text-white text-lg">Michael Rodriguez</div>
                            <div className="text-[#A0A0A0]">VP of Sales, Midwest Precision Manufacturing</div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-10">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Similar Results?</h2>
                    <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-10">
                        Book a 15-minute strategy call to see how we can generate 8-12 qualified meetings per month for your industrial company.
                    </p>
                    <BookCallButton className="bg-yellow text-black h-14 px-8 rounded font-bold text-lg flex items-center gap-3 mx-auto hover:bg-white hover:scale-105 transition-all">
                        Book Your Strategy Call <ArrowRight size={20} />
                    </BookCallButton>
                    <div className="flex justify-center gap-6 mt-8 text-sm text-[#777]">
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-yellow" /> No contracts</span>
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-yellow" /> 60-day guarantee</span>
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-yellow" /> Industrial focused</span>
                    </div>
                </section>
                <div className="mt-20 pt-10 border-t border-gray-dark flex justify-between text-sm font-bold uppercase tracking-wider text-[#A0A0A0]">
                    <Link href="/" className="hover:text-yellow flex items-center gap-2">← Back to Home</Link>
                    <Link href="/case-studies/packaging-distributor-q2-pipeline-6-weeks" className="hover:text-yellow flex items-center gap-2">Case Study #2: Packaging →</Link>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyPrecisionParts;
