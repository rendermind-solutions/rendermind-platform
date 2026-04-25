import { Clock3, Layers3, ServerCog, TriangleAlert } from "lucide-react";

const challenges = [
	{
		icon: <Clock3 className="text-primary" size={18} />,
		title: "It takes longer than planned",
		description:
			"Teams start with a simple editor prototype and end up deep in canvas state, uploads, undo stacks, and timeline logic.",
	},
	{
		icon: <Layers3 className="text-primary" size={18} />,
		title: "The surface area is bigger than the UI",
		description:
			"Image and video products need templates, asset management, previews, exports, permissions, and background jobs to feel complete.",
	},
	{
		icon: <ServerCog className="text-primary" size={18} />,
		title: "Rendering infrastructure gets expensive fast",
		description:
			"Queues, retries, storage, FFmpeg pipelines, and scaling workers become a second product your team now has to maintain.",
	},
	{
		icon: <TriangleAlert className="text-primary" size={18} />,
		title: "AI features still need structured media workflows",
		description:
			"Text-to-video, transcript search, and automated generation only work when prompts, templates, and rendering are connected end to end.",
	},
];

export default function Problem() {
	return (
		<section className="border-y border-border/50 bg-secondary/20 px-6 py-24" id="problem">
			<div className="mx-auto max-w-7xl">
				<div className="max-w-3xl">
					<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">Problem</p>
					<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
						Building this in-house is harder than it looks.
					</h2>
					<p className="mt-6 text-xl leading-relaxed text-muted-foreground">
						The hard part is not getting pixels on a screen. The hard part is shipping a reliable editing and
						rendering product your customers can use every day without turning your roadmap into infrastructure work.
					</p>
				</div>

				<div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
					{challenges.map((item) => (
						<div key={item.title} className="border border-border/60 bg-card/40 p-6">
							<div className="mb-5 flex h-11 w-11 items-center justify-center border border-primary/20 bg-primary/10">
								{item.icon}
							</div>
							<h3 className="text-2xl font-heading font-bold">{item.title}</h3>
							<p className="mt-4 text-lg leading-relaxed text-muted-foreground">{item.description}</p>
						</div>
					))}
				</div>

				<div className="mt-10 border border-border/60 bg-background/60 p-6">
					<p className="text-lg leading-relaxed text-foreground">
						Most teams do not need to become media infrastructure experts. They need to launch the workflow,
						validate demand, and keep moving.
					</p>
				</div>
			</div>
		</section>
	);
}
