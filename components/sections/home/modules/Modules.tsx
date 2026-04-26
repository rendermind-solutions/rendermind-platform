import { BookOpenCheck, Captions, FileImage, Layers3, Search, Video } from "lucide-react";

const modules = [
  {
    icon: <Layers3 className="text-primary" size={20} />,
    title: "Graphic Editor SDK",
    description:
      "Embed a Fabric.js-based editor for canvas design, templates, text, images, SVGs, and product customization workflows.",
  },
  {
    icon: <FileImage className="text-primary" size={20} />,
    title: "Image Renderer",
    description:
      "Generate image and PDF assets from structured templates using a Node.js rendering pipeline.",
  },
  {
    icon: <Video className="text-primary" size={20} />,
    title: "Graphic Video Renderer",
    description:
      "Render animated or media-based design templates into video outputs when your design workflow includes video.",
  },
  {
    icon: <Video className="text-primary" size={20} />,
    title: "Video Editor SDK",
    description:
      "Integrate a React and TypeScript video editor for template-based video creation, captions, clips, and structured editing flows.",
  },
  {
    icon: <BookOpenCheck className="text-primary" size={20} />,
    title: "Video Renderer",
    description:
      "Render Remotion-powered video compositions into MP4 outputs and related video assets.",
  },
  {
    icon: <Captions className="text-primary" size={20} />,
    title: "Transcription & Captions",
    description:
      "Generate multilingual transcripts and add captions to video workflows.",
  },
  {
    icon: <Search className="text-primary" size={20} />,
    title: "Semantic Video Search",
    description:
      "Prototype AI search over transcripts so users can find topics, quotes, and moments inside long-form video.",
    // note: "Best positioned today as an early module or custom AI workflow, not a standalone product.",
    note: "",
  },
];

export default function Modules() {
  return (
    <section className="rm-section" id="modules">
      <div className="rm-container">
        <div className="max-w-3xl">
          <p className="rm-eyebrow">03 / Available Modules</p>
          <h2 className="rm-heading">Concrete modules we can adapt and integrate today.</h2>
          <p className="rm-lead mt-6">
            The offer is intentionally specific: reusable editors, renderers, caption workflows, and AI extensions that
            can be selected and adapted for the workflow you want to launch first.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <div key={module.title} className="rm-card rm-card-hover">
              <div className="rm-icon mb-5">{module.icon}</div>
              <h3 className="text-2xl font-heading font-bold leading-tight">{module.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[17px]">{module.description}</p>
              {module.note ? (
                <p className="mt-5 rounded-lg border border-border/60 bg-background/60 p-4 text-sm leading-relaxed text-foreground/90">{module.note}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
