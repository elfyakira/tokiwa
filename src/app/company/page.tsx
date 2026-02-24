"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, FadeInImage, SectionTitleEntrance, Parallax } from "@/components/animations";
import { company, contact, locations } from "@/lib/site";

// ============================================================
// Companyページ - トキワ工業
// ============================================================

// ページヒーロー - 他ページと統一レイアウト
function PageHero() {
  return (
    <section className="relative pt-24">
      {/* タイトルセクション */}
      <div className="bg-white pt-8 pb-8 lg:pt-10 lg:pb-10">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionTitleEntrance direction="left">
            <div className="flex items-baseline gap-4">
              <h1 className="text-4xl lg:text-6xl font-anton font-bold text-navy tracking-wider lg:tracking-[0.12em]">
                COMPANY
              </h1>
              <p className="text-sm lg:text-base text-navy tracking-wider">会社概要</p>
            </div>
          </SectionTitleEntrance>
        </div>
      </div>

      {/* ヒーロー画像（フルワイド） */}
      <div className="relative">
        <FadeInImage
          src="/images/building.jpg"
          alt="Company"
          fill
          direction="up"
          containerClassName="relative aspect-[16/9] lg:aspect-[2.5/1]"
          className="object-cover"
        />
      </div>

      {/* グラデーションセクション + テキストボックス */}
      <div className="relative">
        <div className="bg-gradient-to-b from-[#013f93] to-[#f5f8f6] py-32 lg:py-44" />

        {/* 白いテキストボックス */}
        <div className="absolute left-0 right-0 z-20 -top-20 lg:-top-28">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div>
              <FadeInUp delay={0.1}>
                <div className="bg-white p-8 lg:p-12 w-full shadow-lg overflow-hidden">
                  <Parallax speed={0.08} clamp={15}>
                    <h2 className="text-[40px] font-bold text-[#013f93] font-mincho leading-tight whitespace-nowrap">
                      確かな技術と信頼を、積み重ねて。
                    </h2>
                    <div className="w-48 lg:w-72 h-px bg-[#013f93] mt-8 mb-8" />
                    <p className="text-base text-[#013f93] leading-[2]">
                      トキワ工業は、創業以来お客さまの期待に応え続け、確かな技術と信頼を積み重ねてきました。変化を感じ取りながら設備を整え、人を育て、成長を重ねています。一人ひとりの個性が支え合い、ものづくりを通して人も会社も磨かれていく。これからも皆さまに支えられ求められ続ける会社であるよう邁進していきます。
                    </p>
                  </Parallax>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 代表あいさつセクション
function GreetingSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {/* セクションタイトル */}
        <SectionTitleEntrance direction="scale" className="text-center mb-14 lg:mb-20">
          <p className="text-xs lg:text-sm text-accent font-bold tracking-[0.25em] mb-2">MESSAGE</p>
          <h2 className="text-3xl lg:text-4xl font-anton font-bold text-navy tracking-wider">
            代表あいさつ
          </h2>
          <div className="mt-4 mx-auto w-16 h-[2px] bg-accent" />
        </SectionTitleEntrance>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <FadeInUp>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/interview-president.jpg"
                alt="代表取締役 鴇澤 進一"
                fill
                className="object-cover"
                style={{ objectPosition: "55% center" }}
              />
            </div>
            <p className="mt-4 text-sm text-text-secondary text-center">
              代表取締役　鴇澤 進一
            </p>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <div className="space-y-6 text-base text-text-primary leading-[2]">
              <p>
                トキワ工業は、創業以来お客さまの期待に応え続け、確かな技術と信頼を積み重ねてきました。
              </p>
              <p>
                変化を感じ取りながら設備を整え、人を育て、成長を重ねています。一人ひとりの個性が支え合い、ものづくりを通して人も会社も磨かれていく。
              </p>
              <p>
                私たちが大切にしているのは、社員一人ひとりが幸せに暮らしていける会社であること。安心して働ける環境があるからこそ、集中して良い仕事ができる。その積み重ねが、確かなものづくりにつながっていると感じています。
              </p>
              <p>
                これからも皆さまに支えられ求められ続ける会社であるよう邁進していきます。
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// 会社概要セクション
function CompanyInfoSection() {
  const hq = locations.headquarters;

  const companyInfo = [
    { label: "名称", value: company.name || "有限会社トキワ工業" },
    { label: "代表者", value: "鴇澤　進一" },
    { label: "住所", value: "〒496-0016\n愛知県津島市白浜町八升川田59-1" },
    { label: "電話番号", value: contact.phone || "0567-33-1330" },
    { label: "ＦＡＸ番号", value: contact.fax || "0567-33-1320" },
    { label: "営業時間", value: contact.hours || "8:30～17:30" },
    { label: "主な製品", value: "製造業（制御盤・配電盤・分電盤・機械カバー・ブラケット・ステンレス加工・銅加工・塗装・組付け・既製品加工）" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {/* セクションタイトル */}
        <SectionTitleEntrance direction="scale" className="text-center mb-14 lg:mb-20">
          <p className="text-xs lg:text-sm text-accent font-bold tracking-[0.25em] mb-2">OVERVIEW</p>
          <h2 className="text-3xl lg:text-4xl font-anton font-bold text-navy tracking-wider">
            会社概要
          </h2>
          <div className="mt-4 mx-auto w-16 h-[2px] bg-accent" />
        </SectionTitleEntrance>

        <FadeInUp>
          <div className="max-w-3xl mx-auto bg-white shadow-card rounded overflow-hidden">
            <table className="w-full">
              <tbody>
                {companyInfo.map((item, index) => (
                  <tr key={item.label} className="border-b border-border last:border-b-0">
                    <th className="py-5 px-6 lg:px-8 text-left font-bold text-navy w-32 lg:w-44 align-top bg-bg-light/50 text-sm lg:text-base">
                      {item.label}
                    </th>
                    <td className="py-5 px-6 lg:px-8 text-text-primary whitespace-pre-line text-sm lg:text-base">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// アクセスセクション
function AccessSection() {
  const hq = locations.headquarters;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {/* セクションタイトル */}
        <SectionTitleEntrance direction="scale" className="text-center mb-14 lg:mb-20">
          <p className="text-xs lg:text-sm text-accent font-bold tracking-[0.25em] mb-2">ACCESS</p>
          <h2 className="text-3xl lg:text-4xl font-anton font-bold text-navy tracking-wider">
            アクセス
          </h2>
          <div className="mt-4 mx-auto w-16 h-[2px] bg-accent" />
        </SectionTitleEntrance>

        <FadeInUp>
          <div className="max-w-4xl mx-auto">
            {/* 地図 */}
            <div className="relative aspect-[16/9] rounded overflow-hidden mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.5!2d136.72!3d35.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z44CSNDk2LTAwMTYg5oSb55-l55yM5rSl5bO25biC55m95rWc55S65YWr5LiB55uu59Kq!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            {/* 所在地情報 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-navy mb-3">{hq.name || "本社"}</h3>
                <p className="text-base text-text-primary leading-[2]">
                  〒{hq.zipCode || "496-0016"}<br />
                  {hq.address || "愛知県津島市白浜町八丁目59-1"}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-3">お問い合わせ</h3>
                <p className="text-base text-text-primary leading-[2]">
                  TEL: {contact.phone || "0567-33-1330"}<br />
                  FAX: {contact.fax || "0567-33-1320"}<br />
                  営業時間: {contact.hours || "8:30〜17:30"}
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// 採用情報バナーセクション
function RecruitBannerSection() {
  return (
    <section className="bg-navy">
      <div className="max-w-container mx-auto">
        <div className="grid lg:grid-cols-2 items-stretch">
          {/* 左: テキスト */}
          <div className="py-16 lg:py-24 px-6 lg:px-12 flex items-center">
            <div>
              <FadeInUp>
                <p className="text-xs lg:text-sm text-accent font-bold tracking-[0.25em] mb-2">RECRUIT</p>
                <h2 className="text-3xl lg:text-4xl font-anton font-bold text-white tracking-wider mb-6">
                  採用情報
                </h2>
                <div className="w-12 h-px bg-accent mb-6" />
                <p className="text-base text-white/80 leading-[2] mb-8">
                  トキワ工業では、ものづくりに情熱を持つ仲間を募集しています。<br />
                  あなたの個性が、確かなものづくりを支えます。
                </p>
                <Link
                  href="/recruit"
                  className="inline-flex items-center gap-3 text-white group"
                >
                  <span className="text-sm font-bold tracking-[0.15em] group-hover:tracking-[0.25em] transition-all duration-300">
                    VIEW MORE
                  </span>
                  <svg className="w-8 h-4 text-accent group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 32 16">
                    <line x1="0" y1="8" x2="26" y2="8" />
                    <polyline points="20,2 26,8 20,14" />
                  </svg>
                </Link>
              </FadeInUp>
            </div>
          </div>
          {/* 右: 画像 */}
          <FadeInUp delay={0.15}>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
              <Image
                src="/images/recruit-bg.jpg"
                alt="採用情報"
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

export default function CompanyPage() {
  return (
    <>
      <PageHero />
      <GreetingSection />
      <CompanyInfoSection />
      <AccessSection />
      <RecruitBannerSection />
    </>
  );
}
