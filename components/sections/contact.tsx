import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Get in Touch
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Have questions? We&apos;d love to hear from you. Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
          <a
            href="mailto:support@radaversolutions.com"
            className="group rounded-2xl bg-card border border-border p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-foreground">Email</h3>
            <p className="mt-2 text-sm text-muted-foreground">support@radaversolutions.com</p>
          </a>

          <a
            href="tel:+263777226376"
            className="group rounded-2xl bg-card border border-border p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-foreground">Phone</h3>
            <p className="mt-2 text-sm text-muted-foreground">+263 77 722 6376</p>
          </a>

          <div className="group rounded-2xl bg-card border border-border p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-foreground">Address</h3>
            <p className="mt-2 text-sm text-muted-foreground">Harare, Zimbabwe</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            For app support, please email us at{" "}
            <a href="mailto:support@radaversolutions.com" className="text-primary hover:underline">
              support@radaversolutions.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
