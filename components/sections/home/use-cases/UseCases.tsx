import { Bot, BriefcaseBusiness, MonitorPlay, PanelsTopLeft } from "lucide-react";

export default function UseCases() {
	const cases = [
			{
				icon: <Bot />,
				title: "AI video tools",
				problem: "You need prompt-to-video, transcript search, and exports in one product experience.",
				solution: "Launch AI-assisted creation without spending the next two quarters building the editor, timeline, asset system, and render backend yourself."
			},
			{
				icon: <MonitorPlay />,
				title: "Marketing platforms",
				problem: "Your customers want branded content generation tied to campaigns, data, and approvals.",
				solution: "Use templates, variables, and background rendering to generate images and videos at scale without growing a media operations team."
			},
			{
				icon: <PanelsTopLeft />,
				title: "Content and media SaaS",
				problem: "Users expect in-app editing and exports, but media infrastructure keeps pushing the roadmap out.",
				solution: "Add editing, reusable templates, and automated rendering as a premium product capability instead of another delayed roadmap promise."
			},
			{
				icon: <BriefcaseBusiness />,
				title: "Agencies and high-touch service teams",
				problem: "Production gets stuck in repetitive revisions, asset versioning, and export bottlenecks.",
				solution: "Standardize delivery with shared templates, guided editing, and faster turnaround so margin does not disappear in production."
			}
		];

	return (
		<section className="mx-auto max-w-7xl px-6 py-24" id="use-cases">
			<div className="mb-16 max-w-3xl">
				<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">Use Cases</p>
				<h2 className="mb-4 text-4xl font-heading font-bold tracking-tighter md:text-5xl">
					Built for teams selling a more complex, more valuable creation workflow.
				</h2>
				<p className="text-xl leading-relaxed text-muted-foreground">
					When editing, rendering, and AI-assisted creation are part of the product, the fastest route to premium
					revenue is to ship the workflow customers already want instead of building every layer from scratch.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{cases.map((item, i) => (
					<div key={i} className="group p-10 border border-border bg-card/20 hover:border-primary/50 transition-all rounded-sm">
						<div className="mb-6 text-primary group-hover:scale-110 transition-transform w-fit">
							{item.icon}
						</div>
						<h4 className="text-2xl font-heading font-bold mb-6">{item.title}</h4>
						<div className="space-y-4">
							<div>
								<span className="text-[10px] uppercase text-red-500/70 font-bold tracking-widest block mb-1">What they need</span>
								<p className="text-muted-foreground text-lg font-light leading-snug">{item.problem}</p>
							</div>
							<div className="pt-4 border-t border-border/50">
								<span className="text-[10px] uppercase text-primary font-bold tracking-widest block mb-1">What Rendermind unlocks</span>
								<p className="text-foreground text-lg font-light leading-snug">{item.solution}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
