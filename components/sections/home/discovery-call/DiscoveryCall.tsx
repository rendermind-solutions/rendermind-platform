import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DiscoveryCall() {
  return (
    <section className="relative overflow-hidden border-t border-primary/20 bg-primary/[0.045] px-6 py-20 md:py-28" id="contact">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="rm-eyebrow">09 / Final CTA</p>
          <h2 className="rm-heading">Start with the workflow blocking your roadmap.</h2>
          <p className="rm-lead mt-6">
            You do not need to rebuild Canva, CapCut, or a full rendering platform from scratch. Start with one
            high-value workflow, integrate the right modules, and expand once it is working inside your product.
          </p>

          <div className="mt-10 space-y-4 rounded-xl border border-border/60 bg-card/45 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <div>
              <p className="text-sm font-semibold text-foreground">What we cover in the first call</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                What to embed, what to render server-side, what can be reused from Rendermind, and what needs custom implementation.
              </p>
            </div>
            <div className="rm-divider" />
            <div>
              <p className="text-sm font-semibold text-foreground">Best fit for</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                AI video tools, content SaaS, marketing platforms, and agencies building repeatable creation workflows.
              </p>
            </div>
            <div className="rm-divider" />
            <div>
              <p className="text-sm font-semibold text-foreground">Integration style</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Module-based implementation with reusable SDKs, rendering engines, and custom integration around your existing app.
              </p>
            </div>
          </div>
        </div>

        <form className="rm-card space-y-6 p-6 md:p-10" id="contact-form">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
              <Input placeholder="John Doe" className="h-12 border-border bg-background/80 text-base" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Work Email</label>
              <Input placeholder="john@company.com" className="h-12 border-border bg-background/80 text-base" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Company</label>
              <Input placeholder="Acme" className="h-12 border-border bg-background/80 text-base" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Current Stage</label>
              <Input placeholder="Prototype, beta, or live product" className="h-12 border-border bg-background/80 text-base" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">What are you shipping?</label>
            <Textarea
              placeholder="Tell us the workflow you want to launch, the modules you think you need, and what is currently blocking implementation."
              className="min-h-[160px] resize-none border-border bg-background/80 text-base"
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="h-14 flex-1 rounded-lg text-base font-bold shadow-[0_0_34px_rgba(0,245,255,0.14)]">Book a technical discovery call</Button>
            <Button asChild type="button" variant="secondary" className="h-14 flex-1 rounded-lg border border-border/80 bg-background/80 text-base font-semibold hover:bg-card">
              <a href="#modules">See available modules</a>
            </Button>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            We&apos;ll reply with a few technical questions and, if there&apos;s a fit, schedule a discovery call.
          </p>
        </form>
      </div>
    </section>
  );
}
