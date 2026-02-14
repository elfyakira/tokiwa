import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `会社概要｜${site.seo.titleSuffix || "企業サイト"}`,
  description: site.seo.defaultDescription || "会社概要ページです。",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
