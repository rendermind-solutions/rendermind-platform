import { Blocks, ImagePlay, Workflow } from "lucide-react";

const pillars = [
	{
		icon: <ImagePlay className="text-primary" size={20} />,
		title: "Embeddable Editor",
		description:
			"Add image and video editing inside your product without spending months rebuilding the basics.",
		points: [
			"Canvas and timeline experiences built for paying users, not internal demos",
			"Embed the full editor or only the modules needed for the first launch",
			"Keep your own auth, billing, and product shell",
		],
	},
	{
		icon: <Blocks className="text-primary" size={20} />,
		title: "Rendering API",
		description:
			"Run exports, previews, thumbnails, and background jobs without turning your team into render pipeline operators.",
		points: [
			"API-driven image and video rendering",
			"Built for async jobs, retries, and scale",
			"Reliable output without manual ops in the middle",
		],
	},
	{
		icon: <Workflow className="text-primary" size={20} />,
		title: "Templates + Automation System",
		description:
			"Turn repeatable content production into a system your users, team, or AI workflows can run automatically.",
		points: [
			"Brand-safe templates that reduce repetitive creative work",
			"Bulk generation from forms, data, or prompts",
			"Fewer manual steps between request and finished asset",
		],
	},
];

const integrationNotes = [
	"React-ready SDK for fast product integration",
	"API-first architecture for render jobs and automations",
	"Modular rollout so you can ship one workflow first and expand later",
];

export default function Solution() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24" id="solution">
			<div className="max-w-3xl">
				<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">Solution</p>
				<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
					Buy back months of engineering time with three product modules.
				</h2>
				<p className="mt-6 text-xl leading-relaxed text-muted-foreground">
					Use the full stack or start with the module blocking revenue right now. Rendermind fits inside an existing
					app so your team can move faster without a platform rewrite.
				</p>
			</div>

			<div className="mt-14 grid gap-6 lg:grid-cols-3">
				{pillars.map((pillar) => (
					<div key={pillar.title} className="border border-border bg-card/30 p-8">
						<div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
							{pillar.icon}
						</div>
						<h3 className="text-3xl font-heading font-bold">{pillar.title}</h3>
						<p className="mt-4 text-lg leading-relaxed text-muted-foreground">{pillar.description}</p>
						<ul className="mt-6 space-y-3">
							{pillar.points.map((point) => (
								<li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground">
									<span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
									<span>{point}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="mt-10 border border-primary/20 bg-primary/5 p-6">
				<p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Developer clarity</p>
				<div className="mt-4 grid gap-4 md:grid-cols-3">
					{integrationNotes.map((note) => (
						<p key={note} className="text-base leading-relaxed text-foreground">
							{note}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
