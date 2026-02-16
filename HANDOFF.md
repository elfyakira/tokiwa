# 有限会社トキワ工業 HP制作 HANDOFF

## プロジェクト情報

| 項目 | 内容 |
|------|------|
| 企業名 | 有限会社トキワ工業 |
| 企業名（英語） | tokiwa |
| 使用テンプレート | template-standard |
| 作成日 | 2026-02-15 |
| 更新日 | 2026-02-16 |
| 制作方式 | カンプ版（デザインカンプから実装） |
| カンプフォルダ | C:\Users\tench\Downloads\トキワ工業HP |
| GitHubリポジトリ | https://github.com/elfyakira/tokiwa.git |

---

## 今回セッションで完了した作業（2026-02-16 続き）

### 1. TOPページ アニメーション実装 ✅

| セクション | アニメーション |
|-----------|---------------|
| BUSINESS | 右からスライドイン（FadeInImage direction="right"） |
| OUR STRENGTHS | フェードイン（FadeInImage direction="up"） x3 |
| TECHNOLOGY | 左からスライドイン（FadeInImage direction="left"） |
| RECRUIT | フェードイン（FadeInImage direction="up"） |
| CONTACT | フェードイン（FadeInImage direction="up"） |

### 2. BUSINESS/TECHNOLOGY/RECRUITページ ヒーロー修正 ✅

カンプ（`/mnt/c/Users/tench/Downloads/hero-design.jpg`）に基づき修正:
- 背景: navy → 白
- タイトル色: 白 → navy
- サブタイトル: タイトルの右横（同じ行）に配置
- 説明文色: 白 → text-primary
- 画像: 縦長（aspect-[3/4]）、右からスライドイン
- コンテナ: max-w-7xl mx-auto

### 3. COMPANYページ 採用情報バナー修正 ✅

- コンテナを `max-w-7xl` に変更
- 画像をオリジナルの高さに（fillではなくwidth/height指定）
- テキスト中央揃え

### 4. RECRUITページ アイコン画像修正 ✅

- SVGで描画していたアイコンを画像に置き換え
- `/images/recruit-icon1.png` - 78%円グラフ（従業員定着率）
- `/images/recruit-icon2.png` - 67%プログレスバー（生産性の向上）
- `/images/recruit-icon3.png` - 人アイコン（多様なジェンダー）
- テキストに`break-all`と`overflow-hidden`を追加

### 5. TOPページ CONTACTセクション修正 ✅

- 帯とボタンをflexで横並びに変更（absoluteを廃止）
- 帯: `w-[60%] lg:w-[50%]`、テキストは`items-end`で右寄せ
- ボタン: `self-end -mb-16 lg:-mb-24`で下に配置
- 背景画像: 7xlの左端に合わせる `left-[calc((100vw-80rem)/2+2.5rem)]`

### 6. TOPページ TECHNOLOGYセクション修正 途中

- 背景画像: 7xlの右端に合わせる `right-[calc((100vw-80rem)/2+3rem)]`
- 帯の位置: `pr-[5%] lg:pr-[8%]`に変更

### 7. TOPページ RECRUITセクション修正 途中

- 高さ増加: `min-h-[550px] lg:min-h-[650px]`
- 背景画像: `right-2`で右側に余白

---

## 次回セッションでやること

### 未完了: TOPページ TECHNOLOGYセクションの微調整

現在の問題:
- サブテキストの位置が合っていない
- 現在: `pr-[8%] lg:pr-[12%]`

調整ポイント:
- サブテキスト（説明文）の位置調整
- ボタンの位置: 現在 `pl-[15%] lg:pl-[20%]`

### 確認事項

- TECHNOLOGYセクションとRECRUITセクションの背景画像の右端が揃っているか
- CONTACTセクションとRECRUITセクションの背景画像の左端が揃っているか

---

## 背景画像の配置計算（重要）

### 7xlコンテナに合わせる計算式

7xl = 80rem = 1280px

- 左端に合わせる: `left-[calc((100vw-80rem)/2+余白)]`
- 右端に合わせる: `right-[calc((100vw-80rem)/2+余白)]`

### 現在の設定

| セクション | 背景画像の配置 |
|-----------|---------------|
| BUSINESS | `left-[20%] lg:left-[30%]` |
| TECHNOLOGY | `right-[calc((100vw-80rem)/2+3rem)]` |
| RECRUIT | `right-2`（7xlコンテナ内） |
| CONTACT | `left-[calc((100vw-80rem)/2+2.5rem)]` |

---

## 不足している画像（要対応）

| ファイル名 | 用途 | 現状 |
|-----------|------|------|
| interview.jpg | recruit/page.tsx インタビューセクション | なし |
| greeting-illustration.png | company/page.tsx ごあいさつ | なし |
| building.jpg | page.tsx CONTACTセクション背景 | works-1.jpg で仮対応中 |

---

## 主要ファイル

| ファイル | 説明 |
|---------|------|
| `src/app/page.tsx` | TOPページ |
| `src/app/layout.tsx` | 共通レイアウト |
| `src/components/Header.tsx` | ヘッダー（透明/白切り替え対応） |
| `src/components/Footer.tsx` | フッター（白背景） |
| `src/app/business/page.tsx` | 事業紹介ページ |
| `src/app/technology/page.tsx` | 技術・設備ページ |
| `src/app/company/page.tsx` | 会社概要ページ |
| `src/app/recruit/page.tsx` | 採用情報ページ |
| `src/app/contact/page.tsx` | お問い合わせページ |
| `tailwind.config.ts` | Tailwind設定（font-anton追加済み） |
| `ANIMATION_GUIDE.md` | アニメーション実装ガイド |
| `docs/IMAGE_LIST.md` | 画像一覧 |

---

## 検証コマンド

```bash
# TypeScriptチェック
npx tsc --noEmit

# 開発サーバー起動
npm run dev

# ビルド確認
npm run build
```

---

## 注意事項

- page.tsxに未使用のImage importがある（警告が出ている）
- FadeInImageを使っているのでImageは不要かもしれない、確認が必要
