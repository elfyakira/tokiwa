"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, FadeInImage } from "@/components/animations";

// ============================================================
// Recruitページ - トキワ工業
// ============================================================

// ページヒーロー - フルワイド画像 + グラデーションセクション + テキストボックス
function PageHero() {
  return (
    <section className="relative pt-24">
      {/* タイトルセクション */}
      <div className="bg-white pt-24 pb-8 lg:pt-40 lg:pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInUp>
            <div className="flex items-baseline gap-4">
              <h1 className="text-4xl lg:text-6xl font-anton font-bold text-navy tracking-wider lg:tracking-[0.12em]">
                RECRUIT
              </h1>
              <p className="text-sm lg:text-base text-navy tracking-wider">採用情報</p>
            </div>
          </FadeInUp>
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
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div>
              <FadeInUp delay={0.1}>
                <div className="bg-white p-8 lg:p-12 w-full shadow-lg">
                  <h2 className="text-[40px] font-bold text-[#013f93] font-mincho leading-tight whitespace-nowrap">
                    あなたの個性が、ものづくりを支える。
                  </h2>
                  <div className="w-48 lg:w-72 h-px bg-[#013f93] mt-8 mb-8" />
                  <p className="text-sm lg:text-base text-[#013f93] leading-[2]">
                    私たちが大切にしているのは、同じ方向を見ながらも、それぞれの個性で支え合うこと。几帳面な人、ひらめきに強い人、手が早い人ーちがう強みが重なり合って、トキワの"確かさ"が生まれています。トキワ工業は、自分の個性を生かして働ける"ものづくりの舞台"。最後のピースを、あなたの手で完成させませんか？
                  </p>
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
              <p className="text-sm text-text-secondary leading-[1.8] break-all">
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
              <p className="text-sm text-text-secondary leading-[1.8] break-all">
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
              <p className="text-sm text-text-secondary leading-[1.8] break-all">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// インタビューセクション（現状維持）
function InterviewSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-12 text-center">
            ※インタビュー
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="relative aspect-[16/9] max-w-3xl mx-auto rounded overflow-hidden">
            <Image
              src="/images/interview.jpg"
              alt="インタビュー"
              fill
              className="object-cover"
            />
          </div>
        </FadeInUp>
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
