import type { Metadata } from "next";
import { Inter, Space_Grotesk, Kalam } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/shared/client-layout";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

// Decorative font — not preloaded so it doesn't block initial render
const kalam = Kalam({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-kalam",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Professional Websites in 48 Hours | Nepal`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "website development nepal",
    "cheap website nepal",
    "website in 48 hours",
    "ecommerce website nepal",
    "business website nepal",
    "website design nepal",
    "web development kathmandu",
    "affordable website nepal",
  ],
  authors: [{ name: "TRx WEB", url: SITE_URL }],
  creator: "TRx WEB",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${SITE_NAME} — Professional Websites in 48 Hours`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Professional Websites in 48 Hours`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Professional Websites in 48 Hours`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${kalam.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to image CDN used site-wide */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
