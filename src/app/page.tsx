"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, FadeInImage } from "@/components/animations";

// ============================================================
// TOPページ - トキワ工業
// ============================================================

// ヒーローセクション（動画背景）
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
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
        <FadeInUp className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-anton font-bold text-white tracking-[0.1em]">
            ABOUT US
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base lg:text-lg text-white/90 leading-[2] mb-8">
              トキワ工業は、制御盤・配電盤カバー、機械カバー、ブラケットなどを製作するものづくりの会社です。
            </p>
            <p className="text-base lg:text-lg text-white/90 leading-[2] mb-8">
              わずかなズレや仕上がりの違いが、製品全体の品質や信頼性を左右する─その現場の現実を知っているからこそ、「細かな仕事」と「確かな品質」に徹底的に向き合っています。現場で培った人の感覚や判断力に、設備の正確さを掛け合わせることで、ミスの許されない加工や組み立てにも応えられる体制を築いてきました。
            </p>
            <p className="text-base lg:text-lg text-white/90 leading-[2] mb-8">
              私たちは、単なる部品の供給先ではなく、お客様の製品価値を高めるための「欠かせない存在」でありたいと考えています。品質と納期に責任を持ち、最後の一手まで妥協しない。その積み重ねこそが、信頼につながると信じています。
            </p>
            <div className="mt-10">
              <Link href="/company" className="inline-flex items-center gap-1 text-white font-semibold hover:text-white/80 transition-colors">
                会社概要を見る<span>→</span>
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
  return (
    <section className="bg-white">
      {/* 上の白い余白 */}
      <div className="py-8 lg:py-12" />

      <div className="relative min-h-[500px] lg:min-h-[600px]">
        {/* 背景画像（左に余白）- 右からスライドイン */}
        <FadeInImage
          src="/images/business-bg.jpg"
          alt="Business"
          fill
          direction="right"
          containerClassName="absolute inset-y-0 left-6 lg:left-[calc((100vw-80rem)/2+2.5rem)] right-0 z-0"
          className="object-cover"
        />

        {/* コンテンツ */}
        <div className="absolute inset-0 z-10 flex flex-col">
          {/* タイトルバー */}
          <div className="pt-12 lg:pt-16 pl-[10%] lg:pl-[14%]">
            <div className="bg-white inline-block">
              <div className="px-8 py-4 lg:px-12 lg:py-6">
                <div className="flex items-baseline gap-4">
                  <h2 className="text-3xl lg:text-6xl font-anton font-bold text-navy tracking-wider lg:tracking-[0.12em]">BUSINESS</h2>
                  <span className="text-sm lg:text-base text-navy">事業紹介</span>
                </div>
              </div>
            </div>
          </div>

          {/* 説明文（画像の上に配置） */}
          <div className="pl-[18%] lg:pl-[24%] py-8 lg:py-12">
            <div className="flex flex-col items-start gap-2">
              <p className="text-base lg:text-lg text-navy leading-relaxed bg-white/90 px-4 py-1">
                必要とされる部品を、
              </p>
              <p className="text-base lg:text-lg text-navy leading-relaxed bg-white/90 px-4 py-1">
                必要な形で。
              </p>
            </div>
          </div>

          {/* 下部余白とボタン */}
          <div className="flex-1" />
          <div className="flex justify-end pr-[15%] lg:pr-[20%] pb-12 lg:pb-16">
            <Link
              href="/business"
              className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center text-navy text-sm lg:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              詳しく見る
            </Link>
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
    <section>
      {/* ヘッダー */}
      <div className="bg-white pt-12 lg:pt-16 pb-6 lg:pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInUp>
            <div className="flex items-baseline gap-4">
              <h2 className="text-3xl lg:text-5xl font-anton font-bold text-accent tracking-wider">OUR STRENGTHS</h2>
              <span className="text-sm lg:text-base text-accent font-semibold">3つの強み</span>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* 各強み */}
      {strengths.map((item, index) => (
        <div key={item.number} className="bg-white">
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

              {/* コンテンツ */}
              <div className="absolute inset-0 z-10 flex items-center">
                <div className="w-full px-6 lg:px-12">
                  <div className="flex justify-end">
                    <FadeInUp>
                      <div className="max-w-xl">
                        <p className="text-xl lg:text-3xl text-white font-anton font-bold tracking-widest mb-3">
                          OUR STRENGTHS　{item.number}
                        </p>
                        {/* 区切り線 */}
                        <div className="w-48 lg:w-72 h-px bg-white/60 mb-6" />
                        <h3 className="text-2xl lg:text-4xl font-bold text-white mb-6">
                          {item.title}
                        </h3>
                        <p className="text-sm lg:text-base text-white/90 leading-[2]">
                          {item.description}
                        </p>
                      </div>
                    </FadeInUp>
                  </div>
                </div>
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
    <section className="bg-white">
      {/* 上の白い余白 */}
      <div className="py-8 lg:py-12" />

      <div className="relative min-h-[500px] lg:min-h-[600px]">
        {/* 背景画像（右に余白）- 左からスライドイン */}
        <FadeInImage
          src="/images/technology-bg.jpg"
          alt="Technology"
          fill
          direction="left"
          containerClassName="absolute inset-y-0 left-0 right-6 lg:right-[calc((100vw-80rem)/2+3rem)] z-0"
          className="object-cover"
        />

        {/* コンテンツ */}
        <div className="absolute inset-0 z-10 flex flex-col">
          {/* タイトルバー（右寄せ、帯内テキスト左揃え） */}
          <div className="pt-12 lg:pt-16 flex justify-end pr-[5%] lg:pr-[8%]">
            <div className="bg-white inline-block">
              <div className="px-8 py-4 lg:px-12 lg:py-6">
                <div className="flex items-baseline gap-4">
                  <h2 className="text-3xl lg:text-6xl font-anton font-bold text-navy tracking-wider lg:tracking-[0.12em]">TECHNOLOGY</h2>
                  <span className="text-sm lg:text-base text-navy">技術・設備</span>
                </div>
              </div>
            </div>
          </div>

          {/* 説明文（右寄せ、帯内テキスト左揃え、画像内に配置） */}
          <div className="flex justify-end pr-[18%] lg:pr-[24%] py-8 lg:py-12">
            <div className="flex flex-col items-start gap-2">
              <p className="text-base lg:text-lg text-navy leading-relaxed bg-white/90 px-4 py-1">
                細かな仕事を、
              </p>
              <p className="text-base lg:text-lg text-navy leading-relaxed bg-white/90 px-4 py-1">
                確かな技術で。
              </p>
            </div>
          </div>

          {/* 下部余白とボタン（左寄せ） */}
          <div className="flex-1" />
          <div className="flex justify-start pl-[15%] lg:pl-[20%] pb-12 lg:pb-16">
            <Link
              href="/technology"
              className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center text-navy text-sm lg:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              詳しく見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Recruitセクション
function RecruitSection() {
  return (
    <section className="bg-white pt-16 lg:pt-24">
      {/* 7xl相当の左右余白 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* タイトルバー（画像の上に被せる） */}
        <div className="relative z-10">
          <div className="bg-gray-100 inline-block">
            <div className="px-8 py-4 lg:px-12 lg:py-6">
              <div className="flex items-baseline gap-4">
                <h2 className="text-3xl lg:text-6xl font-anton font-bold text-navy tracking-wider lg:tracking-[0.12em]">RECRUIT</h2>
                <span className="text-sm lg:text-base text-navy">採用情報</span>
              </div>
            </div>
          </div>
        </div>

        {/* 画像エリア（タイトルバーと被せる） */}
        <div className="relative -mt-10 lg:-mt-14 min-h-[550px] lg:min-h-[650px]">
          {/* 背景画像 - フェードイン */}
          <FadeInImage
            src="/images/recruit-bg.jpg"
            alt="Recruit"
            fill
            direction="up"
            containerClassName="absolute inset-y-0 left-0 right-2 z-0"
            className="object-cover"
          />

          {/* コンテンツ */}
          <div className="absolute inset-0 z-10 flex flex-col">
            {/* 説明文 */}
            <div className="px-6 lg:px-12 pt-20 lg:pt-24 pb-8 lg:pb-12">
              <div className="flex flex-col items-start gap-2">
                <p className="text-base lg:text-lg text-navy leading-relaxed bg-white/90 px-4 py-1">
                  あなたの個性が、
                </p>
                <p className="text-base lg:text-lg text-navy leading-relaxed bg-white/90 px-4 py-1">
                  ものづくりを支える。
                </p>
              </div>
            </div>

            {/* 下部余白とボタン */}
            <div className="flex-1" />
            <div className="flex justify-end px-6 lg:px-12 pb-12 lg:pb-16">
              <Link
                href="/recruit"
                className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center text-navy text-sm lg:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                詳しく見る
              </Link>
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
    <section className="relative min-h-[600px] lg:min-h-[700px]">
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
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anton font-bold tracking-wider lg:tracking-[0.12em] mb-4 lg:mb-6 text-navy">
                CONTACT
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-navy leading-relaxed text-center">
                どんなことでも、<br />お気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>

        {/* 右カラム: ボタン */}
        <div className="mt-6 self-center lg:self-auto lg:mt-0 lg:ml-12 lg:self-end lg:-mb-24">
          <Link
            href="/contact"
            className="w-24 h-24 lg:w-32 lg:h-32 bg-accent rounded-full flex items-center justify-center text-white text-sm lg:text-base font-semibold hover:bg-accent-dark transition-colors shadow-lg"
          >
            お問い合わせ
          </Link>
        </div>
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
