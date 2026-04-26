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
		<section className="relative overflow-hidden px-6 pt-28 pb-24">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,var(--color-primary)_0%,transparent_42%)] opacity-15 pointer-events-none" />
			<div className="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />

			<div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
				<div>
					<div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-mono text-sm text-primary mb-8">
						<Sparkles size={14} />
						<span>Embedded media workflows for AI video, SaaS, and marketing teams.</span>
					</div>

					<h1 className="mb-8 text-5xl font-heading font-bold leading-[1.02] tracking-tighter md:text-7xl">
						Integrate custom image and video workflows without building the media stack from scratch.
						{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-cyan-300">
							Built around reusable SDKs and custom integration.
						</span>
					</h1>

					<p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
						Rendermind combines reusable SDKs with custom engineering so your team can launch editors, render
						pipelines, captions, templates, and AI-ready workflows inside the product you already have.
					</p>

					<div className="mt-10 flex flex-col gap-4 sm:flex-row">
						<Button asChild size="lg" className="h-14 px-8 text-base font-bold group">
							<a href="#contact">
								Book a technical discovery call
								<ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
							</a>
						</Button>
						<Button asChild size="lg" variant="secondary" className="h-14 border border-border/70 px-8 text-base">
							<a href="#modules">See available modules</a>
						</Button>
					</div>

					<div className="mt-10 grid gap-3 sm:grid-cols-3">
						{highlights.map((item) => (
							<div key={item.title} className="border border-border/60 bg-card/40 p-4 backdrop-blur-sm">
								<p className="text-sm font-semibold text-foreground">{item.title}</p>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
							</div>
						))}
					</div>
				</div>

				<div className="border border-border/70 bg-card/70 p-6 shadow-2xl backdrop-blur-sm">
					<div className="flex items-center justify-between border-b border-border/60 pb-4">
						<div>
							<p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Reusable Modules + Custom Integration</p>
							<h2 className="mt-2 text-2xl font-heading font-bold">Built around your existing product, not around a generic SaaS box</h2>
						</div>
						<div className="hidden h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10 text-primary md:flex">
							<Boxes size={20} />
						</div>
					</div>

					<div className="mt-6 overflow-hidden rounded-sm border border-border bg-[#0B0E14]">
						<div className="flex items-center gap-2 border-b border-border/80 px-4 py-3">
							<div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
							<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
							<div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
							<span className="ml-2 font-mono text-xs text-muted-foreground">product-integration.ts</span>
						</div>
						<pre className="overflow-x-auto px-4 py-5 text-sm text-cyan-300">
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

					<div className="mt-6 grid gap-3 sm:grid-cols-3">
						<div className="border border-border/60 bg-background/70 p-4">
							<Braces className="mb-3 text-primary" size={18} />
							<p className="text-sm font-semibold">Embeddable SDKs</p>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">Graphic and video editors can be adapted to specific product flows instead of forcing a one-size-fits-all UI.</p>
						</div>
						<div className="border border-border/60 bg-background/70 p-4">
							<Boxes className="mb-3 text-primary" size={18} />
							<p className="text-sm font-semibold">Module-based implementation</p>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">Start with the editor, renderer, captions, or search workflow you actually need first.</p>
						</div>
						<div className="border border-border/60 bg-background/70 p-4">
							<Clapperboard className="mb-3 text-primary" size={18} />
							<p className="text-sm font-semibold">Custom integration work</p>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">Rendermind adapts the modules to your templates, data model, rendering requirements, and launch constraints.</p>
						</div>
					</div>

					<div className="mt-6 flex flex-wrap gap-2">
						{badges.map((badge) => (
							<span key={badge} className="border border-border/60 bg-background/70 px-3 py-2 text-xs font-mono text-muted-foreground">
								{badge}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
