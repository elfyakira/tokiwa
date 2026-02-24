"use client";

import { useEffect, useRef, useState, createContext, useContext } from "react";
import Image from "next/image";
import { FadeInUp, FadeInImage, SectionTitleEntrance, Parallax } from "@/components/animations";
import Lightbox from "@/components/Lightbox";

// Lightbox用コンテキスト
const LightboxContext = createContext<(src: string, alt: string) => void>(() => {});

// 制作物セクションタイトル
function BusinessSectionTitle({ number, title }: { number: string; title: React.ReactNode }) {
  return (
    <SectionTitleEntrance direction="left" className="mb-12">
      <div className="flex items-center gap-5">
        <span className="text-5xl lg:text-6xl font-anton font-bold text-accent tracking-wider">
          {number}
        </span>
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-navy">
            {title}
          </h2>
        </div>
      </div>
      <div className="mt-4 h-[2px] bg-gradient-to-r from-navy via-navy/40 to-transparent" />
    </SectionTitleEntrance>
  );
}

// ============================================================
// Businessページ - トキワ工業
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
                BUSINESS
              </h1>
              <p className="text-sm lg:text-base text-navy tracking-wider">事業紹介</p>
            </div>
          </SectionTitleEntrance>
        </div>
      </div>

      {/* ヒーロー画像（フルワイド） */}
      <div className="relative">
        <FadeInImage
          src="/images/business-bg.jpg"
          alt="Business"
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
                      多品種・小ロットに応える、細かなモノづくり。
                    </h2>
                    <div className="w-48 lg:w-72 h-px bg-[#013f93] mt-8 mb-8" />
                    <p className="text-base text-[#013f93] leading-[2]">
                      制御盤・配電盤カバーからブラケット、機械カバー、制御BOXまで、多品種・小ロットにも対応した"細かなモノづくり"を行っています。図面製作〜板金加工〜組立まで一貫対応が可能です。
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

// アンカーナビボタン（エントランス＋ホバーアニメーション付き）
function BizNavButton({ id, label, index }: { id: string; label: string; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={`#${id}`}
      className={`biz-nav-entrance biz-nav-btn group block bg-[#013f93]/80 py-8 lg:py-10 text-center relative overflow-hidden ${isVisible ? "is-visible" : ""}`}
      style={{ animationDelay: isVisible ? `${index * 120}ms` : undefined }}
    >
      <h3 className="text-xl lg:text-2xl font-bold text-white tracking-[0.15em] relative z-10">{label}</h3>
      <div className="mt-5 flex justify-center relative z-10">
        <svg className="w-14 h-7 text-white/50 group-hover:text-white group-hover:translate-x-3 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 56 28">
          <line x1="0" y1="14" x2="48" y2="14" />
          <polyline points="40,6 48,14 40,22" />
        </svg>
      </div>
    </a>
  );
}

// アンカーナビセクション
function BusinessOverview() {
  const navItems = [
    { id: "ban", label: "盤制作" },
    { id: "cover", label: "機械カバー制作" },
    { id: "bracket", label: "ブラケット金具製作" },
    { id: "seikan", label: "製缶制作" },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#f5f8f6]">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-4">
          {navItems.map((item, i) => (
            <BizNavButton key={item.id} id={item.id} label={item.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// クリック可能な画像
function ClickableImage({ src, alt }: { src: string; alt: string }) {
  const onImageClick = useContext(LightboxContext);
  return (
    <div className="relative aspect-[4/3] rounded overflow-hidden cursor-pointer group" onClick={() => onImageClick(src, alt)}>
      <Image src={src} alt={alt} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
    </div>
  );
}

// 盤制作セクション
function BanSection() {
  return (
    <section id="ban" className="py-16 lg:py-24 bg-bg-light scroll-mt-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <BusinessSectionTitle number="#01" title="盤制作" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <FadeInUp delay={0.1}>
            <div className="space-y-6 text-text-primary leading-[1.8]">
              <p>様々な制御盤・配電盤の製作を通して培ってきた経験を活かし、一品一様の製品から、ロットのまとまった製品まで、いただいた図面をもとに、製作・塗装・組付け・配送まで一貫して対応しています。またラフ図などでも打ち合わせを行い、希望に沿ったカタチを一つひとつ造り上げていきます。品質を追求するため、各工程にチェック機能を設け、どの工程においても、妥協のない確認と丁寧な作業を積み重ねています。</p>
              <p>現場には、経験豊富な職人とエネルギー溢れる若手が各工程に配置されそれぞれの強みを活かしながら仕事に向き合っています。提案力・対応力を強みとし、急な図面変更や製作途中・仕上がり後の変更についてもその時々で最良の方法をお客様と相談しながらできる限り迅速かつ柔軟に対応しています。</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="space-y-4">
              <ClickableImage src="/images/business-ban-1.jpg" alt="盤制作1" />
              <ClickableImage src="/images/business-ban-2.jpg" alt="盤制作2" />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// 機械カバー制作セクション
function CoverSection() {
  return (
    <section id="cover" className="py-16 lg:py-24 bg-white scroll-mt-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <BusinessSectionTitle number="#02" title="機械カバー制作" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <FadeInUp delay={0.1}>
            <div className="space-y-6 text-text-primary leading-[1.8]">
              <p>マテハン機器・工作機械・化粧板など、人の目に付く製品で薄板物が多く、形状も図面を元に様々なものを製作します。R形状のものや、複雑な形状のものも製作可能です。仕上がりは特に気を使い、小傷や歪の無いよう丁寧に造ります。仕上がりが命ですのでエッジ処理は両面おこない、出来る限り溶接の無いよう曲げ、必要な溶接は歪が出ないように溶接をし、均一なラインが出るよう仕上げをしていきます。また、お客様の手に触れる部分や目に付く製品ですので、ノウハウを活かし各部署が細心の注意を払い最良な方法で製作していくので、後々の表面処理もスムーズにいきます。結果、品質の良いものを短納期で納品することが出来ます。お客さまからは「キレイで確かなものを造ってくれる」と喜ばれています。</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <ClickableImage src="/images/business-cover.jpg" alt="機械カバー制作" />
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// ブラケット金具製作セクション
function BracketSection() {
  return (
    <section id="bracket" className="py-16 lg:py-24 bg-bg-light scroll-mt-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <BusinessSectionTitle number="#03" title={<>ブラケット<br className="lg:hidden" />金具製作</>} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <FadeInUp delay={0.1}>
            <div className="space-y-6 text-text-primary leading-[1.8]">
              <p>機械を組み立てる際、必要な電気部品、電子機器を取り付けるため、t2.3〜厚板の材料を図面を元に製作します。細かな製品が多く、多品種小ロットでも小回りを利かせます。各種タップ・皿モミ・ザグリ・強度のいる溶接等、ご要望通りの製品を造ります。単品部品として出てくるブラケット・金具関係の製品は必ずどこかと取り付くための穴があるので、単品としての認識だけでなく、物と物がどこに取り付くか整合性を確かめながら製品を製作していきます。</p>
              <p>多品種小ロットだけでなく、突発的に必要になったブラケット・金具でも迅速に対応し1日でも早く製作することで待ち状態がなくなり、作業が滞りなく進めることが出来ます。各種タップ・皿モミ・ザグリ・強度のいる溶接等、ご要望通りの製品を造ります。お客さまからは「明日出張先で使うから」という製品をその日に造って、喜んでいただきました。</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <ClickableImage src="/images/business-bracket.jpg" alt="ブラケット金具製作" />
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// 製缶制作セクション
function SeikanSection() {
  return (
    <section id="seikan" className="py-16 lg:py-24 bg-white scroll-mt-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <BusinessSectionTitle number="#04" title="製缶制作" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <FadeInUp delay={0.1}>
            <div className="space-y-6 text-text-primary leading-[1.8]">
              <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
              <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="space-y-4">
              <ClickableImage src="/images/business-seikan-1.jpg" alt="製缶制作1" />
              <ClickableImage src="/images/business-seikan-2.jpg" alt="製缶制作2" />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// 制作事例 写真カード（エントランス＋ホバー）
function WorksCard({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const onImageClick = useContext(LightboxContext);
  const src = `/images/works-${index + 1}.jpg`;
  const alt = `制作事例${index + 1}`;

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
      className={`works-card-entrance group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer ${isVisible ? "is-visible" : ""}`}
      style={{ animationDelay: isVisible ? `${(index % 6) * 80}ms` : undefined }}
      onClick={() => onImageClick(src, alt)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300" />
    </div>
  );
}

// 制作事例セクション - 3列グリッド
function WorksSection() {
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {/* タイトル：中央配置＋スケールアップ */}
        <SectionTitleEntrance direction="scale" className="text-center mb-14">
          <p className="text-sm lg:text-base text-accent font-bold tracking-[0.2em] mb-2">WORKS</p>
          <h2 className="text-3xl lg:text-4xl font-anton font-bold text-navy tracking-wider">
            制作事例
          </h2>
          <div className="mt-4 mx-auto w-16 h-[2px] bg-accent" />
        </SectionTitleEntrance>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {Array.from({ length: 16 }, (_, i) => (
            <WorksCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BusinessPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setLightbox({ src, alt });
  };

  return (
    <LightboxContext.Provider value={handleImageClick}>
      <PageHero />
      <BusinessOverview />
      <BanSection />
      <CoverSection />
      <BracketSection />
      <SeikanSection />
      <WorksSection />
      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </LightboxContext.Provider>
  );
}
