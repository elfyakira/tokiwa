"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/animations";

// ============================================================
// Recruitページ - トキワ工業
// ============================================================

// ページヒーロー
function PageHero() {
  return (
    <section className="relative h-[300px] lg:h-[400px] flex items-center -mt-20 pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/recruit-hero.jpg"
          alt="Recruit"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 w-full">
        <FadeInUp>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-wider">
            RECRUIT
          </h1>
          <p className="text-sm text-white/80 mt-2 tracking-wider">採用情報</p>
        </FadeInUp>
      </div>
    </section>
  );
}

// キャッチコピーセクション
function CatchSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="max-w-3xl">
            <p className="text-lg lg:text-xl text-navy font-bold leading-[2] mb-6">
              私たちが大切にしているのは、同じ方向を見ながらも、それぞれの個性で支えおうこと。
            </p>
            <p className="text-base text-text-primary leading-[2] mb-4">
              几帳面な人、ひらめきに強い人、手先が器用な人、ちがう強みが絡み合って、トキワの"ものづくり"が生まれます。
            </p>
            <p className="text-base text-text-primary leading-[2] mb-4">
              トキワ工業は、自分の個性を生かして働ける"ものづくりの舞台"。
            </p>
            <p className="text-base text-text-primary leading-[2]">
              最後のピースを、あなたの手で完成させませんか？
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// 数字でわかる"働く雰囲気"セクション
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
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-6">
                {/* 円グラフ風のデザイン */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="10"
                    strokeDasharray={`${78 * 2.83} ${100 * 2.83}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-text-primary">78%</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                従業員<br />定着率
              </h3>
              <p className="text-sm text-text-secondary leading-[1.8]">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </div>
          </FadeInUp>

          {/* 生産性の向上 */}
          <FadeInUp delay={0.2}>
            <div className="text-center">
              <div className="relative h-40 flex flex-col justify-center mb-6">
                {/* プログレスバー風のデザイン */}
                <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue rounded-full" style={{ width: '67%' }} />
                </div>
                <span className="text-4xl font-bold text-text-primary mt-4">67%</span>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                生産性<br />の向上
              </h3>
              <p className="text-sm text-text-secondary leading-[1.8]">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </div>
          </FadeInUp>

          {/* 多様なジェンダーの増加 */}
          <FadeInUp delay={0.3}>
            <div className="text-center">
              <div className="h-40 flex flex-col justify-center mb-6">
                <div className="flex justify-center gap-1">
                  {/* 人アイコン - 上段 */}
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={`top-${i}`}
                      className="w-6 h-10 text-blue"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="6" r="4" />
                      <path d="M12 12c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                    </svg>
                  ))}
                </div>
                <div className="flex justify-center gap-1 mt-1">
                  {/* 人アイコン - 下段 */}
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={`bottom-${i}`}
                      className={`w-6 h-10 ${i < 2 ? 'text-blue' : 'text-gray-800'}`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="6" r="4" />
                      <path d="M12 12c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                    </svg>
                  ))}
                </div>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                多様なジェンダー<br />の増加
              </h3>
              <p className="text-sm text-text-secondary leading-[1.8]">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </div>
          </FadeInUp>
        </div>

        {/* ボタン */}
        <FadeInUp delay={0.4} className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-12 py-4 rounded font-medium hover:bg-gray-800 transition-colors"
          >
            ボタン
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

// インタビューセクション
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
      <CatchSection />
      <NumbersSection />
      <InterviewSection />
    </>
  );
}
