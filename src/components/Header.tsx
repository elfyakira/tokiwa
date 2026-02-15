"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { company, contact, images } from "@/lib/site";

const navItems = [
  { label: "BUSINESS", href: "/business" },
  { label: "TECHNOLOGY", href: "/technology" },
  { label: "COMPANY", href: "/company" },
  { label: "RECRUIT", href: "/recruit" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <>
      {/* PC Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] h-20 transition-all duration-300 bg-white shadow-header`}
      >
        <div className="flex items-center justify-between h-full px-6 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "トキワ工業"}
              width={180}
              height={45}
              className="h-10 w-auto"
            />
          </Link>

          {/* PC Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-primary transition-colors duration-200 hover:text-blue tracking-wider"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent text-white px-6 py-3 rounded text-sm font-semibold transition-colors duration-200 hover:bg-accent-dark ml-2"
            >
              CONTACT
            </Link>
          </nav>

          {/* Hamburger Button (SP) */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center"
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

      {/* SP Header spacer */}
      <div className="h-20" />

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
        <div className="pt-20">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block h-14 leading-[56px] px-6 text-base font-medium text-text-primary border-b border-gray-100 transition-colors hover:text-blue tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 py-6">
            <Link
              href="/contact"
              className="block w-full h-12 leading-[48px] text-center bg-accent text-white rounded font-semibold transition-colors hover:bg-accent-dark tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
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
