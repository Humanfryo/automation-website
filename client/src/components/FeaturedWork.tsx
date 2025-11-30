import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProjectCard, { type Project } from "./ProjectCard";

import voiceAgentImage from '@assets/generated_images/ai_voice_agent_visualization.png';
import nonprofitImage from '@assets/generated_images/nonprofit_website_redesign_visual.png';
import nutriscanImage from '@assets/generated_images/nutriscan_ai_health_app_visual.png';

// todo: remove mock functionality - replace with real data
const featuredProjects: Project[] = [
  {
    id: "voice-agent",
    category: "AUTOMATION",
    title: "AI Voice Agent for Home Services",
    description: "AI voice agent automating appointment booking and CRM entry for home service businesses",
    primaryMetric: "90% Time Reduction",
    secondaryMetric: "5 minutes → 30 seconds per booking",
    techStack: ["VAPI", "Make.com", "Google Calendar API", "CRM"],
    image: voiceAgentImage,
    cta: "Watch Demo"
  },
  {
    id: "nonprofit-redesign",
    category: "AUTOMATION",
    title: "Nonprofit Website Redesign",
    description: "Accessibility-first website redesign driving 10x donation growth and 20x traffic increase",
    primaryMetric: "10x Revenue Growth",
    secondaryMetric: "$60/month → $600/month donations",
    techStack: ["Figma", "WordPress", "WCAG 2.2", "SEO"],
    image: nonprofitImage,
    cta: "View Case Study"
  },
  {
    id: "nutriscan",
    category: "AI PRODUCT",
    title: "NutriScan Multi-Agent System",
    description: "Multi-agent AI health app scanning food labels for personalized nutrition recommendations",
    primaryMetric: "95% Accuracy",
    secondaryMetric: "Google Gen AI Capstone Project",
    techStack: ["Python", "Gemini ADK", "Multi-Agent AI", "OCR"],
    image: nutriscanImage,
    cta: "Watch Demo"
  }
];

export default function FeaturedWork() {
  return (
    <section className="py-16 px-4" id="featured-work">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold mb-8"
          data-testid="featured-work-title"
        >
          Featured Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
            <Button variant="outline" size="lg" data-testid="view-all-projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
