import Image from "next/image";
import Link from "next/link";
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

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-container mx-auto px-6 lg:px-12 pt-12 lg:pt-16 pb-6 lg:pb-8">
        {/* PC: Layout */}
        <div className="hidden lg:flex lg:justify-between lg:items-start mb-12">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src={images.logo || "/images/logo.png"}
                alt={company.name || "トキワ工業"}
                width={160}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Company Info */}
        <div className="hidden lg:block text-sm text-white/70 leading-relaxed mb-8">
          <p className="mb-1">{company.name}</p>
          {hq.zipCode && hq.address && (
            <p>〒{hq.zipCode} {hq.address}</p>
          )}
          <p className="mt-2">
            {contact.phone && <span className="mr-4">TEL: {contact.phoneFormatted || contact.phone}</span>}
            {contact.fax && <span>FAX: {contact.fax}</span>}
          </p>
        </div>

        {/* SP: Stacked layout */}
        <div className="lg:hidden text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "トキワ工業"}
              width={140}
              height={35}
              className="brightness-0 invert"
            />
          </Link>
          <div className="text-sm text-white/70 leading-relaxed mb-6">
            <p className="mb-1">{company.name}</p>
            {hq.zipCode && hq.address && (
              <p>〒{hq.zipCode} {hq.address}</p>
            )}
            {contact.phone && <p className="mt-2">TEL: {contact.phoneFormatted || contact.phone}</p>}
            {contact.fax && <p>FAX: {contact.fax}</p>}
          </div>
          <nav className="flex flex-wrap justify-center gap-4 mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-xs text-white/50">
            © {currentYear} {company.nameEn || company.name || "TOKIWA"}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
