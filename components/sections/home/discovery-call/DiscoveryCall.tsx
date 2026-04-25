import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DiscoveryCall() {
	return (
		<section className="border-t border-primary/20 bg-primary/5 px-6 py-24" id="contact">
			<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
				<div>
					<p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">Final CTA</p>
					<h2 className="text-4xl font-heading font-bold tracking-tighter md:text-5xl">
						Start with the workflow blocking your roadmap.
					</h2>
					<p className="mt-6 text-xl leading-relaxed text-muted-foreground">
						You do not need to rebuild Canva, CapCut, or a full rendering platform from scratch. Start with one
						high-value workflow, integrate the right modules, and expand once it is working inside your product.
					</p>

					<div className="mt-10 space-y-4 border border-border/60 bg-card/40 p-6">
						<div>
							<p className="text-sm font-semibold text-foreground">What we cover in the first call</p>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
								What to embed, what to render server-side, what can be reused from Rendermind, and what needs custom implementation.
							</p>
						</div>
						<div>
							<p className="text-sm font-semibold text-foreground">Best fit for</p>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
								AI video tools, content SaaS, marketing platforms, and agencies building repeatable creation workflows.
							</p>
						</div>
						<div>
							<p className="text-sm font-semibold text-foreground">Integration style</p>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
								Module-based implementation with reusable SDKs, rendering engines, and custom integration around your existing app.
							</p>
						</div>
					</div>
				</div>

				<form className="space-y-6 border border-border bg-card p-8 shadow-2xl md:p-12" id="contact-form">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div className="space-y-2">
							<label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
							<Input placeholder="John Doe" className="h-12 border-border bg-background text-lg" />
						</div>
						<div className="space-y-2">
							<label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Work Email</label>
							<Input placeholder="john@company.com" className="h-12 border-border bg-background text-lg" />
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div className="space-y-2">
							<label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Company</label>
							<Input placeholder="Acme" className="h-12 border-border bg-background text-lg" />
						</div>
						<div className="space-y-2">
							<label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Current Stage</label>
							<Input placeholder="Prototype, beta, or live product" className="h-12 border-border bg-background text-lg" />
						</div>
					</div>

					<div className="space-y-2">
						<label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">What are you shipping?</label>
						<Textarea
							placeholder="Tell us the workflow you want to launch, the modules you think you need, and what is currently blocking implementation."
							className="min-h-[160px] resize-none border-border bg-background text-lg"
						/>
					</div>

					<div className="flex flex-col gap-4 sm:flex-row">
						<Button className="h-14 flex-1 text-lg font-bold">Book a technical discovery call</Button>
						<Button asChild type="button" variant="secondary" className="h-14 flex-1 text-lg font-semibold">
							<a href="#modules">See available modules</a>
						</Button>
					</div>

					<p className="text-sm font-light text-muted-foreground">
						Response time is usually under 24 hours.
					</p>
				</form>
			</div>
		</section>
	);
}
