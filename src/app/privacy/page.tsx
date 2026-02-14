"use client";

import Link from "next/link";
import { site, company, contact, locations } from "@/lib/site";
import { FadeInUp } from "@/components/animations";

// ============================================================
// 📝 コンテンツデータ（必要に応じて編集してください）
// ============================================================

// 制定日（適切な日付に変更してください）
const EFFECTIVE_DATE = "20XX年XX月XX日";

// ============================================================
// コンポーネント
// ============================================================

export default function PrivacyPage() {
  const companyName = company.name || "株式会社サンプル";
  const address = locations.headquarters.address || "住所を入力してください";
  const phone = contact.phone || "000-000-0000";
  const email = contact.email || "info@example.com";

  return (
    <>
      {/* Page Header */}
      <section className="h-[150px] lg:h-[200px] flex items-center justify-center bg-navy">
        <div className="text-center">
          <FadeInUp>
            <p className="text-sm text-white/80 tracking-[0.1em] mb-3">Privacy Policy</p>
            <h1 className="text-[28px] lg:text-[40px] font-bold text-white">
              プライバシーポリシー
            </h1>
          </FadeInUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 lg:py-[60px] bg-white">
        <div className="max-w-[800px] mx-auto px-4">
          <FadeInUp className="prose prose-slate max-w-none">
            <p className="text-[15px] lg:text-base text-text-primary leading-[1.9] mb-8">
              {companyName}（以下、「当社」）は、お客様の個人情報を適切に保護することを重要な社会的責務と認識し、以下のとおり個人情報保護方針を定め、これを遵守いたします。
            </p>

            <h2 className="text-xl lg:text-2xl font-bold text-text-primary mt-10 mb-4">
              1. 個人情報の定義
            </h2>
            <p className="text-[15px] lg:text-base text-text-primary leading-[1.9] mb-6">
              個人情報とは、氏名、住所、電話番号、メールアドレスなど、特定の個人を識別できる情報をいいます。
            </p>

            <h2 className="text-xl lg:text-2xl font-bold text-text-primary mt-10 mb-4">
              2. 個人情報の収集
            </h2>
            <p className="text-[15px] lg:text-base text-text-primary leading-[1.9] mb-6">
              当社は、お問い合わせフォーム、採用エントリーフォーム等を通じて、お客様の個人情報を収集することがあります。収集に際しては、利用目的を明示し、適法かつ公正な手段により行います。
            </p>

            <h2 className="text-xl lg:text-2xl font-bold text-text-primary mt-10 mb-4">
              3. 個人情報の利用目的
            </h2>
            <p className="text-[15px] lg:text-base text-text-primary leading-[1.9] mb-4">
              当社は、収集した個人情報を以下の目的で利用いたします。
            </p>
            <ul className="list-disc list-inside text-[15px] lg:text-base text-text-primary leading-[1.9] mb-6 space-y-2">
              <li>お問い合わせへの回答</li>
              <li>お見積りの作成・送付</li>
              <li>採用選考に関するご連絡</li>
              <li>サービスに関する情報のご提供</li>
              <li>その他、お客様との契約・取引に関する業務</li>
            </ul>

            <h2 className="text-xl lg:text-2xl font-bold text-text-primary mt-10 mb-4">
              4. 個人情報の第三者提供
            </h2>
            <p className="text-[15px] lg:text-base text-text-primary leading-[1.9] mb-6">
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>

            <h2 className="text-xl lg:text-2xl font-bold text-text-primary mt-10 mb-4">
              5. 個人情報の安全管理
            </h2>
            <p className="text-[15px] lg:text-base text-text-primary leading-[1.9] mb-6">
              当社は、個人情報の漏洩、滅失、毀損を防止するため、必要かつ適切な安全管理措置を講じます。
            </p>

            <h2 className="text-xl lg:text-2xl font-bold text-text-primary mt-10 mb-4">
              6. 個人情報の開示・訂正・削除
            </h2>
            <p className="text-[15px] lg:text-base text-text-primary leading-[1.9] mb-6">
              お客様ご本人から個人情報の開示、訂正、削除のご請求があった場合は、ご本人確認のうえ、適切に対応いたします。
            </p>

            <h2 className="text-xl lg:text-2xl font-bold text-text-primary mt-10 mb-4">
              7. お問い合わせ
            </h2>
            <p className="text-[15px] lg:text-base text-text-primary leading-[1.9] mb-6">
              個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
            </p>
            <div className="bg-bg-light p-6 rounded-lg text-[15px] lg:text-base text-text-primary leading-[1.9]">
              <p>{companyName}</p>
              <p>{address}</p>
              <p>TEL: {phone}</p>
              <p>メール: {email}</p>
            </div>

            <p className="text-sm text-text-secondary mt-10">
              制定日: {EFFECTIVE_DATE}
            </p>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
