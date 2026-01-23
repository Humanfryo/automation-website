import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote, Building2 } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperStyles = `
  .swiper-pagination-bullet {
    background: #333;
    opacity: 1;
    width: 10px;
    height: 10px;
  }
  .swiper-pagination-bullet-active {
    background: #FFB800;
    width: 24px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
`;

const metrics = [
    { value: "2.4M+", label: "Leads Generated" },
    { value: "$1.2B", label: "Pipeline Value" },
    { value: "4.9/5", label: "G2 Crowd Rating" },
];

const testimonials = [
    {
        name: "Sarah Chen",
        role: "VP of Operations",
        company: "TechFlow",
        quote: "Spartan Flow completely transformed our outbound process. We went from manual chaos to a fully automated machine that prints meetings.",
    },
    {
        name: "Michael Ross",
        role: "CRO",
        company: "GrowthWave",
        quote: "The ROI was immediate. The AI agents handle the repetitive work so my team can focus on closing. It's not just a tool, it's a multiplier.",
    },
    {
        name: "David Park",
        role: "Founder",
        company: "ScaleUp Labs",
        quote: "I was skeptical about AI automation, but the accuracy is insane. 99.8% is not a marketing number, it's reality. Highly recommended.",
    },
    {
        name: "Elena Rodriguez",
        role: "Director of Sales",
        company: "Veritas",
        quote: "Setup was surprisingly fast. We were live in 3 days and saw 10x efficiency gains in our first month. The support team is also top tier.",
    }
];

const Testimonial = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <style>{swiperStyles}</style>

            {/* Trusted By Strip */}
            <div className="container mx-auto px-4 mb-32">
                <p className="text-center text-[#A0A0A0] text-sm font-bold uppercase tracking-widest mb-10">Trusted by Fortune 500 Companies</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                        <div key={i} className="h-8 md:h-10 bg-[#333] w-32 md:w-40 rounded animate-pulse"></div> // Placeholder for logos
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* Vertical Metrics (Left Side) */}
                <div className="lg:col-span-4 flex flex-col gap-12 border-l border-gray-dark pl-8">
                    {metrics.map((m, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="text-[72px] font-bold text-yellow leading-none mb-2 tracking-tighter shadow-yellow-glow">{m.value}</div>
                            <div className="text-xl text-white font-medium">{m.label}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonials Carousel (Right Side) */}
                <div className="lg:col-span-8 w-full overflow-hidden">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={40}
                        slidesPerView={1}
                        autoplay={{ delay: 6000 }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 1.5 },
                        }}
                        className="pb-20 !overflow-visible"
                    >
                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-[#1A1A1A] border border-gray-dark p-10 rounded-lg h-full flex flex-col hover:border-yellow transition-all duration-300 shadow-xl relative group">
                                    <Quote className="absolute top-8 right-8 text-[#333] group-hover:text-yellow/20 transition-colors" size={48} />

                                    <div className="flex gap-1 mb-8">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FFB800" className="text-yellow" />)}
                                    </div>

                                    <blockquote className="text-xl text-white font-medium italic mb-10 leading-relaxed z-10">
                                        "{t.quote}"
                                    </blockquote>

                                    <div className="mt-auto flex items-center gap-4 pt-8 border-t border-gray-dark/50">
                                        <div className="w-14 h-14 rounded-full bg-gray-dark flex items-center justify-center text-xl font-bold text-white border border-gray-500">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-lg">{t.name}</div>
                                            <div className="text-[#A0A0A0] text-sm uppercase tracking-wide">{t.role}, {t.company}</div>
                                        </div>
                                        <Building2 className="ml-auto text-gray-medium" size={24} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
