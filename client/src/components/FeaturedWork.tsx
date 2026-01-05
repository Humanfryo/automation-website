import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProjectCard, { type Project } from "./ProjectCard";
import SectionDivider from "./SectionDivider";

import voiceAgentImage from '@assets/generated_images/ai_voice_agent_yellow_waves.png';
import nonprofitImage from '@assets/generated_images/nonprofit_website_redesign_mockup.png';
import nutriscanImage from '@assets/generated_images/nutriscan_multi-agent_ai_network.png';

const featuredProjects: Project[] = [
  {
    id: "voice-agent",
    category: "AUTOMATION",
    title: "AI Voice Agent for Home Services",
    description: "End-to-end AI voice automation handling customer calls, scheduling appointments, and updating CRM records automatically. Processes 100+ calls monthly with 23% pilot conversion rate.",
    primaryMetric: "90% Time Reduction",
    secondaryMetric: "5 min → 30 sec per booking",
    techStack: ["VAPI", "Make.com", "Google Calendar API", "CRM"],
    image: voiceAgentImage,
    cta: "Watch Demo"
  },
  {
    id: "nonprofit-redesign",
    category: "AUTOMATION",
    title: "Nonprofit Website Redesign",
    description: "WCAG 2.2 accessibility-first redesign for Seattle historic preservation nonprofit. Streamlined donation flow, mobile-first design, and SEO optimization drove massive growth.",
    primaryMetric: "10x Revenue Growth",
    secondaryMetric: "$60 → $600/month donations",
    techStack: ["Figma", "WordPress", "WCAG 2.2", "SEO"],
    image: nonprofitImage,
    cta: "View Case Study"
  },
  {
    id: "nutriscan",
    category: "AI PRODUCT",
    title: "NutriScan Multi-Agent System",
    description: "Google Gen AI Capstone project using 4 specialized AI agents to analyze food labels and generate personalized health recommendations based on user profiles.",
    primaryMetric: "95% Accuracy",
    secondaryMetric: "vs 70% single-prompt systems",
    techStack: ["Python", "Gemini ADK", "Multi-Agent AI", "OCR"],
    image: nutriscanImage,
    cta: "Watch Demo"
  }
];

export default function FeaturedWork() {
  return (
    <section className="py-20 px-4" id="featured-work">
      <div className="max-w-[1400px] mx-auto">
        <SectionDivider className="mb-12" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl font-heading font-bold tracking-tight"
            data-testid="featured-work-title"
          >
            Featured Work
          </h2>
          <div className="w-16 h-[2px] bg-primary mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link href="/projects">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono uppercase tracking-wider"
              data-testid="view-all-projects"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
