import { Target, MonitorPlay, ShoppingCart, Layout } from "lucide-react";

export default function UseCases() {
	const cases = [
		{
			icon: <Target />,
			title: "AdTech & Dynamic Creative",
			problem: "Creating thousands of localized ad variations manually is impossible to scale.",
			solution: "Automated pipelines that generate brand-consistent banners and graphics via API."
		},
		{
			icon: <MonitorPlay />,
			title: "Creative & Video Platforms", // Cambiado para ser más inclusivo
			problem: "Users want in-app editing, but building a web-based editor is a technical nightmare.",
			solution: "Embeddable timeline and preview engines with frame-perfect server-side export."
		},
		{
			icon: <ShoppingCart />,
			title: "E-commerce & POD Personalization",
			problem: "Customers need to see high-fidelity previews of their custom products before buying.",
			solution: "Real-time configurators that generate high-resolution, print-ready files automatically." // Quitamos "3D"
		},
		{
			icon: <Layout />,
			title: "AI-Driven Design Tools",
			problem: "LLMs generate ideas, but they can't arrange pixels into professional layouts.",
			solution: "A bridge between AI intent and graphical reality using our intelligent layout engine."
		}
	];

	return (
		<section className="py-24 px-6 max-w-7xl mx-auto">
			<div className="mb-16">
				<h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter mb-4">Vertical Applications.</h2>
				<p className="text-muted-foreground text-xl font-light max-w-2xl">
					From marketing automation to pro-level creative suites, we provide the infrastructure.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{cases.map((item, i) => (
					<div key={i} className="group p-10 border border-border bg-card/20 hover:border-primary/50 transition-all rounded-sm">
						<div className="mb-6 text-primary group-hover:scale-110 transition-transform w-fit">
							{item.icon}
						</div>
						<h4 className="text-2xl font-heading font-bold mb-6">{item.title}</h4>
						<div className="space-y-4">
							<div>
								<span className="text-[10px] uppercase text-red-500/70 font-bold tracking-widest block mb-1">The Problem</span>
								<p className="text-muted-foreground text-lg font-light leading-snug">{item.problem}</p>
							</div>
							<div className="pt-4 border-t border-border/50">
								<span className="text-[10px] uppercase text-primary font-bold tracking-widest block mb-1">The Solution</span>
								<p className="text-foreground text-lg font-light leading-snug">{item.solution}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}