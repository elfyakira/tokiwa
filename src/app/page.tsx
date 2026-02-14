"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { company, contact, site } from "@/lib/site";
import { FadeInUp, StaggerContainer } from "@/components/animations";

// ============================================================
// コンテンツデータ（構成案に基づいて編集してください）
// ============================================================

// メインビジュアル
const FIRST_VIEW = {
  catchphrase: "キャッチコピーを入力", // 例: 創業40年。名古屋で選ばれ続ける理由がある。
  subCopy: "サブコピーを入力", // 例: 設計から施工、アフターフォローまで。
  ctaText: "無料で相談する",
  secondaryCtaText: "詳細を見る →",
  backgroundImage: "/images/generated/top_fv_main.jpg",
};

// 実績数値
const STATS = [
  { number: "00", unit: "年", description: "創業からの歩み" },
  { number: "000", unit: "件以上", description: "累計実績" },
  { number: "00", unit: "名", description: "社員数" },
  { number: "00", unit: "%以上", description: "顧客満足度" },
];

// 会社紹介セクション
const ABOUT = {
  heading: "私たちについて",
  paragraphs: [
    "会社の紹介文を入力してください。",
    "事業への想いや強みを記載してください。",
  ],
  image: "/images/generated/company_cafeteria.jpg",
};

// サービス一覧
const SERVICES = [
  {
    title: "サービス1",
    description: "サービスの説明文を入力してください。",
    image: "/images/generated/project_house.jpg",
  },
  {
    title: "サービス2",
    description: "サービスの説明文を入力してください。",
    image: "/images/generated/project_shopping_mall.jpg",
  },
  {
    title: "サービス3",
    description: "サービスの説明文を入力してください。",
    image: "/images/generated/renovation_interior.jpg",
  },
  {
    title: "サービス4",
    description: "サービスの説明文を入力してください。",
    image: "/images/generated/inspection_work.jpg",
  },
];

// 実績一覧
const WORKS = [
  {
    category: "カテゴリ",
    name: "実績タイトル1",
    year: "2024年",
    image: "/images/generated/project_public_building.jpg",
  },
  {
    category: "カテゴリ",
    name: "実績タイトル2",
    year: "2024年",
    image: "/images/generated/project_shopping_mall.jpg",
  },
  {
    category: "カテゴリ",
    name: "実績タイトル3",
    year: "2024年",
    image: "/images/generated/project_house.jpg",
  },
];

// 採用セクション
const RECRUIT = {
  heading: "一緒に働きませんか",
  subHeading: "採用情報のキャッチコピーを入力",
  stats: [
    { value: "00%", label: "定着率" },
    { value: "月00h", label: "残業" },
    { value: "取得しやすい", label: "有給" },
  ],
  backgroundImage: "/images/generated/mentoring_scene.jpg",
};

// お知らせ
const NEWS = [
  { date: "2026.01.01", category: "お知らせ", title: "お知らせタイトル1", slug: "1" },
  { date: "2026.01.01", category: "お知らせ", title: "お知らせタイトル2", slug: "2" },
  { date: "2026.01.01", category: "お知らせ", title: "お知らせタイトル3", slug: "3" },
];

// CTAセクション
const CTA = {
  heading: "お気軽にご相談ください",
  description: "ご相談、お見積りは無料です。",
};

// ============================================================
// セクションコンポーネント
// ============================================================

function FirstView() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[500px] lg:min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={FIRST_VIEW.backgroundImage}
          alt="メインビジュアル"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-5 lg:px-[10%]">
        <div
          className={`transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-[28px] lg:text-[48px] font-bold text-white leading-[1.4] tracking-[0.02em] text-center lg:text-left whitespace-pre-line">
            {company.catchphrase || FIRST_VIEW.catchphrase}
          </h1>
        </div>

        <div
          className={`transition-all duration-800 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="mt-4 lg:mt-6 text-[15px] lg:text-lg text-white leading-[1.7] text-center lg:text-left whitespace-pre-line">
            {FIRST_VIEW.subCopy}
          </p>
        </div>

        <div
          className={`mt-8 lg:mt-10 flex flex-col lg:flex-row gap-4 items-center lg:items-start transition-all duration-800 ease-out delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link href="/contact" className="btn-primary px-10 py-4 text-base font-semibold">
            {FIRST_VIEW.ctaText}
          </Link>
          <Link href="/service" className="btn-outline-white px-8 py-4">
            {FIRST_VIEW.secondaryCtaText}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
        <span className="text-xs tracking-wider">Scroll</span>
        <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = site.stats.yearsInBusiness ? [
    { number: site.stats.yearsInBusiness, unit: "年", description: "創業からの歩み" },
    { number: site.stats.projectsCompleted, unit: "件以上", description: "累計実績" },
    { number: site.stats.employees, unit: "名", description: "社員数" },
    { number: site.stats.retentionRate, unit: "%以上", description: "定着率" },
  ] : STATS;

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-[48px] lg:text-[64px] font-bold text-navy">{stat.number}</span>
                <span className="text-lg lg:text-2xl text-navy">{stat.unit}</span>
              </div>
              <p className="mt-1 lg:mt-2 text-xs lg:text-sm text-text-secondary">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-container mx-auto px-4 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-center">
          <FadeInUp className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src={ABOUT.image} alt="会社紹介" fill className="object-cover" />
            </div>
          </FadeInUp>

          <FadeInUp className="w-full lg:w-1/2 order-2 lg:order-1" delay={0.1}>
            <span className="section-label">About Us</span>
            <h2 className="text-[28px] lg:text-[36px] font-bold text-text-primary leading-[1.4] mb-6 lg:mb-8 whitespace-pre-line">
              {company.mission || ABOUT.heading}
            </h2>
            <div className="text-[15px] lg:text-base text-text-primary leading-[1.8] space-y-4">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-6 lg:mt-8">
              <Link href="/about" className="text-link text-[15px] font-semibold">
                会社概要を見る
              </Link>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = site.services.length > 0 ? site.services : SERVICES;

  return (
    <section className="section-padding bg-bg-light">
      <div className="max-w-container mx-auto px-4 lg:px-12">
        <FadeInUp className="text-center mb-10 lg:mb-[60px]">
          <span className="section-label">Service</span>
          <h2 className="text-[28px] lg:text-[36px] font-bold text-text-primary">私たちの事業</h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
          {services.map((service, index) => (
            <div key={index}>
              <div className="relative aspect-[3/2] rounded overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <h3 className="mt-4 lg:mt-5 text-lg lg:text-xl font-semibold text-text-primary">{service.title}</h3>
              <p className="mt-2 text-[13px] lg:text-sm text-text-secondary leading-[1.6]">{service.description}</p>
            </div>
          ))}
        </StaggerContainer>

        <FadeInUp className="mt-10 lg:mt-12 text-center" delay={0.4}>
          <Link href="/service" className="text-link">サービス詳細を見る</Link>
        </FadeInUp>
      </div>
    </section>
  );
}

function WorksSection() {
  const works = site.works.length > 0 ? site.works : WORKS;

  return (
    <section className="section-padding bg-white">
      <div className="max-w-container mx-auto px-4 lg:px-12">
        <div className="mb-8 lg:mb-12">
          <span className="section-label">Works</span>
          <h2 className="text-[28px] lg:text-[36px] font-bold text-text-primary">実績</h2>
        </div>

        <div className="hidden lg:grid grid-cols-[580px_1fr] gap-6">
          <Link href="/service#works" className="group">
            <div className="relative h-[450px] rounded overflow-hidden">
              <Image src={works[0]?.image || ""} alt={works[0]?.name || ""} fill className="object-cover transition-opacity group-hover:opacity-90" />
            </div>
            <div className="mt-4">
              <span className="text-xs font-semibold text-accent">{works[0]?.category}</span>
              <h3 className="mt-1 text-lg font-semibold text-text-primary">{works[0]?.name}</h3>
              <p className="mt-1 text-sm text-text-secondary">{works[0]?.year}</p>
            </div>
          </Link>

          <div className="flex flex-col gap-6">
            {works.slice(1, 3).map((work, index) => (
              <Link href="/service#works" key={index} className="group">
                <div className="relative h-[213px] rounded overflow-hidden">
                  <Image src={work.image} alt={work.name} fill className="object-cover transition-opacity group-hover:opacity-90" />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-semibold text-accent">{work.category}</span>
                  <h3 className="mt-1 text-lg font-semibold text-text-primary">{work.name}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{work.year}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-6">
          {works.map((work, index) => (
            <Link href="/service#works" key={index} className="block group">
              <div className="relative h-[200px] rounded overflow-hidden">
                <Image src={work.image} alt={work.name} fill className="object-cover transition-opacity group-hover:opacity-90" />
              </div>
              <div className="mt-4">
                <span className="text-xs font-semibold text-accent">{work.category}</span>
                <h3 className="mt-1 text-lg font-semibold text-text-primary">{work.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">{work.year}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-right">
          <Link href="/service#works" className="text-link">実績一覧を見る</Link>
        </div>
      </div>
    </section>
  );
}

function RecruitSection() {
  return (
    <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image src={RECRUIT.backgroundImage} alt="採用" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="relative z-10 text-center px-4">
        <span className="text-sm font-semibold text-white tracking-[0.1em]">Recruit</span>
        <h2 className="mt-4 text-2xl lg:text-[36px] font-bold text-white leading-[1.4]">{RECRUIT.heading}</h2>
        <p className="mt-4 lg:mt-6 text-[15px] lg:text-lg text-white">{RECRUIT.subHeading}</p>

        <div className="mt-6 lg:mt-8 flex flex-col lg:flex-row justify-center gap-4 lg:gap-12">
          {RECRUIT.stats.map((stat, index) => (
            <div key={index}>
              <span className="text-2xl lg:text-[32px] font-bold text-white">{stat.value}</span>
              <p className="text-xs lg:text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 lg:mt-10">
          <Link href="/recruit" className="btn-primary px-12 py-4">採用情報を見る</Link>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  const news = site.news.length > 0 ? site.news : NEWS;

  return (
    <section className="py-[60px] lg:py-[100px] bg-white">
      <div className="max-w-container mx-auto px-4 lg:px-12">
        <div className="lg:flex lg:gap-20">
          <div className="mb-6 lg:mb-0 lg:w-48">
            <h2 className="text-2xl lg:text-[28px] font-bold text-text-primary">お知らせ</h2>
          </div>

          <div className="flex-1">
            <ul>
              {news.map((item, index) => (
                <li key={index} className="border-b border-gray-200">
                  <Link href={`/news/${item.slug}`} className="block py-4 lg:py-5 group hover:bg-gray-50 transition-colors -mx-2 px-2">
                    <div className="hidden lg:flex items-center gap-6">
                      <span className="text-sm text-text-secondary w-24">{item.date}</span>
                      <span className="text-xs font-semibold text-accent">{item.category}</span>
                      <span className="flex-1 text-base text-text-primary group-hover:text-accent transition-colors">{item.title}</span>
                    </div>
                    <div className="lg:hidden">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs text-text-secondary">{item.date}</span>
                        <span className="text-xs font-semibold text-accent">{item.category}</span>
                      </div>
                      <span className="text-[15px] text-text-primary">{item.title}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 lg:text-right">
              <Link href="/news" className="text-link">お知らせ一覧</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-[60px] lg:py-20 bg-bg-light">
      <div className="max-w-narrow mx-auto px-4 lg:px-12 text-center">
        <h2 className="text-2xl lg:text-[32px] font-bold text-text-primary mb-4">{CTA.heading}</h2>
        <p className="text-sm lg:text-base text-text-secondary mb-8 lg:mb-10">{CTA.description}</p>

        {contact.phone && (
          <>
            <a
              href={`tel:${contact.phoneTel || contact.phone.replace(/-/g, "")}`}
              className="block lg:inline-block text-[28px] lg:text-[36px] font-bold text-navy mb-2"
            >
              {contact.phoneFormatted || contact.phone}
            </a>
            <p className="text-sm text-text-secondary mb-8">受付時間: {contact.hours}</p>
          </>
        )}

        <Link href="/contact" className="btn-primary px-14 py-[18px] text-base font-semibold">
          お問い合わせフォームへ
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <FirstView />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <RecruitSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
