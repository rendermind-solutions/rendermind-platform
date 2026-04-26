import { Clock3, Layers3, ServerCog, TriangleAlert } from "lucide-react";

const challenges = [
  {
    icon: <Clock3 className="text-primary" size={18} />,
    title: "The editor is never just the editor",
    description:
      "Teams start with a simple prototype and quickly inherit canvas state, undo and redo, uploads, templates, previews, and export logic.",
  },
  {
    icon: <Layers3 className="text-primary" size={18} />,
    title: "Rendering is not just a button",
    description:
      "Image and video outputs need workers, queues, retries, storage, previews, FFmpeg or Remotion logic, and error handling around the happy path.",
  },
  {
    icon: <ServerCog className="text-primary" size={18} />,
    title: "Media workflows expand into the stack",
    description:
      "Once customers expect templates, captions, versions, approvals, and server-side exports, the workflow spans frontend, backend, storage, and operations.",
  },
  {
    icon: <TriangleAlert className="text-primary" size={18} />,
    title: "AI still needs structured media flows",
    description:
      "Prompts, transcripts, captions, review states, templates, and rendering only become useful when they are connected inside one product workflow.",
  },
];

export default function Problem() {
  return (
    <section className="rm-section rm-section-muted" id="problem">
      <div className="rm-container">
        <div className="max-w-3xl">
          <p className="rm-eyebrow">01 / Problem</p>
          <h2 className="rm-heading">Media workflows look simple until they become your roadmap.</h2>
          <p className="rm-lead mt-6">
            The challenge is not getting pixels on a screen. The challenge is keeping editors, templates, rendering,
            and AI extensions coherent inside a real product without turning them into a second platform your team has to maintain.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {challenges.map((item) => (
            <div key={item.title} className="rm-card rm-card-hover">
              <div className="rm-icon mb-5">{item.icon}</div>
              <h3 className="text-2xl font-heading font-bold leading-tight">{item.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[17px]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-primary/20 bg-primary/[0.06] p-6 shadow-[0_0_60px_rgba(0,245,255,0.05)]">
          <p className="text-lg leading-relaxed text-foreground">
            Most teams should spend their engineering time on core product logic, distribution, and customer value, not on recreating media infrastructure from scratch.
          </p>
        </div>
      </div>
    </section>
  );
}
