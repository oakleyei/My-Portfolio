import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Professional Development Course",
    type: "E-Learning | Corporate Training",
    description:
      "Interactive online course for employee onboarding featuring scenario-based learning and microlearning modules. Reduced training time by 40%.",
    tags: ["Articulate Storyline", "Scenario-Based", "Gamification"],
  },
  {
    title: "Higher Ed Online Course",
    type: "Academic Course Design",
    description:
      "Redesigned undergraduate course for fully online delivery using UDL principles. Achieved 92% student satisfaction rating.",
    tags: ["Canvas LMS", "UDL", "Accessibility"],
  },
  {
    title: "Compliance Training Module",
    type: "Regulatory Training",
    description:
      "Engaging compliance training that transformed dry regulatory content into story-driven scenarios with branching pathways.",
    tags: ["Articulate Rise", "Mobile-First", "SCORM"],
  },
  {
    title: "Educational Video Series",
    type: "Video-Based Learning",
    description:
      "Created and produced 15-part video tutorial series with accompanying interactive assessments and job aids.",
    tags: ["Camtasia", "Video Production", "Job Aids"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          Work
        </p>
        <h2 className="font-serif text-4xl font-bold text-foreground">
          Featured Projects
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          A selection of learning experiences designed across various contexts
          and platforms.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Preview area */}
              <div className="flex h-48 items-center justify-center border-b border-border bg-muted/50">
                <span className="text-sm text-muted-foreground">
                  Project Preview
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="flex-shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                  />
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.type}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
