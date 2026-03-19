import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Droplets, MapPin, CreditCard, Star, ArrowRight, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: Droplets,
    title: "Water Delivery",
    description: "Connect with verified water suppliers in your area for reliable bulky water delivery.",
  },
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Track your order in real-time as suppliers navigate to your location.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Safe and secure payment processing for all your transactions.",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    description: "Rate suppliers and read reviews to make informed decisions.",
  },
]

const benefits = [
  "Easy registration for clients and suppliers",
  "Competitive bidding system for best prices",
  "In-app navigation for suppliers",
  "Order history and tracking",
  "24/7 customer support",
  "Secure and reliable platform",
]

export function ProductSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Our Flagship Product</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            OceanKart - Bulky Water Delivery
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            A revolutionary platform that connects bulky water suppliers with clients, 
            making water delivery efficient, transparent, and accessible.
          </p>
        </div>

        {/* How it works */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-foreground mb-8">How It Works</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative rounded-2xl bg-card border border-border p-8 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                1
              </div>
              <h4 className="mt-4 text-lg font-semibold text-foreground">Create Order</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Clients create an order request specifying their water needs and offer a price.
              </p>
            </div>
            <div className="relative rounded-2xl bg-card border border-border p-8 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                2
              </div>
              <h4 className="mt-4 text-lg font-semibold text-foreground">Suppliers Bid</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Suppliers review orders and either accept or bid until they reach an agreement.
              </p>
            </div>
            <div className="relative rounded-2xl bg-card border border-border p-8 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                3
              </div>
              <h4 className="mt-4 text-lg font-semibold text-foreground">Delivery</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Suppliers navigate using the app to deliver water to the client&apos;s location.
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-card border border-border p-6 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-20 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border p-8 lg:p-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground">Why Choose OceanKart?</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                OceanKart is designed to make water delivery simple, transparent, and efficient for both clients and suppliers.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative h-40 w-40 mb-6">
                <Image
                  src="/images/oceankart-logo.jpeg"
                  alt="OceanKart Logo - Delivering Waves of Trust and Reliability"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Ready to Get Started?</h4>
              <p className="mt-2 text-sm text-muted-foreground">Download OceanKart today</p>
              <Button asChild size="lg" className="mt-6">
                <Link href="/oceankart">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
