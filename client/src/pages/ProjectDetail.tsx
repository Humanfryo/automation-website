import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import Footer from "@/components/Footer";

import voiceAgentImage from '@assets/generated_images/ai_voice_agent_visualization.png';
import nonprofitImage from '@assets/generated_images/nonprofit_website_redesign_visual.png';
import nutriscanImage from '@assets/generated_images/nutriscan_ai_health_app_visual.png';
import rocheImage from '@assets/generated_images/roche_medical_device_dashboard.png';
import veevaImage from '@assets/generated_images/veeva_qa_automation_visual.png';
import researchImage from '@assets/generated_images/published_research_obd_visual.png';

interface ProjectData {
  id: string;
  category: string;
  title: string;
  description: string[];
  primaryMetric: string;
  primaryMetricLabel: string;
  secondaryMetrics: { label: string; value: string }[];
  techStack: string[];
  image: string;
  businessImpact: string;
  externalLink?: string;
  externalLinkLabel?: string;
}

const projectsData: Record<string, ProjectData> = {
  "voice-agent": {
    id: "voice-agent",
    category: "AUTOMATION",
    title: "AI Voice Agent for Home Services",
    description: [
      "Built an end-to-end AI voice automation system for home service businesses (HVAC, landscaping, cleaning, roofing) that handles customer calls, schedules appointments, and updates CRM records automatically. The system processes 100+ customer calls monthly, eliminating manual data entry and dramatically reducing booking friction.",
      "Conducted cold outreach to 100+ small businesses, achieving 23% pilot conversion rate through live product demos. The solution integrates VAPI's voice AI engine with Make.com's workflow automation and Google Calendar API to create a seamless customer experience that converts callers to booked appointments in under 30 seconds.",
      "This project demonstrates expertise in voice AI orchestration, business process automation, and product-market fit validation through direct customer engagement."
    ],
    primaryMetric: "90%",
    primaryMetricLabel: "Time Reduction",
    secondaryMetrics: [
      { label: "Booking Time", value: "5 min → 30 sec" },
      { label: "Pilot Conversion", value: "23%" },
      { label: "Monthly Capacity", value: "100+ calls" }
    ],
    techStack: ["VAPI", "Make.com", "Google Calendar API", "CRM Integrations"],
    image: voiceAgentImage,
    businessImpact: "This automation saves home service businesses 15+ hours per week in administrative work, allowing them to focus on service delivery instead of phone tag. The 90% reduction in booking time directly improves customer satisfaction and conversion rates."
  },
  "nonprofit-redesign": {
    id: "nonprofit-redesign",
    category: "AUTOMATION",
    title: "Nonprofit Website Redesign",
    description: [
      "Redesigned a Seattle-based historic preservation nonprofit's website with focus on WCAG 2.2 accessibility compliance and conversion optimization. The previous site had a confusing donation flow, poor mobile experience, and low search visibility, resulting in only $60/month in donations and 40 daily visitors.",
      "Through comprehensive accessibility audits, user flow optimization, and SEO improvements, transformed the digital presence into a high-performing fundraising platform. Implemented streamlined donation process, mobile-first responsive design, and structured data markup for improved search rankings.",
      "Within the first month post-launch, donations increased from $60/month to $600/month (10x growth) while daily traffic surged from 40 to 800 visitors (20x increase). The redesign also reduced bounce rate by 50%, indicating significantly improved user engagement."
    ],
    primaryMetric: "10x",
    primaryMetricLabel: "Revenue Growth",
    secondaryMetrics: [
      { label: "Donations", value: "$60 → $600/mo" },
      { label: "Traffic Increase", value: "20x" },
      { label: "Bounce Rate", value: "-50%" }
    ],
    techStack: ["Figma", "WordPress", "WCAG 2.2", "SEO Optimization"],
    image: nonprofitImage,
    businessImpact: "Proves that accessibility isn't just compliance—it's a growth driver. By making the site easier to use for everyone (including people with disabilities, mobile users, and search engines), we unlocked 10x revenue growth."
  },
  "nutriscan": {
    id: "nutriscan",
    category: "AI PRODUCT",
    title: "NutriScan Multi-Agent System",
    description: [
      "Developed as the capstone project for Google's Gen AI Intensive Course, NutriScan is a mobile health application that uses a multi-agent AI architecture to analyze food product labels and generate personalized health recommendations. Users simply scan a product's ingredient list, and the system translates complex chemical names into easy-to-understand health insights tailored to their body type and medical conditions.",
      "The system employs four specialized AI agents working collaboratively: (1) The Parser extracts ingredients via OCR/NLP, (2) The Health Analyzer assigns nutritional scores based on scientific research, (3) The Personalizer adjusts recommendations for user-specific health profiles, and (4) The Recommender generates final ratings (1-5 scale) with consumption frequency advice.",
      "This multi-agent approach achieved 95% accuracy and consistency in health recommendations, compared to only 70% for single-prompt AI systems—demonstrating the power of specialized agent orchestration over monolithic AI models."
    ],
    primaryMetric: "95%",
    primaryMetricLabel: "Accuracy",
    secondaryMetrics: [
      { label: "vs Single-Prompt", value: "70% accuracy" },
      { label: "AI Agents", value: "4 specialized" },
      { label: "Processing", value: "Real-time OCR" }
    ],
    techStack: ["Python", "Gemini ADK", "Multi-Agent AI", "OCR/NLP"],
    image: nutriscanImage,
    businessImpact: "Demonstrates advanced AI capabilities beyond simple prompt engineering—shows understanding of agent-based systems, task decomposition, and how to architect reliable AI products that outperform naive implementations."
  },
  "roche-dashboard": {
    id: "roche-dashboard",
    category: "AUTOMATION",
    title: "Roche Medical Device Monitoring",
    description: [
      "Designed and maintained a mission-critical Salesforce dashboard for Roche (global pharmaceutical leader, $63B revenue) that monitors 100+ remote medical devices deployed across 50+ countries on 6 continents. The system provides real-time status monitoring, predictive maintenance alerts, and performance analytics to ensure 99.8% uptime for devices supporting critical healthcare operations.",
      "Optimized workflow processes for the global equipment monitoring network, reducing manual dashboard update time by 50% and improving real-time status visibility for stakeholders across multiple time zones. Conducted rigorous system testing to ensure production environment reliability and seamless data flow.",
      "This project required working with international development teams using Agile/Scrum methodology, presenting technical findings to 30+ stakeholder groups, and maintaining compliance with healthcare industry regulations for data security and reliability."
    ],
    primaryMetric: "99.8%",
    primaryMetricLabel: "System Uptime",
    secondaryMetrics: [
      { label: "Workflow Optimization", value: "50%" },
      { label: "Countries", value: "50+" },
      { label: "Devices Monitored", value: "100+" }
    ],
    techStack: ["Salesforce", "VMware", "Agile/Scrum"],
    image: rocheImage,
    businessImpact: "Preventing medical device downtime in healthcare settings is critical—equipment failures can impact patient care. This monitoring system provides early warning for issues, enabling proactive maintenance and ensuring continuous availability of life-supporting technology."
  },
  "veeva-qa": {
    id: "veeva-qa",
    category: "AUTOMATION",
    title: "Veeva Vault QA Automation",
    description: [
      "Architected a comprehensive automated testing framework for Veeva Vault's pharmaceutical compliance platform, covering 300+ test cases that identify critical bugs before they reach production. The system serves 10,000+ end users across Fortune 500 pharmaceutical clients, where compliance failures can result in massive regulatory penalties and operational shutdowns.",
      "Reduced regression testing workflows by 50%, cutting bi-weekly testing cycles from 80 hours to 40 hours while maintaining 100% test coverage. Led quality assurance for global deployments, presenting critical findings to 30+ stakeholder teams across 5 countries in daily Scrum meetings, ensuring zero critical defects reached production.",
      "This automation framework prevented potential $500K+ in regulatory penalties by catching compliance violations early in the development cycle—demonstrating how quality assurance automation directly protects business value in heavily regulated industries."
    ],
    primaryMetric: "$500K+",
    primaryMetricLabel: "Saved",
    secondaryMetrics: [
      { label: "Testing Time", value: "80hr → 40hr" },
      { label: "Test Cases", value: "300+" },
      { label: "Critical Defects", value: "Zero in prod" }
    ],
    techStack: ["Veeva Vault", "Java", "Agile/Scrum", "QA Automation"],
    image: veevaImage,
    businessImpact: "In pharmaceutical industries, regulatory compliance isn't optional—it's survival. Automated testing ensures that every deployment meets strict FDA and international standards, protecting both patient safety and company finances."
  },
  "research-obd": {
    id: "research-obd",
    category: "RESEARCH",
    title: "On-Board Diagnostics & Driver Profiling",
    description: [
      "Published peer-reviewed research in IEEE Xplore Digital Library exploring machine learning applications for automotive safety and consumer protection. Developed ML algorithms that analyze driving patterns through OBD (On-Board Diagnostics) port data to assess driver safety profiles and optimize fuel economy.",
      "The research addresses a critical consumer problem: preventing unnecessary vehicle repairs by identifying real issues before service appointments. By analyzing real-time OBD data, the system can distinguish between genuine mechanical problems and false error codes, protecting consumers from overcharging and unnecessary repairs.",
      "This work has generated 15+ academic citations and 500+ views on IEEE Xplore, demonstrating its contribution to the automotive AI research community. Published in both IEEE (6 citations) and IRJET (9 citations) with 17 supporting references."
    ],
    primaryMetric: "15+",
    primaryMetricLabel: "Citations",
    secondaryMetrics: [
      { label: "IEEE Views", value: "500+" },
      { label: "Publications", value: "IEEE & IRJET" },
      { label: "References", value: "17" }
    ],
    techStack: ["Machine Learning", "OBD Analysis", "Python", "Data Science"],
    image: researchImage,
    businessImpact: "Academic research that bridges theory and practical application—demonstrating ability to conduct rigorous scientific inquiry while addressing real-world consumer protection challenges in the automotive industry.",
    externalLink: "https://ieeexplore.ieee.org/document/9277449",
    externalLinkLabel: "Read on IEEE Xplore"
  }
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <main className="min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button variant="outline" className="rounded-none">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/projects">
            <Button 
              variant="ghost" 
              className="mb-8 text-muted-foreground hover:text-foreground rounded-none px-0"
              data-testid="back-to-projects"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="font-mono text-sm uppercase tracking-wider">All Projects</span>
            </Button>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-wider font-mono px-3 py-1.5">
              {project.category}
            </span>
          </div>

          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6"
            data-testid="project-title"
          >
            {project.title}
          </h1>

          <div className="w-24 h-[2px] bg-primary mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="aspect-video w-full border border-border overflow-hidden mb-8">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              {project.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-border">
              <h3 className="text-lg font-heading font-bold mb-4">Business Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.businessImpact}
              </p>
            </div>

            {project.externalLink && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10"
              >
                <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="gradient-primary rounded-none font-mono uppercase tracking-wider"
                    data-testid="external-link"
                  >
                    {project.externalLinkLabel}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="border border-border bg-card p-6 corner-brackets">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono block mb-2">
                {project.primaryMetricLabel}
              </span>
              <span className="text-5xl font-mono font-bold text-primary tracking-tight">
                {project.primaryMetric}
              </span>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="text-xs uppercase tracking-wider font-mono text-muted-foreground mb-4">
                Key Metrics
              </h3>
              <div className="space-y-4">
                {project.secondaryMetrics.map((metric) => (
                  <div key={metric.label} className="flex justify-between items-baseline">
                    <span className="text-sm text-muted-foreground">{metric.label}</span>
                    <span className="font-mono text-primary">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border bg-card p-6">
              <h3 className="text-xs uppercase tracking-wider font-mono text-muted-foreground mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="text-[10px] uppercase tracking-wider px-3 py-1.5 border border-border text-muted-foreground font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
