"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, SectionTitleEntrance } from "@/components/animations";

export default function VicePresidentInterviewPage() {
  return (
    <>
      {/* タイトル */}
      <section className="relative pt-24">
        <div className="bg-white pt-8 pb-8 lg:pt-10 lg:pb-10">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <SectionTitleEntrance direction="left">
              <p className="text-xs text-accent font-bold tracking-[0.25em] mb-2">INTERVIEW #02</p>
              <h1 className="text-3xl lg:text-5xl font-bold text-navy leading-tight">
                現場と経営をつなぎ、<br />より良い職場をつくる。
              </h1>
              <p className="mt-4 text-base text-text-secondary">専務取締役　T.S</p>
            </SectionTitleEntrance>
          </div>
        </div>
      </section>

      {/* ストーリー型インタビュー本文 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">

          {/* Q1 — テキスト左・画像右（画像下げ） */}
          <FadeInUp>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20 lg:mb-28">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q1. 専務として、現場と経営の間でどのような役割を担っていますか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    経営側の考えや現場の声を聴きつつ、より良い職場環境が作れるよう相談役となり、過去に働いていた仕事の経験や知識を生かして技術指導を行ったり、忙しい時や各部署に欠員が出た時はヘルプ要員として現場作業にも入ります。
                  </p>
                </div>
              </div>
              <div className="lg:mt-24 relative aspect-[4/3] rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="text-sm font-bold tracking-wider">PHOTO COMING SOON</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Q2 — 画像左・テキスト右（テキスト下げ） */}
          <FadeInUp>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20 lg:mb-28">
              <div className="relative aspect-[4/3] rounded overflow-hidden lg:order-1 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="text-sm font-bold tracking-wider">PHOTO COMING SOON</p>
                </div>
              </div>
              <div className="lg:order-2 lg:mt-24">
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q2. トキワ工業のものづくりにおいて、最もこだわっている点は？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    一言でいえば品質です。当社の製品は一品一様のものがほとんどです。ユーザーによっても仕様が異なる中で、特に外観や構造には気を使い、お客様の要望にも応えられる製品づくりを目指しています。
                  </p>
                  <p>
                    仕上がりについて、ある程度のところで満足するのではなく、「トキワの品質はこうだ！」というプライドと自信を持った製品づくりをしたいと考えています。
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Q3 — テキスト左・画像右（画像下げ） */}
          <FadeInUp>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20 lg:mb-28">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q3. 社員の皆様と接する上で、大切にされていることは？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    上司部下という上下の関係を取り払って、同じ職場の仲間として気楽に何でも話せる間柄であることを大切にしています。
                  </p>
                  <p>
                    締めるところは締めて緩めるところは緩めて、お互いが安心して自分の考えを言える環境づくりを心がけています。
                  </p>
                </div>
              </div>
              <div className="lg:mt-24 relative aspect-[4/3] rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="text-sm font-bold tracking-wider">PHOTO COMING SOON</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Q4 — 画像左・テキスト右（テキスト下げ） */}
          <FadeInUp>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20 lg:mb-28">
              <div className="relative aspect-[4/3] rounded overflow-hidden lg:order-1 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="text-sm font-bold tracking-wider">PHOTO COMING SOON</p>
                </div>
              </div>
              <div className="lg:order-2 lg:mt-24">
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q4. 今後、トキワ工業に必要とされる人材はどのような方でしょうか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    どんどん競争の激しくなっていく世の中で生き残っていくために、現状に満足せず常に上を目指して技術や知識を吸収して、一つだけでなくいろいろなことができる引き出しの多い多能工な人材が必要だと思います。
                  </p>
                  <p>
                    向上心や探求心、応用力――最初からすべてを持っている必要はありません。経験を重ねながら少しずつ身につけていける環境がここにはあります。
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Q5 — テキスト左・画像右（画像下げ） */}
          <FadeInUp>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20 lg:mb-28">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q5. 今後、会社としてどのような挑戦をしていきたいと考えていますか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    現在は、制御盤、機械カバー、金具などを主としていますが、ここで培った技術を生かして異業種にもチャンスを広げていけたらいいと思います。
                  </p>
                  <p>
                    守りに入らず、新しい分野にも目を向けていく。それがこれからのトキワ工業に必要な姿勢だと考えています。
                  </p>
                </div>
              </div>
              <div className="lg:mt-24 relative aspect-[4/3] rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="text-sm font-bold tracking-wider">PHOTO COMING SOON</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* 戻るリンク */}
          <FadeInUp delay={0.1}>
            <div className="max-w-narrow mx-auto pt-8 border-t border-border">
              <Link
                href="/recruit"
                className="inline-flex items-center gap-3 text-navy hover:text-accent transition-colors group"
              >
                <svg className="w-6 h-4 group-hover:-translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 16">
                  <line x1="24" y1="8" x2="2" y2="8" />
                  <polyline points="8,2 2,8 8,14" />
                </svg>
                <span className="text-sm font-bold tracking-[0.1em]">採用情報に戻る</span>
              </Link>
            </div>
          </FadeInUp>

        </div>
      </section>
    </>
  );
}
