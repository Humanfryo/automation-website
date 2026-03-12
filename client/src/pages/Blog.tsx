import React from 'react';
import { FileText, Download, ArrowRight } from 'lucide-react';

const resources = [
  {
    title: "LinkedIn Content Engine — Built in 4 Hours with Claude Code",
    description: "A step-by-step walkthrough of how we built a self-hosted LinkedIn content engine that generates voice-matched posts, creates branded images, and runs for $3/month. No agency. No templates. Just automation.",
    type: "pdf" as const,
    file: "/resources/linkedin-content-engine-walkthrough.pdf",
  },
];

export default function Blog() {
  React.useEffect(() => {
    document.title = "Blog & Resources | Spartan Flow";
  }, []);

  return (
    <main className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent-500 uppercase tracking-widest mb-3">
            Resources
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Blog & Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guides, playbooks, and insights to help you build a predictable B2B sales pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary-500" />
              </div>
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-2">
                {resource.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {resource.description}
              </p>
              {resource.file ? (
                <a
                  href={resource.file}
                  download
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
                  <ArrowRight className="w-4 h-4" />
                  Coming soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
