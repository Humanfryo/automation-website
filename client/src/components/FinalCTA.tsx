import { ArrowRight } from "lucide-react";
import BookCallButton from "./BookCallButton";

interface FinalCTAProps {
    onOpenLeadMagnet?: () => void;
}

export default function FinalCTA({ onOpenLeadMagnet }: FinalCTAProps) {
    return (
        <section className="bg-primary-500 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight">
                    Ready to Fill Your Pipeline with Qualified Meetings?
                </h2>

                <p className="text-primary-100 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                    Join B2B companies that book 8-12 qualified meetings per month — without hiring another salesperson.
                </p>

                <div className="mb-6">
                    <BookCallButton className="bg-white text-primary-500 font-semibold text-base px-8 py-4 rounded-lg hover:bg-gray-50 transition-all shadow-md inline-flex items-center gap-2">
                        Book Your Free Strategy Call <ArrowRight className="w-4 h-4" />
                    </BookCallButton>
                </div>

                <p className="text-primary-200 text-sm">
                    No commitment. No pressure. Just a 30-minute conversation about your pipeline.
                </p>

                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-6 text-xs text-primary-200">
                    <span>60-day guarantee</span>
                    <span className="opacity-50">|</span>
                    <span>No long-term contracts</span>
                    <span className="opacity-50">|</span>
                    <span>Setup in days, not months</span>
                </div>
            </div>
        </section>
    );
}
