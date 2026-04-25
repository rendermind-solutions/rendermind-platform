export default function ServicesMethodology() {
	const steps = [
		{ title: "Technical Audit", desc: "We analyze your current stack and visual requirements to define the best engine architecture (WebGL vs Headless)." },
		{ title: "Core Integration", desc: "We deploy our proprietary rendering cores and SDKs, customized to your specific business rules." },
		{ title: "Scaling & Support", desc: "Continuous performance monitoring and updates to our rendering libraries as browser standards evolve." }
	];

	return (
		<section className="py-24 px-6 max-w-7xl mx-auto">
			<div className="text-center mb-20">
				<h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Our Methodology</h2>
				<h3 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter">Engineered for Certainty.</h3>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
				{steps.map((step, i) => (
					<div key={i} className="relative">
						<div className="text-6xl font-heading font-bold text-primary/10 absolute -top-10 -left-4 z-0">
							0{i + 1}
						</div>
						<div className="relative z-10">
							<h4 className="text-2xl font-heading font-bold mb-4">{step.title}</h4>
							<p className="text-muted-foreground text-lg font-light leading-relaxed">
								{step.desc}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="mt-20 p-12 border border-primary/20 bg-primary/5 rounded-sm text-center">
				<h4 className="text-2xl font-heading font-bold mb-4">Why Rendermind?</h4>
					<p className="max-w-3xl mx-auto text-muted-foreground text-lg font-light mb-8">
						Unlike generalist agencies, we are **specialists in creative engineering**. We have already solved
						the context-loss, the memory leaks, and the rendering bottlenecks. You aren&apos;t paying for our
						learning curve; you are paying for our results.
					</p>
			</div>
		</section>
	);
}
