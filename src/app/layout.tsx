import type { Metadata, Viewport } from "next";
import { Anton, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingRecruitButton from "@/components/FloatingRecruitButton";
import { seo, company, contact, locations } from "@/lib/site";

// Antonフォント（タイトル用）
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

// Oswaldフォント（ボタン用 - Antonに近い雰囲気で細いウェイト対応）
const oswald = Oswald({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

// JSON-LD構造化データ
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: seo.defaultDescription,
  url: seo.siteUrl,
  telephone: contact.phone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    postalCode: locations.headquarters.zipCode,
    addressCountry: "JP",
    streetAddress: locations.headquarters.address,
  },
  founder: company.ceo,
  foundingDate: company.established,
};

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.defaultTitle || company.name,
    template: `%s${seo.titleSuffix}`,
  },
  description: seo.defaultDescription,

  // favicon
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo-square.png" },
    ],
  },

  // canonical URL
  alternates: {
    canonical: "/",
  },

  // robots
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

  // OGP
  openGraph: {
    title: seo.defaultTitle || company.name,
    description: seo.defaultDescription,
    url: seo.siteUrl,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: company.name,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle || company.name,
    description: seo.defaultDescription,
    images: ["/images/og-image.jpg"],
  },
};

// Viewport
export const viewport: Viewport = {
  themeColor: "#1a2744",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${anton.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingRecruitButton />
      </body>
    </html>
  );
}
