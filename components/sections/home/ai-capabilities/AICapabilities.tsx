import { Captions, SearchCode, Sparkles } from "lucide-react";

const capabilities = [
  {
    icon: <Sparkles className="text-primary" size={20} />,
    title: "Generate first drafts from prompts or structured inputs",
    description:
      "Use prompts, campaign data, product data, or scripts to populate templates and create the first version of an asset faster.",
    value: "Useful when AI is part of a broader review and rendering workflow, not a standalone gimmick.",
  },
  {
    icon: <Captions className="text-primary" size={20} />,
    title: "Transcribe videos and generate multilingual captions",
    description:
      "Add transcript and caption workflows to video products so teams can review, publish, and repurpose content more efficiently.",
    value: "Works well as part of clip generation, publishing, and localization workflows.",
  },
  {
    icon: <SearchCode className="text-primary" size={20} />,
    title: "Prototype semantic search and AI-assisted review flows",
    description:
      "Connect transcripts, vector search, prompts, templates, review states, and rendering when you want AI to support a real media workflow.",
    value: "Best positioned today as a custom AI extension built on top of the core editor and rendering modules.",
  },
];

export default function AICapabilities() {
  return (
    <section className="rm-section rm-section-glow border-y border-border/60" id="ai-capabilities">
      <div className="rm-container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="rm-eyebrow">05 / AI-ready Workflows</p>
            <h2 className="rm-heading">AI-ready workflows that connect prompts, media, and rendering.</h2>
            <p className="rm-lead mt-6">
              The value is not adding an AI label. The value is connecting AI to real media workflows: generating
              first drafts, filling templates, transcribing videos, searching transcripts, and moving from prompt to review to render.
            </p>
          </div>

          <div className="grid gap-5">
            {capabilities.map((item) => (
              <div key={item.title} className="rm-card rm-card-hover">
                <div className="rm-icon mb-5">{item.icon}</div>
                <h3 className="text-2xl font-heading font-bold leading-tight md:text-3xl">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[17px]">{item.description}</p>
                <p className="mt-5 rounded-lg border border-border/60 bg-background/60 p-4 text-base leading-relaxed text-foreground/90">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
