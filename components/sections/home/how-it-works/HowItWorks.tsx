const steps = [
  {
    number: "01",
    title: "Technical discovery",
    description:
      "We map your product workflow, integration points, rendering needs, and launch constraints.",
  },
  {
    number: "02",
    title: "Module selection",
    description:
      "We identify which Rendermind modules can accelerate your product and what needs to be adapted.",
  },
  {
    number: "03",
    title: "Custom integration",
    description:
      "We integrate the editor, renderer, templates, captions, or AI workflows into your existing app.",
  },
  {
    number: "04",
    title: "Production handoff",
    description:
      "You get working code, documentation, and a path to maintain, extend, or evolve the system with your team.",
  },
];

export default function HowItWorks() {
  return (
    <section className="rm-section rm-section-muted" id="how-it-works">
      <div className="rm-container">
        <div className="text-center">
          <p className="rm-eyebrow">07 / How We Work</p>
          <h2 className="mx-auto max-w-4xl text-4xl font-heading font-bold leading-[1.03] tracking-[-0.045em] md:text-5xl">
            A technical service shaped around module-based implementation.
          </h2>
          <p className="rm-lead mx-auto mt-6 max-w-3xl">
            This is not just a SaaS signup. Rendermind combines reusable SDKs and rendering engines with integration work
            so the first workflow fits the product you already have.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rm-card rm-card-hover relative overflow-hidden">
              <div className="absolute right-5 top-4 text-6xl font-heading font-bold text-primary/[0.07]">
                {step.number}
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary/85">Step {step.number}</p>
              <h3 className="mt-6 text-2xl font-heading font-bold leading-tight">{step.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[17px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
