export default function AboutCore() {
  return (
    <section className="py-24 px-6 border-b border-border/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-8">
          The Core Concept
        </h2>
        <p className="text-3xl md:text-4xl font-heading font-bold leading-tight mb-8 tracking-tighter">
          Rendermind is a B2B graphics infrastructure studio. 
          We specialize in building the hidden engines that power modern visual experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <p className="text-muted-foreground text-xl font-light leading-relaxed">
            From embeddable graphic editors to massive automated video pipelines, 
            we provide the proprietary cores and technical expertise needed to 
            manipulate pixels at scale.
          </p>
          <p className="text-muted-foreground text-xl font-light leading-relaxed">
            We bridge the gap between AI orchestration and complex rendering requirements, 
            allowing your team to deploy sophisticated visual tools without the 
            8-month development cycle.
          </p>
        </div>
      </div>
    </section>
  );
}