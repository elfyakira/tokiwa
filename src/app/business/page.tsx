"use client";

import Image from "next/image";
import { FadeInUp } from "@/components/animations";

// ============================================================
// Businessページ - トキワ工業
// ============================================================

// ページヒーロー
function PageHero() {
  return (
    <section className="relative h-[300px] lg:h-[400px] flex items-center -mt-20 pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/business-hero.jpg"
          alt="Business"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 w-full">
        <FadeInUp>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-wider">
            BUSINESS
          </h1>
          <p className="text-sm text-white/80 mt-2 tracking-wider">事業内容</p>
        </FadeInUp>
      </div>
    </section>
  );
}

// 事業概要セクション
function BusinessOverview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <p className="text-base lg:text-lg text-text-primary leading-[2] max-w-3xl">
            制御盤・配電盤をはじめ、機械カバーやブラケット、精密から大物まで、幅広い金属加工を手掛けています。お客様のニーズに合わせた製品を、確かな技術と品質でお届けします。
          </p>
        </FadeInUp>

        {/* カテゴリーナビ */}
        <FadeInUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a href="#ban" className="flex items-center gap-2 px-6 py-3 bg-navy text-white rounded hover:bg-navy/90 transition-colors">
              <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">01</span>
              盤制作
            </a>
            <a href="#cover" className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded hover:bg-accent-dark transition-colors">
              <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">02</span>
              機械カバー制作
            </a>
            <a href="#bracket" className="flex items-center gap-2 px-6 py-3 bg-blue text-white rounded hover:bg-blue/90 transition-colors">
              <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">03</span>
              ブラケット金具製作
            </a>
            <a href="#seikan" className="flex items-center gap-2 px-6 py-3 bg-navy text-white rounded hover:bg-navy/90 transition-colors">
              <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">04</span>
              製缶制作
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// 盤制作セクション
function BanSection() {
  return (
    <section id="ban" className="py-16 lg:py-24 bg-bg-light scroll-mt-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8">
            盤制作
          </h2>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <FadeInUp delay={0.1}>
            <div className="space-y-4 text-text-primary leading-[1.8]">
              <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
              <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/business-ban.jpg"
                alt="盤制作"
                fill
                className="object-cover"
              />
            </div>
          </FadeInUp>
        </div>

        {/* 制作事例 */}
        <FadeInUp delay={0.3} className="mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded overflow-hidden">
                <Image
                  src={`/images/ban-example-${i}.jpg`}
                  alt={`盤制作事例${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// 機械カバー制作セクション
function CoverSection() {
  return (
    <section id="cover" className="py-16 lg:py-24 bg-white scroll-mt-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8">
            機械カバー制作
          </h2>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <FadeInUp delay={0.1} className="lg:order-2">
            <div className="space-y-4 text-text-primary leading-[1.8]">
              <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
              <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2} className="lg:order-1">
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/business-cover.jpg"
                alt="機械カバー制作"
                fill
                className="object-cover"
              />
            </div>
          </FadeInUp>
        </div>

        {/* 制作事例 */}
        <FadeInUp delay={0.3} className="mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded overflow-hidden">
                <Image
                  src={`/images/cover-example-${i}.jpg`}
                  alt={`機械カバー制作事例${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// ブラケット金具製作セクション
function BracketSection() {
  return (
    <section id="bracket" className="py-16 lg:py-24 bg-bg-light scroll-mt-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8">
            ブラケット<br className="lg:hidden" />金具製作
          </h2>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <FadeInUp delay={0.1}>
            <div className="space-y-4 text-text-primary leading-[1.8]">
              <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
              <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/business-bracket.jpg"
                alt="ブラケット金具製作"
                fill
                className="object-cover"
              />
            </div>
          </FadeInUp>
        </div>

        {/* 制作事例 */}
        <FadeInUp delay={0.3} className="mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded overflow-hidden">
                <Image
                  src={`/images/bracket-example-${i}.jpg`}
                  alt={`ブラケット金具製作事例${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// 製缶制作セクション
function SeikanSection() {
  return (
    <section id="seikan" className="py-16 lg:py-24 bg-white scroll-mt-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8">
            製缶制作
          </h2>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <FadeInUp delay={0.1} className="lg:order-2">
            <div className="space-y-4 text-text-primary leading-[1.8]">
              <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
              <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2} className="lg:order-1">
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/business-seikan.jpg"
                alt="製缶制作"
                fill
                className="object-cover"
              />
            </div>
          </FadeInUp>
        </div>

        {/* 制作事例 */}
        <FadeInUp delay={0.3} className="mt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded overflow-hidden">
                <Image
                  src={`/images/seikan-example-${i}.jpg`}
                  alt={`製缶制作事例${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// 制作事例セクション
function WorksSection() {
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8">
            制作事例
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative aspect-square rounded overflow-hidden">
                <Image
                  src={`/images/works-${i}.jpg`}
                  alt={`制作事例${i}`}
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

export default function BusinessPage() {
  return (
    <>
      <PageHero />
      <BusinessOverview />
      <BanSection />
      <CoverSection />
      <BracketSection />
      <SeikanSection />
      <WorksSection />
    </>
  );
}
