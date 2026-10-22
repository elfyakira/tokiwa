import { NextResponse, type NextRequest } from "next/server";
import { company, contact } from "@/lib/site";

// メンテナンスモード（一時非公開）
// true: 全ページをメンテナンス中ページに差し替え / false: 通常公開
const MAINTENANCE_MODE = true;

// メンテナンス中ページのHTML
const maintenanceHtml = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>ただいまメンテナンス中です | ${company.name}</title>
<link rel="icon" href="/favicon.png" type="image/png">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 16px;
    background: #F3F4F6;
    color: #1F2937;
    font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
    line-height: 1.8;
    text-align: center;
  }
  .box { width: 100%; max-width: 560px; background: #fff; padding: 56px 32px; border-top: 4px solid #1E3A8A; }
  .logo { max-width: 220px; width: 100%; height: auto; margin-bottom: 32px; }
  h1 { font-size: 22px; color: #1E3A8A; margin-bottom: 16px; }
  p { font-size: 15px; color: #6B7280; }
  .contact { margin-top: 32px; padding-top: 24px; border-top: 1px solid #E5E7EB; font-size: 14px; }
  .contact a { color: #1E3A8A; }
</style>
</head>
<body>
  <div class="box">
    <img class="logo" src="/images/logo.png" alt="${company.name}">
    <h1>ただいまメンテナンス中です</h1>
    <p>現在、ウェブサイトを一時的に公開停止しております。<br>ご不便をおかけしますが、再開まで今しばらくお待ちください。</p>
    <div class="contact">
      お急ぎの方はお電話にてお問い合わせください<br>
      TEL：<a href="tel:${contact.phoneTel}">${contact.phoneFormatted}</a>
    </div>
  </div>
</body>
</html>`;

export function proxy(request: NextRequest) {
  if (!MAINTENANCE_MODE) return NextResponse.next();

  // お問い合わせAPIも停止
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "メンテナンス中です" }, { status: 503 });
  }

  // 503 + Retry-After で「一時的な停止」として検索エンジンに伝える
  return new NextResponse(maintenanceHtml, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "86400",
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  // Next.js内部ファイル・画像・favicon は除外（メンテナンスページで使用）
  matcher: ["/((?!_next/|images/|favicon\\.png|favicon\\.svg).*)"],
};
