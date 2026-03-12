import React from 'react';
import { CheckCircle, ArrowRight, Phone, Calendar, AlertTriangle, MessageSquare, Headphones, BarChart3, Mic, Bot, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import BookCallButton from '../components/BookCallButton';

const CaseStudyAustinAnswerPro = () => {
    React.useEffect(() => {
        document.title = "Case Study: AustinAnswerPro — 93% Cost Reduction with Voice AI | Spartan Flow";
    }, []);

    return (
        <div className="bg-white text-gray-900 selection:bg-primary-100 selection:text-black font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 border-b border-gray-200">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="container mx-auto px-4 max-w-[900px]">
                    <div className="text-sm text-gray-500 mb-8 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link> &gt; <a href="/#results" className="hover:text-primary-600 transition-colors">Results</a> &gt; <span className="text-gray-900">AustinAnswerPro Case Study</span>
                    </div>

                    <div className="text-center">
                        <div className="flex justify-center gap-3 mb-6">
                            <span className="inline-block bg-primary-500 text-black text-xs font-bold uppercase py-2 px-4 rounded tracking-widest">
                                Spotlight Case Study
                            </span>
                            <span className="inline-block bg-accent-500 text-white text-xs font-bold uppercase py-2 px-4 rounded tracking-widest">
                                Voice AI
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-[56px] font-bold text-gray-900 leading-tight mb-8">
                            How an HVAC Company Cut Answering Costs by 93% with a Voice AI Agent
                        </h1>

                        <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-base mb-12 font-medium">
                            <span>Home Services / HVAC</span>
                            <span className="text-primary-500">&bull;</span>
                            <span>Austin, Texas</span>
                            <span className="text-primary-500">&bull;</span>
                            <span>12 Employees</span>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: "Cost Reduction", value: "93%" },
                                { label: "Calls Handled by AI", value: "847" },
                                { label: "Monthly Savings", value: "$1,723" },
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
                            AustinAnswerPro is an HVAC company serving residential and light commercial clients in the Austin metro area. Like most home service businesses, they live and die by the phone. When a homeowner's AC breaks at 9 PM in August, the first company that picks up gets the job. The one that sends them to voicemail loses it — permanently.
                        </p>
                    </div>

                    <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-r mb-10 flex items-start gap-4">
                        <AlertTriangle className="text-red-500 shrink-0 mt-1" size={32} />
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">THE EXPENSIVE PROBLEM</h3>
                            <p className="text-gray-700 leading-relaxed">
                                $1,850/month for a third-party answering service that lost 30–40% of after-hours leads before anyone on the team could respond.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Why the Answering Service Failed</h3>
                    <ul className="space-y-4 mb-10">
                        {[
                            "Operators didn't know HVAC — couldn't answer basic questions about pricing or service areas",
                            "Frequently misspelled addresses, causing dispatch errors",
                            "No ability to actually book appointments — every call still required a callback",
                            "30–40% of callers contacted a competitor while waiting for a callback",
                            "The math: $1,850/month for a service that lost nearly a third of after-hours leads"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-lg text-gray-700 leading-relaxed">
                                <span className="text-primary-500 mt-1.5">&bull;</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* The Solution */}
                <section>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 inline-block relative pb-2">
                        The Solution
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary-500"></span>
                    </h2>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">AI Voice Agent — Not a Phone Tree</h3>

                    <div className="space-y-8">
                        {[
                            {
                                title: "Conversational Voice Agent",
                                description: "When a homeowner calls and says \"my AC isn't cooling and it's 95 degrees in here,\" the agent responds like a knowledgeable receptionist: acknowledges the urgency, asks relevant diagnostic questions, confirms the service area, and books an appointment directly.",
                                icon: <Mic size={20} />
                            },
                            {
                                title: "HVAC-Specific Training",
                                description: "Trained on AustinAnswerPro's actual service offerings, pricing ranges, service area boundaries, common HVAC issues and urgency levels, and scheduling preferences. Knows the difference between an emergency call (no cooling in August) and routine maintenance.",
                                icon: <Bot size={20} />
                            },
                            {
                                title: "Real-Time Calendar Integration",
                                description: "Live availability checks against Google Calendar. Books appointments, sends confirmation texts to the homeowner, and notifies the on-call technician via Slack — all within the same phone call. No callback required.",
                                icon: <Calendar size={20} />
                            },
                            {
                                title: "Smart Escalation Logic",
                                description: "Complex commercial jobs, warranty disputes, or potential safety hazards (gas leaks, electrical burning smells) get warm-transferred to the on-call manager with a conversation summary. The homeowner never has to repeat themselves.",
                                icon: <Headphones size={20} />
                            },
                            {
                                title: "Call Recording & Reporting",
                                description: "Every call recorded and transcribed. Daily summary emails show calls received, issues reported, appointments booked, and escalations. Full transparency — no black box.",
                                icon: <BarChart3 size={20} />
                            },
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white">
                                    {step.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <Phone size={20} className="text-primary-500" /> The Tech Stack
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {["VAPI (Voice)", "Claude (AI)", "Make.com", "Google Calendar", "Slack", "Airtable"].map((tool, i) => (
                                <div key={i} className="bg-white border border-gray-200 rounded px-4 py-3 text-center text-sm font-medium text-gray-700">
                                    {tool}
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4 text-center">
                            <span className="text-gray-500 text-sm">Monthly infrastructure cost: </span>
                            <span className="text-primary-500 font-bold text-lg">~$127</span>
                            <span className="text-gray-400 text-sm block mt-1">$80–95 VAPI minutes + $20–30 AI API + automation fees</span>
                        </div>
                    </div>
                </section>

                {/* The Results */}
                <section>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 inline-block relative pb-2">
                        The Results
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary-500"></span>
                    </h2>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">First 90 Days</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Call Performance</h4>
                            <ul className="space-y-6">
                                {[
                                    { label: "Total After-Hours Calls", value: "847", sub: "Handled autonomously" },
                                    { label: "Fully Resolved by AI", value: "84.3%", sub: "714 calls — no human needed" },
                                    { label: "Appointments Booked", value: "312", sub: "Directly by the agent" },
                                    { label: "Avg Call Duration", value: "2:48", sub: "Minutes per call" },
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
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Cost & Satisfaction</h4>
                            <ul className="space-y-6">
                                {[
                                    { label: "Caller Satisfaction", value: "4.3/5.0", sub: "Post-call survey" },
                                    { label: "Lead Capture Rate", value: "94%", sub: "vs. 62% with answering service" },
                                    { label: "Monthly Cost", value: "$127", sub: "vs. $1,850 previously" },
                                    { label: "Cost Reduction", value: "93.1%", sub: "$1,723 monthly savings" },
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

                    {/* Lead Capture Improvement */}
                    <div className="bg-green-500/10 border-2 border-green-500 p-8 rounded-lg mb-12">
                        <h4 className="text-green-600 font-bold text-lg mb-6 uppercase tracking-wider flex items-center gap-2">
                            <ArrowUpRight size={20} /> THE REVENUE IMPACT
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The real story isn't cost savings — it's the leads that stopped falling through the cracks. A 32-percentage-point improvement in lead capture (94% vs. 62%) over 90 days:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { label: "Additional Leads Captured", value: "271", sub: "vs. old answering service" },
                                { label: "Appointments Booked", value: "184", sub: "From incremental leads" },
                                { label: "Jobs Completed", value: "83", sub: "At 45% close rate" },
                                { label: "Incremental Revenue (90d)", value: "~$28,200", sub: "At $340 avg ticket" },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white border border-green-200 rounded-lg p-5 text-center">
                                    <div className="text-2xl font-bold text-green-600 mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                                    <div className="text-xs text-gray-500">{stat.sub}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-center border-t border-green-200 pt-4">
                            <span className="text-gray-600 text-sm">Net gain after AI costs ($381 for 90 days): </span>
                            <span className="text-green-600 font-bold text-lg">~$27,819</span>
                        </div>
                    </div>

                    {/* Cost Comparison */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                        <div className="p-6 bg-primary-500 text-black font-bold text-lg flex items-center gap-3">
                            <MessageSquare size={20} /> Before vs. After
                        </div>
                        <div className="grid grid-cols-3 p-4 border-b border-gray-200 font-bold text-gray-500 text-sm uppercase tracking-wider">
                            <div>Metric</div>
                            <div>Answering Service</div>
                            <div>Voice AI Agent</div>
                        </div>
                        {[
                            { metric: "Monthly Cost", before: "$1,850", after: "$127" },
                            { metric: "Lead Capture Rate", before: "62%", after: "94%" },
                            { metric: "Appointment Booking", before: "Requires callback", after: "Real-time" },
                            { metric: "HVAC Knowledge", before: "None", after: "Fully trained" },
                            { metric: "Hold Time", before: "Variable", after: "0 seconds" },
                        ].map((row, i) => (
                            <div key={i} className={`grid grid-cols-3 p-4 border-b border-gray-100 text-gray-700 items-center ${i % 2 === 1 ? 'bg-gray-100' : ''}`}>
                                <div className="font-medium">{row.metric}</div>
                                <div className="text-red-500">{row.before}</div>
                                <div className="font-bold text-green-600">{row.after}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What Changed */}
                <section>
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 inline-block relative pb-2">
                        What Changed
                        <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary-500"></span>
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                            <h4 className="text-lg font-bold text-gray-900 mb-4">The Sunday Morning Report</h4>
                            <p className="text-gray-700 leading-relaxed">
                                Every week, an automated summary hits the owner's inbox showing exactly how many calls came in overnight, what appointments were booked, and which issues his technicians would be walking into on Monday. He stopped checking his phone at 11 PM and started trusting the system.
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                            <h4 className="text-lg font-bold text-gray-900 mb-4">Expanded Beyond After-Hours</h4>
                            <p className="text-gray-700 leading-relaxed">
                                The voice agent has since been expanded to handle daytime overflow calls during peak summer months. It now processes roughly 40% of total inbound call volume, freeing up the office team to focus on dispatching and customer follow-ups rather than initial triage.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Applicability */}
                <section>
                    <div className="bg-primary-50 border border-primary-200 p-8 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">How This Applies to Your Business</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This project was built under Barky AI, our voice automation practice. The same architecture — VAPI voice agent, calendar integration, intelligent routing, and real-time notifications — applies to any home service business where phone responsiveness directly impacts revenue:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {["Plumbing", "Electrical", "Pest Control", "Roofing", "Landscaping", "HVAC"].map((industry, i) => (
                                <div key={i} className="bg-white border border-primary-200 rounded px-4 py-2 text-center text-sm font-medium text-gray-700">
                                    {industry}
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-900 font-bold mt-6 text-lg">
                            If your business loses leads because no one picks up the phone fast enough, this is a solved problem.
                        </p>
                    </div>
                </section>

                {/* Testimonial */}
                <section>
                    <div className="bg-gray-50 border-2 border-primary-500 p-10 rounded-lg shadow-[0_8px_32px_rgba(253,183,44,0.1)]">
                        <div className="text-primary-500 text-xl mb-6">★★★★★</div>
                        <p className="text-xl md:text-2xl text-gray-900 italic leading-relaxed mb-8">
                            "The thing that mattered most wasn't the 93% cost reduction — it was the Sunday morning report. I stopped checking my phone at 11 PM and started trusting the system. Now it handles 40% of all our calls, not just after-hours."
                        </p>
                        <div className="border-t border-gray-200 pt-8">
                            <div className="font-bold text-gray-900 text-lg">Owner</div>
                            <div className="text-gray-500">AustinAnswerPro — Austin, Texas</div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-10">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Stop Losing Calls. Start Booking Jobs.</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
                        Book a 15-minute call to see how a voice AI agent can handle your after-hours calls, book appointments, and capture every lead — at a fraction of your current answering costs.
                    </p>
                    <BookCallButton className="bg-primary-500 text-black h-14 px-8 rounded font-bold text-lg flex items-center gap-3 mx-auto hover:bg-white hover:scale-105 transition-all">
                        Book Your Strategy Call <ArrowRight size={20} />
                    </BookCallButton>
                    <div className="flex justify-center gap-6 mt-8 text-sm text-gray-400">
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-primary-500" /> No contracts</span>
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-primary-500" /> Works with any calendar</span>
                        <span className="flex items-center gap-2"><CheckCircle size={14} className="text-primary-500" /> Live in 2 weeks</span>
                    </div>
                </section>

                <div className="mt-20 pt-10 border-t border-gray-200 flex justify-between text-sm font-bold uppercase tracking-wider text-gray-500">
                    <Link href="/case-studies/precision-networks-first-predictable-pipeline" className="hover:text-primary-600 flex items-center gap-2">&larr; Case Study #2: Precision Networks</Link>
                    <Link href="/" className="hover:text-primary-600 flex items-center gap-2">Back to Home &rarr;</Link>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyAustinAnswerPro;
