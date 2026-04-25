import { Check } from "lucide-react";

const projects = [
	"Add a Canva-like editor to an existing SaaS product",
	"Generate branded images, PDFs, or videos from templates",
	"Build an internal creative tool for a marketing or content agency",
	"Add captions and transcript workflows to a video product",
	"Build a lightweight video editor for a specific product workflow",
	"Prototype semantic search over video transcripts",
	"Create a custom rendering pipeline for image or video assets",
];

export default function BestFirstProjects() {
	return (
		<section className="border-y border-border/50 bg-secondary/20 px-6 py-24" id="best-first-projects">
			<div className="mx-auto max-w-7xl">
				<div className="max-w-3xl">
					<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">Best First Projects</p>
					<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
						Common ways teams start working with Rendermind.
					</h2>
					<p className="mt-6 text-xl leading-relaxed text-muted-foreground">
						This section exists to make the engagement easier to buy: most teams do not need every module at once.
						They need one useful workflow implemented well.
					</p>
				</div>

				<div className="mt-14 grid gap-4 md:grid-cols-2">
					{projects.map((project) => (
						<div key={project} className="flex gap-4 border border-border/60 bg-card/30 p-5">
							<div className="mt-1 flex h-8 w-8 items-center justify-center border border-primary/20 bg-primary/10 text-primary">
								<Check size={16} />
							</div>
							<p className="text-lg leading-relaxed text-foreground">{project}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
