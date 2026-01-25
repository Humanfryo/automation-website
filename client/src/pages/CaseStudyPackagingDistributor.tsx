import React from 'react';
import { FileText, CheckCircle, ArrowRight, AlertTriangle, Zap, Check } from 'lucide-react';
import { Link } from 'wouter';

const CaseStudyPackagingDistributor = () => {
    return (
        <div className="bg-black text-white selection:bg-yellow selection:text-black font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 border-b border-gray-dark/50">
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="container mx-auto px-4 max-w-[900px]">
                    {/* Breadcrumb */}
                    <div className="text-sm text-[#A0A0A0] mb-8 font-medium">
                        <Link href="/" className="hover:text-yellow transition-colors">Home</Link> &gt; <a href="/#results" className="hover:text-yellow transition-colors">Results</a> &gt; <span className="text-white">Packaging Distributor Case Study</span>
                    </div>

                    <div className="text-center">
                        <span className="inline-block bg-yellow text-black text-xs font-bold uppercase py-2 px-4 rounded mb-6 tracking-widest">
                            Spotlight Case Study
                        </span>

                        <h1 className="text-4xl md:text-[64px] font-bold text-white leading-tight mb-8">
                            Industrial Packaging Distributor Fills Q2 Pipeline Gap in Just 6 Weeks
                        </h1>

                        <div className="flex flex-wrap justify-center gap-4 text-[#A0A0A0] text-base mb-12 font-medium">
                            <span>Packaging & Distribution</span>
                            <span className="text-yellow">•</span>
                            <span>$50M Revenue</span>
                            <span className="text-yellow">•</span>
                            <span>180 Employees</span>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {[
                                { label: "Meetings Booked", value: "40" },
                                { label: "Pipeline Created", value: "$4.8M" },
                                { label: "Time to Results", value: "6 Weeks" },
                            ].map((stat, i) => (
                                <div key={i} className="bg-[#151515] border border-gray-dark rounded-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-[48px] font-bold text-yellow mb-2">{stat.value}</div>
                                    <div className="text-white font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow text-yellow px-5 py-3 rounded font-bold text-sm tracking-wide">
                            <Zap size={16} fill="currentColor" /> RAPID START SERVICE
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

                    <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-r mb-10 flex items-start gap-4">
                        <AlertTriangle className="text-red-500 shrink-0 mt-1" size={32} />
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">CRISIS SITUATION</h3>
                            <p className="text-[#F5F5F5] leading-relaxed">
                                VP of Sales facing $2-3M Q2 revenue miss with only 3 weeks until quarter start.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#151515] border-l-4 border-yellow p-8 rounded-r mb-10">
                        <h3 className="text-lg font-bold text-white mb-4">Company Background</h3>
                        <p className="text-[#F5F5F5] leading-relaxed">
                            Southeast Packaging Solutions (name changed for privacy) is a 19-year-old industrial packaging distributor serving manufacturers across food & beverage, chemicals, consumer goods, and industrial products. They distribute corrugated boxes, flexible packaging, protective materials, pallets, and custom packaging solutions to mid-market manufacturers.
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-6 relative inline-block">
                        The Urgent Problem
                        <span className="absolute bottom-1 left-0 w-full h-0.5 bg-red-500"></span>
                    </h3>
                    <p className="text-[#A0A0A0] text-lg mb-6">In mid-March 2024, the VP of Sales discovered a critical pipeline gap that threatened their Q2 revenue targets:</p>
                    <ul className="space-y-4 mb-10">
                        {[
                            "Only 12 active opportunities in pipeline (needed 40-50 for healthy coverage)",
                            "Q2 started in 3 weeks (April 1st) with insufficient pipeline to hit $13M quarterly target",
                            "Two major deals fell through in Q1 due to procurement delays",
                            "Sales team already maxed out closing existing deals and servicing current accounts",
                            "No time for prospecting—team needed meetings NOW, not in 2-3 months"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-lg text-[#F5F5F5] leading-relaxed">
                                <span className="text-yellow mt-1.5">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="bg-yellow/5 border-l-4 border-yellow p-8 rounded-r my-10">
                        <p className="text-xl text-white italic leading-relaxed mb-4">
                            "We were staring at a potential $2-3M revenue miss in Q2. Our team was great at closing, but we had nothing to close. I knew if we didn't fill the pipeline in the next 30 days, we'd be explaining to the CEO why we missed our quarter. We couldn't afford to wait 3 weeks for email warmup—we needed meetings yesterday."
                        </p>
                        <p className="text-[#A0A0A0] font-medium">— Jennifer Park, VP of Sales</p>
                    </div>

                    <div className="border border-red-500/30 rounded-lg p-6 bg-[#151515] mb-10">
                        <h4 className="text-white font-bold text-lg mb-4">The Math That Scared Them</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="text-[#A0A0A0] text-sm">Q2 Revenue Target</div>
                                <div className="text-2xl font-bold text-white">$13M</div>
                            </div>
                            <div>
                                <div className="text-[#A0A0A0] text-sm flex items-center gap-2">Current Pipeline <AlertTriangle size={14} className="text-red-500" /></div>
                                <div className="text-2xl font-bold text-white">$4.2M <span className="text-sm font-normal text-red-400">(only 32% coverage)</span></div>
                            </div>
                            <div>
                                <div className="text-[#A0A0A0] text-sm">Pipeline Gap</div>
                                <div className="text-2xl font-bold text-white">$8.8M needed</div>
                            </div>
                            <div>
                                <div className="text-[#A0A0A0] text-sm">Meetings Needed</div>
                                <div className="text-2xl font-bold text-white">30+ <span className="text-sm font-normal text-[#A0A0A0]">in next 6 weeks</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: The Solution */}
                <section>
                    <h2 className="text-4xl font-bold text-white mb-8 inline-block relative pb-2">
                        The Solution
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-yellow"></span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-[#151515] border border-gray-dark p-6 rounded-lg opacity-60">
                            <h4 className="text-lg font-bold text-[#A0A0A0] mb-4">Professional Setup</h4>
                            <ul className="space-y-2 text-[#777]">
                                <li>• 3-week warmup</li>
                                <li>• First meetings Week 5</li>
                                <li>• $2,995/month</li>
                            </ul>
                        </div>
                        <div className="bg-[#151515] border-2 border-yellow p-6 rounded-lg relative">
                            <div className="absolute top-4 right-4 bg-yellow text-black text-xs font-bold px-2 py-1 rounded">CHOSEN ✓</div>
                            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Zap size={18} className="text-yellow" /> Rapid Start</h4>
                            <ul className="space-y-2 text-white">
                                <li>• Pre-warmed infrastructure</li>
                                <li>• First meetings Week 1</li>
                                <li>• $4,495/month</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-l-4 border-yellow pl-6 py-2 mb-12">
                        <p className="text-white italic">"I don't care about the cost. I care about meetings. Let's go."</p>
                    </div>

                    <div className="space-y-12">
                        {/* Day 1-2 */}
                        <div>
                            <span className="inline-block bg-yellow text-black text-xs font-bold px-3 py-1 rounded mb-4">DAY 1-2</span>
                            <h4 className="text-xl font-bold text-white mb-4">Rapid Strategy & Setup</h4>

                            <div className="bg-[#0D0D0D] border border-gray-dark p-6 rounded-lg mb-6">
                                <h5 className="text-yellow text-sm font-bold mb-4">Sample Email (First Touch)</h5>
                                <pre className="font-mono text-sm text-[#F5F5F5] whitespace-pre-wrap leading-relaxed">
                                    {`Subject: Your new Tampa facility - packaging supplier capacity

Hey [First Name],

Saw [Company] broke ground on the new 120,000 sq ft facility in 
Tampa. Congrats on the expansion.

Quick question: is your current packaging supplier ready to support 
production at that scale, or are you diversifying?

We work with food manufacturers like [Similar Company] who scaled 
fast and needed a packaging partner who could deliver:
• 2-day lead times (vs. industry standard 7-10 days)
• Custom solutions for new product launches
• Sustainability options (100% recyclable corrugated, biodegradable)

Worth 15 minutes this week?

[Calendar Link]

Thanks,
Mike Chen
Southeast Packaging Solutions`}
                                </pre>
                            </div>
                        </div>

                        {/* Week 1 */}
                        <div>
                            <span className="inline-block bg-green-500 text-black text-xs font-bold px-3 py-1 rounded mb-4">WEEK 1</span>
                            <h4 className="text-xl font-bold text-white mb-4">Immediate Traction</h4>
                            <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded-r">
                                <p className="text-white italic">"I checked my calendar on Friday of Week 1 and saw 6 meetings booked for next week. I almost cried. We were back in the game."</p>
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
                    <h3 className="text-2xl font-bold text-white mb-8">Overall Performance (6 Weeks)</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-[#151515] border border-gray-dark p-8 rounded-lg">
                            <h4 className="text-xl font-bold text-white mb-6">Email Performance</h4>
                            <ul className="space-y-6">
                                {[
                                    { label: "Emails Sent", value: "3,450", sub: "575/week average" },
                                    { label: "Open Rate", value: "24%", sub: "828 emails opened" },
                                    { label: "Meetings Booked", value: "40", sub: "1.16% conversion" },
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
                                    { label: "New Pipeline", value: "$4.8M", sub: "$253K avg deal" },
                                    { label: "Closed in Q2", value: "$2.8M", sub: "23% of Q2 revenue" },
                                    { label: "Carried to Q3", value: "$2.0M+", sub: "Still active" },
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

                    <div className="bg-green-500/10 border-2 border-green-500 p-8 rounded-lg mb-12">
                        <h4 className="text-green-500 font-bold text-lg mb-6 uppercase tracking-wider">Q2 OUTCOME (June 30)</h4>
                        <div className="space-y-2">
                            <div className="flex justify-between text-white border-b border-green-500/30 pb-2">
                                <span>Revenue Target:</span>
                                <span>$13M</span>
                            </div>
                            <div className="flex justify-between text-white pb-2">
                                <span>Actual Revenue:</span>
                                <span className="font-bold flex items-center gap-2">$12.4M <Check size={16} className="text-green-500" /></span>
                            </div>
                            <div className="flex justify-between text-white pt-4">
                                <span>From SpartanFlow Pipeline:</span>
                                <span className="font-bold text-green-400">$2.8M (23% of Q2 revenue)</span>
                            </div>
                        </div>
                        <div className="mt-6 text-sm text-green-300 font-bold text-center">
                            Result: VP of Sales received Q2 performance bonus
                        </div>
                    </div>

                    {/* Breakdown Table */}
                    <div className="bg-[#151515] border border-gray-dark rounded-lg overflow-hidden mb-8">
                        <div className="p-6 bg-yellow text-black font-bold text-lg">Breakdown by Week</div>
                        <div className="grid grid-cols-4 p-4 border-b border-gray-dark/50 font-bold text-[#A0A0A0] text-sm uppercase tracking-wider">
                            <div>Week</div>
                            <div className="hidden md:block">Emails</div>
                            <div>Booked</div>
                            <div>Notes</div>
                        </div>
                        {[
                            { week: "1", emails: "350", booked: "6", notes: "Setup + Launch" },
                            { week: "2", emails: "650", booked: "8", notes: "Full velocity" },
                            { week: "3", emails: "700", booked: "9", notes: "Peak performance" },
                            { week: "4", emails: "650", booked: "7", notes: "Target achieved!" },
                            { week: "5", emails: "600", booked: "6", notes: "Follow-up focus" },
                            { week: "6", emails: "500", booked: "4", notes: "Final push" },
                        ].map((row, i) => (
                            <div key={i} className={`grid grid-cols-4 p-4 border-b border-gray-dark/20 text-[#E0E0E0] items-center ${i % 2 === 1 ? 'bg-[#0D0D0D]' : ''}`}>
                                <div>{row.week}</div>
                                <div className="hidden md:block">{row.emails}</div>
                                <div className="font-bold text-yellow">{row.booked}</div>
                                <div className="text-xs text-[#777] italic">{row.notes}</div>
                            </div>
                        ))}
                        <div className="p-4 text-sm text-green-400 font-bold text-center bg-[#0D0D0D] flex items-center justify-center gap-2">
                            <CheckCircle size={16} /> TARGET ACHIEVED: Week 4 (30 meetings goal exceeded)
                        </div>
                    </div>
                </section>

                {/* Section 4: The $450K Deal */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-2">The $450K Deal</h2>
                    <p className="text-[#A0A0A0] text-xl mb-8">How Perfect Timing Created a Quick Win</p>

                    <div className="bg-[#151515] border-l-4 border-green-500 p-6 rounded-r mb-8">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <span className="text-[#A0A0A0] text-sm block">Company</span>
                                <span className="text-white font-bold">Major Beverage Manufacturer</span>
                            </div>
                            <div>
                                <span className="text-[#A0A0A0] text-sm block">Outcome</span>
                                <span className="text-white font-bold">$450K annual contract signed in Q2</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-[#0D0D0D] p-6 rounded border border-gray-dark">
                            <h5 className="text-[#A0A0A0] text-sm mb-4">Initial Email (Week 2, Thursday 9am)</h5>
                            <div className="h-2 w-full bg-[#1A1A1A] rounded mb-2"></div>
                            <div className="h-2 w-3/4 bg-[#1A1A1A] rounded mb-4"></div>
                            <div className="text-xs text-[#555] font-mono">...current packaging supplier ready to support production at that scale...</div>
                        </div>
                        <div className="bg-[#0F0F0F] p-6 rounded border-l-2 border-red-500">
                            <h5 className="text-white text-sm mb-4 font-bold flex items-center gap-2">Response (2 hours later) <Zap size={14} className="text-yellow" /></h5>
                            <p className="text-sm text-[#F5F5F5] font-mono leading-relaxed">
                                Mike - Perfect timing. Our current supplier just pushed our delivery date to July 15th, which puts our whole launch at risk. Need to talk ASAP. I booked your 3pm Friday slot.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 6: Testimonial */}
                <section>
                    <div className="bg-[#151515] border-2 border-yellow p-10 rounded-lg shadow-[0_8px_32px_rgba(253,183,44,0.1)]">
                        <div className="text-yellow text-xl mb-6">★★★★★</div>
                        <p className="text-xl md:text-2xl text-white italic leading-relaxed mb-8">
                            "That one deal alone paid for the entire 6-week campaign 50 times over. But what really mattered was that we had 18 other opportunities in the pipeline. We went from panic mode to confidence in 6 weeks."
                        </p>
                        <div className="border-t border-gray-dark pt-8">
                            <div className="font-bold text-white text-lg">Jennifer Park</div>
                            <div className="text-[#A0A0A0]">VP of Sales, Southeast Packaging Solutions</div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-10">
                    <h2 className="text-4xl font-bold text-white mb-6">Need Meetings Fast?</h2>
                    <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-10">
                        If you're facing a pipeline gap and need qualified meetings within weeks (not months), our Rapid Start service delivers results in your first 7-14 days.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <button className="bg-yellow text-black h-14 px-8 rounded font-bold text-lg flex items-center justify-center gap-3 hover:bg-white hover:scale-105 transition-all">
                            Book a Strategy Call <ArrowRight size={20} />
                        </button>
                        <button className="bg-transparent border border-white text-white h-14 px-8 rounded font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                            Compare Services
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-[#777]">
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-yellow" /> Pre-warmed infrastructure</span>
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-yellow" /> First meetings Week 1</span>
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-yellow" /> Perfect for Q2/Q4 pipelines</span>
                    </div>
                </section>

                <div className="mt-20 pt-10 border-t border-gray-dark flex justify-between text-sm font-bold uppercase tracking-wider text-[#A0A0A0]">
                    <Link href="/case-studies/precision-parts-47-meetings-90-days" className="hover:text-yellow flex items-center gap-2">← Case Study #1: Precision Parts</Link>
                    <Link href="/case-studies/chemical-distributor-6-month-growth-engine" className="hover:text-yellow flex items-center gap-2">Case Study #3: Chemical Distributor →</Link>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyPackagingDistributor;
