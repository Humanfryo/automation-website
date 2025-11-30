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

const allProjects: Project[] = [
  {
    id: "voice-agent",
    category: "AUTOMATION",
    title: "AI Voice Agent for Home Services",
    description: "End-to-end AI voice automation for HVAC, landscaping, cleaning, and roofing businesses. Handles customer calls, schedules appointments, and updates CRM records automatically. Processes 100+ calls monthly with 23% pilot conversion from cold outreach to 100+ businesses.",
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
    description: "WCAG 2.2 accessibility-first redesign for Seattle historic preservation nonprofit. Implemented streamlined donation flow, mobile-first responsive design, and structured data markup. Reduced bounce rate by 50% and improved SEO rankings by 30%.",
    primaryMetric: "10x Revenue Growth",
    secondaryMetric: "$60 → $600/month donations",
    techStack: ["Figma", "WordPress", "WCAG 2.2", "SEO"],
    image: nonprofitImage,
    cta: "View Case Study"
  },
  {
    id: "roche-dashboard",
    category: "AUTOMATION",
    title: "Roche Medical Device Monitoring",
    description: "Mission-critical Salesforce dashboard for Roche ($63B pharmaceutical leader) monitoring 100+ remote medical devices across 50+ countries on 6 continents. Provides real-time status monitoring, predictive maintenance alerts, and performance analytics.",
    primaryMetric: "99.8% Uptime",
    secondaryMetric: "50% workflow optimization",
    techStack: ["Salesforce", "VMware", "Agile/Scrum"],
    image: rocheImage,
  },
  {
    id: "veeva-qa",
    category: "AUTOMATION",
    title: "Veeva Vault QA Automation",
    description: "Comprehensive automated testing framework for Veeva Vault's pharmaceutical compliance platform. Covers 300+ test cases serving 10,000+ end users across Fortune 500 pharma clients. Led QA for global deployments with zero critical defects in production.",
    primaryMetric: "$500K+ Saved",
    secondaryMetric: "80hr → 40hr per test cycle",
    techStack: ["Veeva Vault", "Java", "Agile/Scrum", "QA"],
    image: veevaImage,
  },
  {
    id: "nutriscan",
    category: "AI PRODUCT",
    title: "NutriScan Multi-Agent System",
    description: "Google Gen AI Capstone project using 4 specialized AI agents: Parser (OCR/NLP extraction), Health Analyzer (nutritional scoring), Personalizer (user health profiles), and Recommender (1-5 ratings with consumption advice). Outperforms single-prompt systems significantly.",
    primaryMetric: "95% Accuracy",
    secondaryMetric: "vs 70% single-prompt systems",
    techStack: ["Python", "Gemini ADK", "Multi-Agent AI", "OCR"],
    image: nutriscanImage,
    cta: "Watch Demo"
  },
  {
    id: "research-obd",
    category: "RESEARCH",
    title: "On-Board Diagnostics & Driver Profiling",
    description: "Peer-reviewed IEEE research on ML algorithms analyzing OBD port data to assess driver safety profiles and optimize fuel economy. Addresses consumer protection by distinguishing genuine mechanical problems from false error codes.",
    primaryMetric: "15+ Citations",
    secondaryMetric: "500+ views on IEEE Xplore",
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
