import { Briefcase, GraduationCap } from "lucide-react"

const timeline = [
  {
    type: "education" as const,
    period: "2024 - Present",
    title: "M.A. Educational Innovation, Technology & Entrepreneurship",
    org: "UNC Chapel Hill - Peabody School of Education",
    description:
      "Researching AI applications in education, developing innovative curriculum frameworks, and studying the intersection of technology and entrepreneurship in learning.",
    tags: ["AI Research", "EdTech", "Entrepreneurship"],
  },
  {
    type: "work" as const,
    period: "2023 - 2024",
    title: "Private Wealth Management Intern",
    org: "Legacy Private Client Services",
    description:
      "Worked alongside Forbes-listed advisors in private wealth management. Gained hands-on experience in financial planning, portfolio analysis, and high-net-worth client relations.",
    tags: ["Wealth Management", "Financial Planning", "Client Relations"],
  },
  {
    type: "education" as const,
    period: "2020 - 2024",
    title: "B.S. Business Management",
    org: "Appalachian State University",
    description:
      "Earned a 3.5 GPA while serving as D1 NCAA Wrestling Team Captain. Completed Bloomberg Market Concepts training and FINRA SIE certification.",
    tags: ["Business", "Finance", "Leadership"],
  },
  {
    type: "work" as const,
    period: "2024 - Present",
    title: "Co-Founder, Athletes in Business Club",
    org: "UNC Chapel Hill",
    description:
      "Founded and lead a student organization connecting student-athletes with entrepreneurship resources, mentorship, and career development opportunities.",
    tags: ["Entrepreneurship", "Leadership", "Community"],
  },
  {
    type: "work" as const,
    period: "2020 - Present",
    title: "D1 NCAA Wrestling - Team Captain",
    org: "Appalachian State & UNC Chapel Hill",
    description:
      "Two-time NCAA Division I Wrestling Team Captain. Competing at the highest collegiate level while maintaining academic excellence and leadership roles.",
    tags: ["Athletics", "Leadership", "Discipline"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          Journey
        </p>
        <h2 className="font-serif text-4xl font-bold text-foreground">
          Experience & Education
        </h2>

        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-5 top-1 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                    <div className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
                  </div>

                  {/* Spacer for half width */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pl-10" : "md:pr-10"
                    }`}
                  >
                    <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
                      <div className="mb-3 flex items-center gap-2">
                        {item.type === "education" ? (
                          <GraduationCap
                            size={16}
                            className="text-accent"
                          />
                        ) : (
                          <Briefcase size={16} className="text-accent" />
                        )}
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-accent">
                        {item.org}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
