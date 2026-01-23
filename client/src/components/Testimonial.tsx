import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, PlayCircle } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

// Custom CSS for Swiper pagination bullets to match valid CSS
const swiperStyles = `
  .swiper-pagination-bullet {
    background: #737373;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #FDB72C;
  }
`;

const metrics = [
    { value: "2.4M+", label: "Leads Generated" },
    { value: "500+", label: "Companies Scaled" },
    { value: "127%", label: "Avg ROI Increase" },
    { value: "4.9★", label: "Customer Rating" },
];

const testimonials = [
    {
        name: "Sarah Chen",
        role: "VP of Operations",
        company: "TechFlow",
        quote: "Spartan Flow completely transformed our outbound process. We went from manual chaos to a fully automated machine that prints meetings.",
        image: null // Placeholder
    },
    {
        name: "Michael Ross",
        role: "CRO",
        company: "GrowthWave",
        quote: "The ROI was immediate. The AI agents handle the repetitive work so my team can focus on closing. It's not just a tool, it's a multiplier.",
        image: null
    },
    {
        name: "David Park",
        role: "Founder",
        company: "ScaleUp Labs",
        quote: "I was skeptical about AI automation, but the accuracy is insane. 99.8% is not a marketing number, it's reality. Highly recommended.",
        image: null
    },
    {
        name: "Elena Rodriguez",
        role: "Director of Sales",
        company: "Veritas",
        quote: "Setup was surprisingly fast. We were live in 3 days and saw 10x efficiency gains in our first month. The support team is also top tier.",
        image: null
    }
];

const Testimonial = () => {
    return (
        <section className="py-24 bg-black relative">
            <style>{swiperStyles}</style>
            <div className="container mx-auto px-4">

                {/* Large Metrics */}
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-24 border-b border-gray-dark/50 pb-16">
                    {metrics.map((m, i) => (
                        <div key={i} className="text-center">
                            <div className="text-5xl md:text-7xl font-bold text-yellow mb-2 tracking-tight">{m.value}</div>
                            <div className="text-sm md:text-base text-gray-lightest uppercase tracking-widest font-semibold">{m.label}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonials Carousel */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-rich-black border border-gray-dark p-8 rounded-lg h-full flex flex-col hover:border-yellow/50 transition-colors">
                                <div className="flex gap-1 mb-6 text-yellow">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FDB72C" />)}
                                </div>
                                <blockquote className="text-lg text-white font-medium italic mb-8 leading-relaxed">
                                    "{t.quote}"
                                </blockquote>
                                <div className="mt-auto flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border border-yellow/50 bg-gray-dark flex items-center justify-center">
                                        <span className="text-white font-bold">{t.name[0]}</span>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">{t.name}</div>
                                        <div className="text-gray-lightest text-xs uppercase tracking-wide">{t.role}, {t.company}</div>
                                    </div>
                                    {/* Company Logo Placeholder */}
                                    <div className="ml-auto w-8 h-8 rounded bg-gray-dark/50 opacity-50"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
