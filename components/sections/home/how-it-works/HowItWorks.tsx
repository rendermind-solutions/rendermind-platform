const steps = [
	{
		number: "01",
		title: "Embed the product surface",
		description:
			"Use the SDK to add the editor, timeline, or specific creation modules inside your existing app without rebuilding your product shell.",
	},
	{
		number: "02",
		title: "Connect templates and workflows",
		description:
			"Define templates, variables, assets, permissions, and automations around the first workflow you want customers using.",
	},
	{
		number: "03",
		title: "Render, search, and scale",
		description:
			"Run background exports, semantic search, and AI-assisted generation through the same production-ready infrastructure as adoption grows.",
	},
];

export default function HowItWorks() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24" id="how-it-works">
			<div className="text-center">
				<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">How It Works</p>
				<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
					From integration to launch in three steps.
				</h2>
				<p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
					Start with the workflow closest to revenue now. Expand into a broader editing and automation platform after
					it is already live.
				</p>
			</div>

			<div className="mt-16 grid gap-8 md:grid-cols-3">
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
