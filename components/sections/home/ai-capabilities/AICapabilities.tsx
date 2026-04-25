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
		<section className="border-y border-border/50 bg-[#0d1117]/60 px-6 py-24" id="ai-capabilities">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
					<div className="lg:sticky lg:top-24">
						<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">AI-ready Workflows</p>
						<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
							AI-ready workflows that connect prompts, media, and rendering.
						</h2>
						<p className="mt-6 text-xl leading-relaxed text-muted-foreground">
							The value is not adding an AI label. The value is connecting AI to real media workflows: generating
							first drafts, filling templates, transcribing videos, searching transcripts, and moving from prompt to review to render.
						</p>
					</div>

					<div className="grid gap-6">
						{capabilities.map((item) => (
							<div key={item.title} className="border border-border bg-card/30 p-8">
								<div className="mb-5 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
									{item.icon}
								</div>
								<h3 className="text-3xl font-heading font-bold">{item.title}</h3>
								<p className="mt-4 text-lg leading-relaxed text-muted-foreground">{item.description}</p>
								<p className="mt-5 border-t border-border/60 pt-5 text-base leading-relaxed text-foreground">
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
