"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/animations";

// ============================================================
// TOPページ - トキワ工業
// ============================================================

// ヒーローセクション
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center -mt-20">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="トキワ工業"
          fill
          className="object-cover"
          priority
        />
        {/* 青オーバーレイ */}
        <div className="absolute inset-0 bg-[#1E3A8A]/70" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-[80px] lg:text-[120px] font-bold text-white tracking-[0.2em] leading-none">
          TOKIWA
        </h1>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70">
        <span className="text-xs tracking-wider mb-2">Scroll</span>
        <div className="w-px h-12 bg-white/50 animate-pulse" />
      </div>
    </section>
  );
}

// About Usセクション
function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="text-center mb-12">
          <span className="text-sm font-semibold text-navy tracking-[0.2em]">About Us</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mt-4">
            私たちについて
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base lg:text-lg text-text-primary leading-[2] mb-8">
              トキワ工業は、創業以来お客さまの期待に応え続け、確かな技術と信頼を積み重ねてきました。
            </p>
            <p className="text-base lg:text-lg text-text-primary leading-[2] mb-8">
              変化を恐れ忙なから設備を整え、人を育て、成長を重ねています。一人ひとりの個性が支え合い、ものづくりを通して人も会社も磨かれていく。これからも皆さまに支えられ求められ続ける会社であるよう邁進していきます。
            </p>
            <div className="mt-10">
              <Link href="/company" className="text-link">
                会社概要を見る
              </Link>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// Businessセクション
function BusinessSection() {
  const businesses = [
    { id: "ban", title: "盤制作", icon: "01", color: "bg-navy" },
    { id: "cover", title: "機械カバー制作", icon: "02", color: "bg-accent" },
    { id: "bracket", title: "ブラケット金具製作", icon: "03", color: "bg-blue" },
    { id: "seikan", title: "製缶制作", icon: "04", color: "bg-navy" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12">
          <span className="text-sm font-semibold text-navy tracking-[0.2em]">Business</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mt-4">
            事業内容
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {businesses.map((item, index) => (
            <FadeInUp key={item.id} delay={index * 0.1}>
              <Link href={`/business#${item.id}`} className="block group">
                <div className="relative aspect-square bg-gray-200 rounded overflow-hidden mb-4">
                  <Image
                    src={`/images/business-${item.id}.jpg`}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 w-10 h-10 ${item.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-sm font-bold">{item.icon}</span>
                  </div>
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-text-primary group-hover:text-navy transition-colors">
                  {item.title}
                </h3>
              </Link>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp className="mt-12 text-center" delay={0.4}>
          <Link href="/business" className="text-link">
            事業内容を見る
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

// Our Strengthsセクション
function StrengthsSection() {
  const strengths = [
    {
      number: "01",
      title: "精密さと確かさ",
      description: "10分の1単位の精密加工で、お客様の厳しい要求に応えます。",
      image: "/images/strength-01.jpg",
    },
    {
      number: "02",
      title: "個性を活かすチーム力",
      description: "一人ひとりの個性が支え合い、チームとして最高の結果を生み出します。",
      image: "/images/strength-02.jpg",
    },
    {
      number: "03",
      title: "お客様の製品価値を高める存在",
      description: "私たちの技術が、お客様の製品価値を最大限に引き出します。",
      image: "/images/strength-03.jpg",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-navy tracking-[0.2em]">Our Strengths</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mt-4">
            トキワの強み
          </h2>
        </FadeInUp>

        <div className="space-y-12 lg:space-y-20">
          {strengths.map((item, index) => (
            <FadeInUp key={item.number} delay={index * 0.1}>
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <span className="text-4xl lg:text-5xl font-bold text-navy/20">{item.number}</span>
                  <h3 className="text-xl lg:text-2xl font-bold text-text-primary mt-2 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-[1.8]">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// Technologyセクション
function TechnologySection() {
  return (
    <section className="relative py-20 lg:py-32">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/technology-bg.jpg"
          alt="Technology"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="text-center text-white">
          <span className="text-sm font-semibold tracking-[0.2em]">Technology</span>
          <h2 className="text-2xl lg:text-3xl font-bold mt-4 mb-6">
            技術・設備
          </h2>
          <p className="text-base lg:text-lg leading-[1.8] max-w-2xl mx-auto mb-10">
            トキワ工業は高度な技術力と最新設備で、精密な製品づくりを実現しています。板金技術、溶接技術、組立技術を駆使し、お客様のニーズにお応えします。
          </p>
          <Link href="/technology" className="inline-block bg-white text-navy px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors">
            技術・設備を見る
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

// Recruitセクション
function RecruitSection() {
  return (
    <section className="relative py-20 lg:py-32">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/recruit-bg.jpg"
          alt="Recruit"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="text-white">
          <span className="text-sm font-semibold tracking-[0.2em]">Recruit</span>
          <h2 className="text-2xl lg:text-3xl font-bold mt-4 mb-6">
            採用情報
          </h2>
          <p className="text-base lg:text-lg leading-[1.8] max-w-xl mb-10">
            私たちが大切にしているのは、同じ方向を見ながらも、それぞれの個性で支えおうこと。
          </p>
          <Link href="/recruit" className="inline-block bg-accent text-white px-8 py-4 rounded font-semibold hover:bg-accent-dark transition-colors">
            採用情報を見る
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

// Contactセクション
function ContactSection() {
  return (
    <section className="py-20 lg:py-32 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="text-center">
          <span className="text-sm font-semibold text-navy tracking-[0.2em]">Contact</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mt-4 mb-6">
            お問い合わせ
          </h2>
          <p className="text-base text-text-secondary mb-10">
            製品・サービスに関するお問い合わせはこちらから
          </p>

          {/* 建物画像 */}
          <div className="relative aspect-[16/9] max-w-3xl mx-auto rounded overflow-hidden mb-10">
            <Image
              src="/images/building.jpg"
              alt="トキワ工業 社屋"
              fill
              className="object-cover"
            />
          </div>

          <Link href="/contact" className="btn-primary px-12 py-4">
            お問い合わせフォームへ
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BusinessSection />
      <StrengthsSection />
      <TechnologySection />
      <RecruitSection />
      <ContactSection />
    </>
  );
}
