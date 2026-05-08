import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, MapPin, Phone, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | OceanKart - Radaverse Solutions",
  description:
    "Privacy Policy for the OceanKart Android app. Learn what data we collect (including precise and approximate location, foreground and background, and camera), why we need it, how it is shared, and your rights.",
  openGraph: {
    title: "Privacy Policy | OceanKart",
    description:
      "Privacy Policy for the OceanKart bulky water delivery Android app.",
  },
}

const sections: {
  title: string
  content: string
  list?: string[]
}[] = [
  {
    title: "1. Information We Collect",
    content:
      "When you use OceanKart, we collect the following categories of information so we can match clients with suppliers and deliver bulky water orders reliably.",
    list: [
      "Location data — precise location (GPS coordinates) and approximate location (city/area level). We collect location both in the foreground (while the app is open and visible) and as background location (while the app is not in the foreground), so suppliers can be navigated to clients en route to a delivery and clients can receive accurate real-time tracking and ETAs.",
      "Camera and photos — with your permission, the app accesses your camera and photo library so you can upload a profile picture, supplier verification documents, and optional delivery-proof photos.",
      "Personal information — your name, email address, phone number, and delivery addresses.",
      "Account credentials — username, hashed password, and authentication tokens used to sign you in securely.",
      "Payment information — processed through a third-party payment provider; we do not store full card numbers on our servers.",
      "Order and transaction data — order requests, bids, prices, delivery records, ratings and reviews.",
      "Device and usage information — device model, operating system version, unique device identifiers, IP address, app interactions, and crash logs used to diagnose issues and improve the app.",
    ],
  },
  {
    title: "2. Why We Need Location Data",
    content:
      "Location is core to how OceanKart works. We use precise and approximate location, in foreground and background, only for the following purposes:",
    list: [
      "Matching clients with nearby verified suppliers using approximate location.",
      "Providing in-app turn-by-turn navigation for suppliers to the delivery point using precise location.",
      "Real-time GPS tracking so clients can see their supplier en route on a live map.",
      "Calculating accurate delivery ETAs and detecting arrival at the delivery location.",
      "Background location tracking during an active delivery so the live map and ETA continue to update even if the supplier locks their phone or switches apps.",
      "Fraud prevention and dispute resolution — for example, verifying that a delivery was completed at the agreed location.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    content:
      "We use the information described above to operate the OceanKart service. Specifically, we use it to:",
    list: [
      "Create and manage your account and authenticate you securely.",
      "Match clients with suppliers and process order requests, bids and acceptances.",
      "Show real-time delivery tracking and provide turn-by-turn navigation.",
      "Process payments and issue receipts.",
      "Send you transactional notifications about your orders, deliveries and account.",
      "Enable in-app communication and ratings between clients and suppliers.",
      "Detect, investigate and prevent fraud, abuse, and security incidents.",
      "Comply with legal obligations and enforce our Terms & Conditions.",
      "Analyse aggregated, de-identified usage data to improve the service.",
    ],
  },
  {
    title: "4. How We Share Your Information",
    content:
      "We do not sell your personal data. We share information only in the limited circumstances described below.",
    list: [
      "With the other party in a transaction — when an order is accepted, the client and supplier are shown the information needed to complete the delivery (name, contact number, delivery address, and live location during an active delivery).",
      "With service providers we rely on to run OceanKart — including Google Maps Platform (for maps and navigation), Firebase by Google (for authentication, push notifications, analytics and crash reporting), our payment processor (for handling transactions), and our cloud hosting provider.",
      "For legal reasons — to comply with applicable law, lawful requests from authorities, court orders, or to protect the rights, safety and property of OceanKart, our users, or the public.",
      "In a business transfer — if Radaverse Solutions Private Limited is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. You will be notified before your data is transferred and becomes subject to a different privacy policy.",
    ],
  },
  {
    title: "5. Third-Party Services",
    content:
      "OceanKart integrates the following third-party services. Each has its own privacy policy that governs how it handles your data.",
    list: [
      "Google Maps Platform — used to display maps, geocode addresses, and provide turn-by-turn navigation.",
      "Firebase (Google LLC) — used for authentication, push notifications, analytics, and crash reporting.",
      "Payment processor — used to securely accept payments. Card details are entered directly in the processor's secure flow and are not stored on our servers.",
      "Cloud hosting provider — used to host the OceanKart backend and store account, order, and transaction data.",
    ],
  },
  {
    title: "6. Data Security",
    content:
      "We apply appropriate technical and organisational measures to protect your information. Network traffic between the app and our servers is encrypted in transit using TLS, sensitive credentials are hashed, and access to production data is restricted to authorised personnel. No system is 100% secure, but we work continuously to safeguard your data against unauthorised access, alteration, disclosure, or destruction.",
  },
  {
    title: "7. Data Retention",
    content:
      "We keep your personal data for as long as your account is active or as needed to provide the service. Order and transaction records may be retained for longer where required for tax, accounting, fraud prevention, or other legal purposes. When you delete your account, we remove or anonymise your data in line with our Account Deletion Policy.",
  },
  {
    title: "8. Your Rights",
    content:
      "Depending on where you live, you may have the following rights in relation to your personal data:",
    list: [
      "Access — request a copy of the personal data we hold about you.",
      "Correction — ask us to correct information that is inaccurate or incomplete.",
      "Deletion — request that we delete your account and personal data; see our Account Deletion Policy for the in-app and email deletion routes.",
      "Withdraw consent — for permissions you granted (such as background location or camera access), you can withdraw consent at any time in your device settings. Disabling required permissions may limit the features available to you.",
      "Object to or restrict processing — for certain types of processing.",
      "Lodge a complaint — with your local data protection authority.",
    ],
  },
  {
    title: "9. Children's Privacy",
    content:
      "OceanKart is not intended for, and we do not knowingly collect personal information from, children under 18. If you believe a child has provided us with personal information, please contact us and we will take steps to delete it.",
  },
  {
    title: "10. International Users",
    content:
      "OceanKart is operated from Zimbabwe. If you access the service from outside Zimbabwe, your information may be transferred to, stored, and processed in Zimbabwe and in countries where our service providers operate. By using OceanKart, you consent to this transfer.",
  },
  {
    title: "11. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices, the app, or applicable law. When we make material changes, we will update the \"Last updated\" date below and, where appropriate, notify you in the app or by email before the changes take effect.",
  },
]

export default function OceanKartPrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/oceankart">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to OceanKart
            </Link>
          </Button>

          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">
                Privacy Policy
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              How OceanKart collects, uses, and protects your data — including
              precise and approximate location, foreground and background
              location, and camera access.
            </p>
          </div>

          <div className="mb-12 rounded-lg bg-muted p-6">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              App Information
            </h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">App Name:</span>{" "}
                OceanKart
              </p>
              <p>
                <span className="font-medium text-foreground">Developer:</span>{" "}
                Radaverse Solutions Private Limited
              </p>
              <p>
                <span className="font-medium text-foreground">Contact:</span>{" "}
                <a
                  href="mailto:support@radaversolutions.com"
                  className="text-primary hover:underline"
                >
                  support@radaversolutions.com
                </a>
              </p>
            </div>
          </div>

          <div className="mb-12 rounded-2xl bg-card border border-border p-8">
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy describes how Radaverse Solutions Private
              Limited (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;)
              collects, uses, shares, and protects information about you when
              you use the OceanKart Android application and related services
              (the &ldquo;Service&rdquo;). By using OceanKart, you agree to the
              collection and use of information in accordance with this
              Privacy Policy.
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section) => (
              <section
                key={section.title}
                className="border-b border-border pb-8 last:border-b-0"
              >
                <h2 className="mb-4 text-2xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
                {section.list && (
                  <ul className="space-y-3 ml-6">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-muted-foreground"
                      >
                        <span className="text-primary font-bold">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl bg-card border border-border p-8">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or how
              OceanKart handles your data, please contact us:
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
                Radaverse Solutions Private Limited, Harare, Zimbabwe
              </div>
            </div>
          </section>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild>
              <Link href="/oceankart">Back to OceanKart</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/oceankart/deletion">Account Deletion Policy</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/terms">Terms &amp; Conditions</Link>
            </Button>
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
