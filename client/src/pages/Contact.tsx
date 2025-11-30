import { motion } from "framer-motion";
import CalEmbed from "@/components/CalEmbed";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen py-16 px-4">
      <a 
        href="#contact-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to contact options
      </a>

      <div className="max-w-6xl mx-auto" id="contact-content">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <CalEmbed />
          </div>
          
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Or Send a Message
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>

        <ContactInfo />
      </div>

      <div className="max-w-6xl mx-auto mt-8">
        <Footer />
      </div>
    </main>
  );
}
