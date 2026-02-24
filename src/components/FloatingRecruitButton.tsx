"use client";

import Link from "next/link";

export default function FloatingRecruitButton() {
  return (
    <Link
      href="/recruit"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[1100] group"
      aria-label="採用情報を見る"
    >
      {/* はみ出す英語テキスト */}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-anton text-accent text-2xl lg:text-3xl tracking-wider whitespace-nowrap pointer-events-none select-none rotate-[-90deg] origin-center -translate-y-6 lg:-translate-y-8">
        RECRUIT
      </span>

      {/* タブ本体 */}
      <div className="relative flex flex-col items-center bg-accent text-white py-10 px-4 lg:py-12 lg:px-5 rounded-l-lg shadow-[-4px_2px_16px_rgba(220,38,38,0.35)] overflow-hidden transition-all duration-400 ease-out group-hover:px-5 lg:group-hover:px-6 group-hover:shadow-[-6px_4px_24px_rgba(220,38,38,0.5)]">
        {/* ホバー時の光沢スイープ */}
        <span className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <span className="recruit-btn-shine absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-transparent via-white/25 to-transparent -translate-y-full skew-y-[-15deg]" />
        </span>

        {/* 縦書きテキスト */}
        <span className="writing-vertical text-sm lg:text-base font-bold tracking-[0.15em] leading-none relative z-10">
          一緒に働く仲間を募集中！
        </span>

        {/* 矢印アイコン */}
        <svg
          className="w-7 h-7 lg:w-8 lg:h-8 mt-6 transition-transform duration-500 group-hover:-translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path d="M9 5l-7 7 7 7" />
        </svg>
      </div>
    </Link>
  );
}
