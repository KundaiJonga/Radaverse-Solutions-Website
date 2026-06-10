"use client"

import QRCode from "react-qr-code"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const APP_STORES = {
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.king97.oceankartwaterdelivery",
  appStore: "https://apps.apple.com/zw/app/oceankart/id6762624582",
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
    </svg>
  )
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#00D9FF"
        d="M3.6 1.3c-.27.28-.43.72-.43 1.29v18.82c0 .57.16 1.01.43 1.29l.06.06L14.2 12.07v-.14L3.66 1.24z"
      />
      <path
        fill="#FFCE00"
        d="M17.74 15.6l-3.54-3.53v-.14l3.54-3.53.08.05 4.19 2.38c1.2.68 1.2 1.79 0 2.47l-4.19 2.38z"
      />
      <path
        fill="#FF3D44"
        d="M17.82 15.55L14.2 12 3.6 22.7c.4.42 1.05.47 1.78.06l12.44-7.2z"
      />
      <path
        fill="#00F076"
        d="M17.82 8.45L5.38 1.25c-.73-.42-1.39-.36-1.78.05L14.2 12z"
      />
    </svg>
  )
}

const STORES = [
  {
    key: "googlePlay" as const,
    url: APP_STORES.googlePlay,
    Icon: GooglePlayIcon,
    line1: "GET IT ON",
    line2: "Google Play",
    ariaLabel: "Download OceanKart on Google Play",
  },
  {
    key: "appStore" as const,
    url: APP_STORES.appStore,
    Icon: AppleIcon,
    line1: "Download on the",
    line2: "App Store",
    ariaLabel: "Download OceanKart on the Apple App Store",
  },
]

export function AppDownload({ variant = "hero" }: { variant?: "hero" | "cta" }) {
  const qrSize = variant === "cta" ? 140 : 120

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
        variant === "cta" && "mx-auto max-w-2xl",
      )}
    >
      {STORES.map((store) => (
        <div
          key={store.key}
          className="flex flex-col items-center gap-4 rounded-2xl bg-card border border-border p-6"
        >
          <a
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={store.ariaLabel}
            className="hidden sm:block rounded-xl bg-white p-3 ring-1 ring-border transition-transform hover:scale-[1.02]"
          >
            <QRCode
              value={store.url}
              size={qrSize}
              level="M"
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </a>
          <span className="hidden sm:block text-xs text-muted-foreground">Scan to download</span>
          <a
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={store.ariaLabel}
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full bg-black text-white hover:bg-black/90 h-12",
            )}
          >
            <store.Icon className="size-6" />
            <span className="flex flex-col items-start leading-none">
              <span className="text-[0.625rem] font-normal">{store.line1}</span>
              <span className="text-base font-semibold">{store.line2}</span>
            </span>
          </a>
        </div>
      ))}
    </div>
  )
}
