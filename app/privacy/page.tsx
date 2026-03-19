import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Radaverse Solutions",
  description: "Read the Privacy Policy for Radaverse Solutions and OceanKart. Learn how we collect, use, and protect your personal data.",
  openGraph: {
    title: "Privacy Policy | Radaverse Solutions",
    description: "Privacy Policy for Radaverse Solutions and OceanKart platform.",
  },
}

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, place an order, or contact us for support. This may include:`,
    list: [
      "Name, email address, and phone number",
      "Delivery address and location data",
      "Payment information",
      "Account credentials",
      "Communication preferences",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:`,
    list: [
      "Provide, maintain, and improve our services",
      "Process transactions and send related information",
      "Connect clients with suppliers for water delivery",
      "Send promotional communications (with your consent)",
      "Respond to your comments, questions, and requests",
      "Monitor and analyze trends, usage, and activities",
    ],
  },
  {
    title: "3. Information Sharing",
    content: `We may share your information in the following circumstances:`,
    list: [
      "With suppliers to facilitate water delivery orders",
      "With service providers who assist in our operations",
      "To comply with legal obligations",
      "To protect our rights, privacy, safety, or property",
      "In connection with a merger, acquisition, or sale of assets",
    ],
  },
  {
    title: "4. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.`,
  },
  {
    title: "5. Your Rights",
    content: `Depending on your location, you may have the following rights:`,
    list: [
      "Access your personal data",
      "Correct inaccurate data",
      "Request deletion of your data",
      "Object to processing of your data",
      "Data portability",
      "Withdraw consent at any time",
    ],
  },
  {
    title: "6. Cookies and Tracking",
    content: `We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. Disabling cookies may affect your experience with our services.`,
  },
  {
    title: "7. Third-Party Links",
    content: `Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.`,
  },
  {
    title: "8. Children's Privacy",
    content: `Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we learn we have collected such information, we will take steps to delete it.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.`,
  },
  {
    title: "10. Data Retention",
    content: `We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Back button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Radaverse Solutions Private Limited
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12 rounded-2xl bg-card border border-border p-8">
            <p className="text-muted-foreground leading-relaxed">
              At Radaverse Solutions, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, 
              including the OceanKart platform.
            </p>
          </div>

          {/* Privacy sections */}
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
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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

            {/* Navigation */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild>
                <Link href="/">Return Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/terms">View Terms & Conditions</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
