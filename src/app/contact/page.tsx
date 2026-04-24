"use client";

import { contact } from "@/lib/site";
import { FadeInUp, SectionTitleEntrance } from "@/components/animations";
import { ContactForm } from "@/components/ContactForm";

// ============================================================
// Contactページ - トキワ工業
// ============================================================

// ページヒーロー
function PageHero() {
  return (
    <section className="relative h-[220px] lg:h-[300px] flex items-center justify-center pt-24 pb-0">
      <div className="absolute inset-0 z-0 bg-navy" />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 w-full">
        <SectionTitleEntrance direction="left">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-wider">
            CONTACT
          </h1>
          <p className="text-sm text-white/80 mt-2 tracking-wider">お問い合わせ</p>
        </SectionTitleEntrance>
      </div>
    </section>
  );
}

function PhoneSection() {
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-xl mx-auto px-6 lg:px-12 text-center">
        <FadeInUp>
          <h2 className="text-lg lg:text-xl font-bold text-text-primary mb-4">
            お電話でのお問い合わせ
          </h2>
          <a
            href={`tel:${contact.phoneTel || contact.phone?.replace(/-/g, "")}`}
            className="block text-3xl lg:text-4xl font-bold text-navy mb-2"
          >
            {contact.phoneFormatted || contact.phone || "0567-33-1330"}
          </a>
          <p className="text-sm text-text-secondary">
            受付時間: {contact.hours || "8:30〜17:30"}
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero />
      <section className="py-16 lg:py-24 bg-white">
        <ContactForm />
      </section>
      <PhoneSection />
    </>
  );
}
