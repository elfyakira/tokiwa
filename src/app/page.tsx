"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FadeInUp, FadeInImage, TypingText, SectionTitleEntrance, Parallax } from "@/components/animations";

// ============================================================
// TOPページ - トキワ工業
// ============================================================

// VIEW MORE 円形ボタン（エントランス＋ホバーアニメーション付き）
function ViewMoreButton({
  href,
  variant = "blue",
}: {
  href: string;
  variant?: "blue" | "accent";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const bgClass =
    variant === "accent"
      ? "bg-accent variant-accent"
      : "bg-[#0042c1] variant-blue";

  return (
    <div
      ref={ref}
      className={`view-more-wrapper variant-${variant} relative inline-flex ${isVisible ? "is-visible" : ""}`}
    >
      <Link
        href={href}
        className={`view-more-btn ${bgClass} w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center text-white text-[28px] font-oswald font-light tracking-wider shadow-lg`}
      >
        VIEW MORE
      </Link>
    </div>
  );
}

// ヒーローセクション（動画背景）
function HeroSection() {
  return (
    <section className="sticky top-0 z-0 h-screen min-h-[600px] flex items-center justify-center">
      {/* 背景動画 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
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
    <section className="py-20 lg:py-32 bg-navy">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <SectionTitleEntrance direction="scale" className="text-center mb-[100px]">
          <h2 className="text-4xl lg:text-6xl font-anton font-bold text-white tracking-[0.1em]">
            ABOUT US
          </h2>
        </SectionTitleEntrance>

        <FadeInUp delay={0.1}>
          <div className="max-w-[600px] mx-auto text-center">
            <p className="text-base lg:text-lg text-white/90 leading-[2] tracking-[0.1em] mb-8 font-mincho">
              トキワ工業は、制御盤・配電盤カバー、機械カバー、ブラケットなどを製作するものづくりの会社です。
            </p>
            <p className="text-base lg:text-lg text-white/90 leading-[2] tracking-[0.1em] mb-8 font-mincho">
              わずかなズレや仕上がりの違いが、製品全体の品質や信頼性を左右する─その現場の現実を知っているからこそ、「細かな仕事」と「確かな品質」に徹底的に向き合っています。現場で培った人の感覚や判断力に、設備の正確さを掛け合わせることで、ミスの許されない加工や組み立てにも応えられる体制を築いてきました。
            </p>
            <p className="text-base lg:text-lg text-white/90 leading-[2] tracking-[0.1em] mb-8 font-mincho">
              私たちは、単なる部品の供給先ではなく、お客様の製品価値を高めるための「欠かせない存在」でありたいと考えています。品質と納期に責任を持ち、最後の一手まで妥協しない。その積み重ねこそが、信頼につながると信じています。
            </p>
            <div className="mt-[100px] flex justify-center">
              <ViewMoreButton href="/company" variant="accent" />
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// Businessセクション
function BusinessSection() {
  return (
    <section className="bg-[#DFE5EA]">
      {/* 上の白い余白 */}
      <div className="py-8 lg:py-12" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative min-h-[500px] lg:min-h-[600px]">
          {/* 背景画像 - 右からスライドイン */}
          <FadeInImage
            src="/images/business-bg.jpg"
            alt="Business"
            fill
            direction="right"
            containerClassName="absolute inset-0 z-0"
            className="object-cover"
          />

        {/* コンテンツ */}
        <div className="absolute inset-0 z-10 flex flex-col">
          {/* タイトルバー（左いっぱい） */}
          <SectionTitleEntrance direction="left">
            <div className="pt-12 lg:pt-16 -ml-6 lg:-ml-12">
              <div className="bg-[#f5f8f6] inline-block">
                <div className="pl-6 lg:pl-12 pr-8 lg:pr-12 py-4 lg:py-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl lg:text-6xl font-anton font-bold text-navy tracking-wider lg:tracking-[0.12em]">BUSINESS</h2>
                    <span className="text-sm lg:text-base text-navy">事業紹介</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionTitleEntrance>

          {/* 説明文（画像の上に配置） */}
          <div className="pl-8 lg:pl-12 py-8 lg:py-12">
            <div className="flex flex-col items-start gap-2">
              <TypingText
                text="必要とされる部品を、"
                className="text-base lg:text-lg text-navy leading-relaxed bg-white/90 px-1 py-0.5 font-mincho font-bold"
              />
              <TypingText
                text="必要な形で。"
                className="text-base lg:text-lg text-navy leading-relaxed bg-white/90 px-1 py-0.5 font-mincho font-bold"
                delay={10 * 65}
              />
            </div>
          </div>

          {/* 下部余白とボタン */}
          <div className="flex-1" />
          <div className="flex justify-end pr-[15%] lg:pr-[20%] pb-12 lg:pb-16">
            <ViewMoreButton href="/business" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

// Our Strengthsセクション
function StrengthsSection() {
  const strengths = [
    {
      number: "#1",
      title: "個性を活かすチーム力",
      description: "トキワ工業の品質は、一人の技術だけで成り立っているものではありません。それぞれの強みや感覚を活かし、支え合うチームワークが、安定した品質と柔軟な対応力を生み出しています。個性が重なり合うことで、品質はさらに強くなる。それが、私たちの現場に根づいた考え方です。",
      image: "/images/strength-01.jpg",
    },
    {
      number: "#2",
      title: "細かさと確かさ",
      description: "わずかなズレや仕上がりの違いが、製品全体の品質や信頼性を左右することを、私たちは知っています。決して目立たない部品であっても、最後の一手を担う重要な工程だからこそ、徹底的に向き合います。細かな仕事を積み重ねることで生まれる、確かなクオリティ。それがトキワ工業のものづくりの原点です。",
      image: "/images/strength-02.jpg",
    },
    {
      number: "#3",
      title: "完成のその先まで考える",
      description: "私たちは、お客様の製品の完成度にまで責任を持つ存在でありたいと考えています。だからこそ、「ここまでやれば十分」では終わらせず、最後の仕上がり、その先の使われ方までを想像して仕事をします。品質と納期に責任を持ち、最後までやりきる。その姿勢が、お客様からの信頼につながっていると考えています。",
      image: "/images/strength-03.jpg",
    },
  ];

  return (
    <section className="bg-[#DFE5EA]">
      {/* ヘッダー */}
      <div className="bg-[#DFE5EA] pt-12 lg:pt-16 pb-6 lg:pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionTitleEntrance direction="left">
            <div className="bg-[#f5f8f6] inline-block -ml-6 lg:-ml-12">
              <div className="pl-6 lg:pl-12 pr-8 lg:pr-12 py-4 lg:py-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl lg:text-6xl font-anton font-bold text-accent tracking-wider lg:tracking-[0.12em]">OUR STRENGTHS</h2>
                  <span className="text-sm lg:text-base text-accent font-semibold">3つの強み</span>
                </div>
              </div>
            </div>
          </SectionTitleEntrance>
        </div>
      </div>

      {/* 各強み */}
      {strengths.map((item, index) => (
        <div key={item.number} className="bg-[#DFE5EA]">
          {/* 白い余白（最初以外） */}
          {index > 0 && <div className="py-6 lg:py-8" />}

          {/* 強みコンテンツ - 左に7xl相当の余白 */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="relative min-h-[500px] lg:min-h-[600px] mr-1 lg:mr-2 ml-0">
              {/* 背景画像 - フェードイン */}
              <FadeInImage
                src={item.image}
                alt={item.title}
                fill
                direction="up"
                containerClassName="absolute inset-0 z-0"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 z-0" />

              {/* コンテンツ（パララックス付き） */}
              <div className="absolute inset-0 z-10 flex items-end justify-end">
                <Parallax speed={0.25} clamp={70}>
                  <div className="px-6 lg:px-12 pb-10 lg:pb-14">
                    <FadeInUp>
                      <div className="max-w-xl">
                        <p className="text-xl lg:text-3xl text-white font-anton font-bold tracking-widest mb-3">
                          OUR STRENGTHS　{item.number}
                        </p>
                        <div className="w-48 lg:w-72 h-px bg-white/60 mb-6" />
                        <h3 className="text-2xl lg:text-4xl font-bold text-white mb-6">
                          {item.title}
                        </h3>
                        <p className="text-base text-white/90 leading-[2]">
                          {item.description}
                        </p>
                      </div>
                    </FadeInUp>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

// Technologyセクション
function TechnologySection() {
  return (
    <section className="bg-[#DFE5EA]">
      {/* 上の白い余白 */}
      <div className="py-8 lg:py-12" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative min-h-[500px] lg:min-h-[600px]">
          {/* 背景画像 - 左からスライドイン */}
          <FadeInImage
            src="/images/technology-bg.jpg"
            alt="Technology"
            fill
            direction="left"
            containerClassName="absolute inset-0 z-0"
            className="object-cover"
          />

          {/* コンテンツ */}
          <div className="absolute inset-0 z-10 flex flex-col">
            {/* タイトルバー（右いっぱい） */}
            <SectionTitleEntrance direction="right">
              <div className="pt-12 lg:pt-16 flex justify-end -mr-6 lg:-mr-12">
                <div className="bg-[#f5f8f6] inline-block">
                  <div className="pl-8 lg:pl-12 pr-6 lg:pr-12 py-4 lg:py-6">
                    <div className="flex items-center gap-4">
                      <h2 className="text-3xl lg:text-6xl font-anton font-bold text-navy tracking-wider lg:tracking-[0.12em]">TECHNOLOGY</h2>
                      <span className="text-sm lg:text-base text-navy">技術・設備</span>
                    </div>
                  </div>
                </div>
              </div>
            </SectionTitleEntrance>

            {/* 説明文（右寄せ） */}
            <div className="flex justify-end pr-8 lg:pr-12 py-8 lg:py-12">
              <div className="flex flex-col items-start gap-2">
                <TypingText
                  text="細かな仕事を、"
                  className="text-base lg:text-lg text-navy leading-relaxed bg-white/90 px-1 py-0.5 font-mincho font-bold"
                />
                <TypingText
                  text="確かな技術で。"
                  className="text-base lg:text-lg text-navy leading-relaxed bg-white/90 px-1 py-0.5 font-mincho font-bold"
                  delay={7 * 65}
                />
              </div>
            </div>

            {/* 下部余白とボタン（左寄せ） */}
            <div className="flex-1" />
            <div className="flex justify-start pl-8 lg:pl-12 pb-12 lg:pb-16">
              <ViewMoreButton href="/technology" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Recruitセクション
function RecruitSection() {
  return (
    <section className="bg-[#DFE5EA] pt-16 lg:pt-24">
      {/* 7xl相当の左右余白 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative min-h-[550px] lg:min-h-[650px]">
          {/* 背景画像 - フェードイン */}
          <FadeInImage
            src="/images/recruit-bg.jpg"
            alt="Recruit"
            fill
            direction="up"
            containerClassName="absolute inset-0 z-0"
            className="object-cover"
          />

          {/* コンテンツ */}
          <div className="absolute inset-0 z-10 flex flex-col">
            {/* タイトルバー（左いっぱい） */}
            <SectionTitleEntrance direction="left">
              <div className="pt-12 lg:pt-16 -ml-6 lg:-ml-12">
                <div className="bg-[#f5f8f6] inline-block">
                  <div className="pl-6 lg:pl-12 pr-8 lg:pr-12 py-4 lg:py-6">
                    <div className="flex items-center gap-4">
                      <h2 className="text-3xl lg:text-6xl font-anton font-bold text-navy tracking-wider lg:tracking-[0.12em]">RECRUIT</h2>
                      <span className="text-sm lg:text-base text-navy">採用情報</span>
                    </div>
                  </div>
                </div>
              </div>
            </SectionTitleEntrance>

            {/* 説明文 */}
            <div className="pl-8 lg:pl-12 py-8 lg:py-12">
              <div className="flex flex-col items-start gap-2">
                <TypingText
                  text="あなたの個性が、"
                  className="text-base lg:text-lg text-navy leading-relaxed bg-white/90 px-1 py-0.5 font-mincho font-bold"
                />
                <TypingText
                  text="ものづくりを支える。"
                  className="text-base lg:text-lg text-navy leading-relaxed bg-white/90 px-1 py-0.5 font-mincho font-bold"
                  delay={8 * 65}
                />
              </div>
            </div>

            {/* 下部余白とボタン */}
            <div className="flex-1" />
            <div className="flex justify-end px-6 lg:px-12 pb-12 lg:pb-16">
              <ViewMoreButton href="/recruit" />
            </div>
          </div>
        </div>
      </div>

      {/* 下の白い余白 */}
      <div className="py-8 lg:py-12" />
    </section>
  );
}

// Contactセクション（共通CTA）
function ContactSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] bg-white">
      {/* 背景画像 - フェードイン */}
      <FadeInImage
        src="/images/building.jpg"
        alt="トキワ工業 社屋"
        fill
        direction="up"
        containerClassName="absolute inset-y-0 left-6 lg:left-[calc((100vw-80rem)/2+2.5rem)] right-0 z-0"
        className="object-cover"
      />

      {/* コンテンツ */}
      <div className="relative z-10 pt-24 lg:pt-32 flex flex-col lg:flex-row lg:items-center">
        {/* 左カラム: タイトル＋説明文（白い帯） */}
        <div className="bg-white w-[85%] sm:w-[70%] lg:w-[50%] -mt-8 lg:-mt-12">
          <div className="py-6 lg:py-12 px-6 lg:px-12 flex flex-col items-end">
            <div className="mr-4 sm:mr-8 lg:mr-24">
              <SectionTitleEntrance direction="left">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anton font-bold tracking-wider lg:tracking-[0.12em] mb-4 lg:mb-6 text-navy">
                  CONTACT
                </h2>
              </SectionTitleEntrance>
              <p className="text-base sm:text-lg lg:text-xl text-navy leading-relaxed text-center">
                どんなことでも、<br />お気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>

        {/* 右カラム: ボタン */}
        <div className="mt-6 self-center lg:self-auto lg:mt-0 lg:ml-12 lg:self-end lg:-mb-24">
          <ViewMoreButton href="/contact" variant="accent" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10">
        <AboutSection />
      </div>
      <div className="relative z-10">
        <BusinessSection />
        <StrengthsSection />
        <TechnologySection />
        <RecruitSection />
        <ContactSection />
      </div>
    </>
  );
}
