"use client";

import { useState } from "react";
import Link from "next/link";
import { site, company, contact } from "@/lib/site";

// ============================================================
// 📝 コンテンツデータ（構成案に基づいて編集してください）
// ============================================================

// お問い合わせ種別
const CONTACT_TYPES = [
  { id: "service1" as const, label: "サービス1のご相談" },
  { id: "service2" as const, label: "サービス2のご相談" },
  { id: "recruit" as const, label: "採用に関するお問い合わせ" },
  { id: "other" as const, label: "その他のお問い合わせ" },
];

type ContactType = (typeof CONTACT_TYPES)[number]["id"];

// ============================================================
// コンポーネント
// ============================================================

function PageHeader() {
  return (
    <section className="h-[150px] lg:h-[200px] flex items-center justify-center bg-navy">
      <div className="text-center">
        <p className="text-sm text-white/80 tracking-[0.1em] mb-3">Contact</p>
        <h1 className="text-[28px] lg:text-[40px] font-bold text-white">
          お問い合わせ
        </h1>
      </div>
    </section>
  );
}

function ContactForm() {
  const [selectedType, setSelectedType] = useState<ContactType>("service1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const agree = formData.get("agree");

    if (!name?.trim()) newErrors.name = "お名前を入力してください";
    if (!phone?.trim()) newErrors.phone = "電話番号を入力してください";
    if (!email?.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "メールアドレスの形式が正しくありません";
    }
    if (selectedType !== "recruit") {
      if (!message?.trim()) {
        newErrors.message = "お問い合わせ内容を入力してください";
      } else if (message.length < 10) {
        newErrors.message = "10文字以上でご入力ください";
      }
    }
    if (!agree) newErrors.agree = "プライバシーポリシーへの同意が必要です";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // ここにフォーム送信処理を実装してください
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="text-center px-4">
          <h2 className="text-2xl lg:text-[28px] font-bold text-text-primary mb-6">
            お問い合わせありがとうございます
          </h2>
          <div className="text-[15px] lg:text-base text-text-primary leading-[1.8] mb-10">
            <p>お問い合わせを受け付けました。</p>
            <p>担当者より折り返しご連絡いたします。</p>
          </div>
          <Link
            href="/"
            className="inline-block bg-navy text-white px-8 py-3.5 rounded-btn hover:bg-navy-dark transition-colors"
          >
            トップページへ戻る
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 lg:py-[60px] bg-white">
      <div className="max-w-[800px] mx-auto px-4">
        <p className="text-center text-[15px] lg:text-base text-text-primary leading-[1.7] mb-6 lg:mb-8">
          お気軽にお問い合わせください。
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-8 lg:mb-10">
          {CONTACT_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`p-4 lg:p-5 rounded border text-sm lg:text-[15px] text-center transition-colors ${
                selectedType === type.id
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-text-primary border-gray-200 hover:border-navy"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="bg-bg-light p-6 lg:p-12 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-text-primary">
                  {selectedType === "recruit" ? "お名前" : "お名前 / 会社名"}
                </span>
                <span className="text-xs text-white bg-red-600 px-1.5 py-0.5 rounded">
                  必須
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder={
                  selectedType === "recruit"
                    ? "例）山田 太郎"
                    : "例）株式会社サンプル 山田太郎"
                }
                className={`w-full h-12 px-4 border rounded text-base ${
                  errors.name ? "border-red-600" : "border-gray-200"
                } focus:border-navy focus:outline-none transition-colors`}
              />
              {errors.name && (
                <p className="mt-1 text-[13px] text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-text-primary">
                  電話番号
                </span>
                <span className="text-xs text-white bg-red-600 px-1.5 py-0.5 rounded">
                  必須
                </span>
              </label>
              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                placeholder="例）000-000-0000"
                className={`w-full h-12 px-4 border rounded text-base ${
                  errors.phone ? "border-red-600" : "border-gray-200"
                } focus:border-navy focus:outline-none transition-colors`}
              />
              {errors.phone && (
                <p className="mt-1 text-[13px] text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-text-primary">
                  メールアドレス
                </span>
                <span className="text-xs text-white bg-red-600 px-1.5 py-0.5 rounded">
                  必須
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="例）info@example.com"
                className={`w-full h-12 px-4 border rounded text-base ${
                  errors.email ? "border-red-600" : "border-gray-200"
                } focus:border-navy focus:outline-none transition-colors`}
              />
              {errors.email && (
                <p className="mt-1 text-[13px] text-red-600">{errors.email}</p>
              )}
            </div>

            {selectedType !== "recruit" && (
              <div>
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-text-primary">
                    ご住所
                  </span>
                  <span className="text-xs text-text-secondary bg-gray-200 px-1.5 py-0.5 rounded">
                    任意
                  </span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="例）東京都渋谷区..."
                  className="w-full h-12 px-4 border border-gray-200 rounded text-base focus:border-navy focus:outline-none transition-colors"
                />
              </div>
            )}

            {selectedType === "recruit" && (
              <div>
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-text-primary">
                    希望職種
                  </span>
                  <span className="text-xs text-white bg-red-600 px-1.5 py-0.5 rounded">
                    必須
                  </span>
                </label>
                <select
                  name="jobType"
                  className="w-full h-12 px-4 border border-gray-200 rounded text-base focus:border-navy focus:outline-none transition-colors"
                >
                  <option value="general">一般職</option>
                  <option value="other">その他</option>
                </select>
              </div>
            )}

            <div>
              <label className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-text-primary">
                  {selectedType === "recruit"
                    ? "簡単な自己PR"
                    : "お問い合わせ内容"}
                </span>
                {selectedType === "recruit" ? (
                  <span className="text-xs text-text-secondary bg-gray-200 px-1.5 py-0.5 rounded">
                    任意
                  </span>
                ) : (
                  <span className="text-xs text-white bg-red-600 px-1.5 py-0.5 rounded">
                    必須
                  </span>
                )}
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder={
                  selectedType === "recruit"
                    ? "100文字程度でOKです"
                    : "ご相談内容、ご質問などをご記入ください"
                }
                className={`w-full px-4 py-3 border rounded text-base resize-y ${
                  errors.message ? "border-red-600" : "border-gray-200"
                } focus:border-navy focus:outline-none transition-colors`}
              />
              {errors.message && (
                <p className="mt-1 text-[13px] text-red-600">{errors.message}</p>
              )}
            </div>

            {selectedType !== "recruit" && (
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-3">
                  ご希望の連絡方法
                </label>
                <div className="flex flex-col lg:flex-row gap-4">
                  {["電話", "メール", "どちらでも可"].map((method) => (
                    <label key={method} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        defaultChecked={method === "どちらでも可"}
                        className="w-4 h-4 text-navy"
                      />
                      <span className="text-[15px] text-text-primary">
                        {method}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="agree"
                  className={`mt-1 w-4 h-4 ${
                    errors.agree ? "ring-2 ring-red-600" : ""
                  }`}
                />
                <span className="text-sm text-text-primary">
                  <Link
                    href="/privacy"
                    target="_blank"
                    className="text-navy underline hover:text-accent"
                  >
                    プライバシーポリシー
                  </Link>
                  に同意する
                </span>
              </label>
              {errors.agree && (
                <p className="mt-1 text-[13px] text-red-600">{errors.agree}</p>
              )}
            </div>

            <div className="pt-6 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full max-w-[300px] h-14 rounded-btn text-base font-semibold transition-colors ${
                  isSubmitting
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-accent text-white hover:bg-accent-dark"
                }`}
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function PhoneSection() {
  return (
    <section className="py-10 lg:py-[60px] bg-white">
      <div className="max-w-[600px] mx-auto px-4 text-center">
        <h2 className="text-lg lg:text-xl text-text-primary mb-4">
          お電話でのお問い合わせ
        </h2>
        <a
          href={`tel:${contact.phoneTel || contact.phone?.replace(/-/g, "")}`}
          className="block text-[28px] lg:text-4xl font-bold text-navy mb-2"
        >
          {contact.phoneFormatted || contact.phone || "000-000-0000"}
        </a>
        <p className="text-sm text-text-secondary">
          受付時間: {contact.hours || "9:00〜18:00"}
        </p>
      </div>
    </section>
  );
}

function PrivacyLink() {
  return (
    <section className="py-6 bg-bg-light text-center">
      <Link
        href="/privacy"
        target="_blank"
        className="text-[13px] text-text-secondary underline hover:text-navy"
      >
        プライバシーポリシー
      </Link>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader />
      <ContactForm />
      <PhoneSection />
      <PrivacyLink />
    </>
  );
}
