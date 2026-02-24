"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, SectionTitleEntrance } from "@/components/animations";

export default function PresidentInterviewPage() {
  return (
    <>
      {/* タイトル */}
      <section className="relative pt-24">
        <div className="bg-white pt-8 pb-8 lg:pt-10 lg:pb-10">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <SectionTitleEntrance direction="left">
              <p className="text-xs text-accent font-bold tracking-[0.25em] mb-2">INTERVIEW #01</p>
              <h1 className="text-3xl lg:text-5xl font-bold text-navy leading-tight">
                社員の幸せが、<br />確かなものづくりをつくる。
              </h1>
              <p className="mt-4 text-base text-text-secondary">代表取締役　鴇澤 進一</p>
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
                  Q1. 社長が一番大切にしていることは何ですか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    私が一番大切にしているのは、社員一人ひとりが幸せに暮らしていける会社であることです。仕事だけでなく、プライベートも含めて安心して過ごせる環境であってほしいと思っています。何かあれば気兼ねなく休めること、相談できること。そして社内の雰囲気も、できるだけ良い状態を保ちたいと常に考えています。
                  </p>
                  <p>
                    人が安心して働けるからこそ、集中して良い仕事ができる。その積み重ねが、トキワ工業の確かなものづくりにつながっていると感じています。
                  </p>
                </div>
              </div>
              <div className="lg:mt-24 relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/interview-president-4.jpg"
                  alt="鴇澤 進一"
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
                  src="/images/interview-president-2.jpg"
                  alt="インタビュー風景"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:order-2 lg:mt-24">
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q2. 社長が考える「トキワ工業らしい強み」とは何でしょうか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    私たちは、ただ言われたものを作る会社ではなく、自分たちから提案できる会社でありたいと思っています。気づいたことがあればこちらから声をかけて、「こうした方がもっと良くなりますよ」とお客様に提案する。それが結果的に、お客様の期待を超える価値につながると考えています。
                  </p>
                  <p>
                    設計の段階から完成の仕上がりまで、すべてに責任を持って、妥協しない。その積み重ねがトキワ工業の強みだと思っています。
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
                  Q3. これから入社する方に、どんな環境で働いてほしいですか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    一人ひとりの個性を活かしながら、安心して長く働ける会社であってほしいですね。雰囲気の良い職場で、意見も言いやすく、挑戦もできる環境をつくっていきたいと思っています。
                  </p>
                  <p>
                    そして、自分たちの仕事に誇りを持てる会社であること。社員がいきいき働くからこそ、確かで質の高いものづくりが生まれると信じています。
                  </p>
                </div>
              </div>
              <div className="lg:mt-24 relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/interview-president-3.jpg"
                  alt="インタビュー風景"
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
                  src="/images/interview-president.jpg"
                  alt="インタビュー風景"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:order-2 lg:mt-24">
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q4. 社員が長く活躍している理由を、社長はどう捉えていますか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    できるだけ同じ目線で話すこと、そして分かりやすく伝えることを心がけています。立場が違っても、気持ちは近い距離でいたいと思っています。
                  </p>
                  <p>
                    また、「休むこと」に対してネガティブにならない環境づくりも大切にしています。しっかり働く人もいれば、家庭や事情を優先する場面もある。どちらも尊重しながら、会社としてきちんと回る体制を整えることが、長く続けられる理由につながっているのではないかと感じています。
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Q5 — テキスト中央（締めくくり） */}
          <FadeInUp>
            <div className="max-w-narrow mx-auto mb-16">
              <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                Q5. これからどんな組織にしていきたいと考えていますか？
              </h2>
              <div className="text-base text-text-primary leading-[2] space-y-4">
                <p>
                  私たちの業界は、仕事量に波があります。その中で、できるだけ安定した組織にしていきたいと考えています。大きな山と谷を繰り返すのではなく、全体の底上げをしていくことが目標です。
                </p>
                <p>
                  また、難しい仕事だからこそ、いきなり高度な工程を任せるのではなく、できるところから段階的に成長していける体制を整えていきたいと思っています。
                </p>
                <p>
                  この仕事は決して簡単ではありませんが、確実に"手に職"がつきます。続けることで、自分の武器になる技術が身につく。将来どこに行っても通用する力を育てられる会社でありたいと考えています。
                </p>
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
