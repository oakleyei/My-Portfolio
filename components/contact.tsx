import { Mail, Linkedin, Globe } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-section py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          Contact
        </p>
        <h2 className="font-serif text-4xl font-bold text-foreground">
          {"Let's Connect"}
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          {
            "Interested in collaborating or have a project in mind? I'd love to hear from you."
          }
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <a
              href="mailto:ethanoakley1456@yahoo.com"
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  Email
                </h4>
                <p className="mt-1 text-sm text-muted-foreground transition-colors group-hover:text-accent">
                  ethanoakley1456@yahoo.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ethanoakley/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
                <Linkedin size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  LinkedIn
                </h4>
                <p className="mt-1 text-sm text-muted-foreground transition-colors group-hover:text-accent">
                  linkedin.com/in/ethanoakley
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
                <Globe size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  Portfolio
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  You are here
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-xl border border-border bg-card p-8 lg:col-span-3">
            <form
              action="https://formspree.io/f/placeholder"
              method="POST"
              className="flex flex-col gap-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-foreground"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                  placeholder="What's this about?"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="resize-none rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/85"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
