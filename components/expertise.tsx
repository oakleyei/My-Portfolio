import {
  BookOpen,
  Monitor,
  Target,
  PenTool,
  BarChart3,
  Users,
} from "lucide-react"

const expertiseAreas = [
  {
    icon: BookOpen,
    title: "Curriculum Development",
    description:
      "Designing comprehensive learning programs aligned with educational objectives and learner needs.",
  },
  {
    icon: Monitor,
    title: "E-Learning Design",
    description:
      "Creating engaging online courses using tools like Articulate Storyline, Rise, and Adobe Captivate.",
  },
  {
    icon: Target,
    title: "Learning Strategy",
    description:
      "Developing data-driven learning strategies that improve performance and engagement.",
  },
  {
    icon: PenTool,
    title: "Visual Design",
    description:
      "Crafting intuitive, accessible interfaces that enhance the learning experience.",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    description:
      "Measuring learning outcomes and iterating designs based on assessment data.",
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description:
      "Collaborating with SMEs, faculty, and teams to deliver quality learning solutions.",
  },
]

const tools = [
  "Articulate Storyline",
  "Articulate Rise",
  "Adobe Captivate",
  "Camtasia",
  "Canvas LMS",
  "Moodle",
  "Adobe Creative Suite",
  "Figma",
  "H5P",
  "SCORM/xAPI",
  "Bloomberg Terminal",
  "Microsoft Excel",
]

export function Expertise() {
  return (
    <section id="expertise" className="bg-section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          Skills
        </p>
        <h2 className="font-serif text-4xl font-bold text-foreground">
          Areas of Expertise
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <area.icon
                size={28}
                className="text-accent transition-transform group-hover:scale-110"
              />
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools & Tech */}
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl font-bold text-foreground">
            Tools & Technologies
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
