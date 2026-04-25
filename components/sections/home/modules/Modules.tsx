import { BookOpenCheck, Captions, FileImage, Layers3, Search, Video } from "lucide-react";

const modules = [
	{
		icon: <Layers3 className="text-primary" size={20} />,
		title: "Graphic Editor SDK",
		description:
			"Embed a Fabric.js-based editor for canvas design, templates, text, images, SVGs, and product customization workflows.",
	},
	{
		icon: <FileImage className="text-primary" size={20} />,
		title: "Image Renderer",
		description:
			"Generate image and PDF assets from structured templates using a Node.js rendering pipeline.",
	},
	{
		icon: <Video className="text-primary" size={20} />,
		title: "Graphic Video Renderer",
		description:
			"Render animated or media-based design templates into video outputs when your design workflow includes video.",
	},
	{
		icon: <Video className="text-primary" size={20} />,
		title: "Video Editor SDK",
		description:
			"Integrate a React and TypeScript video editor for template-based video creation, captions, clips, and structured editing flows.",
	},
	{
		icon: <BookOpenCheck className="text-primary" size={20} />,
		title: "Video Renderer",
		description:
			"Render Remotion-powered video compositions into MP4 outputs and related video assets.",
	},
	{
		icon: <Captions className="text-primary" size={20} />,
		title: "Transcription & Captions",
		description:
			"Generate multilingual transcripts and add captions to video workflows.",
	},
	{
		icon: <Search className="text-primary" size={20} />,
		title: "Semantic Video Search",
		description:
			"Prototype AI search over transcripts so users can find topics, quotes, and moments inside long-form video.",
		note: "Best positioned today as an early module or custom AI workflow, not a standalone product.",
	},
];

export default function Modules() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-24" id="modules">
			<div className="max-w-3xl">
				<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">Available Modules</p>
				<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
					Concrete modules you can use today.
				</h2>
				<p className="mt-6 text-xl leading-relaxed text-muted-foreground">
					The offer is intentionally specific: reusable editors, renderers, caption workflows, and AI extensions that
					can be selected and adapted for the workflow you want to launch first.
				</p>
			</div>

			<div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{modules.map((module) => (
					<div key={module.title} className="border border-border bg-card/30 p-8">
						<div className="mb-5 flex h-12 w-12 items-center justify-center border border-primary/20 bg-primary/10">
							{module.icon}
						</div>
						<h3 className="text-2xl font-heading font-bold">{module.title}</h3>
						<p className="mt-4 text-lg leading-relaxed text-muted-foreground">{module.description}</p>
						{module.note ? (
							<p className="mt-5 border-t border-border/60 pt-5 text-sm leading-relaxed text-foreground">{module.note}</p>
						) : null}
					</div>
				))}
			</div>
		</section>
	);
}
