"use client";

import Image from "next/image";
import Link from "next/link";
import { site, company, contact, locations } from "@/lib/site";
import { FadeInUp, FadeInImage, HeroBackground, SectionTitleEntrance } from "@/components/animations";

// ============================================================
// 📝 コンテンツデータ（構成案に基づいて編集してください）
// ============================================================

// ミッション・ビジョン
const MISSION = {
  title: "理念のタイトルを入力",
  paragraphs: [
    "理念の説明文を入力してください。",
    "会社の想いや大切にしていることを記載します。",
    "お客様への約束なども含めると良いでしょう。",
  ],
};

// 代表メッセージ
const CEO_MESSAGE = {
  image: "/images/ceo.jpg", // 代表者の写真
  paragraphs: [
    "代表メッセージを入力してください。",
    "会社の歴史や想いを伝えます。",
    "お客様への感謝や今後の展望を記載します。",
    "最後に締めの言葉を入れてください。",
  ],
};

// 選ばれる理由
const STRENGTHS = [
  {
    number: "01",
    title: "強み1のタイトル",
    description: "強み1の詳細説明を入力してください。具体的な数字や実績を交えると説得力が増します。",
  },
  {
    number: "02",
    title: "強み2のタイトル",
    description: "強み2の詳細説明を入力してください。他社との差別化ポイントを明確にしましょう。",
  },
  {
    number: "03",
    title: "強み3のタイトル",
    description: "強み3の詳細説明を入力してください。お客様にとってのメリットを伝えましょう。",
  },
];

// 会社概要
const COMPANY_INFO = [
  { label: "会社名", value: company.name || "株式会社サンプル" },
  { label: "代表者", value: company.ceo || "代表取締役 山田太郎" },
  { label: "設立", value: company.established || "20XX年" },
  { label: "資本金", value: company.capital || "1,000万円" },
  { label: "従業員数", value: company.employees || "XX名" },
  { label: "事業内容", value: company.business || "事業内容を入力" },
  { label: "所在地", value: locations.headquarters.address || "所在地を入力" },
  { label: "電話番号", value: contact.phone || "000-000-0000" },
  { label: "メール", value: contact.email || "info@example.com" },
  { label: "営業時間", value: contact.hours || "9:00〜18:00" },
];

// 沿革（site.jsonのhistoryを使用、なければこちらを使用）
const HISTORY_FALLBACK = [
  { year: "20XX年", event: "会社設立" },
  { year: "20XX年", event: "事業拡大" },
  { year: "20XX年", event: "現在に至る" },
];

// ============================================================
// コンポーネント
// ============================================================

function PageHeader() {
  return (
    <section className="relative h-[200px] lg:h-[300px] flex items-center justify-center">
      <HeroBackground className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero.jpg"
          alt="会社概要"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(26,58,92,0.8)]" />
      </HeroBackground>
      <div className="relative z-10 text-center">
        <SectionTitleEntrance direction="scale">
          <p className="text-sm text-white/80 tracking-[0.1em] mb-3">About Us</p>
          <h1 className="text-[28px] lg:text-[40px] font-bold text-white">
            会社概要
          </h1>
        </SectionTitleEntrance>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-[60px] lg:py-[100px] bg-white">
      <div className="max-w-[800px] mx-auto px-4 text-center">
        <FadeInUp>
          <span className="section-label block">Mission & Vision</span>
          <h2 className="text-2xl lg:text-[32px] font-bold text-text-primary leading-[1.5] mb-8 lg:mb-10">
            {MISSION.title}
          </h2>
        </FadeInUp>
        <FadeInUp delay={100}>
          <div className="max-w-[700px] mx-auto text-[15px] lg:text-base text-text-primary leading-[2] space-y-6">
            {MISSION.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

function MessageSection() {
  const ceo = site.ceo;
  const message = ceo.message.length > 0 ? ceo.message : CEO_MESSAGE.paragraphs;
  const ceoImage = ceo.image || CEO_MESSAGE.image;
  const ceoName = ceo.name || company.ceo || "代表取締役";
  const ceoTitle = ceo.title || "";

  return (
    <section className="py-[60px] lg:py-[100px] bg-bg-light">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px]">
          <FadeInUp className="lg:w-[280px] flex-shrink-0">
            <span className="section-label block lg:hidden">Message</span>
            <h2 className="text-2xl lg:text-[28px] font-bold text-text-primary mb-6 lg:hidden">
              代表メッセージ
            </h2>
            <div className="relative w-[200px] lg:w-[280px] h-[250px] lg:h-[350px] mx-auto lg:mx-0 rounded overflow-hidden">
              <Image
                src={ceoImage}
                alt={ceoName}
                fill
                className="object-cover"
              />
            </div>
          </FadeInUp>

          <FadeInUp className="flex-1" delay={100}>
            <span className="section-label hidden lg:block">Message</span>
            <h2 className="text-2xl lg:text-[28px] font-bold text-text-primary mb-8 hidden lg:block">
              代表メッセージ
            </h2>
            <div className="text-sm lg:text-[15px] text-text-primary leading-[1.9] space-y-5">
              {message.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <p className="mt-8 text-sm text-text-secondary">
              {ceoTitle && `${ceoTitle}　`}{ceoName}
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

function StrengthsSection() {
  return (
    <section className="py-[60px] lg:py-[100px] bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <FadeInUp className="text-center mb-10 lg:mb-[60px]">
          <span className="section-label block">Our Strength</span>
          <h2 className="text-2xl lg:text-[32px] font-bold text-text-primary">
            {company.nameShort || "当社"}が選ばれる理由
          </h2>
        </FadeInUp>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-[60px]">
          {STRENGTHS.map((item, index) => (
            <FadeInUp key={item.number} delay={index * 100}>
              <span className="block text-4xl lg:text-5xl font-bold text-accent/30">
                {item.number}
              </span>
              <h3 className="mt-3 lg:mt-4 text-lg lg:text-xl font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-3 lg:mt-4 text-sm lg:text-[15px] text-text-secondary leading-[1.7]">
                {item.description}
              </p>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyInfoSection() {
  return (
    <section className="py-[60px] lg:py-[100px] bg-bg-light">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="lg:flex lg:gap-16">
          <FadeInUp className="lg:w-48 mb-8 lg:mb-0 text-center lg:text-left">
            <span className="section-label block">Company</span>
            <h2 className="text-2xl lg:text-[28px] font-bold text-text-primary">
              会社概要
            </h2>
          </FadeInUp>
          <FadeInUp className="flex-1 bg-white" delay={100}>
            {COMPANY_INFO.map((item, index) => (
              <div
                key={index}
                className="flex border-b border-gray-200 last:border-b-0"
              >
                <div className="w-[35%] lg:w-[30%] px-4 lg:px-6 py-4 lg:py-5 text-[13px] lg:text-sm font-semibold text-text-primary bg-gray-50">
                  {item.label}
                </div>
                <div className="flex-1 px-4 lg:px-6 py-4 lg:py-5 text-sm lg:text-[15px] text-text-primary">
                  {item.value}
                </div>
              </div>
            ))}
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

function HistorySection() {
  const history = site.history.length > 0 ? site.history : HISTORY_FALLBACK;

  return (
    <section className="py-[60px] lg:py-[100px] bg-white">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="lg:flex lg:gap-16">
          <FadeInUp className="lg:w-48 mb-8 lg:mb-0 text-center lg:text-left">
            <span className="section-label block">History</span>
            <h2 className="text-2xl lg:text-[28px] font-bold text-text-primary">
              沿革
            </h2>
          </FadeInUp>
          <div className="flex-1">
            {history.map((item, index) => (
              <FadeInUp key={index} delay={index * 50}>
                <div className="flex gap-4 lg:gap-10 mb-6 lg:mb-8 last:mb-0">
                  <div className="w-20 lg:w-24 flex-shrink-0">
                    <span className="text-base lg:text-lg font-bold text-navy">
                      {item.year}
                    </span>
                  </div>
                  <div className="relative flex-1 pb-6 lg:pb-8 border-l-2 border-gray-200 pl-4 lg:pl-10 last:border-l-0">
                    <div className="hidden lg:block absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-accent" />
                    <p className="text-sm lg:text-[15px] text-text-primary">
                      {item.event}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessSection() {
  const hq = locations.headquarters;
  const branches = locations.branches;

  return (
    <section className="py-[60px] lg:py-[100px] bg-bg-light">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <FadeInUp className="lg:w-[40%]">
            <span className="section-label block">Access</span>
            <h2 className="text-2xl lg:text-[28px] font-bold text-text-primary mb-6 lg:mb-8">
              アクセス
            </h2>

            <div className="mb-8">
              <span className="text-sm font-semibold text-accent">{hq.name}</span>
              <p className="mt-2 text-base text-text-primary leading-[1.7]">
                {hq.zipCode && <>{hq.zipCode}<br /></>}
                {hq.address || "住所を入力してください"}
              </p>
              <p className="mt-2 text-base text-text-primary">
                TEL: {contact.phone || "000-000-0000"}
              </p>
              {hq.access && (
                <p className="mt-1 text-sm text-text-secondary">{hq.access}</p>
              )}
            </div>

            {branches.map((branch, i) => (
              <div key={i} className="mb-6">
                <span className="text-sm font-semibold text-accent">{branch.name}</span>
                <p className="mt-2 text-base text-text-primary leading-[1.7]">
                  {branch.zipCode && <>{branch.zipCode}<br /></>}
                  {branch.address}
                </p>
                {branch.access && (
                  <p className="mt-1 text-sm text-text-secondary">{branch.access}</p>
                )}
              </div>
            ))}
          </FadeInUp>

          <FadeInUp className="lg:w-[60%]" delay={100}>
            <div className="h-[300px] lg:h-[400px] rounded lg:rounded bg-gray-200">
              {hq.mapUrl ? (
                <iframe
                  src={hq.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${company.name} ${hq.name}`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-text-secondary">
                  Google Maps埋め込みURLを設定してください
                </div>
              )}
            </div>
          </FadeInUp>
        </div>
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

export default function AboutPage() {
  return (
    <>
      <PageHeader />
      <MissionSection />
      <MessageSection />
      <StrengthsSection />
      <CompanyInfoSection />
      <HistorySection />
      <AccessSection />
      <CTASection />
    </>
  );
}
