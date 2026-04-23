import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DiscoveryCall() {
	return (
		<section className="py-24 px-6 bg-primary/5 border-t border-primary/20">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Ready to build?</h2>
					<h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tighter">Schedule a Technical Discovery.</h3>
					<p className="text-muted-foreground text-xl font-light">
						Tell us about your visual challenge. We'll talk engineering, architecture, and feasibility.
					</p>
				</div>

				<form className="space-y-6 bg-card p-8 md:p-12 border border-border shadow-2xl">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Full Name</label>
							<Input placeholder="John Doe" className="bg-background border-border text-lg h-12" />
						</div>
						<div className="space-y-2">
							<label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Work Email</label>
							<Input placeholder="john@company.com" className="bg-background border-border text-lg h-12" />
						</div>
					</div>

					<div className="space-y-2">
						<label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">The Challenge</label>
						<Textarea
							placeholder="Briefly describe your rendering bottleneck or the visual tool you want to build..."
							className="bg-background border-border text-lg min-h-[150px] resize-none"
						/>
					</div>

					<Button className="w-full h-14 text-lg font-bold">
						Send Technical Inquiry
					</Button>

					<p className="text-center text-muted-foreground text-sm font-light mt-4">
						Response time: Usually under 24 hours.
					</p>
				</form>
			</div>
		</section>
	);
}