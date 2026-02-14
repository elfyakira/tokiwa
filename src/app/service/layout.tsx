import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `事業内容｜${site.seo.titleSuffix || "企業サイト"}`,
  description: site.seo.defaultDescription || "事業内容ページです。",
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
