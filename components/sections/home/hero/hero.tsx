import { Button } from "@/components/ui/button";
import { ArrowRight, Boxes, Braces, Clapperboard, Sparkles } from "lucide-react";

const highlights = [
  {
    title: "Launch the first workflow faster",
    description: "Start with the image, video, captioning, or template flow that is blocking the roadmap today.",
  },
  {
    title: "Use reusable modules",
    description: "Apply editor, renderer, captioning, and AI-search building blocks without pretending every product needs the same setup.",
  },
  {
    title: "Keep your product in control",
    description: "Your UX, auth, billing, and business logic stay in place while Rendermind integrates the media layer around them.",
  },
];

const badges = [
  "React + TypeScript SDKs",
  "Fabric.js editor core",
  "Remotion video rendering",
  "Node.js render pipelines",
  "AI-ready transcript workflows",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 md:pb-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,var(--color-primary)_0%,transparent_42%)] opacity-15" />
      <div className="pointer-events-none absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-36 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl  gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-4 py-2 font-mono text-xs text-primary shadow-[0_0_40px_rgba(0,245,255,0.08)] md:text-sm">
            <Sparkles size={14} />
            <span>Embedded media workflows for AI video, SaaS, and marketing teams.</span>
          </div>

          <h1 className="mb-8 max-w-5xl text-5xl font-heading font-bold leading-[0.95] tracking-[-0.055em] md:text-6xl lg:text-7xl">
            Integrate custom image and video workflows{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-200 to-primary bg-clip-text text-transparent">
              without building the media stack from scratch.
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:text-2xl">
            Rendermind combines reusable SDKs with custom engineering so your team can launch editors, render
            pipelines, captions, templates, and AI-ready workflows inside the product you already have.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 rounded-lg px-8 text-base font-bold shadow-[0_0_34px_rgba(0,245,255,0.16)] group">
              <a href="#contact">
                Book a technical discovery call
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="h-14 rounded-lg border border-border/80 bg-card/70 px-8 text-base hover:bg-card">
              <a href="#modules">See available modules</a>
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rm-card-compact rm-card-hover">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rm-card relative overflow-hidden p-5 md:p-6">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary/85">Reusable Modules + Custom Integration</p>
              <h2 className="mt-3 text-2xl font-heading font-bold leading-tight md:text-3xl">
                Built around your existing product, not around a generic SaaS box
              </h2>
            </div>
            <div className="hidden h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary md:flex">
              <Boxes size={20} />
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-border/80 bg-[#0B0E14] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="flex items-center gap-2 border-b border-border/80 bg-white/[0.02] px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">product-integration.ts</span>
            </div>
            <pre className="overflow-x-auto px-4 py-5 text-xs leading-relaxed text-cyan-200 md:text-sm">
              <code>{`import { GraphicEditor } from "@rendermind/editor";
import { createImageRenderJob } from "@rendermind/image-renderer";
import { createVideoRenderJob } from "@rendermind/video-renderer";

<GraphicEditor
  templateId="promo-template"
  assets={brandAssets}
  onSave={saveDesign}
/>

await createImageRenderJob({
  templateId: "promo-template",
  variables: campaignData,
  output: ["png", "pdf"],
});

await createVideoRenderJob({
  compositionId: "launch-video",
  variables: campaignData,
  output: "mp4",
});`}</code>
            </pre>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-border/60 bg-background/70 p-4">
              <Braces className="mb-3 text-primary" size={18} />
              <p className="text-sm font-semibold">Embeddable SDKs</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Graphic and video editors can be adapted to specific product flows instead of forcing a one-size-fits-all UI.</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background/70 p-4">
              <Boxes className="mb-3 text-primary" size={18} />
              <p className="text-sm font-semibold">Module-based implementation</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Start with the editor, renderer, captions, or search workflow you actually need first.</p>
            </div>
            <div className="rounded-lg border border-border/60 bg-background/70 p-4">
              <Clapperboard className="mb-3 text-primary" size={18} />
              <p className="text-sm font-semibold">Custom integration work</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Rendermind adapts the modules to your templates, data model, rendering requirements, and launch constraints.</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="rm-badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
