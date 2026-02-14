"use client";

import Image from "next/image";
import Link from "next/link";
import { site, company, contact } from "@/lib/site";
import { FadeInUp, StaggerContainer, HeroBackground } from "@/components/animations";

// ============================================================
// 📝 コンテンツデータ（構成案に基づいて編集してください）
// ============================================================

// サービス概要（ページ上部のリンク一覧）
const SERVICES_OVERVIEW = [
  {
    id: "service1",
    title: "サービス1",
    description: "サービス1の概要",
    image: "/images/service1.jpg",
  },
  {
    id: "service2",
    title: "サービス2",
    description: "サービス2の概要",
    image: "/images/service2.jpg",
  },
  {
    id: "service3",
    title: "サービス3",
    description: "サービス3の概要",
    image: "/images/service3.jpg",
  },
  {
    id: "service4",
    title: "サービス4",
    description: "サービス4の概要",
    image: "/images/service4.jpg",
  },
];

// サービス詳細
const SERVICE_DETAILS = [
  {
    id: "service1",
    number: "01",
    title: "サービス1のタイトル",
    subtitle: "サービス1のサブタイトル・キャッチコピー",
    description: [
      "サービス1の説明文を入力してください。",
      "このサービスの特徴や強みを伝えます。",
      "お客様にとってのメリットを明確に記載しましょう。",
    ],
    features: [
      "特徴1を入力",
      "特徴2を入力",
      "特徴3を入力",
      "特徴4を入力",
      "特徴5を入力",
    ],
    image: "/images/service1-detail.jpg",
    imageAlt: "サービス1のイメージ",
    ctaLink: "/contact?type=service1",
    ctaText: "サービス1について相談する",
  },
  {
    id: "service2",
    number: "02",
    title: "サービス2のタイトル",
    subtitle: "サービス2のサブタイトル・キャッチコピー",
    description: [
      "サービス2の説明文を入力してください。",
      "このサービスの特徴や強みを伝えます。",
      "お客様にとってのメリットを明確に記載しましょう。",
    ],
    features: [
      "特徴1を入力",
      "特徴2を入力",
      "特徴3を入力",
      "特徴4を入力",
      "特徴5を入力",
    ],
    image: "/images/service2-detail.jpg",
    imageAlt: "サービス2のイメージ",
    ctaLink: "/contact?type=service2",
    ctaText: "サービス2について相談する",
  },
  {
    id: "service3",
    number: "03",
    title: "サービス3のタイトル",
    subtitle: "サービス3のサブタイトル・キャッチコピー",
    description: [
      "サービス3の説明文を入力してください。",
      "このサービスの特徴や強みを伝えます。",
      "お客様にとってのメリットを明確に記載しましょう。",
    ],
    features: [
      "特徴1を入力",
      "特徴2を入力",
      "特徴3を入力",
      "特徴4を入力",
      "特徴5を入力",
    ],
    image: "/images/service3-detail.jpg",
    imageAlt: "サービス3のイメージ",
    ctaLink: "/contact?type=service3",
    ctaText: "サービス3について相談する",
  },
  {
    id: "service4",
    number: "04",
    title: "サービス4のタイトル",
    subtitle: "サービス4のサブタイトル・キャッチコピー",
    description: [
      "サービス4の説明文を入力してください。",
      "このサービスの特徴や強みを伝えます。",
      "お客様にとってのメリットを明確に記載しましょう。",
    ],
    features: [
      "特徴1を入力",
      "特徴2を入力",
      "特徴3を入力",
      "特徴4を入力",
      "特徴5を入力",
    ],
    image: "/images/service4-detail.jpg",
    imageAlt: "サービス4のイメージ",
    ctaLink: "/contact?type=service4",
    ctaText: "サービス4について相談する",
  },
];

// サービスの流れ
const FLOW_STEPS = [
  {
    step: "STEP 01",
    title: "お問い合わせ・ご相談",
    description: "お電話またはフォームでお気軽にご連絡ください。",
  },
  {
    step: "STEP 02",
    title: "ヒアリング",
    description: "詳しいご要望をお聞かせください。",
  },
  {
    step: "STEP 03",
    title: "ご提案・お見積り",
    description: "最適なプランとお見積りをご提示します。",
  },
  {
    step: "STEP 04",
    title: "ご契約",
    description: "内容にご納得いただけましたら、ご契約となります。",
  },
  {
    step: "STEP 05",
    title: "サービス提供",
    description: "丁寧にサービスを提供いたします。",
  },
  {
    step: "STEP 06",
    title: "アフターフォロー",
    description: "完了後もサポートいたします。",
  },
];

// 実績（site.jsonのworksを使用、なければこちらを使用）
const WORKS_FALLBACK = [
  {
    category: "カテゴリ1",
    name: "実績タイトル1",
    location: "場所",
    year: "2024年",
    image: "/images/work1.jpg",
  },
  {
    category: "カテゴリ2",
    name: "実績タイトル2",
    location: "場所",
    year: "2024年",
    image: "/images/work2.jpg",
  },
  {
    category: "カテゴリ3",
    name: "実績タイトル3",
    location: "場所",
    year: "2024年",
    image: "/images/work3.jpg",
  },
  {
    category: "カテゴリ4",
    name: "実績タイトル4",
    location: "場所",
    year: "2024年",
    image: "/images/work4.jpg",
  },
];

// ============================================================
// コンポーネント
// ============================================================

function PageHeader() {
  return (
    <section className="relative h-[200px] lg:h-[300px] flex items-center justify-center">
      <HeroBackground className="absolute inset-0 z-0">
        <Image
          src="/images/service-hero.jpg"
          alt="事業内容"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(26,58,92,0.8)]" />
      </HeroBackground>
      <div className="relative z-10 text-center">
        <FadeInUp>
          <p className="text-sm text-white/80 tracking-[0.1em] mb-3">Service</p>
          <h1 className="text-[28px] lg:text-[40px] font-bold text-white">
            事業内容
          </h1>
        </FadeInUp>
      </div>
    </section>
  );
}

function ServiceOverview() {
  const services = site.services.length > 0
    ? site.services.map(s => ({ ...s, description: s.description || "" }))
    : SERVICES_OVERVIEW;

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 lg:px-12">
        <FadeInUp>
          <p className="text-center text-[15px] lg:text-lg text-text-primary mb-8 lg:mb-12">
            私たちは、お客様のあらゆるニーズにお応えします。
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-opacity group-hover:opacity-90"
                />
              </div>
              <h3 className="mt-3 lg:mt-4 text-base lg:text-lg font-semibold text-text-primary">
                {service.title}
              </h3>
              <p className="mt-1 text-[13px] lg:text-sm text-text-secondary">
                {service.description}
              </p>
            </a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServiceDetail({
  id,
  number,
  title,
  subtitle,
  description,
  features,
  image,
  imageAlt,
  ctaLink,
  ctaText,
  reverse = false,
  bgLight = false,
}: {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string[];
  features: string[];
  image: string;
  imageAlt: string;
  ctaLink: string;
  ctaText: string;
  reverse?: boolean;
  bgLight?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-[60px] lg:py-[100px] scroll-mt-20 ${
        bgLight ? "bg-bg-light" : "bg-white"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-4">
        <div
          className={`flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-start ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <FadeInUp className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-100">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </FadeInUp>

          <FadeInUp className="w-full lg:w-1/2" delay={100}>
            <span className="block text-5xl lg:text-6xl font-bold text-accent/20">
              {number}
            </span>
            <h2 className="mt-2 text-2xl lg:text-[32px] font-bold text-text-primary">
              {title}
            </h2>
            <p className="mt-4 text-sm lg:text-base text-accent font-medium">
              {subtitle}
            </p>
            <div className="mt-6 text-sm lg:text-[15px] text-text-primary leading-[1.9] space-y-4">
              {description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-2">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="text-sm text-text-secondary leading-[2] before:content-['•'] before:mr-2 before:text-accent"
                >
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href={ctaLink} className="text-link text-[15px]">
                {ctaText}
              </Link>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

function FlowSection() {
  return (
    <section className="py-[60px] lg:py-[100px] bg-bg-light">
      <div className="max-w-[1100px] mx-auto px-4">
        <FadeInUp className="text-center mb-8 lg:mb-12">
          <span className="section-label block">Flow</span>
          <h2 className="text-2xl lg:text-[32px] font-bold text-text-primary">
            ご依頼の流れ
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid lg:grid-cols-6 gap-4 lg:gap-6">
          {FLOW_STEPS.map((item, index) => (
            <div
              key={index}
              className="py-4 lg:py-0 border-b border-gray-200 lg:border-b-0 last:border-b-0"
            >
              <span className="text-xs font-semibold text-accent">
                {item.step}
              </span>
              <h3 className="mt-2 text-[15px] lg:text-base font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] text-text-secondary leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function WorksSection() {
  const works = site.works.length > 0 ? site.works : WORKS_FALLBACK;

  return (
    <section id="works" className="py-[60px] lg:py-[100px] bg-white scroll-mt-20">
      <div className="max-w-container mx-auto px-4 lg:px-12">
        <FadeInUp>
          <span className="section-label block">Works</span>
          <h2 className="text-2xl lg:text-[32px] font-bold text-text-primary mb-4">
            実績紹介
          </h2>
          <p className="text-[15px] text-text-secondary mb-8 lg:mb-12">
            これまでの実績をご紹介します。
          </p>
        </FadeInUp>

        {/* PC Grid */}
        <StaggerContainer className="hidden lg:grid grid-cols-3 gap-6">
          {works.length > 0 && (
            <div className="col-span-1 row-span-2">
              <div className="relative aspect-[3/4] rounded overflow-hidden bg-gray-100">
                <Image
                  src={works[0].image}
                  alt={works[0].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3">
                <span className="text-[11px] font-semibold text-accent">
                  {works[0].category}
                </span>
                <h3 className="mt-1 text-base font-semibold text-text-primary">
                  {works[0].name}
                </h3>
                <p className="mt-1 text-[13px] text-text-secondary">
                  {works[0].location} / {works[0].year}
                </p>
              </div>
            </div>
          )}

          {works.slice(1).map((work, index) => (
            <div key={index}>
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-100">
                <Image
                  src={work.image}
                  alt={work.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3">
                <span className="text-[11px] font-semibold text-accent">
                  {work.category}
                </span>
                <h3 className="mt-1 text-base font-semibold text-text-primary">
                  {work.name}
                </h3>
                <p className="mt-1 text-[13px] text-text-secondary">
                  {work.location} / {work.year}
                </p>
              </div>
            </div>
          ))}
        </StaggerContainer>

        {/* SP List */}
        <StaggerContainer className="lg:hidden space-y-6">
          {works.map((work, index) => (
            <div key={index}>
              <div className="relative aspect-[16/9] rounded overflow-hidden bg-gray-100">
                <Image
                  src={work.image}
                  alt={work.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3">
                <span className="text-[11px] font-semibold text-accent">
                  {work.category}
                </span>
                <h3 className="mt-1 text-base font-semibold text-text-primary">
                  {work.name}
                </h3>
                <p className="mt-1 text-[13px] text-text-secondary">
                  {work.location} / {work.year}
                </p>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-[60px] lg:py-20 bg-navy">
      <div className="max-w-narrow mx-auto px-4 text-center">
        <FadeInUp>
          <h2 className="text-2xl lg:text-[32px] font-bold text-white mb-4">
            お気軽にご相談ください
          </h2>
          <p className="text-sm lg:text-base text-white/90 mb-8 lg:mb-10">
            まずはお気軽にお問い合わせください。
          </p>

          <a
            href={`tel:${contact.phoneTel || contact.phone?.replace(/-/g, "")}`}
            className="block lg:inline-block text-[28px] lg:text-[36px] font-bold text-white mb-2"
          >
            {contact.phoneFormatted || contact.phone || "000-000-0000"}
          </a>
          <p className="text-sm text-white/70 mb-8">
            受付時間: {contact.hours || "9:00〜18:00"}
          </p>

          <Link
            href="/contact"
            className="btn-primary px-14 py-[18px] text-base font-semibold"
          >
            お問い合わせフォームへ
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

export default function ServicePage() {
  return (
    <>
      <PageHeader />
      <ServiceOverview />
      {SERVICE_DETAILS.map((service, index) => (
        <ServiceDetail
          key={service.id}
          {...service}
          reverse={index % 2 === 1}
          bgLight={index % 2 === 0}
        />
      ))}
      <FlowSection />
      <WorksSection />
      <CTASection />
    </>
  );
}
