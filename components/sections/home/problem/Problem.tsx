import { Clock3, Layers3, ServerCog, TriangleAlert } from "lucide-react";

const challenges = [
	{
		icon: <Clock3 className="text-primary" size={18} />,
		title: "It eats the roadmap",
		description:
			"Teams start with a simple editor prototype and end up buried in canvas state, uploads, undo stacks, and timeline logic for months.",
	},
	{
		icon: <Layers3 className="text-primary" size={18} />,
		title: "The real product is bigger than the UI",
		description:
			"Image and video products need templates, asset management, previews, exports, permissions, and background jobs before customers will trust them.",
	},
	{
		icon: <ServerCog className="text-primary" size={18} />,
		title: "Rendering becomes an operations problem",
		description:
			"Queues, retries, storage, FFmpeg pipelines, and scaling workers quietly become a second product your team now has to run.",
	},
	{
		icon: <TriangleAlert className="text-primary" size={18} />,
		title: "AI alone does not ship the workflow",
		description:
			"Text-to-video, transcript search, and automated generation only matter when prompts, templates, editing, and rendering are connected end to end.",
	},
];

export default function Problem() {
	return (
		<section className="border-y border-border/50 bg-secondary/20 px-6 py-24" id="problem">
			<div className="mx-auto max-w-7xl">
				<div className="max-w-3xl">
					<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">Problem</p>
					<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
						Every month spent building this in-house is a month you are not selling it.
					</h2>
					<p className="mt-6 text-xl leading-relaxed text-muted-foreground">
						The hard part is not getting pixels on a screen. The hard part is shipping a product customers can use
						every day without letting editor complexity and rendering infrastructure consume your team.
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
							Most teams do not need a bigger media engineering org. They need a faster route to launch, feedback,
							and revenue.
						</p>
					</div>
			</div>
		</section>
	);
}
