import { Zap, Cpu, Braces, Database } from "lucide-react";

export default function TechnicalExcellence() {
  const specs = [
    {
      icon: <Cpu size={20} />,
      title: "Stability-First Graphics",
      desc: "We manage complex browser memory and rendering buffers to prevent crashes during high-res editing. Whether it's WebGL or Canvas, your app stays fluid."
    },
    {
      icon: <Zap size={20} />,
      title: "Hybrid Video Engines",
      desc: "Leveraging both WebGL for real-time previews and robust frameworks like Remotion/FFmpeg for stable, frame-perfect server-side rendering."
    },
    {
      icon: <Braces size={20} />,
      title: "Intelligent Layout Engine",
      desc: "Deterministic translation of AI-generated content into structured design scenes. We ensure branding remains consistent across every generated asset."
    },
    {
      icon: <Database size={20} />,
      title: "Seamless Integration",
      desc: "Our SDKs are framework-agnostic. Integrate our core rendering power into your React, Vue, or Next.js stack without rewriting your infrastructure."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side: Sticky Heading */}
        <div className="lg:w-1/3 lg:sticky lg:top-24">
          <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">
            Technical Excellence
          </h2>
          <h3 className="text-5xl font-heading font-bold mb-6 leading-[1.1] tracking-tighter">
            Built for the <br />
            hardest visual <br />
            challenges.
          </h3>
          <p className="text-muted-foreground text-xl leading-relaxed font-light">
            Skip the learning curve of browser-based rendering. We provide the hardened
            infrastructure to scale your creative features with confidence.
          </p>
        </div>

        {/* Right Side: Grid of Specs */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="p-8 border border-border bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all rounded-sm group"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-border bg-background mb-6 text-primary group-hover:scale-105 transition-transform">
                {spec.icon}
              </div>
              <h4 className="text-2xl font-bold font-heading mb-3">
                {spec.title}
              </h4>
              <p className="text-muted-foreground text-lg leading-relaxed font-sans font-light">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}