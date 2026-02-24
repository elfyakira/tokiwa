"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, SectionTitleEntrance } from "@/components/animations";
import { company, contact, locations } from "@/lib/site";

// ============================================================
// Companyページ - トキワ工業
// ============================================================

// ページヒーロー（現状維持）
function PageHero() {
  return (
    <section className="relative h-[220px] lg:h-[300px] flex items-center justify-center pt-24 pb-0">
      <div className="absolute inset-0 z-0 bg-navy" />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 w-full">
        <SectionTitleEntrance direction="left">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-wider">
            COMPANY
          </h1>
          <p className="text-sm text-white/80 mt-2 tracking-wider">会社概要</p>
        </SectionTitleEntrance>
      </div>
    </section>
  );
}

// ごあいさつセクション
function GreetingSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <FadeInUp>
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8">
              ごあいさつ
            </h2>
            <div className="space-y-6 text-text-primary leading-[2]">
              <p>
                トキワ工業は、創業以来お客さまの期待に応え続け、確かな技術と信頼を積み重ねてきました。
              </p>
              <p>
                変化を感じ取りながら設備を整え、人を育て、成長を重ねています。一人ひとりの個性が支え合い、ものづくりを通して人も会社も磨かれていく。これからも皆さまに支えられ求められ続ける会社であるよう邁進していきます。
              </p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/greeting-illustration.png"
                alt="ごあいさつ"
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

// 沿革セクション（現状維持）
function HistorySection() {
  const history = [
    { year: "2001", content: "ああああああああああああああああああああああ" },
    { year: "2002", content: "ああああああああああああああああああああああ" },
    { year: "2003", content: "ああああああああああああああああああああああ" },
    { year: "2004", content: "ああああああああああああああああああああああ" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary">
              ※置き換え
            </h2>
            <span className="text-lg text-text-secondary">沿革</span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="bg-white rounded overflow-hidden">
            <table className="w-full">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="py-3 px-6 text-left font-medium w-32">年</th>
                  <th className="py-3 px-6 text-left font-medium">Events</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, index) => (
                  <tr key={item.year} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="py-4 px-6 font-medium text-text-primary">{item.year}</td>
                    <td className="py-4 px-6 text-text-primary">{item.content}</td>
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

// 会社概要セクション（現状維持）
function CompanyInfoSection() {
  const hq = locations.headquarters;

  const companyInfo = [
    { label: "名称", value: company.name || "有限会社トキワ工業" },
    { label: "代表", value: company.ceo || "鳴澤 潤一" },
    { label: "住所", value: hq.zipCode && hq.address ? `〒${hq.zipCode}\n${hq.address}` : "〒496-0016\n愛知県津島市白浜町八丁目59-1" },
    { label: "電話番号", value: contact.phone || "0567-33-1330" },
    { label: "FAX番号", value: contact.fax || "0567-33-1320" },
    { label: "営業時間", value: contact.hours || "8:30〜17:30" },
    { label: "主な製品", value: company.business || "製造業（制御盤・配電盤・分電盤・機械カバー・ブラケット・ステンレス加工・鋼材加工・塗装・組付け・軽微品加工）" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8 text-center">
            会社概要
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <table className="w-full">
              <tbody>
                {companyInfo.map((item, index) => (
                  <tr key={item.label} className="border-b border-text-primary">
                    <th className="py-6 text-left font-medium text-text-primary w-32 lg:w-40 align-top">
                      {item.label}
                    </th>
                    <td className="py-6 text-text-primary whitespace-pre-line text-right">
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

// 採用情報バナーセクション - 2カラム構成
function RecruitBannerSection() {
  return (
    <section className="max-w-container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2">
        {/* 左: 白背景にテキスト */}
        <div className="bg-white py-16 lg:py-24 flex items-center justify-center">
          <div className="text-center">
            <FadeInUp>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-8">
                採用情報
              </h2>
              <Link
                href="/recruit"
                className="inline-block bg-text-primary text-white px-12 py-4 rounded-full hover:bg-text-primary/90 transition-colors"
              >
                詳しく見る
              </Link>
            </FadeInUp>
          </div>
        </div>
        {/* 右: 従業員の写真 */}
        <div>
          <Image
            src="/images/recruit-banner-person.jpg"
            alt="採用情報"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
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
      <HistorySection />
      <CompanyInfoSection />
      <RecruitBannerSection />
    </>
  );
}
