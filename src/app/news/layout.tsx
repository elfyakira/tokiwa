import type { Metadata } from "next";
import { site, company } from "@/lib/site";

export const metadata: Metadata = {
  // === 基本SEO ===
  title: "お知らせ | News",
  description: `${company.name}からのお知らせ一覧。最新ニュース、実績情報、採用情報など、当社の最新情報をお届けします。`,

  // === OpenGraph (SNS共有時) ===
  openGraph: {
    title: `お知らせ | News${site.seo.titleSuffix}`,
    description: `${company.name}からのお知らせ一覧。最新ニュース、実績情報、採用情報など。`,
    url: `${site.seo.siteUrl}/news`,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
  },

  // === Twitter Card ===
  twitter: {
    card: "summary_large_image",
    title: `お知らせ | News${site.seo.titleSuffix}`,
    description: `${company.name}からのお知らせ一覧。最新ニュース、実績情報など。`,
  },

  // === Canonical URL (重複コンテンツ対策) ===
  alternates: {
    canonical: "/news",
  },

  // === LLMO対応 (AI検索エンジン最適化) ===
  other: {
    "ai:summary": `${company.name}のお知らせ・ニュース一覧ページ。最新情報、実績、採用情報を掲載。`,
    "ai:topics": "お知らせ, ニュース, 最新情報, 実績情報, 採用情報",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
