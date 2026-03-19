import Link from "next/link"
import { Droplets, Mail, Phone, MapPin } from "lucide-react"

const footerNavigation = {
  company: [
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ],
  products: [
    { name: "OceanKart", href: "/oceankart" },
  ],
  legal: [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Droplets className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Radaverse</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Radaverse Solutions Private Limited - Building innovative technology solutions that connect businesses and communities.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Products</h3>
              <ul className="mt-4 space-y-3">
                {footerNavigation.products.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Legal</h3>
              <ul className="mt-4 space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="mailto:support@radaversolutions.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
              support@radaversolutions.com
            </a>
            <a href="tel:+263777226376" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              +263 77 722 6376
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Harare, Zimbabwe
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Radaverse Solutions Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
