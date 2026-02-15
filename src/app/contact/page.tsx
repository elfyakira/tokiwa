"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { contact } from "@/lib/site";
import { FadeInUp } from "@/components/animations";

// ============================================================
// Contactページ - トキワ工業
// ============================================================

// お問い合わせ種別
const CONTACT_TYPES = [
  { id: "product" as const, label: "製品に関するお問い合わせ" },
  { id: "estimate" as const, label: "お見積りのご依頼" },
  { id: "recruit" as const, label: "採用に関するお問い合わせ" },
  { id: "other" as const, label: "その他のお問い合わせ" },
];

type ContactType = (typeof CONTACT_TYPES)[number]["id"];

// ページヒーロー
function PageHero() {
  return (
    <section className="relative h-[300px] lg:h-[400px] flex items-center -mt-20 pt-20">
      <div className="absolute inset-0 z-0 bg-navy" />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 w-full">
        <FadeInUp>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-wider">
            CONTACT
          </h1>
          <p className="text-sm text-white/80 mt-2 tracking-wider">お問い合わせ</p>
        </FadeInUp>
      </div>
    </section>
  );
}

function ContactForm() {
  const [selectedType, setSelectedType] = useState<ContactType>("product");
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="text-center px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
            お問い合わせありがとうございます
          </h2>
          <div className="text-base text-text-primary leading-[1.8] mb-10">
            <p>お問い合わせを受け付けました。</p>
            <p>担当者より折り返しご連絡いたします。</p>
          </div>
          <Link
            href="/"
            className="inline-block bg-navy text-white px-8 py-4 rounded hover:opacity-90 transition-opacity"
          >
            トップページへ戻る
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <FadeInUp>
          <p className="text-center text-base text-text-primary leading-[1.8] mb-8">
            製品・サービスに関するお問い合わせはこちらからお願いいたします。
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {CONTACT_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-4 rounded border text-sm text-center transition-colors ${
                  selectedType === type.id
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-text-primary border-gray-200 hover:border-navy"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="bg-bg-light p-6 lg:p-10 rounded">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-text-primary">
                    {selectedType === "recruit" ? "お名前" : "お名前 / 会社名"}
                  </span>
                  <span className="text-xs text-white bg-accent px-1.5 py-0.5 rounded">
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
                  className={`w-full h-12 px-4 border rounded text-base bg-white ${
                    errors.name ? "border-accent" : "border-gray-200"
                  } focus:border-navy focus:outline-none transition-colors`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-accent">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-text-primary">
                    電話番号
                  </span>
                  <span className="text-xs text-white bg-accent px-1.5 py-0.5 rounded">
                    必須
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  placeholder="例）000-000-0000"
                  className={`w-full h-12 px-4 border rounded text-base bg-white ${
                    errors.phone ? "border-accent" : "border-gray-200"
                  } focus:border-navy focus:outline-none transition-colors`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-accent">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-text-primary">
                    メールアドレス
                  </span>
                  <span className="text-xs text-white bg-accent px-1.5 py-0.5 rounded">
                    必須
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="例）info@example.com"
                  className={`w-full h-12 px-4 border rounded text-base bg-white ${
                    errors.email ? "border-accent" : "border-gray-200"
                  } focus:border-navy focus:outline-none transition-colors`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-accent">{errors.email}</p>
                )}
              </div>

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
                    <span className="text-xs text-white bg-accent px-1.5 py-0.5 rounded">
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
                  className={`w-full px-4 py-3 border rounded text-base bg-white resize-y ${
                    errors.message ? "border-accent" : "border-gray-200"
                  } focus:border-navy focus:outline-none transition-colors`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-accent">{errors.message}</p>
                )}
              </div>

              <div className="pt-4">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="agree"
                    className={`mt-1 w-4 h-4 ${
                      errors.agree ? "ring-2 ring-accent" : ""
                    }`}
                  />
                  <span className="text-sm text-text-primary">
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="text-navy underline hover:text-blue"
                    >
                      プライバシーポリシー
                    </Link>
                    に同意する
                  </span>
                </label>
                {errors.agree && (
                  <p className="mt-1 text-sm text-accent">{errors.agree}</p>
                )}
              </div>

              <div className="pt-6 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full max-w-[300px] h-14 rounded text-base font-semibold transition-colors ${
                    isSubmitting
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-navy text-white hover:opacity-90"
                  }`}
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                </button>
              </div>
            </form>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

function PhoneSection() {
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-xl mx-auto px-6 lg:px-12 text-center">
        <FadeInUp>
          <h2 className="text-lg lg:text-xl font-bold text-text-primary mb-4">
            お電話でのお問い合わせ
          </h2>
          <a
            href={`tel:${contact.phoneTel || contact.phone?.replace(/-/g, "")}`}
            className="block text-3xl lg:text-4xl font-bold text-navy mb-2"
          >
            {contact.phoneFormatted || contact.phone || "0567-33-1330"}
          </a>
          <p className="text-sm text-text-secondary">
            受付時間: {contact.hours || "8:30〜17:30"}
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero />
      <ContactForm />
      <PhoneSection />
    </>
  );
}
