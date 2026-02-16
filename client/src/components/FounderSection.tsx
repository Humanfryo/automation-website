import { Briefcase, Medal, Target, Users, CheckCircle, Linkedin } from "lucide-react";
import founderImage from "../assets/founder_chris_barkhurst.jpg";
import techLeadImage from "../assets/tech_lead_hari.jpg";

export default function FounderSection() {
    const credentials = [
        { icon: Briefcase, text: "20+ Years Enterprise Consulting", subtext: "Led digital transformation at Fortune 500s" },
        { icon: Medal, text: "$47M+ Pipeline Generated", subtext: "Proven track record across industries" },
        { icon: Target, text: "Industrial Sector Expertise", subtext: "Deep experience in manufacturing & supply chain" },
        { icon: Users, text: "50+ Companies Served", subtext: "From $2M to $500M+ revenue businesses" },
    ];

    const techTags = [
        "Published IEEE Researcher",
        "Google Gen AI Certified",
        "Fortune 500 Experience",
        "Pharmaceutical AI Systems",
    ];

    return (
        <section className="bg-secondary py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                {/* Founder Block */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24 transition-opacity duration-700">
                    {/* Left: Image */}
                    <div className="w-full lg:w-[35%] flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                                src={founderImage}
                                alt="Chris Barkhurst, Founder"
                                className="w-[280px] md:w-[400px] h-auto object-cover rounded-lg border-4 border-primary shadow-[0_8px_32px_rgba(255,184,0,0.2)]"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-[65%]">
                        <div className="inline-block bg-primary px-3 py-1.5 rounded text-xs font-bold text-black uppercase tracking-wider mb-6">
                            Who We Are
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Built by Leaders Who've Been in the Trenches
                        </h2>

                        <div className="space-y-6 text-lg text-secondary-foreground leading-relaxed mb-10">
                            <p>
                                I spent years in enterprise consulting watching Fortune 500 companies struggle with the same problem:
                                sales teams drowning in administrative work instead of closing deals.
                            </p>
                            <p>
                                After leading digital transformation projects that generated $47M+ in measurable pipeline,
                                I saw industrial companies facing an even harder challenge—decision-makers are buried in operations,
                                not browsing LinkedIn.
                            </p>
                            <p>
                                That's why we built Spartan Flow. We don't just send emails. We engineer appointment flows that get you
                                in front of plant managers, procurement directors, and supply chain VPs who actually have budget and authority.
                            </p>
                        </div>

                        {/* Credentials Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            {credentials.map((cred, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <cred.icon className="w-10 h-10 text-primary shrink-0" strokeWidth={1.5} />
                                    <div>
                                        <div className="text-white font-semibold text-lg">{cred.text}</div>
                                        <div className="text-sm text-secondary-foreground">{cred.subtext}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-l-4 border-primary pl-4 flex items-center gap-4">
                            <div>
                                <div className="text-primary font-bold text-xl flex items-center gap-2">
                                    Chris Barkhurst
                                    <a
                                        href="https://www.linkedin.com/in/chrisbarkhurst/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/60 hover:text-[#0A66C2] transition-colors"
                                        aria-label="Chris Barkhurst LinkedIn"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                                <div className="text-white/60">Founder & Chief Strategy Officer</div>
                            </div>
                        </div>

                        <a href="#how-it-works" className="inline-block mt-8 text-white border-2 border-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-black transition-all font-semibold">
                            See How We Do It
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-primary/30 my-16" />

                {/* Tech Lead Block */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
                    {/* Photo */}
                    <div className="shrink-0">
                        <img
                            src={techLeadImage}
                            alt="Hari Rajashekar"
                            className="w-[200px] h-[200px] rounded-full object-cover border-2 border-primary shadow-[0_0_20px_rgba(255,184,0,0.15)] grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-block border border-primary text-primary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-2">
                            Technical Lead
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1 flex items-center justify-center md:justify-start gap-2">
                            Hari Rajashekar
                            <a
                                href="https://www.linkedin.com/in/hari-rajashekar-81816818a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/60 hover:text-[#0A66C2] transition-colors"
                                aria-label="Hari Rajashekar LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </h3>
                        <div className="text-white/60 text-sm mb-4">Chief Automation Engineer</div>

                        <p className="text-secondary-foreground leading-relaxed mb-6 max-w-2xl">
                            Hari brings enterprise automation expertise from Accenture and Fortune 500 pharmaceutical clients like Roche.
                            A published IEEE researcher and Google Gen AI certified specialist, he architects the AI-powered systems
                            that make our appointment-setting campaigns consistently outperform industry benchmarks.
                        </p>

                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {techTags.map((tag, i) => (
                                <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
