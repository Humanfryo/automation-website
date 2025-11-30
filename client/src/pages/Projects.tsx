import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import Footer from "@/components/Footer";

import voiceAgentImage from '@assets/generated_images/ai_voice_agent_visualization.png';
import nonprofitImage from '@assets/generated_images/nonprofit_website_redesign_visual.png';
import nutriscanImage from '@assets/generated_images/nutriscan_ai_health_app_visual.png';
import rocheImage from '@assets/generated_images/roche_medical_device_dashboard.png';
import veevaImage from '@assets/generated_images/veeva_qa_automation_visual.png';
import researchImage from '@assets/generated_images/published_research_obd_visual.png';

// todo: remove mock functionality - replace with real data
const allProjects: Project[] = [
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
    id: "roche-dashboard",
    category: "AUTOMATION",
    title: "Roche Medical Device Monitoring",
    description: "Global Salesforce dashboard monitoring 100+ remote medical devices across 50+ countries",
    primaryMetric: "99.8% Uptime",
    secondaryMetric: "6-continent deployment",
    techStack: ["Salesforce", "VMware", "Agile/Scrum"],
    image: rocheImage,
  },
  {
    id: "veeva-qa",
    category: "AUTOMATION",
    title: "Veeva Vault QA Automation",
    description: "300+ automated test cases preventing $500K+ in regulatory penalties for pharma compliance",
    primaryMetric: "$500K+ Saved",
    secondaryMetric: "80hr → 40hr per cycle",
    techStack: ["Veeva Vault", "Java", "Agile/Scrum", "QA"],
    image: veevaImage,
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
  },
  {
    id: "research-obd",
    category: "RESEARCH",
    title: "On-Board Diagnostics & Driver Profiling",
    description: "Published IEEE research on automotive AI for driving pattern analysis and vehicle diagnostics",
    primaryMetric: "15+ Citations",
    secondaryMetric: "IEEE Xplore & IRJET",
    techStack: ["Machine Learning", "OBD Analysis", "Python"],
    image: researchImage,
    cta: "Read Paper",
    link: "https://ieeexplore.ieee.org/document/9277449"
  },
];

type CategoryFilter = "all" | "AUTOMATION" | "AI PRODUCT" | "RESEARCH";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredProjects = activeFilter === "all" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <main className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <a 
        href="#projects-grid" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground"
      >
        Skip to projects
      </a>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-3" data-testid="projects-title">
            All Projects
          </h1>
          <div className="w-16 h-[2px] bg-primary mb-4" />
          <p className="text-muted-foreground font-mono text-sm uppercase tracking-wider">
            Automation · AI Products · Research
          </p>
        </motion.div>

        <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <motion.div
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-border">
            <p className="text-muted-foreground font-mono">No projects found for this filter.</p>
          </div>
        )}
        
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </main>
  );
}
