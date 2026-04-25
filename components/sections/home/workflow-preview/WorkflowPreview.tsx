import { Cpu, Layers, Share2 } from "lucide-react";

export default function WorkflowPreview() {
  const steps = [
    {
      icon: <Cpu className="text-primary" />,
      title: "1. Intelligence Layer",
      desc: "Integrate LLMs to interpret user intent and generate structured design schemas."
    },
    {
      icon: <Layers className="text-primary" />,
      title: "2. Visual Engine",
      desc: "Our proprietary WebGL/Canvas cores transform data into pixel-perfect compositions."
    },
    {
      icon: <Share2 className="text-primary" />,
      title: "3. Massive Output",
      desc: "Headless rendering for videos, images, or interactive SDKs delivered at scale."
    }
  ];

  return (
    <section className="py-24 px-6 border-y border-border/50 bg-[#0d1117]/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            How we solve the visual gap
          </h2>
          <p className="text-muted-foreground text-lg font-sans">
            We don&apos;t just write code; we deploy infrastructure that bridges AI and Graphics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative p-8 rounded-sm border border-border bg-background/50 hover:border-primary/50 transition-colors group">
              <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-sm bg-primary/10 border border-primary/20 mx-auto lg:mx-0">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors text-center lg:text-left">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed text-center lg:text-left font-light">
                {step.desc}
              </p>
              {/* Línea decorativa entre pasos en desktop */}
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-border z-0" />
              )}
            </div>
          ))}
        </div>

        {/* Console Preview / Code Snippet */}
        <div className="mt-16 rounded-md border border-border bg-[#0B0E14] p-6 font-mono text-xs md:text-sm overflow-hidden shadow-2xl">
          <div className="flex gap-2 mb-4 border-b border-border pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-2 text-muted-foreground">rendermind-orchestrator.ts</span>
          </div>
          <pre className="text-blue-400">
            <code>
              {`// Example of a custom rendering pipeline
const engine = await Rendermind.init({ 
  mode: 'headless-gpu', 
  accelerated: true 
});

const asset = await engine.compose({
  layers: [
    { type: 'video', src: 'raw_source.mp4', filters: ['ai-denoise'] },
    { type: 'canvas', render: (ctx) => drawCustomUI(ctx, userData) }
  ],
  output: ['mp4', 'webp_animated']
});`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
