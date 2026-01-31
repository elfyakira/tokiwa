# HP制作テンプレート（Standard）

企業HPを効率的に制作するための Next.js テンプレートです。

## 技術スタック

- **Next.js 16.1.6** (App Router)
- **React 19.2.3**
- **TypeScript**
- **Tailwind CSS 4.x**

## クイックスタート

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（WSL2環境の場合は --webpack フラグを追加）
npm run dev
# または
npm run dev -- --webpack

# ビルド
npm run build
```

## ディレクトリ構成

```
├── data/
│   └── site.json          # 企業基本情報（会社名、連絡先、SEO設定等）
├── public/
│   └── images/            # 画像ファイル（logo.png等）
├── src/
│   ├── app/               # ページコンポーネント
│   │   ├── page.tsx       # トップページ
│   │   ├── about/         # 会社概要
│   │   ├── service/       # 事業内容
│   │   ├── recruit/       # 採用情報
│   │   ├── contact/       # お問い合わせ
│   │   ├── news/          # お知らせ
│   │   └── privacy/       # プライバシーポリシー
│   ├── components/        # 共通コンポーネント
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── site.ts        # site.json読み込みユーティリティ
└── globals.css            # グローバルスタイル（ブランドカラー設定）
```

## カスタマイズ方法

### 1. 基本情報の設定（data/site.json）

会社名、連絡先、SEO情報などを `data/site.json` に設定します。

```json
{
  "company": {
    "name": "株式会社サンプル",
    "nameShort": "サンプル",
    "catchphrase": "キャッチコピー"
  },
  "contact": {
    "phone": "000-000-0000",
    "email": "info@example.com"
  },
  "seo": {
    "titleSuffix": "株式会社サンプル",
    "defaultDescription": "サイトの説明文"
  }
}
```

### 2. ブランドカラーの変更（globals.css）

`src/app/globals.css` の `@theme` ブロック内で色を定義します。

```css
@theme {
  --color-navy: #1A3A5C;      /* メインカラー */
  --color-accent: #C9A54B;    /* アクセントカラー */
  /* ... */
}
```

### 3. 各ページのコンテンツ編集

各ページファイル（例: `src/app/about/page.tsx`）の上部にある「コンテンツデータ」セクションを編集します。

```tsx
// ============================================================
// 📝 コンテンツデータ（構成案に基づいて編集してください）
// ============================================================
const MISSION = {
  title: "理念のタイトル",
  paragraphs: [
    "理念の説明文...",
  ],
};
```

### 4. 画像の差し替え

`public/images/` 内の画像を差し替えます。

- `logo.png` - ヘッダーロゴ
- `logo-square.png` - 正方形ロゴ（OGP等）
- `logo-only.png` - シンボルマークのみ

各ページのヒーロー画像等も同様に差し替えてください。

## データ構造（site.json）

| フィールド | 説明 |
|-----------|------|
| `company` | 会社基本情報（名前、代表者、設立年等） |
| `contact` | 連絡先情報（電話、メール、営業時間等） |
| `locations` | 所在地情報（本社、支店） |
| `seo` | SEO設定（タイトル、説明文） |
| `images` | ロゴ画像パス |
| `history` | 沿革 |
| `services` | サービス一覧 |
| `works` | 実績一覧 |
| `news` | お知らせ一覧 |
| `recruit` | 採用情報（データ、福利厚生、募集要項等） |
| `ceo` | 代表者情報（メッセージ、画像） |

## 注意事項

### WSL2環境での開発

WSL2環境では Turbopack が正常に動作しない場合があります。
その場合は `--webpack` フラグを付けて起動してください。

```bash
npm run dev -- --webpack
```

### 画像ファイル

- 生成画像（`public/images/generated/`）はサンプルです。実際の画像に差し替えてください。
- 推奨画像サイズ:
  - ヒーロー画像: 1920x1080px
  - サービス画像: 800x600px
  - 人物写真: 400x500px（3:4比率）

## ライセンス

Private - Sing, Inc.
