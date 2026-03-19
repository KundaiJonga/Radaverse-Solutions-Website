import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Droplets, Truck, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-muted-foreground">Introducing OceanKart</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Innovative Solutions for{" "}
            <span className="text-primary">Tomorrow</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto text-pretty">
            Radaverse Solutions is building the future of technology, starting with OceanKart - 
            the revolutionary platform connecting water suppliers with clients.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/oceankart">
                Discover OceanKart
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/#about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Droplets className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold text-foreground">1</div>
            <div className="text-sm text-muted-foreground mt-1">Product Launched</div>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Truck className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground mt-1">Service Available</div>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-3xl font-bold text-foreground">Growing</div>
            <div className="text-sm text-muted-foreground mt-1">Community</div>
          </div>
        </div>
      </div>
    </section>
  )
}
