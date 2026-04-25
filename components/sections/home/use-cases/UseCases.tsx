import { Bot, BriefcaseBusiness, MonitorPlay, PanelsTopLeft, ShoppingBag } from "lucide-react";

export default function UseCases() {
	const cases = [
		{
			icon: <Bot />,
			title: "AI video tools",
			description: "Add editing, captions, transcript workflows, and rendering without spending months building the media layer from zero.",
		},
		{
			icon: <PanelsTopLeft />,
			title: "Content & media SaaS",
			description: "Give users in-app creation, templates, previews, and exports without turning your core team into a media infrastructure team.",
		},
		{
			icon: <MonitorPlay />,
			title: "Marketing platforms",
			description: "Generate branded image and video assets from templates, forms, campaign data, or approval workflows.",
		},
		{
			icon: <BriefcaseBusiness />,
			title: "Marketing & content agencies",
			description: "Build internal tools for repeatable creative production, faster client revisions, and standardized delivery.",
		},
		{
			icon: <ShoppingBag />,
			title: "Product customization platforms",
			description: "Add design editing and server-side rendering for personalized products, mockups, print files, and previews.",
		},
	];

	return (
		<section className="mx-auto max-w-7xl px-6 py-24" id="use-cases">
			<div className="mb-16 max-w-3xl">
				<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">Who It&apos;s For</p>
				<h2 className="mb-4 text-4xl font-heading font-bold tracking-tighter md:text-5xl">
					Built for teams that need embedded media workflows inside a real product.
				</h2>
				<p className="text-xl leading-relaxed text-muted-foreground">
					Rendermind is strongest when image, video, captioning, rendering, or template workflows need to fit inside
					existing product logic instead of living in a separate tool.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
				{cases.map((item) => (
					<div key={item.title} className="group p-10 border border-border bg-card/20 hover:border-primary/50 transition-all rounded-sm">
						<div className="mb-6 text-primary group-hover:scale-110 transition-transform w-fit">
							{item.icon}
						</div>
						<h4 className="mb-4 text-2xl font-heading font-bold">{item.title}</h4>
						<p className="text-lg font-light leading-snug text-muted-foreground">{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
