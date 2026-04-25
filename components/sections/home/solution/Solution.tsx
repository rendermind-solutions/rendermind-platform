import { Blocks, ImagePlay, Workflow } from "lucide-react";

const pillars = [
	{
		icon: <ImagePlay className="text-primary" size={20} />,
		title: "Embeddable Editor",
		description:
			"Add image and video editing inside your product with a UI your team can shape around your workflow.",
		points: [
			"Canvas and timeline experiences for real product use, not just demos",
			"Embed the whole editor or only the modules you need",
			"Keep your own auth, billing, and product shell",
		],
	},
	{
		icon: <Blocks className="text-primary" size={20} />,
		title: "Rendering API",
		description:
			"Run exports, previews, thumbnails, and background jobs without owning the render pipeline yourself.",
		points: [
			"API-driven image and video rendering",
			"Built for async jobs, retries, and scale",
			"Fits products that need reliable output, not manual ops",
		],
	},
	{
		icon: <Workflow className="text-primary" size={20} />,
		title: "Templates + Automation System",
		description:
			"Turn repeatable content into templates your users, your team, or your AI workflows can fill automatically.",
		points: [
			"Brand-safe templates for repeated production",
			"Bulk generation from forms, data, or prompts",
			"Fewer manual steps between idea and export",
		],
	},
];

const integrationNotes = [
	"React-ready SDK for embedding product surfaces",
	"API-first architecture for render jobs and automations",
	"Modular rollout so you can start small and expand later",
];

export default function Solution() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24" id="solution">
			<div className="max-w-3xl">
				<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">Solution</p>
				<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
					Three product modules. One faster path to launch.
				</h2>
				<p className="mt-6 text-xl leading-relaxed text-muted-foreground">
					Use the full stack or start with the one module blocking your roadmap today. Rendermind is designed to fit
					into an existing app, not replace it.
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
