import { Check } from "lucide-react";

const projects = [
  {
    title: "Canva-like editor for SaaS",
    description: "Add a branded design editor inside your existing product.",
  },
  {
    title: "Template rendering pipeline",
    description: "Generate images, PDFs, or videos from structured templates and business data.",
  },
  {
    title: "Agency internal creative tool",
    description: "Create repeatable workflows for client assets, revisions, captions, and exports.",
  },
  {
    title: "Video captions workflow",
    description: "Add transcription, multilingual captions, review, and rendering to a video product.",
  },
  {
    title: "Lightweight video editor",
    description: "Build a focused editor for a specific video workflow instead of a generic timeline tool.",
  },
  {
    title: "Semantic transcript search",
    description: "Prototype AI search over long-form videos, interviews, webinars, or media libraries.",
  },
];

export default function BestFirstProjects() {
  return (
    <section className="rm-section rm-section-muted" id="best-first-projects">
      <div className="rm-container">
        <div className="max-w-3xl">
          <p className="rm-eyebrow">04 / Best First Projects</p>
          <h2 className="rm-heading">Common ways teams start working with Rendermind.</h2>
          <p className="rm-lead mt-6">
            This section exists to make the engagement easier to buy: most teams do not need every module at once.
            They need one useful workflow implemented well.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="rm-card-compact rm-card-hover flex gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Check size={16} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
