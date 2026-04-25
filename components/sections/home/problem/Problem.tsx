import { Clock3, Layers3, ServerCog, TriangleAlert } from "lucide-react";

const challenges = [
	{
		icon: <Clock3 className="text-primary" size={18} />,
		title: "The editor is never just the editor",
		description:
			"Teams start with a simple prototype and quickly inherit canvas state, undo and redo, uploads, templates, previews, and export logic.",
	},
	{
		icon: <Layers3 className="text-primary" size={18} />,
		title: "Rendering is not just a button",
		description:
			"Image and video outputs need workers, queues, retries, storage, previews, FFmpeg or Remotion logic, and error handling around the happy path.",
	},
	{
		icon: <ServerCog className="text-primary" size={18} />,
		title: "Media workflows expand into the stack",
		description:
			"Once customers expect templates, captions, versions, approvals, and server-side exports, the workflow spans frontend, backend, storage, and operations.",
	},
	{
		icon: <TriangleAlert className="text-primary" size={18} />,
		title: "AI still needs structured media flows",
		description:
			"Prompts, transcripts, captions, review states, templates, and rendering only become useful when they are connected inside one product workflow.",
	},
];

export default function Problem() {
	return (
		<section className="border-y border-border/50 bg-secondary/20 px-6 py-24" id="problem">
			<div className="mx-auto max-w-7xl">
				<div className="max-w-3xl">
					<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">Problem</p>
					<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
						Media workflows look simple until they become your roadmap.
					</h2>
					<p className="mt-6 text-xl leading-relaxed text-muted-foreground">
						The challenge is not getting pixels on a screen. The challenge is keeping editors, templates, rendering,
						and AI extensions coherent inside a real product without turning them into a second platform your team has to maintain.
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
						Most teams should spend their engineering time on core product logic, distribution, and customer value, not on recreating media infrastructure from scratch.
					</p>
				</div>
			</div>
		</section>
	);
}
