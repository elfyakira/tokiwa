"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, contact, locations, images } from "@/lib/site";

const navLinks = [
  { label: "BUSINESS", href: "/business" },
  { label: "TECHNOLOGY", href: "/technology" },
  { label: "COMPANY", href: "/company" },
  { label: "RECRUIT", href: "/recruit" },
  { label: "CONTACT", href: "/contact" },
];

export default function Footer() {
  const hq = locations.headquarters;
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="bg-white text-navy">
      <div className="max-w-container mx-auto px-6 lg:px-12 py-6 lg:py-8">
        {/* PC: 横並び */}
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-8 mb-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "トキワ工業"}
              width={120}
              height={30}
              className=""
            />
          </Link>

          {/* Company Info */}
          <div className="text-xs text-navy/70 leading-relaxed">
            <p>{company.name} 〒{hq.zipCode} {hq.address}</p>
            <p>
              {contact.phone && <span className="mr-3">TEL: {contact.phoneFormatted || contact.phone}</span>}
              {contact.fax && <span>FAX: {contact.fax}</span>}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs hover:text-navy transition-colors tracking-wider ${
                  pathname === link.href ? "text-accent" : "text-navy/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* SP: 縦積み */}
        <div className="lg:hidden text-center mb-4">
          <Link href="/" className="inline-block mb-4">
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "トキワ工業"}
              width={100}
              height={25}
              className=""
            />
          </Link>
          <div className="text-xs text-navy/70 leading-relaxed mb-4">
            <p>{company.name}</p>
            {hq.zipCode && hq.address && (
              <p>〒{hq.zipCode} {hq.address}</p>
            )}
            {contact.phone && <p>TEL: {contact.phoneFormatted || contact.phone}</p>}
          </div>
          <nav className="flex flex-wrap justify-center gap-3 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs hover:text-navy transition-colors tracking-wider ${
                  pathname === link.href ? "text-accent" : "text-navy/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy/20 pt-4 text-center">
          <p className="text-xs text-navy/50">
            © {currentYear} {company.nameEn || company.name || "TOKIWA"}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
