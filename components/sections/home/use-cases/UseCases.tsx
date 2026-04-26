import { Bot, BriefcaseBusiness, MonitorPlay, PanelsTopLeft, ShoppingBag } from "lucide-react";

export default function UseCases() {
  const cases = [
    {
      icon: <Bot />,
      title: "AI video tools",
      description: "Add editing, captions, transcript workflows, and rendering without spending months building the media layer from zero.",
    },
    {
      icon: <PanelsTopLeft />,
      title: "Content & media SaaS",
      description: "Give users in-app creation, templates, previews, and exports without turning your core team into a media infrastructure team.",
    },
    {
      icon: <MonitorPlay />,
      title: "Marketing platforms",
      description: "Generate branded image and video assets from templates, forms, campaign data, or approval workflows.",
    },
    {
      icon: <BriefcaseBusiness />,
      title: "Marketing & content agencies",
      description: "Build internal tools for repeatable creative production, faster client revisions, and standardized delivery.",
    },
    {
      icon: <ShoppingBag />,
      title: "Product customization platforms",
      description: "Add design editing and server-side rendering for personalized products, mockups, print files, and previews.",
    },
  ];

  return (
    <section className="rm-section" id="use-cases">
      <div className="rm-container">
        <div className="mb-14 max-w-3xl">
          <p className="rm-eyebrow">06 / Who It&apos;s For</p>
          <h2 className="rm-heading">Built for teams that need embedded media workflows inside a real product.</h2>
          <p className="rm-lead mt-6">
            Rendermind is strongest when image, video, captioning, rendering, or template workflows need to fit inside
            existing product logic instead of living in a separate tool.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cases.map((item) => (
            <div key={item.title} className="rm-card rm-card-hover group">
              <div className="mb-6 w-fit text-primary transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <h4 className="mb-4 text-2xl font-heading font-bold leading-tight">{item.title}</h4>
              <p className="text-base leading-relaxed text-muted-foreground md:text-[17px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
