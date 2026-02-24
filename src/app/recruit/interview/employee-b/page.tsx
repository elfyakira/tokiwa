"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, SectionTitleEntrance } from "@/components/animations";

export default function EmployeeBInterviewPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="relative pt-24">
        <div className="bg-white pt-8 pb-8 lg:pt-10 lg:pb-10">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <SectionTitleEntrance direction="left">
              <p className="text-xs text-accent font-bold tracking-[0.25em] mb-2">INTERVIEW #03</p>
              <h1 className="text-3xl lg:text-5xl font-bold text-navy leading-tight">
                できなかったことが、<br />できるようになる喜び。
              </h1>
              <p className="mt-4 text-base text-text-secondary">製造部　社員 B</p>
            </SectionTitleEntrance>
          </div>
        </div>

        <div className="relative aspect-[16/9] lg:aspect-[2.5/1]">
          <Image
            src="/images/interview-employee-b.jpg"
            alt="社員 B"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 本文 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-narrow mx-auto px-6 lg:px-12">
          <FadeInUp>
            <div className="space-y-12">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q1. 入社前のイメージと、実際に働いて感じたギャップはありますか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    入社前は、ものづくりの世界なので、もう少しアバウトな部分もあるのかなというイメージがありました。ですが実際に働いてみると、想像以上にシビアな世界だと感じました。
                  </p>
                  <p>
                    1ミリ単位の精度が求められる仕事で、以前大工をしていた頃は許容範囲だったズレも、ここでは一切許されません。その精密さこそが、トキワ工業の品質を支えているのだと実感しています。
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q2. 入社の決め手は何でしたか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    北海道から愛知へ引っ越してきて、最初は派遣社員として働いていました。とにかく仕事を探していた中で、たまたま紹介されたのがトキワ工業でした。そこから社長に正社員の話をいただき、「ここに来たのも何かの縁だと思うよ」と声をかけてもらったことが大きなきっかけです。
                  </p>
                  <p>
                    派遣時代は厳しく指導されることも多かったですが、その中に「面倒見るから頑張れ」という愛情を感じました。この人たちのもとで成長したいと思えたことが、入社を決めた理由です。
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q3. 現在の仕事内容と、やりがいを感じる瞬間を教えてください。
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    主に溶接作業を担当しています。やりがいを感じるのは、新しいことに挑戦して、それがうまくできた瞬間です。
                  </p>
                  <p>
                    できなかったことができるようになるたびに、自分の成長を実感できる仕事だと思っています。
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q4. どんな人がこの会社に向いていると思いますか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    特別な才能よりも、向上心と誠実さがあれば十分だと思います。正直、僕自身も最初は「何に向いているかわからない」と思っていました。それでも挑戦し続けることで、少しずつできることが増えていきました。
                  </p>
                  <p>
                    成長したい気持ちを持っている人なら、きっと活躍できる会社だと思います。
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q5. この会社で成長できたと感じる点はどんなところですか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    一番大きいのは、挑戦する勇気を持てるようになったことです。以前の自分は、新しいことに対して一歩引いてしまうタイプでした。ですが入社してからは、さまざまなことに挑戦させてもらえる環境があり、「まずやってみよう」と思えるようになりました。
                  </p>
                  <p>
                    会社から信頼して任せてもらえていると感じることで、自分自身にも自信がついてきました。
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* 戻るリンク */}
          <FadeInUp delay={0.1}>
            <div className="mt-16 pt-8 border-t border-border">
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
