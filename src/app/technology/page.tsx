"use client";

import Image from "next/image";
import { FadeInUp } from "@/components/animations";

// ============================================================
// Technologyページ - トキワ工業
// ============================================================

// ページヒーロー
function PageHero() {
  return (
    <section className="relative h-[300px] lg:h-[400px] flex items-center -mt-20 pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/technology-hero.jpg"
          alt="Technology"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 w-full">
        <FadeInUp>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-wider">
            TECHNOLOGY
          </h1>
          <p className="text-sm text-white/80 mt-2 tracking-wider">技術・設備</p>
        </FadeInUp>
      </div>
    </section>
  );
}

// 概要セクション
function OverviewSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <p className="text-base lg:text-lg text-text-primary leading-[2] max-w-3xl">
            トキワ工業は高度な技術力と最新設備で、精密な製品づくりを実現しています。お客様のご要望に幅広くお応えできるよう、組織的な設備投資と技術の向上に取り組んでおります。これまで培った高品質な技術力をご覧ください。
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}

// 技術セクション
function TechSection() {
  const technologies = [
    {
      id: "bankin",
      title: "板金技術（展開・切断・曲げ）",
      description: "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
      images: ["/images/tech-bankin-1.jpg", "/images/tech-bankin-2.jpg", "/images/tech-bankin-3.jpg", "/images/tech-bankin-4.jpg"],
    },
    {
      id: "yosetsu",
      title: "溶接技術",
      description: "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
      images: ["/images/tech-yosetsu-1.jpg", "/images/tech-yosetsu-2.jpg", "/images/tech-yosetsu-3.jpg", "/images/tech-yosetsu-4.jpg"],
    },
    {
      id: "kumitate",
      title: "組立技術",
      description: "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
      images: ["/images/tech-kumitate-1.jpg", "/images/tech-kumitate-2.jpg", "/images/tech-kumitate-3.jpg", "/images/tech-kumitate-4.jpg"],
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
                <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-6 text-center">
                  {tech.title}
                </h3>
                <p className="text-text-primary leading-[1.8] text-center max-w-3xl mx-auto mb-8">
                  {tech.description}
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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

// 設備セクション
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
    "/images/equipment-9.jpg",
    "/images/equipment-10.jpg",
    "/images/equipment-11.jpg",
    "/images/equipment-12.jpg",
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
      <OverviewSection />
      <TechSection />
      <EquipmentSection />
    </>
  );
}
