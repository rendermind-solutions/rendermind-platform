export default function Metrics() {
	const stats = [
		{
			label: "Engineering Lead Time",
			before: "8 Months",
			after: "4 Weeks",
			desc: "Average time to deploy a production-ready visual editor."
		},
		{
			label: "Rendering Efficiency",
			before: "Manual / Linear",
			after: "10x Scalability",
			desc: "Using automated cloud rendering pipelines vs traditional frame-by-frame manual export."
		},
		{
			label: "Infrastructure Stability",
			before: "Unpredictable",
			after: "99.9% Uptime",
			desc: "Hardened cores that manage memory leaks and context loss automatically."
		}
	];

	return (
		<section className="py-24 px-6 border-b border-border/50">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-12 text-center">Engineered Outcomes</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{stats.map((stat, i) => (
						<div key={i} className="text-center p-8 border border-border/30 bg-card/10 rounded-sm">
							<div className="text-muted-foreground text-sm uppercase mb-4 tracking-widest">{stat.label}</div>
							<div className="flex justify-center items-baseline gap-4 mb-4">
								<span className="text-muted-foreground/30 line-through text-xl">{stat.before}</span>
								<span className="text-4xl font-heading font-bold text-primary">{stat.after}</span>
							</div>
							<p className="text-muted-foreground text-base font-light leading-relaxed">
								{stat.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}