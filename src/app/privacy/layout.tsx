import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `プライバシーポリシー｜${site.seo.titleSuffix || "企業サイト"}`,
  description: "プライバシーポリシー（個人情報保護方針）について。",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
