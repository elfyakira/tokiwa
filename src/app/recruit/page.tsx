"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { site, company, contact } from "@/lib/site";
import { FadeInUp, StaggerContainer, HeroBackground } from "@/components/animations";

// ============================================================
// 📝 コンテンツデータ（構成案に基づいて編集してください）
// ============================================================

// ファーストビュー
const FIRST_VIEW = {
  catchphrase: "キャッチコピーを入力",
  subCatchphrase: "サブコピーを入力してください。",
  heroImage: "/images/recruit-hero.jpg",
};

// 数字で見るデータ
const DATA_FALLBACK = [
  { number: "90", unit: "%", label: "社員定着率", sub: "働きやすい環境です" },
  { number: "10", unit: "時間/月", label: "平均残業時間", sub: "ワークライフバランス重視" },
  { number: "80", unit: "%", label: "有給取得率", sub: "取得しやすい環境" },
  { number: "XX", unit: "年", label: "創業からの歴史", sub: "安定した経営基盤" },
];

// 大切にしていること
const VALUES = [
  {
    number: "01",
    title: "価値観1のタイトル",
    text: "価値観1の説明文を入力してください。会社が大切にしている考え方や文化を伝えます。",
  },
  {
    number: "02",
    title: "価値観2のタイトル",
    text: "価値観2の説明文を入力してください。働く環境や成長機会について伝えます。",
  },
  {
    number: "03",
    title: "価値観3のタイトル",
    text: "価値観3の説明文を入力してください。会社のビジョンや使命感を伝えます。",
  },
];

// 社員インタビュー（site.jsonのinterviewsを使用、なければこちら）
const INTERVIEWS_FALLBACK = [
  {
    label: "Interview 01",
    name: "社員名（仮名）",
    role: "職種（入社X年目）",
    entry: "20XX年 入社",
    image: "/images/interview1.jpg",
    qa: [
      { q: "入社の決め手は何でしたか？", a: "インタビュー回答を入力してください。" },
      { q: "仕事のやりがいは？", a: "インタビュー回答を入力してください。" },
      { q: "これから入社する人へメッセージ", a: "インタビュー回答を入力してください。" },
    ],
  },
  {
    label: "Interview 02",
    name: "社員名（仮名）",
    role: "職種（入社X年目）",
    entry: "20XX年 入社",
    image: "/images/interview2.jpg",
    qa: [
      { q: "転職の理由は？", a: "インタビュー回答を入力してください。" },
      { q: "入社して感じたことは？", a: "インタビュー回答を入力してください。" },
      { q: "転職を考えている人へ", a: "インタビュー回答を入力してください。" },
    ],
  },
];

// 福利厚生（site.jsonのbenefitsを使用、なければこちら）
const BENEFITS_FALLBACK = {
  vacation: ["年間休日XX日", "有給休暇", "夏季・年末年始休暇"],
  allowances: ["資格取得支援制度", "各種社会保険完備", "交通費支給"],
  facilities: ["社員食堂", "最新設備", "駐車場完備"],
};

// 1日の流れ
const SCHEDULE = [
  { time: "9:00", title: "出社", desc: "出社して1日の準備をします。" },
  { time: "9:30", title: "午前の業務", desc: "業務に取り組みます。" },
  { time: "12:00", title: "昼休憩", desc: "しっかり休憩を取ります。" },
  { time: "13:00", title: "午後の業務", desc: "引き続き業務に取り組みます。" },
  { time: "17:00", title: "事務作業", desc: "日報作成など。" },
  { time: "18:00", title: "退社", desc: "基本的に定時退社です。" },
];

// 募集要項（site.jsonのpositionsを使用、なければこちら）
const POSITIONS_FALLBACK = {
  highSchool: {
    title: "新卒採用",
    items: [
      { label: "募集職種", value: "募集職種を入力" },
      { label: "仕事内容", value: "仕事内容を入力" },
      { label: "応募資格", value: "応募資格を入力" },
      { label: "給与", value: "給与を入力" },
      { label: "勤務時間", value: "勤務時間を入力" },
      { label: "休日", value: "休日を入力" },
      { label: "待遇", value: "待遇を入力" },
    ],
  },
  midCareer: {
    title: "中途採用",
    items: [
      { label: "募集職種", value: "募集職種を入力" },
      { label: "仕事内容", value: "仕事内容を入力" },
      { label: "応募資格", value: "応募資格を入力" },
      { label: "給与", value: "給与を入力" },
      { label: "勤務時間", value: "勤務時間を入力" },
      { label: "休日", value: "休日を入力" },
      { label: "待遇", value: "待遇を入力" },
    ],
  },
};

// FAQ（site.jsonのfaqを使用、なければこちら）
const FAQ_FALLBACK = [
  { q: "未経験でも応募できますか？", a: "回答を入力してください。" },
  { q: "残業はどのくらいありますか？", a: "回答を入力してください。" },
  { q: "資格は必要ですか？", a: "回答を入力してください。" },
  { q: "職場見学はできますか？", a: "回答を入力してください。" },
];

// ============================================================
// コンポーネント
// ============================================================

function FirstView() {
  const [isVisible, setIsVisible] = useState(false);
  const recruit = site.recruit;
  const catchphrase = recruit.catchphrase || FIRST_VIEW.catchphrase;
  const subCatchphrase = recruit.subCatchphrase || FIRST_VIEW.subCatchphrase;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={FIRST_VIEW.heroImage}
          alt="採用情報"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(26,58,92,0.6)]" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1
          className={`text-[28px] lg:text-5xl font-bold text-white leading-[1.4] transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {catchphrase.split("、").map((line, i) => (
            <span key={i}>
              {line}
              {i < catchphrase.split("、").length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p
          className={`mt-4 lg:mt-6 text-[15px] lg:text-lg text-white transition-all duration-800 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {subCatchphrase}
        </p>
        <div
          className={`mt-8 lg:mt-10 transition-all duration-800 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a href="#requirements" className="btn-primary px-12 py-4">
            募集要項を見る
          </a>
        </div>
      </div>
    </section>
  );
}

function DataSection() {
  const data = site.recruit.data.length > 0 ? site.recruit.data : DATA_FALLBACK;

  return (
    <section className="py-[60px] lg:py-[100px] bg-white">
      <div className="max-w-[1000px] mx-auto px-4">
        <FadeInUp className="text-center mb-8 lg:mb-12">
          <span className="section-label block">Data</span>
          <h2 className="text-2xl lg:text-[32px] font-bold text-text-primary">
            数字で見る{company.nameShort || "当社"}
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[60px]">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl lg:text-6xl font-bold text-navy">
                  {item.number}
                </span>
                <span className="text-lg lg:text-2xl text-navy">
                  {item.unit}
                </span>
              </div>
              <p className="mt-1 lg:mt-2 text-[13px] lg:text-sm font-semibold text-text-primary">
                {item.label}
              </p>
              <p className="mt-1 text-[11px] lg:text-xs text-text-secondary">
                {item.sub}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="py-[60px] lg:py-[100px] bg-bg-light">
      <div className="max-w-[800px] mx-auto px-4">
        <FadeInUp className="text-center mb-8 lg:mb-12">
          <span className="section-label block">Our Values</span>
          <h2 className="text-2xl lg:text-[32px] font-bold text-text-primary">
            私たちが大切にしていること
          </h2>
        </FadeInUp>

        <div className="space-y-8 lg:space-y-12">
          {VALUES.map((item, index) => (
            <FadeInUp key={item.number} delay={index * 100}>
              <span className="block text-4xl lg:text-5xl font-bold text-accent/30">
                {item.number}
              </span>
              <h3 className="mt-1 lg:mt-2 text-xl lg:text-2xl font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-3 lg:mt-4 text-sm lg:text-[15px] text-text-primary leading-[1.9]">
                {item.text}
              </p>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function InterviewSection({
  label,
  name,
  role,
  entry,
  image,
  qa,
  reverse = false,
  bgLight = false,
}: {
  label: string;
  name: string;
  role: string;
  entry: string;
  image: string;
  qa: { q: string; a: string }[];
  reverse?: boolean;
  bgLight?: boolean;
}) {
  return (
    <section className={`py-[60px] lg:py-[100px] ${bgLight ? "bg-bg-light" : "bg-white"}`}>
      <div className="max-w-[1000px] mx-auto px-4">
        <FadeInUp>
          <span className="section-label block">{label}</span>
          <h2 className="text-2xl lg:text-[28px] font-bold text-text-primary mb-8 lg:mb-12">
            社員インタビュー
          </h2>
        </FadeInUp>

        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${reverse ? "lg:flex-row-reverse" : ""}`}>
          <FadeInUp className="lg:w-[40%]" delay={100}>
            <div className="relative aspect-[3/4] max-w-[280px] lg:max-w-none mx-auto rounded overflow-hidden bg-gray-100">
              <Image src={image} alt={name} fill className="object-cover" />
            </div>
            <div className="mt-4 text-center lg:text-left">
              <p className="text-lg font-semibold text-text-primary">{name}</p>
              <p className="mt-1 text-sm text-text-secondary">{role}</p>
              <p className="text-sm text-text-secondary">{entry}</p>
            </div>
          </FadeInUp>

          <FadeInUp className="lg:w-[60%] space-y-6 lg:space-y-8" delay={200}>
            {qa.map((item, i) => (
              <div key={i}>
                <p className="text-sm lg:text-[15px] font-semibold text-navy">
                  {item.q}
                </p>
                <p className="mt-2 lg:mt-3 text-sm lg:text-[15px] text-text-primary leading-[1.8]">
                  {item.a}
                </p>
              </div>
            ))}
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

function EnvironmentSection() {
  const benefits = site.recruit.benefits;
  const hasData = benefits.vacation.length > 0 || benefits.allowances.length > 0 || benefits.facilities.length > 0;
  const displayBenefits = hasData ? benefits : BENEFITS_FALLBACK;

  const groups = [
    { category: "休暇・勤務", items: displayBenefits.vacation },
    { category: "手当・支援", items: displayBenefits.allowances },
    { category: "施設・環境", items: displayBenefits.facilities },
  ];

  return (
    <section className="py-[60px] lg:py-[100px] bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px]">
          <FadeInUp className="lg:w-1/2">
            <span className="section-label block">Environment</span>
            <h2 className="text-2xl lg:text-[28px] font-bold text-text-primary mb-6 lg:mb-8">
              働く環境・福利厚生
            </h2>

            <div className="space-y-6 lg:space-y-8">
              {groups.map((group, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-navy mb-3">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-[15px] text-text-primary leading-[2] before:content-['•'] before:mr-2 before:text-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp className="lg:w-1/2 space-y-4" delay={100}>
            <div className="relative aspect-video rounded overflow-hidden bg-gray-100">
              <Image
                src="/images/office1.jpg"
                alt="オフィスの様子"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded overflow-hidden bg-gray-100">
              <Image
                src="/images/office2.jpg"
                alt="働く様子"
                fill
                className="object-cover"
              />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

function ScheduleSection() {
  return (
    <section className="py-[60px] lg:py-[100px] bg-bg-light">
      <div className="max-w-[600px] mx-auto px-4">
        <FadeInUp className="text-center mb-4">
          <span className="section-label block">Daily Schedule</span>
          <h2 className="text-2xl lg:text-[28px] font-bold text-text-primary">
            1日の流れ
          </h2>
        </FadeInUp>
        <FadeInUp delay={50}>
          <p className="text-center text-sm text-text-secondary mb-8 lg:mb-10">
            ※職種により異なります
          </p>
        </FadeInUp>

        <StaggerContainer className="space-y-6 lg:space-y-8">
          {SCHEDULE.map((item, i) => (
            <div key={i} className="flex gap-4 lg:gap-8">
              <div className="w-14 lg:w-20 flex-shrink-0">
                <span className="text-[15px] lg:text-base font-semibold text-navy">
                  {item.time}
                </span>
              </div>
              <div className="flex-1 pb-6 lg:pb-8 border-l-2 border-gray-200 pl-4 lg:pl-8">
                <p className="text-[15px] lg:text-base font-semibold text-text-primary">
                  {item.title}
                </p>
                <p className="mt-1 text-[13px] lg:text-sm text-text-secondary leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function RequirementsSection() {
  const positions = site.recruit.positions;
  const highSchool = positions.highSchool.items.length > 0 ? positions.highSchool : POSITIONS_FALLBACK.highSchool;
  const midCareer = positions.midCareer.items.length > 0 ? positions.midCareer : POSITIONS_FALLBACK.midCareer;

  return (
    <section id="requirements" className="py-[60px] lg:py-[100px] bg-white scroll-mt-20">
      <div className="max-w-[900px] mx-auto px-4">
        <FadeInUp className="text-center mb-8 lg:mb-12">
          <span className="section-label block">Requirements</span>
          <h2 className="text-2xl lg:text-[32px] font-bold text-text-primary">
            募集要項
          </h2>
        </FadeInUp>

        <FadeInUp delay={100} className="mb-12 lg:mb-16">
          <h3 className="text-xl font-semibold text-navy mb-6">{highSchool.title}</h3>
          <div className="bg-white border border-gray-100">
            {highSchool.items.map((item, i) => (
              <div key={i} className="flex border-b border-gray-100 last:border-b-0">
                <div className="w-24 lg:w-32 flex-shrink-0 px-4 py-3 lg:py-4 text-[13px] lg:text-sm font-semibold text-text-primary bg-gray-50">
                  {item.label}
                </div>
                <div className="flex-1 px-4 py-3 lg:py-4 text-sm lg:text-[15px] text-text-primary">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp delay={200}>
          <h3 className="text-xl font-semibold text-navy mb-6">{midCareer.title}</h3>
          <div className="bg-white border border-gray-100">
            {midCareer.items.map((item, i) => (
              <div key={i} className="flex border-b border-gray-100 last:border-b-0">
                <div className="w-24 lg:w-32 flex-shrink-0 px-4 py-3 lg:py-4 text-[13px] lg:text-sm font-semibold text-text-primary bg-gray-50">
                  {item.label}
                </div>
                <div className="flex-1 px-4 py-3 lg:py-4 text-sm lg:text-[15px] text-text-primary">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = site.recruit.faq.length > 0 ? site.recruit.faq : FAQ_FALLBACK;

  return (
    <section className="py-[60px] lg:py-[100px] bg-bg-light">
      <div className="max-w-[800px] mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <span className="section-label block">FAQ</span>
          <h2 className="text-2xl lg:text-[28px] font-bold text-text-primary">
            よくある質問
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded">
              <button
                className="w-full flex justify-between items-center p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-base font-semibold text-text-primary pr-4">
                  {faq.q}
                </span>
                <span className="text-xl text-text-secondary flex-shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-[15px] text-text-secondary leading-[1.7]">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
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
            一緒に働きませんか？
          </h2>
          <p className="text-sm lg:text-base text-white/90 mb-8 lg:mb-10">
            まずはお気軽にご連絡ください。
            <br />
            職場見学やカジュアル面談も歓迎です。
          </p>

          <Link
            href="/contact?type=recruit"
            className="btn-primary px-14 py-[18px] text-base font-semibold"
          >
            エントリーフォームへ
          </Link>

          <p className="mt-6 text-sm text-white/70">
            お電話でのお問い合わせ: {contact.phone || "000-000-0000"}
            {contact.recruitContact && `（${contact.recruitContact}）`}
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}

export default function RecruitPage() {
  const interviews = site.recruit.interviews.length > 0 ? site.recruit.interviews : INTERVIEWS_FALLBACK;

  return (
    <>
      <FirstView />
      <DataSection />
      <ValuesSection />
      {interviews.map((interview, index) => (
        <InterviewSection
          key={index}
          {...interview}
          reverse={index % 2 === 1}
          bgLight={index % 2 === 1}
        />
      ))}
      <EnvironmentSection />
      <ScheduleSection />
      <RequirementsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
