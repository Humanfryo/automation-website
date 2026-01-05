import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Copy, Check, ChevronDown, ChevronUp, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

interface Workflow {
  id: string;
  name: string;
  description: string;
  category: string;
  tools: string[];
  json: object;
  tutorialUrl?: string;
}

const contentEngineWorkflow = {
  "nodes": [
    {
      "parameters": {
        "content": "## SETUP REQUIRED\n\n1. Double-click the \"Copy Template\" node.\n2. In the \"File ID\" field, select YOUR own Google Slides template file.\n\n(See the template description for the required placeholder tags like {{hook_title}})",
        "height": 257,
        "width": 307,
        "color": 6
      },
      "id": "sticky-note-setup",
      "name": "Sticky Note",
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [500, 80]
    },
    {
      "parameters": {
        "formTitle": "Loom to Carousel Generator",
        "formDescription": "Paste your Loom transcript below to generate a LinkedIn Carousel.",
        "formFields": {
          "values": [
            {
              "fieldLabel": "Video Title (Optional)",
              "placeholder": "e.g. My Automation Tutorial"
            },
            {
              "fieldLabel": "Transcript",
              "fieldType": "textarea",
              "placeholder": "Paste the full text from Loom here...",
              "requiredField": true
            }
          ]
        },
        "options": {}
      },
      "id": "6ac0d6f8-41fe-48da-9a58-63a82a5d23e3",
      "name": "Paste Transcript Here",
      "type": "n8n-nodes-base.formTrigger",
      "typeVersion": 2.2,
      "position": [112, 288],
      "webhookId": "2657b12e-12b6-435d-b65b-8b71afb69d4c"
    },
    {
      "parameters": {
        "resource": "chat",
        "model": "gpt-4o",
        "prompt": {
          "messages": [
            {
              "role": "system",
              "content": "You are an expert ghostwriter for an Automation Specialist named Hari. Your task is to convert a messy video transcript into a structured, high-value LinkedIn Carousel (PDF)."
            },
            {
              "content": "Transcript: 'So basically, a lot of people mess up their receipts. I use this tool called Butler to auto-sort them. It basically looks at the Gmail subject line, if it says Receipt, it labels it Finance. Then I have a script that pushes it to Drive. It saves me like 5 hours a week.'"
            },
            {
              "role": "assistant",
              "content": "{\"hook_title\": \"Stop Manually Sorting Receipts\", \"hook_subtitle\": \"The 2-step system to automate your finance admin forever.\"}"
            },
            {
              "content": "=Transcript: {{ $('Paste Transcript Here').item.json.Transcript }}"
            }
          ]
        },
        "simplifyOutput": false,
        "options": {},
        "requestOptions": {}
      },
      "id": "29b6db17-b45d-4c26-93f6-c48ceab826ba",
      "name": "Generate Content",
      "type": "n8n-nodes-base.openAi",
      "typeVersion": 1,
      "position": [336, 288],
      "alwaysOutputData": true
    },
    {
      "parameters": {
        "operation": "copy",
        "fileId": {
          "__rl": true,
          "value": "",
          "mode": "list",
          "cachedResultName": ""
        },
        "name": "={{ $('Paste Transcript Here').item.json['Video Title (Optional)'] }}",
        "sameFolder": "={{ true }}",
        "driveId": {
          "__rl": true,
          "mode": "list",
          "value": "My Drive"
        },
        "folderId": {
          "__rl": true,
          "mode": "list",
          "value": "root",
          "cachedResultName": "/ (Root folder)"
        },
        "options": {}
      },
      "id": "cf6a61cc-b167-464a-8283-78dddde9b8b7",
      "name": "Copy Template",
      "type": "n8n-nodes-base.googleDrive",
      "typeVersion": 3,
      "position": [560, 288]
    },
    {
      "parameters": {
        "jsCode": "// Get the ID of the newly copied presentation\nconst newPresentationId = items[0].json.id;\n// Prepare batch payload for Google Slides API"
      },
      "id": "77470e03-03c9-4a3d-9c0b-09f90abebfdc",
      "name": "Prepare Batch Payload",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [784, 288]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "=https://slides.googleapis.com/v1/presentations/{{ $json.presentationId }}:batchUpdate",
        "authentication": "predefinedCredentialType",
        "nodeCredentialType": "googleSlidesOAuth2Api",
        "sendBody": true,
        "bodyParameters": {
          "parameters": [
            {
              "name": "requests",
              "value": "={{ $json.requests }}"
            }
          ]
        },
        "options": {}
      },
      "id": "3ac5a7a9-46bb-42f1-ba7c-2c2f583fd96b",
      "name": "Update Slides (Batch)",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.1,
      "position": [992, 288]
    },
    {
      "parameters": {
        "operation": "download",
        "fileId": {
          "__rl": true,
          "value": "={{ $json.presentationId }}",
          "mode": "id"
        },
        "options": {
          "googleFileConversion": {
            "conversion": {
              "slidesToFormat": "application/pdf"
            }
          }
        }
      },
      "id": "764f1956-8229-4155-9985-e0f6681e4b3e",
      "name": "Download PDF",
      "type": "n8n-nodes-base.googleDrive",
      "typeVersion": 3,
      "position": [1216, 288]
    },
    {
      "parameters": {
        "authentication": "oAuth2",
        "select": "channel",
        "channelId": {
          "__rl": true,
          "value": "",
          "mode": "list",
          "cachedResultName": ""
        },
        "text": "Here is your new Carousel PDF!",
        "otherOptions": {}
      },
      "id": "691d4d79-1a41-4cda-a632-aac96576f33c",
      "name": "Send to Slack",
      "type": "n8n-nodes-base.slack",
      "typeVersion": 2,
      "position": [1440, 288]
    }
  ],
  "connections": {
    "Paste Transcript Here": { "main": [[{ "node": "Generate Content", "type": "main", "index": 0 }]] },
    "Generate Content": { "main": [[{ "node": "Copy Template", "type": "main", "index": 0 }]] },
    "Copy Template": { "main": [[{ "node": "Prepare Batch Payload", "type": "main", "index": 0 }]] },
    "Prepare Batch Payload": { "main": [[{ "node": "Update Slides (Batch)", "type": "main", "index": 0 }]] },
    "Update Slides (Batch)": { "main": [[{ "node": "Download PDF", "type": "main", "index": 0 }]] },
    "Download PDF": { "main": [[{ "node": "Send to Slack", "type": "main", "index": 0 }]] }
  },
  "pinData": {}
};

const workflows: Workflow[] = [
  {
    id: "content-engine-linkedin",
    name: "Content Engine - LinkedIn Carousel",
    description: "Transform Loom video transcripts into polished LinkedIn carousel PDFs. Uses OpenAI to structure content, Google Slides for design, and Slack for delivery.",
    category: "Content Creation",
    tools: ["n8n", "OpenAI", "Google Slides", "Google Drive", "Slack"],
    json: contentEngineWorkflow,
    tutorialUrl: "https://www.loom.com/share/03f18d537f3944ab87ff5a1725fd8ee1"
  }
];

function WorkflowCard({ workflow }: { workflow: Workflow }) {
  const [showJson, setShowJson] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const jsonString = JSON.stringify(workflow.json, null, 2);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "Workflow JSON has been copied. Paste it in n8n to import.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try the download option instead.",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${workflow.id}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({
      title: "Download started",
      description: "Import the JSON file into n8n to use this workflow.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-border bg-card overflow-hidden"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-mono text-primary mb-2 block">
              {workflow.category}
            </span>
            <h3 className="text-xl md:text-2xl font-heading font-bold">
              {workflow.name}
            </h3>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          {workflow.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {workflow.tools.map((tool) => (
            <span
              key={tool}
              className="text-[10px] uppercase tracking-wider px-3 py-1.5 border border-border text-muted-foreground font-mono"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <Button
            onClick={handleDownload}
            className="gradient-primary rounded-none font-mono uppercase tracking-wider"
            data-testid={`download-${workflow.id}`}
          >
            <Download className="w-4 h-4 mr-2" />
            Download JSON
          </Button>
          <Button
            onClick={handleCopy}
            variant="outline"
            className="rounded-none font-mono uppercase tracking-wider border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            data-testid={`copy-${workflow.id}`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy JSON
              </>
            )}
          </Button>
          {workflow.tutorialUrl && (
            <Button
              asChild
              variant="outline"
              className="rounded-none font-mono uppercase tracking-wider border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              data-testid={`tutorial-${workflow.id}`}
            >
              <a href={workflow.tutorialUrl} target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4 mr-2" />
                Watch Tutorial
              </a>
            </Button>
          )}
          <Button
            onClick={() => setShowJson(!showJson)}
            variant="ghost"
            className="rounded-none font-mono uppercase tracking-wider text-muted-foreground"
            data-testid={`toggle-json-${workflow.id}`}
          >
            {showJson ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Hide Code
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                View Code
              </>
            )}
          </Button>
        </div>
      </div>

      {showJson && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-border"
        >
          <div className="relative">
            <pre className="p-6 overflow-x-auto text-xs font-mono text-muted-foreground bg-background/50 max-h-[400px] overflow-y-auto">
              {jsonString}
            </pre>
            <Button
              onClick={handleCopy}
              size="sm"
              variant="outline"
              className="absolute top-4 right-4 rounded-none text-xs"
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Workflows() {
  return (
    <main className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-[900px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4">
            Free Workflows
          </h1>
          <div className="w-24 h-[2px] bg-primary mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Production-ready n8n workflows you can import and customize. 
            Download the JSON file or copy the code directly.
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WorkflowCard workflow={workflow} />
            </motion.div>
          ))}
        </div>

        <Footer />
      </div>
    </main>
  );
}
