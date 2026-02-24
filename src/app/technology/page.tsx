"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FadeInUp, FadeInImage, SectionTitleEntrance, Parallax } from "@/components/animations";
import Lightbox from "@/components/Lightbox";

// 画像カード（エントランス＋ホバー）
function TechImageCard({ src, alt, index, aspect = "aspect-[4/3]", onImageClick }: { src: string; alt: string; index: number; aspect?: string; onImageClick?: (src: string, alt: string) => void }) {
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
      className={`works-card-entrance group relative ${aspect} rounded-sm overflow-hidden cursor-pointer ${isVisible ? "is-visible" : ""}`}
      style={{ animationDelay: isVisible ? `${index * 100}ms` : undefined }}
      onClick={() => onImageClick?.(src, alt)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
    </div>
  );
}

// ============================================================
// Technologyページ - トキワ工業
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
                TECHNOLOGY
              </h1>
              <p className="text-sm lg:text-base text-navy tracking-wider">技術・設備</p>
            </div>
          </SectionTitleEntrance>
        </div>
      </div>

      {/* ヒーロー画像（フルワイド） */}
      <div className="relative">
        <FadeInImage
          src="/images/technology-hero.jpg"
          alt="Technology"
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
                      細かな仕事を、確かな技術で。
                    </h2>
                    <div className="w-48 lg:w-72 h-px bg-[#013f93] mt-8 mb-8" />
                    <p className="text-base text-[#013f93] leading-[2]">
                      トキワ工業の技術は、人の感覚と設備の正確さ、その両方を活かすことから生まれます。細かな調整や最終工程の仕上がりまで妥協せず、ミスの許されない仕事にも応えられる体制を整えてきました。
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

// 技術セクション — 人の力（ネイビーアクセント）
function TechSection({ onImageClick }: { onImageClick: (src: string, alt: string) => void }) {
  const technologies = [
    {
      id: "bankin",
      number: "#01",
      title: "板金技術（展開・切断・曲げ）",
      images: ["/images/tech-bankin-1.jpg", "/images/tech-bankin-2.jpg", "/images/tech-bankin-3.jpg"],
    },
    {
      id: "yosetsu",
      number: "#02",
      title: "溶接技術",
      images: ["/images/tech-yosetsu-1.jpg", "/images/tech-yosetsu-2.jpg", "/images/tech-yosetsu-3.jpg"],
    },
    {
      id: "kumitate",
      number: "#03",
      title: "組立技術",
      images: ["/images/tech-kumitate-1.jpg", "/images/tech-kumitate-2.jpg", "/images/tech-kumitate-3.jpg"],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {/* グループタイトル — 左寄せ＋ネイビーライン */}
        <SectionTitleEntrance direction="left" className="mb-14 lg:mb-20">
          <div className="flex items-center gap-4">
            <div className="w-1 h-12 lg:h-16 bg-navy rounded-full" />
            <div>
              <p className="text-xs lg:text-sm text-navy/60 font-bold tracking-[0.25em] mb-1">SKILLS</p>
              <h2 className="text-3xl lg:text-4xl font-anton font-bold text-navy tracking-wider">技術</h2>
            </div>
          </div>
          <p className="mt-3 text-base text-text-primary font-mincho pl-5 lg:pl-6 leading-[2]">長年の現場で培われた職人の感覚と経験が、図面だけでは伝わらない微細な調整や仕上がりの精度を実現します。板金・溶接・組立、それぞれの工程で人の手だからこそできる確かな技が、トキワ工業の品質を支えています。</p>
        </SectionTitleEntrance>

        <div className="space-y-20 lg:space-y-28">
          {technologies.map((tech) => (
            <div key={tech.id} id={tech.id} className="scroll-mt-24">
              <SectionTitleEntrance direction="left" className="mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-4xl lg:text-5xl font-anton font-bold text-navy/20 tracking-wider">
                    {tech.number}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-navy">
                    {tech.title}
                  </h3>
                </div>
                <div className="mt-3 h-[1px] bg-gradient-to-r from-navy/30 to-transparent" />
              </SectionTitleEntrance>

              <div className="grid grid-cols-3 gap-3 lg:gap-4">
                {tech.images.map((img, i) => (
                  <TechImageCard key={i} src={img} alt={`${tech.title} ${i + 1}`} index={i} onImageClick={onImageClick} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 設備セクション — 機械の力（レッドアクセント）
function EquipmentSection({ onImageClick }: { onImageClick: (src: string, alt: string) => void }) {
  const equipmentImages = [
    "/images/equipment-1.jpg",
    "/images/equipment-2.jpg",
    "/images/equipment-3.jpg",
    "/images/equipment-4.jpg",
    "/images/equipment-5.jpg",
    "/images/equipment-6.jpg",
    "/images/equipment-7.jpg",
    "/images/equipment-8.jpg",
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {/* グループタイトル — 右寄せ＋レッドライン（技術と対になる配置） */}
        <SectionTitleEntrance direction="left" className="mb-14 lg:mb-20">
          <div className="flex items-center gap-4">
            <div className="w-1 h-12 lg:h-16 bg-accent rounded-full" />
            <div>
              <p className="text-xs lg:text-sm text-accent/60 font-bold tracking-[0.25em] mb-1">EQUIPMENT</p>
              <h2 className="text-3xl lg:text-4xl font-anton font-bold text-navy tracking-wider">設備</h2>
            </div>
          </div>
          <p className="mt-3 text-base text-text-primary font-mincho pl-5 lg:pl-6 leading-[2]">最新の加工機器と検査設備を揃え、高い精度と安定した再現性を確保しています。人の技術と組み合わせることで、多品種・小ロットから量産まで幅広いニーズに対応できる生産体制を実現しています。</p>
        </SectionTitleEntrance>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {equipmentImages.map((img, i) => (
            <TechImageCard key={i} src={img} alt={`設備 ${i + 1}`} index={i} aspect="aspect-[3/4]" onImageClick={onImageClick} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TechnologyPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setLightbox({ src, alt });
  };

  return (
    <>
      <PageHero />
      <TechSection onImageClick={handleImageClick} />
      <EquipmentSection onImageClick={handleImageClick} />
      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </>
  );
}
