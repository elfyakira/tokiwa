"use client";

import Image from "next/image";
import { FadeInUp, FadeInImage } from "@/components/animations";

// ============================================================
// Businessページ - トキワ工業
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
                  BUSINESS
                </h1>
                <p className="text-sm text-navy tracking-wider">事業紹介</p>
              </div>
              <p className="text-text-primary leading-[2] mt-8 max-w-lg">
                制御盤・配電盤カバーからブラケット、機械カバー、制御BOXまで、多品種・小ロットにも対応した"細かなモノづくり"を行っています。図面製作〜板金加工〜組立まで一貫対応が可能です。
              </p>
            </FadeInUp>
          </div>
          {/* 右: 画像（縦長）- 右からスライドイン */}
          <FadeInImage
            src="/images/business-hero.jpg"
            alt="Business"
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

// アンカーナビセクション
function BusinessOverview() {
  const navItems = [
    { id: "ban", label: "盤制作" },
    { id: "cover", label: "機械カバー制作" },
    { id: "bracket", label: "ブラケット金具製作" },
    { id: "seikan", label: "製缶制作" },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex flex-col items-center gap-3 text-text-primary hover:text-accent transition-colors group"
              >
                <span className="text-sm lg:text-base font-medium">{item.label}</span>
                {/* 赤い丸下矢印アイコン */}
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-dark transition-colors">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </a>
            ))}
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
            <div className="space-y-6 text-text-primary leading-[1.8]">
              <p>様々な制御盤・配電盤の製作を通して培ってきた経験を活かし、一品一様の製品から、ロットのまとまった製品まで、いただいた図面をもとに、製作・塗装・組付け・配送まで一貫して対応しています。またラフ図などでも打ち合わせを行い、希望に沿ったカタチを一つひとつ造り上げていきます。品質を追求するため、各工程にチェック機能を設け、どの工程においても、妥協のない確認と丁寧な作業を積み重ねています。</p>
              <p>現場には、経験豊富な職人とエネルギー溢れる若手が各工程に配置されそれぞれの強みを活かしながら仕事に向き合っています。提案力・対応力を強みとし、急な図面変更や製作途中・仕上がり後の変更についてもその時々で最良の方法をお客様と相談しながらできる限り迅速かつ柔軟に対応しています。</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/business-ban-1.jpg"
                  alt="盤制作1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/business-ban-2.jpg"
                  alt="盤制作2"
                  fill
                  className="object-cover"
                />
              </div>
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
        <FadeInUp>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8">
            機械カバー制作
          </h2>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <FadeInUp delay={0.1}>
            <div className="space-y-6 text-text-primary leading-[1.8]">
              <p>マテハン機器・工作機械・化粧板など、人の目に付く製品で薄板物が多く、形状も図面を元に様々なものを製作します。R形状のものや、複雑な形状のものも製作可能です。仕上がりは特に気を使い、小傷や歪の無いよう丁寧に造ります。仕上がりが命ですのでエッジ処理は両面おこない、出来る限り溶接の無いよう曲げ、必要な溶接は歪が出ないように溶接をし、均一なラインが出るよう仕上げをしていきます。また、お客様の手に触れる部分や目に付く製品ですので、ノウハウを活かし各部署が細心の注意を払い最良な方法で製作していくので、後々の表面処理もスムーズにいきます。結果、品質の良いものを短納期で納品することが出来ます。お客さまからは「キレイで確かなものを造ってくれる」と喜ばれています。</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
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
            <div className="space-y-6 text-text-primary leading-[1.8]">
              <p>機械を組み立てる際、必要な電気部品、電子機器を取り付けるため、t2.3〜厚板の材料を図面を元に製作します。細かな製品が多く、多品種小ロットでも小回りを利かせます。各種タップ・皿モミ・ザグリ・強度のいる溶接等、ご要望通りの製品を造ります。単品部品として出てくるブラケット・金具関係の製品は必ずどこかと取り付くための穴があるので、単品としての認識だけでなく、物と物がどこに取り付くか整合性を確かめながら製品を製作していきます。</p>
              <p>多品種小ロットだけでなく、突発的に必要になったブラケット・金具でも迅速に対応し1日でも早く製作することで待ち状態がなくなり、作業が滞りなく進めることが出来ます。各種タップ・皿モミ・ザグリ・強度のいる溶接等、ご要望通りの製品を造ります。お客さまからは「明日出張先で使うから」という製品をその日に造って、喜んでいただきました。</p>
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
          <FadeInUp delay={0.1}>
            <div className="space-y-6 text-text-primary leading-[1.8]">
              <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
              <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/business-seikan-1.jpg"
                  alt="製缶制作1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/business-seikan-2.jpg"
                  alt="製缶制作2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// 制作事例セクション - 3列グリッド
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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((i) => (
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
