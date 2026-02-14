"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { FadeInUp, StaggerContainer } from "@/components/animations";

// ============================================================
// 📝 コンテンツデータ（構成案に基づいて編集してください）
// ============================================================

// カテゴリ設定
const CATEGORIES = [
  { id: "all" as const, label: "すべて" },
  { id: "news" as const, label: "お知らせ" },
  { id: "works" as const, label: "実績" },
  { id: "recruit" as const, label: "採用" },
];

type Category = (typeof CATEGORIES)[number]["id"];

// ニュース記事（site.jsonのnewsを使用、なければこちら）
const NEWS_FALLBACK = [
  {
    date: "2024.01.15",
    category: "news" as const,
    title: "ホームページをリニューアルしました",
    slug: "1",
  },
  {
    date: "2024.01.10",
    category: "works" as const,
    title: "〇〇プロジェクトが完了しました",
    slug: "2",
  },
  {
    date: "2024.01.05",
    category: "recruit" as const,
    title: "採用情報を更新しました",
    slug: "3",
  },
];

// カテゴリラベルのマッピング
const CATEGORY_LABELS: Record<string, string> = {
  news: "お知らせ",
  works: "実績",
  recruit: "採用",
};

// カテゴリカラーのマッピング
const getCategoryColor = (category: string) => {
  switch (category) {
    case "news":
      return "text-navy";
    case "works":
      return "text-accent";
    case "recruit":
      return "text-green-700";
    default:
      return "text-navy";
  }
};

// ============================================================
// コンポーネント
// ============================================================

function PageHeader() {
  return (
    <section className="h-[150px] lg:h-[200px] flex items-center justify-center bg-navy">
      <div className="text-center">
        <FadeInUp>
          <p className="text-sm text-white/80 tracking-[0.1em] mb-3">News</p>
          <h1 className="text-[28px] lg:text-[40px] font-bold text-white">
            お知らせ
          </h1>
        </FadeInUp>
      </div>
    </section>
  );
}

function CategoryFilter({
  selected,
  onSelect,
}: {
  selected: Category;
  onSelect: (cat: Category) => void;
}) {
  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="flex justify-center gap-2 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`px-6 py-3 text-[15px] whitespace-nowrap transition-colors ${
                selected === cat.id
                  ? "text-navy border-b-2 border-accent font-semibold"
                  : "text-text-secondary hover:text-navy"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsList({ category }: { category: Category }) {
  const newsItems = site.news.length > 0 ? site.news : NEWS_FALLBACK;

  const filteredNews =
    category === "all"
      ? newsItems
      : newsItems.filter((item) => item.category === category);

  return (
    <section className="pb-10 lg:pb-[60px] bg-white">
      <div className="max-w-[1000px] mx-auto px-4">
        <StaggerContainer as="ul">
          {filteredNews.map((item, index) => {
            const categoryLabel = CATEGORY_LABELS[item.category] || item.category;

            return (
              <li key={index} className="border-b border-gray-200">
                <Link
                  href={`/news/${item.slug}`}
                  className="block py-4 lg:py-6 hover:bg-gray-50 transition-colors -mx-4 px-4"
                >
                  {/* PC Layout */}
                  <div className="hidden lg:flex items-center gap-6">
                    <span className="text-sm text-text-secondary w-28">
                      {item.date}
                    </span>
                    <span
                      className={`text-xs font-semibold px-3 py-1 bg-gray-100 rounded ${getCategoryColor(
                        item.category
                      )}`}
                    >
                      {categoryLabel}
                    </span>
                    <span className="flex-1 text-base text-text-primary hover:text-accent transition-colors">
                      {item.title}
                    </span>
                  </div>
                  {/* SP Layout */}
                  <div className="lg:hidden">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[13px] text-text-secondary">
                        {item.date}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 bg-gray-100 rounded ${getCategoryColor(
                          item.category
                        )}`}
                      >
                        {categoryLabel}
                      </span>
                    </div>
                    <span className="text-[15px] text-text-primary">
                      {item.title}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </StaggerContainer>

        {filteredNews.length === 0 && (
          <FadeInUp>
            <p className="py-12 text-center text-text-secondary">
              該当するお知らせはありません
            </p>
          </FadeInUp>
        )}
      </div>
    </section>
  );
}

function Pagination() {
  // ニュース数が多い場合はページネーションを実装してください
  return (
    <section className="pb-16 lg:pb-20 bg-white">
      <div className="flex justify-center items-center gap-2">
        {/* ページネーションは必要に応じて実装 */}
      </div>
    </section>
  );
}

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  return (
    <>
      <PageHeader />
      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      <NewsList category={selectedCategory} />
      <Pagination />
    </>
  );
}
