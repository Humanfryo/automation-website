import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote, Building2, ShieldCheck, Mail, CalendarCheck } from 'lucide-react';
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
    { value: "8-12", label: "QUALIFIED MEETINGS/MONTH" },
    { value: "$312", label: "COST PER MEETING" },
    { value: "75%+", label: "MEETING SHOW RATE" },
    { value: "60-Day", label: "MONEY-BACK GUARANTEE" },
];

const testimonials = [
    {
        name: "John Martinez",
        role: "VP Sales",
        company: "Industrial Equipment Manufacturer",
        revenue: "$45M Revenue",
        quote: "We went from 2 meetings per month to 12. SpartanFlow handles all the prospecting so my team can focus on closing deals. Worth every penny.",
    },
    {
        name: "Lisa Chen",
        role: "Director of Business Development",
        company: "Precision Parts Manufacturer",
        revenue: "$28M Revenue",
        quote: "The 3-week setup seemed long at first, but once campaigns launched, we had qualified meetings every week. Best outsourcing decision we've made.",
    },
    {
        name: "David Thompson",
        role: "Sales Director",
        company: "Chemical Distribution",
        revenue: "$60M Revenue",
        quote: "We tried hiring SDRs internally but turnover killed us. SpartanFlow delivers consistent meetings month after month without the hiring headaches.",
    }
];

const Testimonial = () => {
    return (
        <section id="results" className="py-24 bg-black relative border-t border-gray-dark">
            <style>{swiperStyles}</style>

            <div className="container mx-auto px-4">

                {/* Large Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-gray-dark/50 pb-16">
                    {metrics.map((m, i) => (
                        <div key={i} className="text-center">
                            <div className="text-5xl md:text-6xl font-bold text-yellow mb-4 tracking-tighter">{m.value}</div>
                            <div className="text-sm text-[#A0A0A0] font-bold uppercase tracking-widest">{m.label}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="max-w-6xl mx-auto">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 7000 }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-20 !overflow-visible"
                    >
                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i} className="h-full">
                                <div className="bg-[#1A1A1A] border border-gray-dark p-8 md:p-10 rounded-lg h-full flex flex-col hover:border-yellow transition-all duration-300 shadow-xl relative group">
                                    <div className="flex gap-1 mb-8">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FFB800" className="text-yellow" />)}
                                    </div>

                                    <blockquote className="text-lg text-white font-medium italic mb-8 leading-relaxed z-10 flex-grow">
                                        "{t.quote}"
                                    </blockquote>

                                    <div className="mt-auto border-t border-gray-dark/50 pt-6">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="w-12 h-12 rounded-full bg-gray-dark flex items-center justify-center text-lg font-bold text-white border border-gray-500">
                                                {t.name[0]}
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">{t.name}</div>
                                                <div className="text-[#A0A0A0] text-xs uppercase tracking-wide font-semibold">{t.role}</div>
                                            </div>
                                        </div>
                                        <div className="text-[#555] text-xs mt-2 pl-16">
                                            {t.company} • {t.revenue}
                                        </div>
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
