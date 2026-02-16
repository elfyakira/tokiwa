"use client";

import Image from "next/image";
import { FadeInUp, FadeInImage } from "@/components/animations";

// ============================================================
// Technologyページ - トキワ工業
// ============================================================

// ページヒーロー - 2カラム構成
function PageHero() {
  return (
    <section className="relative pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2">
          {/* 左: テキストコンテンツ */}
          <div className="bg-white flex items-center py-16 lg:py-24">
            <FadeInUp>
              <div className="flex items-baseline gap-4 flex-wrap">
                <h1 className="text-4xl lg:text-5xl font-bold text-navy tracking-wider">
                  TECHNOLOGY
                </h1>
                <p className="text-sm text-navy tracking-wider">技術・設備</p>
              </div>
              <p className="text-text-primary leading-[2] mt-8 max-w-lg">
                トキワ工業の技術は、人の感覚と設備の正確さ、その両方を活かすことから生まれます。細かな調整や最終工程の仕上がりまで妥協せず、ミスの許されない仕事にも応えられる体制を整えてきました。
              </p>
            </FadeInUp>
          </div>
          {/* 右: 画像（縦長）- 右からスライドイン */}
          <FadeInImage
            src="/images/technology-hero.jpg"
            alt="Technology"
            fill
            direction="right"
            containerClassName="relative aspect-[3/4]"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

// 技術セクション - 画像3枚、説明文なし
function TechSection() {
  const technologies = [
    {
      id: "bankin",
      title: "板金技術（展開・切断・曲げ）",
      images: ["/images/tech-bankin-1.jpg", "/images/tech-bankin-2.jpg", "/images/tech-bankin-3.jpg"],
    },
    {
      id: "yosetsu",
      title: "溶接技術",
      images: ["/images/tech-yosetsu-1.jpg", "/images/tech-yosetsu-2.jpg", "/images/tech-yosetsu-3.jpg"],
    },
    {
      id: "kumitate",
      title: "組立技術",
      images: ["/images/tech-kumitate-1.jpg", "/images/tech-kumitate-2.jpg", "/images/tech-kumitate-3.jpg"],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12 lg:mb-16 text-center">
            技術
          </h2>
        </FadeInUp>

        <div className="space-y-16 lg:space-y-24">
          {technologies.map((tech, index) => (
            <FadeInUp key={tech.id} delay={index * 0.1}>
              <div id={tech.id} className="scroll-mt-24">
                <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-8 text-center">
                  {tech.title}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {tech.images.map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded overflow-hidden">
                      <Image
                        src={img}
                        alt={`${tech.title} ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// 設備セクション - 8枚（4列×2行）
function EquipmentSection() {
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
        <FadeInUp>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12 lg:mb-16 text-center">
            設備
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {equipmentImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src={img}
                  alt={`設備 ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

export default function TechnologyPage() {
  return (
    <>
      <PageHero />
      <TechSection />
      <EquipmentSection />
    </>
  );
}
