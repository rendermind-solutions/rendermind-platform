const steps = [
	{
		number: "01",
		title: "Technical discovery",
		description:
			"We map your product workflow, integration points, rendering needs, and launch constraints.",
	},
	{
		number: "02",
		title: "Module selection",
		description:
			"We identify which Rendermind modules can accelerate your product and what needs to be adapted.",
	},
	{
		number: "03",
		title: "Custom integration",
		description:
			"We integrate the editor, renderer, templates, captions, or AI workflows into your existing app.",
	},
	{
		number: "04",
		title: "Production handoff",
		description:
			"You get working code, documentation, and a path to maintain, extend, or evolve the system with your team.",
	},
];

export default function HowItWorks() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24" id="how-it-works">
			<div className="text-center">
				<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">How We Work</p>
				<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
					A technical service shaped around module-based implementation.
				</h2>
				<p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
					This is not just a SaaS signup. Rendermind combines reusable SDKs and rendering engines with integration work
					so the first workflow fits the product you already have.
				</p>
			</div>

			<div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
				{steps.map((step) => (
					<div key={step.number} className="relative border border-border/60 bg-card/20 p-8">
						<div className="absolute right-6 top-5 text-5xl font-heading font-bold text-primary/10">
							{step.number}
						</div>
						<p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Step {step.number}</p>
						<h3 className="mt-6 text-2xl font-heading font-bold">{step.title}</h3>
						<p className="mt-4 text-lg leading-relaxed text-muted-foreground">{step.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
