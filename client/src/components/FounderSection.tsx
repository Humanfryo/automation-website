import chrisImg from "../assets/founder_chris_barkhurst.jpg";
import hariImg from "../assets/tech_lead_hari.jpg";

export default function FounderSection() {
    const founders = [
        {
            name: "Chris Barkhurst",
            role: "Founder",
            image: chrisImg,
            bio: "After 20+ years leading data and technology teams at enterprise companies, I kept seeing the same problem — B2B sales teams drowning in prospecting instead of closing. I built Spartan Flow to fix that. Our AI-powered system replaces the guesswork with a pipeline engine that actually delivers.",
            badges: [
                "20+ Years Data & AI Leadership",
                "University of Chicago",
                "Fortune 500 Background",
            ],
        },
        {
            name: "Hari Rajashekar",
            role: "Technical Lead",
            image: hariImg,
            bio: "I've spent my career building automation systems that save companies from throwing money at manual processes. At Accenture and Roche, I designed AI workflows that prevented millions in regulatory penalties. At Spartan Flow, I architect the outreach engine — from lead intelligence to personalized email delivery at scale.",
            badges: [
                "Former Accenture & Roche",
                "IEEE Published Researcher",
                "Google Gen AI Certified",
            ],
        },
    ];

    return (
        <section id="about" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest mb-3 block">
                        Meet the Team
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                        Built by People Who've Been in the Trenches
                    </h2>
                    <p className="text-gray-600 text-lg max-w-lg mx-auto">
                        Not career salespeople. Engineers and data leaders who got tired of watching broken pipelines.
                    </p>
                </div>

                {/* Two Profiles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {founders.map((founder, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                            <div className="flex items-center gap-4 mb-5">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-primary-200"
                                />
                                <div>
                                    <h3 className="text-lg font-heading font-bold text-gray-900">
                                        {founder.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm">
                                        {founder.role}, Spartan Flow
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                {founder.bio}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {founder.badges.map((badge, i) => (
                                    <span
                                        key={i}
                                        className="bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full text-xs font-medium"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
