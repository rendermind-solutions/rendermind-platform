import { Blocks, ImagePlay, Workflow } from "lucide-react";

const pillars = [
	{
		icon: <ImagePlay className="text-primary" size={20} />,
		title: "Embeddable editors",
		description:
			"Graphic and video editor modules can be embedded into React apps and adapted to the product workflow you are building.",
		points: [
			"Graphic editor SDK for templates, text, images, SVGs, and customization flows",
			"Video editor SDK for structured video creation, captions, clips, and timeline-based flows",
			"Integrated into your existing UX instead of replacing it",
		],
	},
	{
		icon: <Blocks className="text-primary" size={20} />,
		title: "Rendering pipelines",
		description:
			"Use image, PDF, and video rendering modules to generate assets server-side without building the entire rendering layer yourself.",
		points: [
			"Image and PDF rendering from structured templates",
			"Remotion-based video rendering for composition-driven outputs",
			"Template exports, previews, and async render jobs adapted to your stack",
		],
	},
	{
		icon: <Workflow className="text-primary" size={20} />,
		title: "AI-ready media workflows",
		description:
			"Transcription, captions, semantic transcript search, and prompt-to-template workflows can be added where they make sense.",
		points: [
			"Multilingual transcription and caption generation",
			"Semantic video search as an early module or custom AI extension",
			"Prompt, template, review, and render flows built around your product logic",
		],
	},
];

const integrationNotes = [
	"Start with one workflow instead of the whole stack",
	"Select only the modules your implementation actually needs",
	"Custom integration around your existing product shell, auth, and data model",
];

export default function Solution() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24" id="solution">
			<div className="max-w-3xl">
				<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">What Rendermind Provides</p>
				<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
					Reusable media modules, integrated around your product.
				</h2>
				<p className="mt-6 text-xl leading-relaxed text-muted-foreground">
					Rendermind is not a generic editor you force into your app. We help you select, adapt, and integrate the
					media modules your workflow actually needs, using production-tested SDKs plus custom engineering.
				</p>
			</div>

			<div className="mt-14 grid gap-6 lg:grid-cols-3">
				{pillars.map((pillar) => (
					<div key={pillar.title} className="border border-border bg-card/30 p-8">
						<div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
							{pillar.icon}
						</div>
						<h3 className="text-3xl font-heading font-bold">{pillar.title}</h3>
						<p className="mt-4 text-lg leading-relaxed text-muted-foreground">{pillar.description}</p>
						<ul className="mt-6 space-y-3">
							{pillar.points.map((point) => (
								<li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground">
									<span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
									<span>{point}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="mt-10 border border-primary/20 bg-primary/5 p-6">
				<p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Implementation model</p>
				<div className="mt-4 grid gap-4 md:grid-cols-3">
					{integrationNotes.map((note) => (
						<p key={note} className="text-base leading-relaxed text-foreground">
							{note}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
