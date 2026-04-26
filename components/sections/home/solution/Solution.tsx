import { Blocks, ImagePlay, Workflow } from "lucide-react";

const pillars = [
  {
    icon: <ImagePlay className="text-primary" size={20} />,
    title: "Embeddable editors",
    description:
      "Graphic and video editor modules can be embedded into React apps and adapted to the product workflow you are building.",
    points: [
      "Graphic editor SDK for templates, text, images, SVGs, and customization flows",
      "Video editor SDK for structured video creation, captions, clips, and timeline-based flows",
      "Integrated into your existing UX instead of replacing it",
    ],
  },
  {
    icon: <Blocks className="text-primary" size={20} />,
    title: "Rendering pipelines",
    description:
      "Use image, PDF, and video rendering modules to generate assets server-side without building the entire rendering layer yourself.",
    points: [
      "Image and PDF rendering from structured templates",
      "Remotion-based video rendering for composition-driven outputs",
      "Template exports, previews, and async render jobs adapted to your stack",
    ],
  },
  {
    icon: <Workflow className="text-primary" size={20} />,
    title: "AI-ready media workflows",
    description:
      "Transcription, captions, semantic transcript search, and prompt-to-template workflows can be added where they make sense.",
    points: [
      "Multilingual transcription and caption generation",
      "Semantic video search as custom AI extension",
      "Prompt, template, review, and render flows built around your product logic",
    ],
  },
];

const integrationNotes = [
  "Start with one workflow instead of the whole stack",
  "Select only the modules your implementation actually needs",
  "Custom integration around your existing product shell, auth, and data model",
];

export default function Solution() {
  return (
    <section className="rm-section" id="solution">
      <div className="rm-container">
        <div className="max-w-3xl">
          <p className="rm-eyebrow">02 / What Rendermind Provides</p>
          <h2 className="rm-heading">Reusable media modules, integrated around your product.</h2>
          <p className="rm-lead mt-6">
            Rendermind is not a generic editor you force into your app. We help you select, adapt, and integrate the
            media modules your workflow actually needs, using production-tested SDKs plus custom engineering.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rm-card rm-card-hover">
              <div className="rm-icon mb-6">{pillar.icon}</div>
              <h3 className="text-3xl font-heading font-bold leading-tight">{pillar.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[17px]">{pillar.description}</p>
              <ul className="mt-6 space-y-3">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_14px_rgba(0,245,255,0.45)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-primary/20 bg-primary/[0.055] p-6 shadow-[0_0_60px_rgba(0,245,255,0.05)] md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary/85">Implementation model</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {integrationNotes.map((note) => (
              <p key={note} className="rounded-lg border border-primary/10 bg-background/55 p-4 text-base leading-relaxed text-foreground">
                {note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
