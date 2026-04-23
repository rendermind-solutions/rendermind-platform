import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
	return (
		<section className="relative pt-32 pb-20 px-6 overflow-hidden">
			{/* Luz de fondo sutil para dar profundidad */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,var(--color-primary)_0%,transparent_50%)] opacity-10 pointer-events-none" />

			<div className="max-w-6xl mx-auto text-center relative z-10">
				{/* Technical Badge */}
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-base font-mono mb-8 animate-fade-in">
					<Terminal size={14} />
					<span>v1.0: AI-Powered Rendering Engine Live</span>
				</div>

				{/* Main Heading con el degradado solicitado */}
				<h1 className="text-6xl md:text-8xl font-heading font-bold leading-[1.1] mb-8 tracking-tighter">
					The Infrastructure for <br />
					<span className="text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-blue-600">
						Next-Gen Creative Engineering
					</span>
				</h1>

				<p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-2xl font-sans font-light mb-12 leading-relaxed">
					Custom-engineered visual infrastructure. We build the engines that power your creative workflows
				</p>

				{/* CTAs usando Shadcn Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Button size="lg" className="h-14 px-8 text-base font-bold group">
						Book Technical Discovery
						<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
					</Button>

					{/* <Button size="lg" variant="secondary" className="h-14 px-8 text-base border-border/50">
						View Documentation
					</Button> */}
				</div>

				{/* Tech Stack Indicator */}
				<div className="mt-20 pt-10 border-t border-border/50">
					<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
						Engineered for modern stacks
					</p>
					<div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
						{/* Aquí irían logos o nombres de tech: WebGL, WebGPU, Next.js, Node */}
						<span className="font-mono text-sm">WebGL 2.0</span>
						<span className="font-mono text-sm">WebGPU</span>
						<span className="font-mono text-sm">FFMPEG</span>
						<span className="font-mono text-sm">TYPESCRIPT</span>
					</div>
				</div>
			</div>
		</section>
	);
}