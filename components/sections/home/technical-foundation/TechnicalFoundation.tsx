const badges = [
	"React",
	"TypeScript",
	"Fabric.js",
	"Remotion",
	"Node.js",
	"FFmpeg-ready",
	"Vector search-ready",
];

export default function TechnicalFoundation() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24" id="technical-foundation">
			<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
				<div>
					<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">Technical Foundation</p>
					<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
						Built on real production experience, not a prototype.
					</h2>
				</div>

				<div>
					<p className="text-xl leading-relaxed text-muted-foreground">
						Rendermind is built from years of work on graphic editors, video editors, template systems, and rendering
						pipelines. The modules are designed to be adapted to real product constraints: existing auth, product shells,
						data models, storage, queues, and deployment environments.
					</p>

					<div className="mt-8 grid gap-3 sm:grid-cols-2">
						<div className="border border-border/60 bg-card/30 p-5">
							<p className="text-sm font-semibold text-foreground">What the foundation covers</p>
							<p className="mt-3 text-base leading-relaxed text-muted-foreground">
								Graphic editing, video composition, template-driven generation, server-side rendering, transcription, caption flows, and semantic search experiments.
							</p>
						</div>
						<div className="border border-border/60 bg-card/30 p-5">
							<p className="text-sm font-semibold text-foreground">Why it matters</p>
							<p className="mt-3 text-base leading-relaxed text-muted-foreground">
								You are not paying for a team to discover the problem space from zero. You are buying a faster implementation path built on reusable modules.
							</p>
						</div>
					</div>

					<div className="mt-8 flex flex-wrap gap-2">
						{badges.map((badge) => (
							<span key={badge} className="border border-border/60 bg-background/70 px-3 py-2 text-xs font-mono text-muted-foreground">
								{badge}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
