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
              <p className="mt-4 text-base text-text-secondary">専務取締役　吉田和博</p>
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
              <div className="lg:mt-24 relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/interview-vice-president-2.jpg"
                  alt="専務取締役 吉田和博 インタビュー写真"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeInUp>

          {/* Q2 — 画像左・テキスト右（テキスト下げ） */}
          <FadeInUp>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20 lg:mb-28">
              <div className="relative aspect-[4/3] rounded overflow-hidden lg:order-1">
                <Image
                  src="/images/interview-vice-president-3.jpg"
                  alt="専務取締役 吉田和博 インタビュー写真"
                  fill
                  className="object-cover"
                />
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
              <div className="lg:mt-24 relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/interview-vice-president-4.jpg"
                  alt="専務取締役 吉田和博 インタビュー写真"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeInUp>

          {/* Q4 — 画像左・テキスト右（テキスト下げ） */}
          <FadeInUp>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20 lg:mb-28">
              <div className="relative aspect-[4/3] rounded overflow-hidden lg:order-1">
                <Image
                  src="/images/interview-vice-president-5.jpg"
                  alt="専務取締役 吉田和博 インタビュー写真"
                  fill
                  className="object-cover"
                />
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
              <div className="lg:mt-24 relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/interview-vice-president-6.jpg"
                  alt="専務取締役 吉田和博 インタビュー写真"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeInUp>

          {/* Instagram リンク */}
          <FadeInUp>
            <div className="max-w-narrow mx-auto mb-16">
              <a
                href="https://www.instagram.com/tkw_k_g/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 lg:p-6 bg-gray-50 hover:bg-white rounded-lg transition-all duration-300 hover:shadow-md"
              >
                <span className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </span>
                <div>
                  <span className="text-xl lg:text-2xl font-oswald font-bold text-navy tracking-wider">
                    Instagram
                  </span>
                  <p className="text-sm text-text-secondary mt-1">専務のシャッター日和</p>
                </div>
                <svg className="w-6 h-6 lg:w-7 lg:h-7 ml-auto text-navy/30 group-hover:text-navy group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <polyline points="9,6 15,12 9,18" />
                </svg>
              </a>
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
