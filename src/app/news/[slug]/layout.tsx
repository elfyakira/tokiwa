import type { Metadata } from "next";
import { site, company } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

// 動的ページ用のメタデータ生成
// ※ページ固有のtitle/descriptionはpage.tsxのgenerateMetadataで設定
// ※このlayoutではOpenGraph/Canonical/LLMO共通設定を提供
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // site.jsonからニュースを検索
  const newsItem = site.news.find((item) => item.slug === slug);

  const title = newsItem?.title || "お知らせ詳細";
  const description = newsItem
    ? `${newsItem.title} - ${company.name}からのお知らせ`
    : `${company.name}からのお知らせ詳細ページ`;

  return {
    // === OpenGraph (SNS共有時) ===
    openGraph: {
      title: `${title}${site.seo.titleSuffix}`,
      description: description,
      url: `${site.seo.siteUrl}/news/${slug}`,
      siteName: company.name,
      locale: "ja_JP",
      type: "article",
    },

    // === Twitter Card ===
    twitter: {
      card: "summary_large_image",
      title: `${title}${site.seo.titleSuffix}`,
      description: description,
    },

    // === Canonical URL (重複コンテンツ対策) ===
    alternates: {
      canonical: `/news/${slug}`,
    },

    // === LLMO対応 (AI検索エンジン最適化) ===
    other: {
      "ai:summary": description,
      "ai:topics": "お知らせ, ニュース詳細, 企業情報",
    },
  };
}

export default function NewsDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
