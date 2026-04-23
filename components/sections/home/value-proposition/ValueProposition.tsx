export default function ValueProposition() {
	const pains = [
		{ label: "Engineering Time", value: "6-12 Months", detail: "Average time to build a stable visual engine from scratch." },
		{ label: "Maintenance Cost", value: "$10k+/mo", detail: "Cost of keeping up with browser updates and rendering bugs." },
		{ label: "Operational Burn", value: "High", detail: "Manual asset generation is slow, unscalable, and prone to human error." }
	];

	return (
		<section className="py-24 px-6 bg-secondary/20 border-y border-border/50">
			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight tracking-tighter">
							Stop burning resources on <span className="text-primary">custom rendering debt.</span>
						</h2>
						<p className="text-muted-foreground text-xl mb-10 font-light leading-relaxed">
							Building graphics infrastructure is notoriously hard. Most companies get stuck in a cycle of
							memory leaks, slow render times, and high maintenance costs.
						</p>
						<div className="space-y-6">
							{pains.map((pain, i) => (
								<div key={i} className="flex items-start gap-4 p-4 border border-border/50 bg-background/50">
									<div className="text-primary font-bold text-2xl font-heading shrink-0">{pain.value}</div>
									<div>
										<div className="font-bold text-lg">{pain.label}</div>
										<div className="text-muted-foreground text-sm font-light">{pain.detail}</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="bg-card border border-border p-10 rounded-sm">
						<h3 className="text-3xl font-heading font-bold mb-6">The Rendermind Shift</h3>
						<p className="text-muted-foreground text-lg mb-8 font-light">
							We deploy our hardened cores into your stack, turning months of development into weeks
							of configuration. You focus on your business logic; we handle the pixels.
						</p>
						<ul className="space-y-4 mb-10">
							{["90% Faster Time-to-Market", "Zero Infrastructure Overhead", "Predictable Scaling Costs"].map((item, i) => (
								<li key={i} className="flex items-center gap-3 text-primary font-medium">
									<div className="w-1.5 h-1.5 bg-primary rounded-full" />
									{item}
								</li>
							))}
						</ul>
						<button className="w-full bg-primary text-background font-bold py-4 rounded-sm hover:brightness-110 transition-all">
							Schedule Architecture Review
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}