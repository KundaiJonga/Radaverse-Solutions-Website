import { Target, Lightbulb, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "We're committed to creating technology that solves real-world problems and improves lives in our communities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technology and creative thinking to deliver solutions that stand out in the market.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Our products are built with the community in mind, connecting people and businesses for mutual benefit.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "We optimize every process to ensure our solutions are fast, reliable, and cost-effective for all users.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Building Tomorrow&apos;s Technology Today
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Radaverse Solutions Private Limited is a technology company based in Harare, Zimbabwe. 
            We specialize in developing innovative software solutions that connect businesses with their customers.
          </p>
        </div>

        {/* Our story */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded with a vision to transform how businesses operate in Zimbabwe and beyond, 
              Radaverse Solutions was born from the desire to bridge gaps in essential services 
              through technology.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our flagship product, OceanKart, addresses a critical need in the water delivery 
              industry by creating a seamless platform that connects suppliers with clients. 
              This is just the beginning of our journey to revolutionize multiple industries.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-primary">R</div>
                <div className="mt-4 text-xl font-semibold text-foreground">Radaverse</div>
                <div className="text-sm text-muted-foreground">Solutions Pvt. Ltd.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-bold text-foreground mb-12">Our Values</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="relative rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-6 text-lg font-semibold text-foreground">{value.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
