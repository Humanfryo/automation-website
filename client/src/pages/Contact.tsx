import { motion } from "framer-motion";
import CalEmbed from "@/components/CalEmbed";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <a 
        href="#contact-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground"
      >
        Skip to contact options
      </a>

      <div className="max-w-[1400px] mx-auto relative z-10" id="contact-content">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <CalEmbed />
          </div>
          
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">
                Or Send a Message
              </h2>
              <div className="w-16 h-[2px] bg-primary mb-8" />
              <ContactForm />
            </motion.div>
          </div>
        </div>

        <ContactInfo />
        
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </main>
  );
}
