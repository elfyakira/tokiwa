"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, SectionTitleEntrance } from "@/components/animations";

export default function EmployeeAInterviewPage() {
  return (
    <>
      {/* タイトル */}
      <section className="relative pt-24">
        <div className="bg-white pt-8 pb-8 lg:pt-10 lg:pb-10">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <SectionTitleEntrance direction="left">
              <p className="text-xs text-accent font-bold tracking-[0.25em] mb-2">INTERVIEW #02</p>
              <h1 className="text-3xl lg:text-5xl font-bold text-navy leading-tight">
                思い描いた通りに仕上がる、<br />その瞬間が一番の達成感。
              </h1>
              <p className="mt-4 text-base text-text-secondary">製造部　社員 A</p>
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
                  Q1. 入社前のイメージと、実際に働いて感じたギャップはありますか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    入社前は、ものづくりなのである程度大雑把な部分もあるのかなと思っていました。ですが実際に働いてみると、仕上がりに対してとてもシビアで、細かいところまで徹底してこだわる会社だと感じました。
                  </p>
                  <p>
                    一つひとつの工程を丁寧に積み重ねていくからこそ、高品質な製品が生まれているのだと実感しています。
                  </p>
                </div>
              </div>
              <div className="lg:mt-24 relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/interview-employee-a.jpg"
                  alt="社員 A"
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
                  src="/images/interview-employee-a-2.jpg"
                  alt="インタビュー風景"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:order-2 lg:mt-24">
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q2. 入社の決め手は何でしたか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    専務が友人で、会社の事業内容についていろいろ話を聞く中で、「やってみたい」と思ったことがきっかけです。それまで現場仕事が多く、毎回違う場所で働く環境でしたが、一つの会社に通い、決まった時間で働くスタイルに魅力を感じました。
                  </p>
                  <p>
                    また、ものづくり自体にも興味があったので、ここなら腰を据えて技術を身につけられると思い、入社を決めました。
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
                  Q3. 現在の仕事内容と、やりがいを感じる瞬間を教えてください。
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    主に溶接作業を担当しています。やりがいを感じるのは、自分が思い描いた通りに製品が仕上がったときです。きれいに、狙った通りの形に完成した瞬間は、とても達成感があります。
                  </p>
                  <p>
                    自分の技術がそのまま製品の品質につながっていることを実感できる仕事だと思います。
                  </p>
                </div>
              </div>
              <div className="lg:mt-24 relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/interview-employee-a-3.jpg"
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
                  src="/images/interview-employee-a-4.jpg"
                  alt="インタビュー風景"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:order-2 lg:mt-24">
                <h2 className="text-xl lg:text-2xl font-bold text-navy mb-6 font-mincho">
                  Q4. どんな人がこの会社に向いていると思いますか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    コツコツと真面目に作業できる人が一番向いていると思います。作業は一人で集中して行う場面が多いので、黙々と取り組むことが好きな人や、集中力を活かしたい人にはとても合っている環境です。
                  </p>
                  <p>
                    細かい作業を積み重ねることが、ものづくりの精度につながっています。
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
                  Q5. この会社で成長できたと感じる点はどんなところですか？
                </h2>
                <div className="text-base text-text-primary leading-[2] space-y-4">
                  <p>
                    一つの作業に集中して取り組む力が、以前よりもかなり身についたと感じています。黙々とものづくりに向き合い、最後までやり切る習慣が自然と身につきました。
                  </p>
                  <p>
                    また、仕事を通して人とのコミュニケーションも以前より取れるようになったと思います。技術面だけでなく、人としても成長できていると感じています。
                  </p>
                </div>
              </div>
              <div className="lg:mt-24 relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/interview-employee-a-5.jpg"
                  alt="インタビュー風景"
                  fill
                  className="object-cover"
                />
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
