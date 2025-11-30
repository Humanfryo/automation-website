import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <a 
        href="#featured-work" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <Hero />
      <FeaturedWork />
      <AboutSection />
      <div className="max-w-[1400px] mx-auto px-4">
        <Footer />
      </div>
    </main>
  );
}
