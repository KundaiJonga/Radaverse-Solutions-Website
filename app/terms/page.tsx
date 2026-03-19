import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Conditions | OceanKart - Radaverse Solutions",
  description: "Read the Terms and Conditions for using OceanKart, the bulky water delivery platform by Radaverse Solutions.",
  openGraph: {
    title: "Terms & Conditions | OceanKart",
    description: "Terms and Conditions for using OceanKart water delivery platform.",
  },
}

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using Ocean Kart ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms and Conditions, please do not use our Service.`,
  },
  {
    title: "2. Description of Service",
    content: `Ocean Kart is a platform that connects clients with suppliers for the delivery of goods and services. We facilitate the transaction but are not directly involved in the actual transaction between clients and suppliers.`,
  },
  {
    title: "3. User Accounts",
    content: `To use certain features of our Service, you must register for an account. You are responsible for:`,
    list: [
      "Maintaining the confidentiality of your account credentials",
      "All activities that occur under your account",
      "Providing accurate and complete information",
      "Updating your information to keep it accurate",
    ],
  },
  {
    title: "4. User Responsibilities",
    content: `As a user of Ocean Kart, you agree to:`,
    list: [
      "Use the Service only for lawful purposes",
      "Not engage in any fraudulent activities",
      "Provide accurate information about orders and deliveries",
      "Respect other users and suppliers",
      "Not violate any local, state, or federal laws",
    ],
  },
  {
    title: "5. Supplier Responsibilities",
    content: `Suppliers using Ocean Kart agree to:`,
    list: [
      "Provide accurate information about their services",
      "Fulfill orders in a timely manner",
      "Maintain appropriate licenses and permits",
      "Follow all applicable laws and regulations",
      "Maintain insurance coverage as required",
    ],
  },
  {
    title: "6. Payments and Fees",
    content: `Ocean Kart may charge fees for using the Service. All fees are non-refundable unless otherwise stated. Payment processing is handled securely through our payment partners. You are responsible for all charges incurred under your account.`,
  },
  {
    title: "7. Cancellation Policy",
    content: `Orders may be cancelled before a supplier accepts the bid without penalty. Once a supplier accepts, cancellation may incur fees. Suppliers may cancel orders in exceptional circumstances. Repeated cancellations may result in account suspension.`,
  },
  {
    title: "8. Ratings and Reviews",
    content: `Users may rate and review suppliers after order completion. Reviews must be honest and based on actual experiences. Ocean Kart reserves the right to remove reviews that violate our policies or are deemed inappropriate.`,
  },
  {
    title: "9. Privacy and Data Protection",
    content: `Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal data. By using our Service, you consent to the collection and use of information as outlined in our Privacy Policy.`,
  },
  {
    title: "10. Intellectual Property",
    content: `All content, features, and functionality of Ocean Kart are owned by us and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.`,
  },
  {
    title: "11. Limitation of Liability",
    content: `Ocean Kart acts as a platform connecting clients and suppliers. We are not liable for the actions, quality of service, or any damages arising from interactions between users and suppliers. Our liability is limited to the maximum extent permitted by law.`,
  },
  {
    title: "12. Indemnification",
    content: `You agree to indemnify and hold harmless Ocean Kart, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of the Service or violation of these Terms.`,
  },
  {
    title: "13. Dispute Resolution",
    content: `Any disputes arising from these Terms or use of our Service shall first be attempted to be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration in accordance with applicable laws.`,
  },
  {
    title: "14. Modifications to Terms",
    content: `We reserve the right to modify these Terms at any time. We will notify users of significant changes. Continued use of the Service after changes constitutes acceptance of the modified Terms.`,
  },
  {
    title: "15. Termination",
    content: `We may terminate or suspend your account and access to the Service at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.`,
  },
  {
    title: "16. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Ocean Kart operates, without regard to its conflict of law provisions.`,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Back button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/oceankart">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to OceanKart
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Terms and Conditions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              for OceanKart - Bulky Water Delivery Platform
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Terms sections */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {sections.map((section) => (
              <section key={section.title} className="mb-10">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
                {section.list && (
                  <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
                    {section.list.map((item) => (
                      <li key={item} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Contact Section */}
            <section className="mt-16 rounded-2xl bg-card border border-border p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                17. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="grid gap-4">
                <a 
                  href="mailto:support@radaversolutions.com" 
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  support@radaversolutions.com
                </a>
                <a 
                  href="tel:+263777226376" 
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  +263 77 722 6376
                </a>
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  Radaverse Solutions, Harare, Zimbabwe
                </div>
              </div>
            </section>

            {/* Agreement notice */}
            <div className="mt-12 rounded-2xl bg-primary/5 border border-border p-8 text-center">
              <p className="text-foreground font-medium">
                By using Ocean Kart, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild>
                  <Link href="/oceankart">Return to OceanKart</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
