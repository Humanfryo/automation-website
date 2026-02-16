import { useState, useEffect } from "react";
import { X, Check, Download } from "lucide-react";
import BookCallButton from "./BookCallButton";

interface LeadMagnetModalProps {
    isOpen: boolean;
    onClose: () => void;
    source?: string;
}

export default function LeadMagnetModal({ isOpen, onClose, source = "Direct" }: LeadMagnetModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: ""
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        company: false
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate
        const newErrors = {
            name: !formData.name.trim(),
            email: !validateEmail(formData.email),
            company: !formData.company.trim()
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).some(Boolean)) {
            setIsLoading(true);

            // Fire and forget POST request to Google Sheets
            fetch("https://script.google.com/macros/s/AKfycbz3t0S-i_YMnuOyUMpVL8R7CwxVK-NAhY-pi9AlF-tqYiBMfveixrQqQp0g2RgKNdTPVA/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName: formData.name,
                    workEmail: formData.email,
                    companyName: formData.company,
                    source: source
                })
            }).catch(err => console.error("Error sending data:", err));

            // Trigger Download immediately
            const link = document.createElement('a');
            link.href = "https://drive.google.com/uc?export=download&id=136ILIhqFpyeGpS6AI_mvLy5h_rJ8RiuW";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Short delay for UX (loading state)
            setTimeout(() => {
                setIsSuccess(true);
                setIsLoading(false);
            }, 1500);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/75 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-[480px] bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-10 shadow-2xl animate-fade-in-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[#9CA3AF] hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                {!isSuccess ? (
                    <>
                        <div className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-[0.15em] mb-3">
                            Free Framework
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-2">
                            Get the $312/Meeting Framework
                        </h2>

                        <p className="text-[#D1D5DB] text-sm leading-relaxed mb-6">
                            The exact system industrial companies use to book 8-12 qualified meetings per month. Real data. Real campaigns. No fluff.
                        </p>

                        <div className="space-y-1 mb-6">
                            {[
                                "Full cost breakdown: $312/meeting vs. $800+ with SDRs",
                                "Real campaign data from 12+ industrial clients",
                                "The 4-phase outreach engine explained step-by-step",
                                "Qualification framework to guarantee meeting quality"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2 text-[13px] text-[#D1D5DB]">
                                    <Check size={14} className="text-[#F59E0B] mt-0.5 shrink-0" strokeWidth={3} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-3 mb-5">
                                <div>
                                    <label className="block text-xs text-[#9CA3AF] mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Mike Richardson"
                                        className={`w-full bg-[#111111] border ${errors.name ? 'border-red-500' : 'border-[#2A2A2A]'} rounded-md h-11 px-3 text-sm text-white focus:border-[#F59E0B] focus:outline-none transition-colors placeholder:text-white/20`}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    {errors.name && <div className="text-[11px] text-[#EF4444] mt-1">This field is required</div>}
                                </div>
                                <div>
                                    <label className="block text-xs text-[#9CA3AF] mb-1">Work Email</label>
                                    <input
                                        type="email"
                                        placeholder="e.g. mike@company.com"
                                        className={`w-full bg-[#111111] border ${errors.email ? 'border-red-500' : 'border-[#2A2A2A]'} rounded-md h-11 px-3 text-sm text-white focus:border-[#F59E0B] focus:outline-none transition-colors placeholder:text-white/20`}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    {errors.email && <div className="text-[11px] text-[#EF4444] mt-1">Please enter a valid email</div>}
                                </div>
                                <div>
                                    <label className="block text-xs text-[#9CA3AF] mb-1">Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Richardson Industrial Supply"
                                        className={`w-full bg-[#111111] border ${errors.company ? 'border-red-500' : 'border-[#2A2A2A]'} rounded-md h-11 px-3 text-sm text-white focus:border-[#F59E0B] focus:outline-none transition-colors placeholder:text-white/20`}
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    />
                                    {errors.company && <div className="text-[11px] text-[#EF4444] mt-1">This field is required</div>}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full h-12 bg-[#F59E0B] text-black font-bold text-[15px] rounded-md transition-all mb-3 flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#D97706] hover:scale-[1.01]'}`}
                            >
                                {isLoading ? "Sending..." : "Download the Framework →"}
                            </button>

                            <div className="text-center">
                                <p className="text-[11px] text-[#6B7280] mb-2">
                                    We respect your privacy. No spam, ever. Unsubscribe anytime.
                                </p>
                                <p className="text-xs text-[#9CA3AF]">
                                    Downloaded by 500+ industrial companies
                                </p>
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-[#F59E0B]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Download size={32} className="text-[#F59E0B]" />
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-2">
                            Check your downloads!
                        </h2>

                        <p className="text-[#D1D5DB] text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                            Your framework is downloading now. Want to skip ahead and talk strategy?
                        </p>

                        <BookCallButton className="w-full h-12 bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold text-[15px] rounded-md transition-all hover:scale-[1.01] flex items-center justify-center">
                            Book a 14-Min Strategy Call
                        </BookCallButton>
                    </div>
                )}
            </div>
        </div>
    );
}
