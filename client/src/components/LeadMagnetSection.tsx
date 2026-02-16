import { ArrowRight, BarChart3, Target, ShieldCheck } from "lucide-react";

interface LeadMagnetSectionProps {
    onOpenModal: () => void;
}

export default function LeadMagnetSection({ onOpenModal }: LeadMagnetSectionProps) {
    return (
        <section className="bg-[#0F0F0F] border-y border-[#2A2A2A] py-12 md:py-20 px-4">
            <div className="container mx-auto max-w-[800px] text-center">
                <div className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-[0.2em] mb-3">
                    Free Resource
                </div>

                <h2 className="text-2xl md:text-[32px] font-bold text-white mb-3">
                    Not Ready for a Call? Start Here.
                </h2>

                <p className="text-[#D1D5DB] text-base leading-relaxed max-w-[650px] mx-auto mb-8">
                    Download our $312/Meeting Framework — 9 pages of real campaign data, cost breakdowns, and the exact system we use to fill sales calendars for industrial companies. No fluff. No commitment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8">
                    {/* Card 1 */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 flex flex-col items-center">
                        <BarChart3 className="text-[#F59E0B] w-6 h-6 mb-3" />
                        <div className="text-white text-sm font-bold mb-1">Real Numbers</div>
                        <div className="text-[#9CA3AF] text-[13px]">Actual campaign data from 12+ clients</div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 flex flex-col items-center">
                        <Target className="text-[#F59E0B] w-6 h-6 mb-3" />
                        <div className="text-white text-sm font-bold mb-1">Proven System</div>
                        <div className="text-[#9CA3AF] text-[13px]">The 4-phase engine explained step-by-step</div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 flex flex-col items-center">
                        <ShieldCheck className="text-[#F59E0B] w-6 h-6 mb-3" />
                        <div className="text-white text-sm font-bold mb-1">No Commitment</div>
                        <div className="text-[#9CA3AF] text-[13px]">Use it internally even if we never work together</div>
                    </div>
                </div>

                <button
                    onClick={onOpenModal}
                    className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-[15px] px-8 py-3.5 rounded-md transition-all hover:scale-[1.01] inline-flex items-center gap-2"
                >
                    Get the Free Framework (PDF) <ArrowRight size={16} />
                </button>

                <p className="text-[12px] text-[#6B7280] mt-3">
                    Takes 30 seconds • Instant download • No credit card required
                </p>
            </div>
        </section>
    );
}
