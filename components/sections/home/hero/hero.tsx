import { Button } from "@/components/ui/button";
import { ArrowRight, Boxes, Code2, Sparkles } from "lucide-react";

const highlights = [
	{
		title: "Ship faster",
		description: "Launch creation workflows without spending a quarter on editor and render infrastructure.",
	},
	{
		title: "Stay modular",
		description: "Embed the editor, use the API, or start with templates and add more later.",
	},
	{
		title: "Keep control",
		description: "Bring your own auth, data model, and product logic. Rendermind handles the media stack.",
	},
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
						<span>For SaaS, AI products, marketing platforms, and agencies</span>
					</div>

					<h1 className="mb-8 text-5xl font-heading font-bold leading-[1.02] tracking-tighter md:text-7xl">
						Add Canva and CapCut-style editing to your product in{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-cyan-300">
							weeks, not months.
						</span>
					</h1>

					<p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
						Rendermind gives your team an embeddable editor, a rendering API, and a template automation system
						so you can launch image and video workflows without building the media stack from scratch.
					</p>

					<div className="mt-10 flex flex-col gap-4 sm:flex-row">
						<Button asChild size="lg" className="h-14 px-8 text-base font-bold group">
							<a href="#contact">
								Book a demo
								<ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
							</a>
						</Button>
						<Button asChild size="lg" variant="secondary" className="h-14 border border-border/70 px-8 text-base">
							<a href="#contact">Get early access</a>
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
							<p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">API + SDK Ready</p>
							<h2 className="mt-2 text-2xl font-heading font-bold">Built to fit inside an existing product</h2>
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
							<code>{`import { Editor, renderJob } from "@rendermind/sdk";

<Editor
  projectId="campaign-studio"
  modules={["canvas", "timeline", "templates"]}
  assets={brandAssets}
/>

await renderJob({
  templateId: "launch-video",
  variables: campaignData,
  output: ["mp4", "png"],
});`}</code>
						</pre>
					</div>

					<div className="mt-6 grid gap-3 sm:grid-cols-3">
						<div className="border border-border/60 bg-background/70 p-4">
							<Code2 className="mb-3 text-primary" size={18} />
							<p className="text-sm font-semibold">Composable SDK</p>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">Embed the whole editor or only the modules your product needs.</p>
						</div>
						<div className="border border-border/60 bg-background/70 p-4">
							<Boxes className="mb-3 text-primary" size={18} />
							<p className="text-sm font-semibold">Modular architecture</p>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">Keep your app shell, billing, permissions, and business logic in place.</p>
						</div>
						<div className="border border-border/60 bg-background/70 p-4">
							<Sparkles className="mb-3 text-primary" size={18} />
							<p className="text-sm font-semibold">AI-ready workflows</p>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">Connect prompts, templates, search, and rendering without bolting on separate tools.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
