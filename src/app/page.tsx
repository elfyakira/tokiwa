"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

// 背景画像スローパン（エントランスで動き始め、止まる）
function PanningBg({
  src,
  alt,
  direction = "left",
  minH = "min-h-[500px] lg:min-h-[600px]",
}: {
  src: string;
  alt: string;
  direction?: "left" | "right";
  minH?: string;
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden">
      <div className={`relative w-full h-full ${minH}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover pan-image pan-${direction} ${isVisible ? "is-visible" : ""}`}
        />
      </div>
    </div>
  );
}

// ヒーローセクション（動画背景）
function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="sticky top-0 z-0 h-screen min-h-[600px] flex items-center justify-center">
      {/* 背景動画 */}
      <div className="absolute inset-0 z-0">
        <video
          key={isMobile ? "mobile" : "desktop"}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top lg:object-center"
        >
          <source src={isMobile ? "/videos/hero-bg-mobile.mp4" : "/videos/hero-bg.mp4"} type="video/mp4" />
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
          {/* 背景画像 - スローパン */}
          <PanningBg src="/images/business-bg.jpg" alt="Business" direction="left" />

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
          {/* 背景画像 - スローパン（逆方向） */}
          <PanningBg src="/images/technology-bg.jpg" alt="Technology" direction="right" />

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
          {/* 背景画像 - スローパン */}
          <PanningBg src="/images/recruit-bg.jpg" alt="Recruit" direction="left" minH="min-h-[550px] lg:min-h-[650px]" />

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
            <div className="flex justify-end pr-[15%] lg:pr-[20%] pb-12 lg:pb-16">
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

// Contact & SNSセクション
function ContactSection() {
  return (
    <section className="bg-[#DFE5EA] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-10 lg:gap-0">
          {/* 左側：Follow us / SNS */}
          <div className="lg:pr-14">
            <SectionTitleEntrance direction="left">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anton text-[#013f93] tracking-wider mb-10 lg:mb-14">
                Follow us
              </h2>
            </SectionTitleEntrance>
            <div className="flex flex-col gap-6">
              {/* TikTok */}
              <FadeInUp delay={0.1}>
                <a
                  href="https://www.tiktok.com/@tokiwa.ind?_r=1&_t=ZS-952AcKZ6VIv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 lg:p-6 bg-white/60 hover:bg-white rounded-lg transition-all duration-300 hover:shadow-md"
                >
                  <span className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#013f93] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-2xl lg:text-3xl font-oswald font-bold text-[#013f93] tracking-wider">
                      TikTok
                    </span>
                    <p className="text-sm text-[#013f93]/50 mt-1">@tokiwa.ind</p>
                  </div>
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 ml-auto text-[#013f93]/30 group-hover:text-[#013f93] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <polyline points="9,6 15,12 9,18" />
                  </svg>
                </a>
              </FadeInUp>

              {/* Instagram */}
              <FadeInUp delay={0.2}>
                <a
                  href="https://www.instagram.com/tkw_k_g/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 lg:p-6 bg-white/60 hover:bg-white rounded-lg transition-all duration-300 hover:shadow-md"
                >
                  <span className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-2xl lg:text-3xl font-oswald font-bold text-[#013f93] tracking-wider">
                      Instagram
                    </span>
                    <p className="text-sm text-[#013f93]/50 mt-1">専務のシャッター日和</p>
                  </div>
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 ml-auto text-[#013f93]/30 group-hover:text-[#013f93] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <polyline points="9,6 15,12 9,18" />
                  </svg>
                </a>
              </FadeInUp>
            </div>
          </div>

          {/* 中央の縦線 */}
          <div className="hidden lg:block bg-[#013f93]/20 self-stretch" />

          {/* 右側：Contact us */}
          <div className="lg:pl-14">
            <SectionTitleEntrance direction="right">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anton text-[#013f93] tracking-wider mb-10 lg:mb-14">
                Contact us
              </h2>
            </SectionTitleEntrance>
            <FadeInUp delay={0.2}>
              <p className="text-base lg:text-lg text-[#013f93]/70 leading-[2] mb-10">
                トキワ工業へのご相談やご質問は<br />
                こちらのフォームよりお気軽に<br />
                お問い合わせください。
              </p>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-[#013f93] hover:gap-5 transition-all duration-500"
              >
                <span className="text-lg lg:text-xl font-oswald tracking-wider">VIEW MORE</span>
                <svg className="w-10 h-10 lg:w-14 lg:h-14 text-[#013f93]/50 group-hover:text-[#013f93] transition-all duration-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <polyline points="15,6 21,12 15,18" />
                </svg>
              </Link>
            </FadeInUp>
          </div>
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
