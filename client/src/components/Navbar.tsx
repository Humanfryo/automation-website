import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import BookCallButton from "./BookCallButton";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [location] = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Results", href: "#results" },
        { name: "About", href: "#about" },
    ];

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <a className="flex items-center gap-2 group">
                        <Shield className="w-8 h-8 text-primary fill-primary/10 group-hover:fill-primary/30 transition-colors" />
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                            Spartan Flow
                        </span>
                    </a>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/80 hover:text-primary uppercase tracking-wide transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <BookCallButton className="bg-primary text-black hover:bg-accent font-semibold px-6 py-2.5 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/20" />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/98 z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={handleLinkClick}
                        className="text-2xl font-bold text-white hover:text-primary transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
                <div onClick={handleLinkClick}>
                    <BookCallButton className="bg-primary text-black hover:bg-accent font-bold text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(255,184,0,0.3)]" />
                </div>
            </div>
        </nav>
    );
}
