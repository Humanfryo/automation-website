import React from 'react';
import { CheckCircle, ArrowRight, TrendingUp, DollarSign } from 'lucide-react';
import { Link } from 'wouter';
import BookCallButton from '../components/BookCallButton';

const CaseStudyPrecisionNetworks = () => {
    React.useEffect(() => {
        document.title = "Case Study: Precision Networks — First Predictable Pipeline in 11 Years | Spartan Flow";
    }, []);

    return (
        <div className="bg-white text-gray-900 selection:bg-primary-100 selection:text-black font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 border-b border-gray-200">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="container mx-auto px-4 max-w-[900px]">
                    <div className="text-sm text-gray-500 mb-8 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link> &gt; <a href="/#results" className="hover:text-primary-600 transition-colors">Results</a> &gt; <span className="text-gray-900">Precision Networks Case Study</span>
                    </div>

                    <div className="text-center">
                        <span className="inline-block bg-primary-500 text-black text-xs font-bold uppercase py-2 px-4 rounded mb-6 tracking-widest">
                            Spotlight Case Study
                        </span>

                        <h1 className="text-4xl md:text-[64px] font-bold text-gray-900 leading-tight mb-8">
                            A Referral-Dependent MSP Builds Its First Predictable Pipeline
                        </h1>

                        <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-base mb-12 font-medium">
                            <span>IT Managed Service Provider</span>
                            <span className="text-primary-500">&bull;</span>
                            <span>Kansas City, Missouri</span>
                            <span className="text-primary-500">&bull;</span>
                            <span>18 Employees</span>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: "Qualified Meetings Booked", value: "22" },
                                { label: "New Monthly Revenue", value: "$7,600" },
                                { label: "Days to Results", value: "60" },
                            ].map((stat, i) => (
                                <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-[48px] font-bold text-primary-500 mb-2">{stat.value}</div>
                                    <div className="text-gray-900 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 max-w-[800px] py-16 space-y-24">

                {/* The Challenge */}
                <section>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 inline-block relative pb-2">
                        The Challenge
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary-500"></span>
                    </h2>

                    <div className="bg-gray-50 border-l-4 border-primary-500 p-8 rounded-r mb-10">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Company Background</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Precision Networks had been in business for 11 years, serving small and mid-sized businesses across the Kansas City metro with managed IT, cybersecurity, and cloud services. Client retention rate above 95% — most growth came from word of mouth.
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6">The Problem</h3>
                    <ul className="space-y-4 mb-10">
                        {[
                            "Referrals were unpredictable — some months 3 new prospects, other months nothing",
                            "Tried sponsoring local chamber of commerce — no measurable results",
                            "Ran Google Ads for a quarter — inconsistent ROI",
                            "Hired a part-time BDR who lasted 6 months before leaving — zero signed clients",
                            "Owner spending 15 hours/week on BD activities that weren't generating anything"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-lg text-gray-700 leading-relaxed">
                                <span className="text-primary-500 mt-1.5">&bull;</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="bg-primary-50 border-l-4 border-primary-500 p-8 rounded-r my-10">
                        <p className="text-xl text-gray-900 italic leading-relaxed mb-4">
                            "I know we could handle 5–10 more clients right now. My team has capacity. But I'm spending 15 hours a week on BD activities that aren't generating anything, and that's time I should be spending on my existing clients."
                        </p>
                        <p className="text-gray-500 font-medium">— Owner, Precision Networks</p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h4 className="text-gray-900 font-bold text-lg mb-4">What He Actually Wanted</h4>
                        <p className="text-gray-700 leading-relaxed">
                            Not aggressive growth — just 2–3 qualified meetings per month with companies that actually needed managed IT. Not tire-kickers, not companies too small to afford an MSP, and not the same 200 businesses every other MSP in Kansas City was already emailing.
                        </p>
                    </div>
                </section>

                {/* The Solution */}
                <section>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 inline-block relative pb-2">
                        The Solution
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary-500"></span>
                    </h2>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Complete Outbound System for MSP Client Acquisition</h3>

                    <div className="space-y-12">
                        {/* Target List Building */}
                        <div>
                            <span className="inline-block bg-white text-black text-xs font-bold px-3 py-1 rounded border border-gray-200 mb-4">TARGET LIST BUILDING</span>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Signal-Based Prospecting</h4>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                We identified SMBs in the greater Kansas City metro with 50–250 employees, no internal IT department (or an overwhelmed one-person IT team), and signs of outdated infrastructure. Industries: professional services, manufacturing, healthcare, and financial services — verticals where compliance requirements make managed IT nearly mandatory.
                            </p>
                            <div className="bg-gray-50 border border-gray-200 p-6 rounded">
                                <h5 className="text-primary-500 text-sm font-bold uppercase mb-3">SIGNALS WE LOOKED FOR</h5>
                                <ul className="text-gray-600 space-y-2 text-sm">
                                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary-500 mt-0.5 shrink-0" /> Job postings for IT help (struggling to hire)</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary-500 mt-0.5 shrink-0" /> Recent office expansions</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary-500 mt-0.5 shrink-0" /> Compliance content on website (HIPAA, SOC 2, CMMC mentions)</li>
                                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary-500 mt-0.5 shrink-0" /> Technology vendors indicating aging infrastructure</li>
                                </ul>
                            </div>
                        </div>

                        {/* Personalized Outreach */}
                        <div>
                            <span className="inline-block bg-white text-black text-xs font-bold px-3 py-1 rounded border border-gray-200 mb-4">PERSONALIZED OUTREACH</span>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Peer-to-Peer Messaging</h4>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Each email referenced something specific about the prospect's business — the compliance framework they were working with, or the fact that they'd just opened a second office and were dealing with network infrastructure questions. No corporate language, no buzzwords. They read like a note from someone in the IT channel space who had a relevant observation.
                            </p>
                        </div>

                        {/* Qualification */}
                        <div>
                            <span className="inline-block bg-white text-black text-xs font-bold px-3 py-1 rounded border border-gray-200 mb-4">QUALIFICATION & BOOKING</span>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Only Meetings That Matter</h4>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                When prospects replied with interest, we qualified them against Precision Networks' criteria before booking anything — company size, current IT setup, budget range, decision-making timeline. The owner's calendar only showed meetings with companies that were genuinely a fit.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Results */}
                <section>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 inline-block relative pb-2">
                        The Results
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary-500"></span>
                    </h2>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">First 60 Days</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Outreach Performance</h4>
                            <ul className="space-y-6">
                                {[
                                    { label: "Prospects Contacted", value: "1,840", sub: "Kansas City metro area" },
                                    { label: "Total Emails Sent", value: "5,890", sub: "3.2 avg per prospect" },
                                    { label: "Open Rate", value: "52.7%", sub: "vs. ~20% industry avg" },
                                    { label: "Reply Rate", value: "4.1%", sub: "128 positive replies" },
                                ].map((stat, i) => (
                                    <li key={i}>
                                        <div className="text-2xl font-bold text-primary-500">{stat.value}</div>
                                        <div className="text-gray-900">{stat.label}</div>
                                        <div className="text-sm text-gray-500">{stat.sub}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Revenue Impact</h4>
                            <ul className="space-y-6">
                                {[
                                    { label: "Qualified Meetings Booked", value: "22", sub: "11 meetings/month" },
                                    { label: "Signed MSAs", value: "2", sub: "From 60 days of outreach" },
                                    { label: "Avg MRR Per Client", value: "$3,800", sub: "Monthly recurring revenue" },
                                    { label: "New MRR Added", value: "$7,600", sub: "$91K+ annual contract value" },
                                ].map((stat, i) => (
                                    <li key={i}>
                                        <div className="text-2xl font-bold text-primary-500">{stat.value}</div>
                                        <div className="text-gray-900">{stat.label}</div>
                                        <div className="text-sm text-gray-500">{stat.sub}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Economics Comparison */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden mb-12">
                        <div className="p-6 bg-primary-500 text-black font-bold text-lg flex items-center gap-3">
                            <DollarSign size={20} /> The Economics
                        </div>
                        <div className="grid grid-cols-4 p-4 border-b border-gray-200 font-bold text-gray-500 text-sm uppercase tracking-wider">
                            <div>Approach</div>
                            <div>Monthly Cost</div>
                            <div>Ramp Time</div>
                            <div>Signed (60d)</div>
                        </div>
                        {[
                            { approach: "Part-time BDR (previous)", cost: "$4,500", ramp: "3+ months", signed: "0" },
                            { approach: "Spartan Flow", cost: "$1,550", ramp: "2–3 weeks", signed: "2" },
                        ].map((row, i) => (
                            <div key={i} className={`grid grid-cols-4 p-4 border-b border-gray-100 text-gray-700 items-center ${i === 1 ? 'bg-green-50' : ''}`}>
                                <div className={i === 1 ? 'font-bold text-gray-900' : ''}>{row.approach}</div>
                                <div>{row.cost}</div>
                                <div>{row.ramp}</div>
                                <div className={`font-bold ${i === 1 ? 'text-green-600' : 'text-red-500'}`}>{row.signed}</div>
                            </div>
                        ))}
                        <div className="p-4 text-sm text-gray-500 text-center bg-gray-100">
                            Previous BDR: $27,000 over 6 months with zero clients. Spartan Flow: 2 clients in 60 days covering 5 months of investment.
                        </div>
                    </div>

                    {/* Pipeline Note */}
                    <div className="bg-green-500/10 border-2 border-green-500 p-8 rounded-lg">
                        <h4 className="text-green-600 font-bold text-lg mb-4 uppercase tracking-wider flex items-center gap-2">
                            <TrendingUp size={20} /> ACTIVE PIPELINE
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                            Beyond the 2 signed clients, Precision Networks now has a pipeline of 8 additional prospects in various stages of conversation. The owner is scaling the system to target a second geographic market while maintaining the same quality bar in Kansas City.
                        </p>
                    </div>
                </section>

                {/* Testimonial */}
                <section>
                    <div className="bg-gray-50 border-2 border-primary-500 p-10 rounded-lg shadow-[0_8px_32px_rgba(253,183,44,0.1)]">
                        <div className="text-primary-500 text-xl mb-6">★★★★★</div>
                        <p className="text-xl md:text-2xl text-gray-900 italic leading-relaxed mb-8">
                            "This is the first time I've ever known what's actually happening with my outreach. The email accounts, the prospect data, the campaign history, the sending domains — every piece of the system belongs to me."
                        </p>
                        <div className="border-t border-gray-200 pt-8">
                            <div className="font-bold text-gray-900 text-lg">Owner</div>
                            <div className="text-gray-500">Precision Networks — Kansas City, MO</div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-10">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Build Your Pipeline?</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
                        Book a 15-minute strategy call to see how we can generate predictable, qualified meetings for your MSP or IT services company.
                    </p>
                    <BookCallButton className="bg-primary-500 text-black h-14 px-8 rounded font-bold text-lg flex items-center gap-3 mx-auto hover:bg-white hover:scale-105 transition-all">
                        Book Your Strategy Call <ArrowRight size={20} />
                    </BookCallButton>
                    <div className="flex justify-center gap-6 mt-8 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-primary-500" /> No contracts</span>
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-primary-500" /> 60-day guarantee</span>
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-primary-500" /> You own everything</span>
                    </div>
                </section>

                <div className="mt-20 pt-10 border-t border-gray-200 flex justify-between text-sm font-bold uppercase tracking-wider text-gray-500">
                    <Link href="/case-studies/channel-fusion-14-demos-90-days" className="hover:text-primary-600 flex items-center gap-2">&larr; Case Study #1: Channel Fusion</Link>
                    <Link href="/case-studies/austin-answer-pro-voice-ai-agent" className="hover:text-primary-600 flex items-center gap-2">Case Study #3: AustinAnswerPro &rarr;</Link>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyPrecisionNetworks;
