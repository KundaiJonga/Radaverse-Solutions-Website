import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Account Deletion Policy | OceanKart - Radaverse Solutions",
  description:
    "Learn how to delete your OceanKart account and what data will be removed. Account deletion request process and timeframe.",
  openGraph: {
    title: "Account Deletion Policy | OceanKart",
    description:
      "Account Deletion Policy for OceanKart water delivery platform.",
  },
};

const sections = [
  {
    title: "1. How to Request Account Deletion",
    content: `Users can request deletion of their account using one of the following methods:`,
    list: [
      "Inside the app: Go to Profile → Settings → Delete Account",
      "Email request: Contact our support team at support@radaversesolutions.com with your account details",
    ],
  },
  {
    title: "2. What Data Is Deleted",
    content: `When your account is deleted, the following data will be permanently removed:`,
    list: [
      "Profile information (name, email, phone number, delivery address)",
      "Account credentials and authentication data",
      "Order history and transaction details",
      "Payment information and billing data",
      "Communication preferences and notification settings",
      "Account profile picture and personal preferences",
    ],
  },
  {
    title: "3. Data That May Be Retained",
    content: `We may retain certain data for legal, compliance, or operational purposes:`,
    list: [
      "Audit logs and transaction records (retained for up to 30 days for system integrity)",
      "Financial and tax-related records (as required by law)",
      "Compliance and legal documentation",
      "Anonymized data used for analytics and service improvement",
    ],
  },
  {
    title: "4. Deletion Timeframe",
    content: `Account deletion is processed within 7 working days of receipt of your request. Some backup and cached data may take up to 30 days to be fully removed from our systems.`,
  },
  {
    title: "5. Irreversible Action",
    content: `Please note that account deletion is permanent and irreversible. Once your account is deleted:`,
    list: [
      "You will not be able to access your account or any associated data",
      "Your username will become available for use by other users",
      "All active sessions will be terminated",
      "You will need to create a new account to use OceanKart services again",
    ],
  },
  {
    title: "6. Deletion Confirmation",
    content: `For security and verification purposes, you may be asked to confirm your identity before account deletion is processed. We may request:`,
    list: [
      "Verification of your email address",
      "Confirmation of your phone number",
      "Additional identity verification if needed",
    ],
  },
  {
    title: "7. Contact & Support",
    content: `If you have questions about account deletion or need assistance with the process, please contact us:`,
    list: [
      "Email: support@radaversesolutions.com",
      "We typically respond to deletion requests within 1-2 business days",
    ],
  },
];

export default function DeletionPage() {
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

          {/* Header section */}
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                <Trash2 className="h-6 w-6 text-destructive" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">
                Account Deletion Policy
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Learn how to delete your OceanKart account and understand what
              happens to your data.
            </p>
          </div>

          {/* App info box */}
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
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <section
                key={index}
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
                    {section.list.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex gap-3 text-muted-foreground"
                      >
                        <span className="text-primary font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Contact section */}
          <div className="mt-12 rounded-lg bg-blue-50 dark:bg-blue-950/20 p-8">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-foreground">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Need Help?
            </h2>
            <p className="mb-4 text-muted-foreground">
              If you have any questions about our Account Deletion Policy or
              need assistance:
            </p>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Email:</span>{" "}
                <a
                  href="mailto:support@radaversesolutions.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  support@radaversesolutions.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                We typically respond within 1-2 business days.
              </p>
            </div>
          </div>

          {/* Last updated */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>Last updated: March 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
