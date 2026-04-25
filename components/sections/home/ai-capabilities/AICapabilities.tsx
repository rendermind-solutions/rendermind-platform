import { Captions, SearchCode, Sparkles } from "lucide-react";

const capabilities = [
	{
		icon: <Sparkles className="text-primary" size={20} />,
		title: "Generate content automatically",
		description:
			"Create first drafts from prompts, campaign data, or structured inputs so users stop starting from a blank canvas every time.",
		value: "Reduce production time for repeatable image and video workflows while increasing output capacity.",
	},
	{
		icon: <Captions className="text-primary" size={20} />,
		title: "Search video by meaning, not by scrubbing timelines",
		description:
			"Use semantic search on transcripts to find the exact moment, quote, or topic inside long-form video.",
		value: "Make large media libraries easier to navigate, reuse, package, and monetize.",
	},
	{
		icon: <SearchCode className="text-primary" size={20} />,
		title: "Turn AI into a usable product workflow",
		description:
			"Connect prompts, templates, editing, and rendering so users can generate, review, and export in one flow inside your app.",
		value: "Ship AI features that improve activation, retention, and perceived product value instead of becoming a side experiment.",
	},
];

export default function AICapabilities() {
	return (
		<section className="border-y border-border/50 bg-[#0d1117]/60 px-6 py-24" id="ai-capabilities">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
					<div className="lg:sticky lg:top-24">
						<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">AI Capabilities</p>
						<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
							AI is only valuable when it upgrades the workflow customers are paying for.
						</h2>
						<p className="mt-6 text-xl leading-relaxed text-muted-foreground">
							The point is not to say you added AI. The point is to help customers create faster, find the right media
							faster, and complete more work inside your product without adding operational complexity for your team.
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
