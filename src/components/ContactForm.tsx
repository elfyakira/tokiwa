"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { FadeInUp } from "@/components/animations";
import { events } from "@/lib/analytics";

// お問い合わせ種別
export const CONTACT_TYPES = [
  { id: "product" as const, label: "製品に関するお問い合わせ" },
  { id: "estimate" as const, label: "お見積りのご依頼" },
  { id: "recruit" as const, label: "採用に関するお問い合わせ" },
  { id: "other" as const, label: "その他のお問い合わせ" },
];

export type ContactType = (typeof CONTACT_TYPES)[number]["id"];

interface ContactFormProps {
  /** 初期選択の種別 */
  defaultType?: ContactType;
  /** 種別選択ボタンを表示するか（falseで固定） */
  showTypeSelector?: boolean;
  /** フォーム上部の案内文 */
  leadText?: string;
  /** 送信完了時の見出し */
  successTitle?: string;
  /** 送信完了時の本文 */
  successBody?: React.ReactNode;
  /** 送信ボタンのラベル */
  submitLabel?: string;
  /** GA4 の form_submit イベントに送る form_name */
  formName?: string;
}

export function ContactForm({
  defaultType = "product",
  showTypeSelector = true,
  leadText = "製品・サービスに関するお問い合わせはこちらからお願いいたします。",
  successTitle = "お問い合わせありがとうございます",
  successBody,
  submitLabel,
  formName = "tokiwa_hp_contact",
}: ContactFormProps) {
  const [selectedType, setSelectedType] = useState<ContactType>(defaultType);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formStartTimeRef = useRef<number>(Date.now());

  const validateClient = (data: {
    name: string;
    company: string;
    phone: string;
    email: string;
    message: string;
    agree: boolean;
  }) => {
    const newErrors: Record<string, string> = {};
    if (!data.name?.trim()) newErrors.name = "お名前を入力してください";
    if (!data.phone?.trim()) newErrors.phone = "電話番号を入力してください";
    if (!data.email?.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "メールアドレスの形式が正しくありません";
    }
    if (selectedType !== "recruit") {
      if (!data.message?.trim()) {
        newErrors.message = "お問い合わせ内容を入力してください";
      } else if (data.message.length < 10) {
        newErrors.message = "10文字以上でご入力ください";
      }
    }
    if (!data.agree) newErrors.agree = "プライバシーポリシーへの同意が必要です";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: (formData.get("name") as string) ?? "",
      company: (formData.get("company") as string) ?? "",
      phone: (formData.get("phone") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
      agree: !!formData.get("agree"),
      website: (formData.get("website") as string) ?? "",
    };

    const clientErrors = validateClient(payload);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: selectedType,
          name: payload.name,
          company: payload.company,
          phone: payload.phone,
          email: payload.email,
          message: payload.message,
          consent: payload.agree,
          website: payload.website,
          formStartTime: formStartTimeRef.current,
        }),
      });
      const data = await res.json();
      if (!data.success) {
        const serverErrors: Record<string, string> = {};
        for (const err of data.errors ?? []) {
          const field = err.field === "consent" ? "agree" : err.field;
          serverErrors[field] = err.message;
        }
        if (Object.keys(serverErrors).length === 0) {
          serverErrors.general = "送信中にエラーが発生しました。";
        }
        setErrors(serverErrors);
        return;
      }
      events.formSubmit(formName, { contact_type: selectedType });
      setIsSubmitted(true);
    } catch {
      setErrors({
        general: "送信中にエラーが発生しました。しばらく経ってから再度お試しください。",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center py-10">
        <div className="text-center px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
            {successTitle}
          </h2>
          <div className="text-base text-text-primary leading-[1.8]">
            {successBody ?? (
              <>
                <p>お問い合わせを受け付けました。</p>
                <p>担当者より折り返しご連絡いたします。</p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-12">
      <FadeInUp>
        <p className="text-center text-base text-text-primary leading-[1.8] mb-8">
          {leadText}
        </p>
      </FadeInUp>

      {showTypeSelector && (
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
                {type.label.endsWith("お問い合わせ") ? (
                  <>
                    {type.label.slice(0, -"お問い合わせ".length)}
                    <br className="lg:hidden" />
                    お問い合わせ
                  </>
                ) : (
                  type.label
                )}
              </button>
            ))}
          </div>
        </FadeInUp>
      )}

      <FadeInUp delay={0.2}>
        <div className="bg-bg-light p-6 lg:p-10 rounded">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field: 人間には見えない罠フィールド。bot が埋めたらサーバー側でサイレント拒否 */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              <label>
                Website (do not fill)
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  defaultValue=""
                />
              </label>
            </div>

            {errors.general && (
              <div className="bg-red-50 border border-accent/30 text-accent px-4 py-3 rounded text-sm">
                {errors.general}
              </div>
            )}

            <div>
              <label className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-text-primary">お名前</span>
                <span className="text-xs text-white bg-accent px-1.5 py-0.5 rounded">必須</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="例）山田 太郎"
                className={`w-full h-12 px-4 border rounded text-base bg-white ${
                  errors.name ? "border-accent" : "border-gray-200"
                } focus:border-navy focus:outline-none transition-colors`}
              />
              {errors.name && <p className="mt-1 text-sm text-accent">{errors.name}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-text-primary">会社名</span>
                <span className="text-xs text-text-secondary bg-gray-200 px-1.5 py-0.5 rounded">任意</span>
              </label>
              <input
                type="text"
                name="company"
                placeholder="例）株式会社サンプル"
                className={`w-full h-12 px-4 border rounded text-base bg-white ${
                  errors.company ? "border-accent" : "border-gray-200"
                } focus:border-navy focus:outline-none transition-colors`}
              />
              {errors.company && <p className="mt-1 text-sm text-accent">{errors.company}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-text-primary">電話番号</span>
                <span className="text-xs text-white bg-accent px-1.5 py-0.5 rounded">必須</span>
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
              {errors.phone && <p className="mt-1 text-sm text-accent">{errors.phone}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-text-primary">メールアドレス</span>
                <span className="text-xs text-white bg-accent px-1.5 py-0.5 rounded">必須</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="例）info@example.com"
                className={`w-full h-12 px-4 border rounded text-base bg-white ${
                  errors.email ? "border-accent" : "border-gray-200"
                } focus:border-navy focus:outline-none transition-colors`}
              />
              {errors.email && <p className="mt-1 text-sm text-accent">{errors.email}</p>}
            </div>

            <div>
              <label className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-text-primary">
                  {selectedType === "recruit" ? "簡単な自己PR" : "お問い合わせ内容"}
                </span>
                {selectedType === "recruit" ? (
                  <span className="text-xs text-text-secondary bg-gray-200 px-1.5 py-0.5 rounded">任意</span>
                ) : (
                  <span className="text-xs text-white bg-accent px-1.5 py-0.5 rounded">必須</span>
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
              {errors.message && <p className="mt-1 text-sm text-accent">{errors.message}</p>}
            </div>

            <div className="pt-4">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="agree"
                  className={`mt-1 w-4 h-4 ${errors.agree ? "ring-2 ring-accent" : ""}`}
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
              {errors.agree && <p className="mt-1 text-sm text-accent">{errors.agree}</p>}
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
                {isSubmitting ? "送信中..." : submitLabel ?? "送信する"}
              </button>
            </div>
          </form>
        </div>
      </FadeInUp>
    </div>
  );
}
