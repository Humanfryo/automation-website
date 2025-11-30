import ProjectCard, { type Project } from '../ProjectCard';
import voiceAgentImage from '@assets/generated_images/ai_voice_agent_visualization.png';

const sampleProject: Project = {
  id: "voice-agent",
  category: "AUTOMATION",
  title: "AI Voice Agent for Home Services",
  description: "AI voice agent automating appointment booking and CRM entry for home service businesses",
  primaryMetric: "90% Time Reduction",
  secondaryMetric: "23% Pilot Conversion Rate",
  techStack: ["VAPI", "Make.com", "Google Calendar API", "CRM"],
  image: voiceAgentImage,
  cta: "Watch Demo"
};

export default function ProjectCardExample() {
  return (
    <div className="max-w-sm">
      <ProjectCard project={sampleProject} index={0} />
    </div>
  );
}
