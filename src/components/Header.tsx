"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { company, contact, images } from "@/lib/site";

const navItems = [
  { label: "BUSINESS", href: "/business" },
  { label: "TECHNOLOGY", href: "/technology" },
  { label: "COMPANY", href: "/company" },
  { label: "RECRUIT", href: "/recruit" },
];

// TOPページは暗いヒーロー背景
const isDarkHeroPage = (path: string) => path === "/";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // TOPページかどうか
  const hasDarkHero = isDarkHeroPage(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // ヘッダー背景色
  const headerBgClass = isScrolled
    ? "bg-white/80 backdrop-blur-sm shadow-header"
    : hasDarkHero
      ? "bg-transparent"
      : "bg-white shadow-header";

  // テキスト色（通常）
  const textColorClass = isScrolled
    ? "text-text-primary hover:text-blue"
    : hasDarkHero
      ? "text-white hover:text-white/70"
      : "text-text-primary hover:text-blue";

  // テキスト色（アクティブ）
  const activeColorClass = "text-accent";

  // セパレーター色
  const separatorColorClass = isScrolled
    ? "text-text-primary"
    : hasDarkHero
      ? "text-white/50"
      : "text-text-primary";

  // ハンバーガーアイコン色
  const hamburgerColorClass = isScrolled
    ? "bg-text-primary"
    : hasDarkHero
      ? "bg-white"
      : "bg-text-primary";

  return (
    <>
      {/* PC Header */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-[1000] h-24 transition-all duration-300 ${headerBgClass}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 lg:px-12">
          {/* Logo - スクロール前のTOPページでは非表示 */}
          <Link href="/" className={`flex items-center ${!isScrolled && hasDarkHero ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "トキワ工業"}
              width={320}
              height={80}
              className="h-20 w-auto"
            />
          </Link>

          {/* PC Navigation */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 tracking-wider ${
                  pathname === item.href ? activeColorClass : textColorClass
                }`}
              >
                {item.label}
              </Link>
            ))}
            <span className={separatorColorClass}>|</span>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors duration-200 tracking-wider ${
                pathname === "/contact" ? activeColorClass : textColorClass
              }`}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </header>

      {/* SP Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[1000] h-16 bg-white shadow-header">
        <div className="flex items-center justify-between h-full px-4">
          <Link href="/" className="flex items-center">
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "トキワ工業"}
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Hamburger Button */}
          <button
            className="w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "top-[11px] rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "top-[11px] -rotate-45" : "top-[19px]"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[999] bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <nav
        className={`lg:hidden fixed top-0 right-0 z-[999] w-[80vw] max-w-[300px] h-full bg-white transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="モバイルナビゲーション"
      >
        <div className="pt-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block h-14 leading-[56px] px-6 text-base font-medium border-b border-gray-100 transition-colors hover:text-blue tracking-wider ${
                pathname === item.href ? "text-accent" : "text-text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`block h-14 leading-[56px] px-6 text-base font-medium border-b border-gray-100 transition-colors hover:text-blue tracking-wider ${
              pathname === "/contact" ? "text-accent" : "text-text-primary"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </Link>
          {contact.phone && (
            <div className="px-6 pt-4">
              <a
                href={`tel:${contact.phoneTel || contact.phone.replace(/-/g, "")}`}
                className="text-sm text-text-secondary"
              >
                TEL: {contact.phoneFormatted || contact.phone}
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
