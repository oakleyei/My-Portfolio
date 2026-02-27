import Image from "next/image"
import { ArrowDown, FileText } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/wrestling.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Finance Professional &middot; D1 Athlete &middot; Entrepreneur
        </p>
        <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl">
          <span className="text-balance">Finance. Leadership. Innovation.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Building at the intersection of finance, education, and technology.
          From the wrestling mat to the boardroom.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/images/ethan.jpg"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/85"
          >
            <FileText size={16} />
            Download Resume
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-card"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
