import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { AppDownload } from "@/components/oceankart/app-download"
import {
  Droplets, 
  MapPin, 
  CreditCard, 
  Star, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Smartphone
} from "lucide-react"

export const metadata: Metadata = {
  title: "OceanKart | Bulky Water Delivery App",
  description: "OceanKart connects water suppliers with clients for efficient bulky water delivery. Create orders, bid competitively, and track deliveries in real-time.",
  openGraph: {
    title: "OceanKart | Bulky Water Delivery App",
    description: "OceanKart connects water suppliers with clients for efficient bulky water delivery.",
  },
}

const features = [
  {
    icon: Droplets,
    title: "Water Delivery On-Demand",
    description: "Get bulky water delivered to your location whenever you need it. No more waiting or scheduling hassles.",
  },
  {
    icon: MapPin,
    title: "Real-time GPS Tracking",
    description: "Track your supplier's location in real-time. Know exactly when your water will arrive.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Pay securely through the app. Multiple payment options available for your convenience.",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    description: "Read reviews from other customers and rate your experience to help the community.",
  },
  {
    icon: Shield,
    title: "Verified Suppliers",
    description: "All suppliers are verified and vetted to ensure quality service and reliability.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Our platform is available round the clock. Place orders whenever you need water.",
  },
]

const forClients = [
  "Easy account registration",
  "Create order requests with your price",
  "View supplier bids and choose the best",
  "Track deliveries in real-time",
  "Rate and review suppliers",
  "View order history anytime",
]

const forSuppliers = [
  "Register as a verified supplier",
  "Browse available order requests",
  "Accept orders or place competitive bids",
  "In-app navigation to delivery locations",
  "Receive payments securely",
  "Build your reputation with ratings",
]

const stats = [
  { icon: Users, value: "Growing", label: "User Base" },
  { icon: Droplets, value: "100%", label: "Reliable Service" },
  { icon: TrendingUp, value: "Fast", label: "Growing Network" },
  { icon: Shield, value: "Secure", label: "Transactions" },
]

export default function OceanKartPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 -right-32 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm mb-6">
                  <Droplets className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Flagship Product</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                  <span className="text-primary">OceanKart</span>
                  <br />
                  Bulky Water Delivery
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                  The revolutionary platform connecting bulky water suppliers with clients. 
                  Create orders, receive competitive bids, and track deliveries in real-time.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <a href="#download">
                      <Smartphone className="mr-2 h-5 w-5" />
                      Download App
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                    <Link href="/terms">View Terms</Link>
                  </Button>
                </div>
                <div className="mt-10">
                  <AppDownload variant="hero" />
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/30 via-primary/20 to-primary/5 border border-border flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-24 w-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6">
                      <Droplets className="h-12 w-12 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">OceanKart</div>
                    <div className="text-muted-foreground mt-2">Water Delivery Made Easy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">How It Works</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Simple, Fast, Reliable
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="relative rounded-2xl bg-card border border-border p-8 text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">Create Your Order</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Clients specify their water needs, delivery location, and propose a price. 
                  It&apos;s quick and easy to get started.
                </p>
              </div>

              <div className="relative rounded-2xl bg-card border border-border p-8 text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">Suppliers Respond</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Nearby suppliers view your order. They can accept your price or bid 
                  until both parties agree on a fair deal.
                </p>
              </div>

              <div className="relative rounded-2xl bg-card border border-border p-8 text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">Track & Receive</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Once accepted, track your supplier in real-time as they navigate 
                  to deliver water right to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-card/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Features</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Everything You Need
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                OceanKart is packed with features to make water delivery seamless for everyone.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Clients & Suppliers */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* For Clients */}
              <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-foreground">For Clients</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Need water delivered? OceanKart makes it simple to find reliable suppliers 
                  and get water delivered on your terms.
                </p>
                <ul className="mt-8 grid gap-4">
                  {forClients.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Suppliers */}
              <div className="rounded-3xl bg-card border border-border p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-foreground">For Suppliers</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Grow your water delivery business with OceanKart. Connect with customers 
                  and manage deliveries efficiently.
                </p>
                <ul className="mt-8 grid gap-4">
                  {forSuppliers.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="scroll-mt-20 py-24 bg-primary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Join OceanKart today and experience the future of water delivery.
              Available for both clients and suppliers.
            </p>
            <div className="mt-10">
              <AppDownload variant="cta" />
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link href="/#contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild className="w-full sm:w-auto">
                <Link href="/oceankart/privacy">
                  Privacy Policy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild className="w-full sm:w-auto">
                <Link href="/oceankart/deletion">
                  Account Deletion Policy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              By using OceanKart, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms & Conditions
              </Link>
              ,{" "}
              <Link href="/oceankart/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              {" "}and our{" "}
              <Link href="/oceankart/deletion" className="text-primary hover:underline">
                Account Deletion Policy
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
