import Image from "next/image"

const stats = [
  { value: "2x", label: "NCAA Team Captain" },
  { value: "D1", label: "Athlete" },
  { value: "3.5", label: "GPA" },
  { value: "SIE", label: "FINRA Certified" },
]

export function About() {
  return (
    <section id="about" className="bg-section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          About
        </p>
        <h2 className="font-serif text-4xl font-bold text-foreground">
          About Me
        </h2>

        <div className="mt-12 flex flex-col items-start gap-12 lg:flex-row">
          {/* Photo */}
          <div className="relative flex-shrink-0">
            <div className="relative h-72 w-56 overflow-hidden rounded-xl border-2 border-border lg:h-80 lg:w-64">
              <Image
                src="/images/ethan.jpg"
                alt="Ethan Oakley professional headshot"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* decorative corner accent */}
            <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-br-xl border-b-2 border-r-2 border-accent" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {
                "I'm a graduate of Appalachian State University with a B.S. in Business Management and currently pursuing a Master's in Educational Innovation, Technology, and Entrepreneurship at UNC Chapel Hill's Peabody School of Education."
              }
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {
                "My background spans private wealth management, business development, and AI research. I've worked alongside Forbes-listed advisors at Legacy Private Client Services, hold a FINRA SIE certification, and completed Bloomberg Market Concepts training."
              }
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {
                "Beyond finance, I served as a Division I NCAA Wrestling Team Captain at both App State and UNC, and co-founded the Athletes in Business Club at UNC to connect student-athletes with entrepreneurship and career opportunities."
              }
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-accent/40"
            >
              <span className="font-serif text-3xl font-bold text-accent">
                {s.value}
              </span>
              <span className="mt-2 block text-sm text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
