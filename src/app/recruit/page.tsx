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
          src="/images/recruit-bg.jpg"
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

// カウントアップアニメーション
function CountUp({ value, duration = 2000 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const target = parseInt(value, 10);
    if (isNaN(target)) { setDisplayed(value); return; }

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(eased * target);
      setDisplayed(current.toLocaleString());
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, value, duration]);

  return <span ref={ref}>{displayed}</span>;
}

// 数字で見るトキワ工業セクション
function NumbersSection() {
  const numbers = [
    {
      label: "平均残業時間",
      value: "15",
      unit: "時間以内",
      suffix: "/月",
      icon: (
        <svg className="w-12 h-12 lg:w-14 lg:h-14 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12,6 12,12 16,14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "平均勤続年数",
      value: "12",
      unit: "年",
      suffix: "",
      icon: (
        <svg className="w-12 h-12 lg:w-14 lg:h-14 text-accent" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
    },
    {
      label: "創業",
      value: "1982",
      unit: "年",
      suffix: "",
      icon: (
        <svg className="w-12 h-12 lg:w-14 lg:h-14 text-accent" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      ),
    },
    {
      label: "年間休日",
      value: "115",
      unit: "日",
      suffix: "",
      icon: (
        <svg className="w-12 h-12 lg:w-14 lg:h-14 text-accent" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <SectionTitleEntrance direction="scale" className="text-center mb-14 lg:mb-20">
          <p className="text-xs lg:text-sm text-accent font-bold tracking-[0.25em] mb-2">DATA</p>
          <h2 className="text-3xl lg:text-4xl font-anton font-bold text-navy tracking-wider">
            数字で見るトキワ工業
          </h2>
          <div className="mt-4 mx-auto w-16 h-[2px] bg-accent" />
        </SectionTitleEntrance>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {numbers.map((item, i) => (
            <FadeInUp key={item.label} delay={i * 0.12}>
              <div className="bg-white rounded shadow-card aspect-square flex flex-col items-center justify-center text-center p-6 lg:p-10">
                <div className="mb-5 lg:mb-8 flex justify-center">
                  <div className="w-14 h-14 lg:w-20 lg:h-20 [&>svg]:w-full [&>svg]:h-full">
                    {item.icon}
                  </div>
                </div>
                <p className="text-sm lg:text-base font-bold text-text-secondary tracking-wider mb-4 lg:mb-6">
                  {item.label}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-6xl lg:text-8xl font-bold text-accent leading-none tracking-[0.08em]" style={{ fontFamily: "'Anton', sans-serif", fontFeatureSettings: '"tnum"' }}>
                    <CountUp value={item.value} />
                  </span>
                  <span className="text-base lg:text-xl font-bold text-navy">
                    {item.unit}
                  </span>
                </div>
                {item.suffix && (
                  <p className="text-sm text-text-secondary mt-2">
                    {item.suffix}
                  </p>
                )}
              </div>
            </FadeInUp>
          ))}
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
      name: "鴇澤 進一",
      role: "代表取締役",
      catchphrase: "社員の幸せが、確かなものづくりをつくる。",
      description: "安心して働ける環境が、良い仕事を生む。社員との距離感、提案する姿勢、段階的に成長できる体制――代表が語るトキワ工業の根っこにある想いとは。",
      image: "/images/interview-president.jpg",
      objectPosition: "55% center",
    },
    {
      slug: "employee-a",
      number: "#02",
      name: "T.K",
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
      name: "S.M",
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
