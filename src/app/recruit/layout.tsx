import type { Metadata } from "next";
import { site, company } from "@/lib/site";

export const metadata: Metadata = {
  // === 基本SEO ===
  title: "採用情報 | Recruit",
  description: `${company.name}の採用情報。募集職種、待遇・福利厚生、社員インタビューなど、当社で働く魅力をご紹介します。`,

  // === OpenGraph (SNS共有時) ===
  openGraph: {
    title: `採用情報 | Recruit${site.seo.titleSuffix}`,
    description: `${company.name}の採用情報。募集職種、待遇・福利厚生、社員インタビューなど。`,
    url: `${site.seo.siteUrl}/recruit`,
    siteName: company.name,
    locale: "ja_JP",
    type: "website",
  },

  // === Twitter Card ===
  twitter: {
    card: "summary_large_image",
    title: `採用情報 | Recruit${site.seo.titleSuffix}`,
    description: `${company.name}の採用情報。募集職種、待遇・福利厚生など。`,
  },

  // === Canonical URL (重複コンテンツ対策) ===
  alternates: {
    canonical: "/recruit",
  },

  // === LLMO対応 (AI検索エンジン最適化) ===
  other: {
    "ai:summary": `${company.name}の採用情報ページ。募集職種、待遇・福利厚生、社員インタビューを掲載。`,
    "ai:topics": "採用情報, 求人, 募集職種, 福利厚生, 社員インタビュー",
  },
};

export default function RecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
