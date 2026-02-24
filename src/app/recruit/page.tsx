"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeInUp, FadeInImage, SectionTitleEntrance, Parallax } from "@/components/animations";

// ============================================================
// Recruitページ - トキワ工業
// ============================================================

// ページヒーロー - フルワイド画像 + グラデーションセクション + テキストボックス
function PageHero() {
  return (
    <section className="relative pt-24">
      {/* タイトルセクション */}
      <div className="bg-white pt-8 pb-8 lg:pt-10 lg:pb-10">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionTitleEntrance direction="left">
            <div className="flex items-baseline gap-4">
              <h1 className="text-4xl lg:text-6xl font-anton font-bold text-navy tracking-wider lg:tracking-[0.12em]">
                RECRUIT
              </h1>
              <p className="text-sm lg:text-base text-navy tracking-wider">採用情報</p>
            </div>
          </SectionTitleEntrance>
        </div>
      </div>

      {/* ヒーロー画像（フルワイド） */}
      <div className="relative">
        <FadeInImage
          src="/images/recruit-hero.jpg"
          alt="Recruit"
          fill
          direction="up"
          containerClassName="relative aspect-[16/9] lg:aspect-[2.5/1]"
          className="object-cover"
        />
      </div>

      {/* グラデーションセクション + テキストボックス */}
      <div className="relative">
        <div className="bg-gradient-to-b from-[#013f93] to-[#f5f8f6] py-32 lg:py-44" />

        {/* 白いテキストボックス（画像とグラデーションにまたがる） */}
        <div className="absolute left-0 right-0 z-20 -top-20 lg:-top-28">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div>
              <FadeInUp delay={0.1}>
                <div className="bg-white p-8 lg:p-12 w-full shadow-lg overflow-hidden">
                  <Parallax speed={0.08} clamp={15}>
                    <h2 className="text-[40px] font-bold text-[#013f93] font-mincho leading-tight whitespace-nowrap">
                      あなたの個性が、ものづくりを支える。
                    </h2>
                    <div className="w-48 lg:w-72 h-px bg-[#013f93] mt-8 mb-8" />
                    <p className="text-base text-[#013f93] leading-[2]">
                      私たちが大切にしているのは、同じ方向を見ながらも、それぞれの個性で支え合うこと。几帳面な人、ひらめきに強い人、手が早い人ーちがう強みが重なり合って、トキワの"確かさ"が生まれています。トキワ工業は、自分の個性を生かして働ける"ものづくりの舞台"。最後のピースを、あなたの手で完成させませんか？
                    </p>
                  </Parallax>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 数字でわかる"働く雰囲気"セクション（現状維持）
function NumbersSection() {
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-12 text-center">
            数字でわかる"働く雰囲気"
          </h2>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* 従業員定着率 */}
          <FadeInUp delay={0.1}>
            <div className="text-center overflow-hidden">
              <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/images/recruit-icon1.png"
                  alt="78%"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                従業員<br />定着率
              </h3>
              <p className="text-base text-text-secondary leading-[1.8] break-all">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </div>
          </FadeInUp>

          {/* 生産性の向上 */}
          <FadeInUp delay={0.2}>
            <div className="text-center overflow-hidden">
              <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/images/recruit-icon2.png"
                  alt="67%"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                生産性<br />の向上
              </h3>
              <p className="text-base text-text-secondary leading-[1.8] break-all">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </div>
          </FadeInUp>

          {/* 多様なジェンダーの増加 */}
          <FadeInUp delay={0.3}>
            <div className="text-center overflow-hidden">
              <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src="/images/recruit-icon3.png"
                  alt="多様なジェンダー"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                多様なジェンダー<br />の増加
              </h3>
              <p className="text-base text-text-secondary leading-[1.8] break-all">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// インタビューカード（エントランスアニメーション付き）
function InterviewCard({
  interview,
  index,
  reverse,
}: {
  interview: { slug: string; number: string; name: string; role: string; catchphrase: string; description: string; image: string; objectPosition?: string; scale?: number };
  index: number;
  reverse: boolean;
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
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-0 lg:gap-0 items-stretch transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* 画像 */}
      <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden interview-photo-wrap ${reverse ? "lg:order-2" : ""}`}>
        <Image
          src={interview.image}
          alt={interview.name}
          fill
          className="object-cover interview-photo-zoom"
          style={{
            ...(interview.objectPosition ? { objectPosition: interview.objectPosition } : {}),
            ...(interview.scale ? { transform: `scale(${interview.scale})` } : {}),
            ["--hover-scale" as string]: ((interview.scale || 1) * 1.08).toFixed(3),
          }}
        />
        {/* ナンバーオーバーレイ */}
        <div className={`absolute bottom-0 ${reverse ? "right-0 lg:left-0 lg:right-auto" : "left-0"} p-4 lg:p-6`}>
          <span className="text-6xl lg:text-8xl font-anton font-bold text-white/20 leading-none">
            {interview.number}
          </span>
        </div>
      </div>

      {/* テキスト */}
      <div className={`bg-navy p-8 lg:p-12 flex flex-col justify-center ${reverse ? "lg:order-1" : ""}`}>
        <div>
          <p className="text-xs text-white/50 font-bold tracking-[0.25em] mb-2">INTERVIEW</p>
          <p className="text-sm text-white/70 mb-1">{interview.role}</p>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">{interview.name}</h3>
          <div className="w-12 h-px bg-accent mb-6" />
          <p className="text-xl lg:text-2xl font-mincho text-white leading-relaxed mb-6">
            「{interview.catchphrase}」
          </p>
          <p className="text-base text-white/80 leading-[2] mb-8">
            {interview.description}
          </p>
          <Link
            href={`/recruit/interview/${interview.slug}`}
            className="inline-flex items-center gap-3 text-white group"
          >
            <span className="text-sm font-bold tracking-[0.15em] group-hover:tracking-[0.25em] transition-all duration-300">
              READ MORE
            </span>
            <svg className="w-8 h-4 text-accent group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 32 16">
              <line x1="0" y1="8" x2="26" y2="8" />
              <polyline points="20,2 26,8 20,14" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

// インタビューセクション
function InterviewSection() {
  const interviews = [
    {
      slug: "president",
      number: "#01",
      name: "鳴澤 潤一",
      role: "代表取締役",
      catchphrase: "社員の幸せが、確かなものづくりをつくる。",
      description: "安心して働ける環境が、良い仕事を生む。社員との距離感、提案する姿勢、段階的に成長できる体制――代表が語るトキワ工業の根っこにある想いとは。",
      image: "/images/interview-president.jpg",
      objectPosition: "55% center",
    },
    {
      slug: "employee-a",
      number: "#02",
      name: "社員 A",
      role: "製造部",
      catchphrase: "思い描いた通りに仕上がる、その瞬間が一番の達成感。",
      description: "溶接を担当する社員が語る、細部へのこだわりとコツコツ積み重ねるものづくりの魅力。技術だけでなく人としても成長できる環境とは。",
      image: "/images/interview-employee-a.jpg",
      objectPosition: "65% center",
      scale: 1.2,
    },
    {
      slug: "employee-b",
      number: "#03",
      name: "社員 B",
      role: "製造部",
      catchphrase: "できなかったことが、できるようになる喜び。",
      description: "北海道から愛知へ。派遣から正社員へ。縁と愛情に導かれ、挑戦する勇気を手にした社員が語る、トキワ工業での成長ストーリー。",
      image: "/images/interview-employee-b.jpg",
      objectPosition: "80% 70%",
      scale: 1.05,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {/* セクションタイトル */}
        <SectionTitleEntrance direction="scale" className="text-center mb-14 lg:mb-20">
          <p className="text-xs lg:text-sm text-accent font-bold tracking-[0.25em] mb-2">INTERVIEW</p>
          <h2 className="text-3xl lg:text-4xl font-anton font-bold text-navy tracking-wider">
            社員インタビュー
          </h2>
          <div className="mt-4 mx-auto w-16 h-[2px] bg-accent" />
          <p className="mt-4 text-base text-text-primary font-mincho leading-[2]">
            トキワ工業で働く人たちの、リアルな声をお届けします。
          </p>
        </SectionTitleEntrance>

        {/* インタビューカード一覧 */}
        <div className="space-y-8 lg:space-y-12">
          {interviews.map((interview, i) => (
            <InterviewCard
              key={interview.slug}
              interview={interview}
              index={i}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RecruitPage() {
  return (
    <>
      <PageHero />
      <NumbersSection />
      <InterviewSection />
    </>
  );
}
