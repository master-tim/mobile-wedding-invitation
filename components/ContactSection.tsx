"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WEDDING_DATA } from "@/data/wedding-data";
import ScrollSection from "./gsap/ScrollSection";

interface AccountInfo {
  bank: string;
  accountNumber: string;
  depositor: string;
}

interface PersonContact {
  name: string;
  phone?: string;
  account?: AccountInfo;
}

function ContactCard({
  title,
  side,
  person,
  parents,
  delay = 0,
}: {
  title: string;
  side: "groom" | "bride";
  person: { name: string; phone: string; account: AccountInfo };
  parents: { father: PersonContact; mother: PersonContact };
  delay?: number;
}) {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // Determine names based on side
  const mainName =
    side === "groom" ? WEDDING_DATA.groom.name : WEDDING_DATA.bride.name;
  const fatherName =
    side === "groom"
      ? WEDDING_DATA.groom.parents.father.name
      : WEDDING_DATA.bride.parents.father.name;
  const motherName =
    side === "groom"
      ? WEDDING_DATA.groom.parents.mother.name
      : WEDDING_DATA.bride.parents.mother.name;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    alert(`${label} ${WEDDING_DATA.content.contact.copied}`);
  };

  return (
    <ScrollSection animation="fade-up" delay={delay}>
      <div className="soft-card p-6">
        <div className="text-center mb-4">
          <span className="text-xs tracking-[0.3em] text-[var(--color-primary)] uppercase">
            {title}
          </span>
          <h3 className="text-2xl heading-serif text-[var(--color-text)] mt-1">
            {mainName}
          </h3>
        </div>

        {/* Phone contacts */}
        <div className="space-y-2 mb-4">
          <a
            href={`tel:${person.phone}`}
            className="phone-link w-full justify-center"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-sm">{WEDDING_DATA.content.contact.call}</span>
          </a>

          <div className="flex gap-2">
            {parents.father.phone ? (
              <a
                href={`tel:${parents.father.phone}`}
                className="phone-link flex-1 justify-center text-xs"
              >
                <span>
                  {WEDDING_DATA.content.contact.father} {fatherName}
                </span>
              </a>
            ) : (
              <div className="phone-link flex-1 justify-center text-xs opacity-50 cursor-not-allowed">
                <span>
                  {WEDDING_DATA.content.contact.father} {fatherName}
                </span>
              </div>
            )}
            {parents.mother.phone ? (
              <a
                href={`tel:${parents.mother.phone}`}
                className="phone-link flex-1 justify-center text-xs"
              >
                <span>
                  {WEDDING_DATA.content.contact.mother} {motherName}
                </span>
              </a>
            ) : (
              <div className="phone-link flex-1 justify-center text-xs opacity-50 cursor-not-allowed">
                <span>
                  {WEDDING_DATA.content.contact.mother} {motherName}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Account toggle */}
        <button
          onClick={() => setIsAccountOpen(!isAccountOpen)}
          className="w-full py-3 border border-[var(--color-divider)] rounded-full text-xs tracking-[0.25em] uppercase text-[var(--color-text)] flex items-center justify-center gap-2 transition-colors hover:bg-[var(--color-secondary)]"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          {WEDDING_DATA.content.contact.accountButton}
          <motion.svg
            animate={{ rotate: isAccountOpen ? 180 : 0 }}
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </button>

        <AnimatePresence>
          {isAccountOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-3">
                {/* Main person account */}
                <AccountRow
                  label={mainName}
                  account={person.account}
                  onCopy={copyToClipboard}
                />

                {/* Father's account if exists */}
                {parents.father.account && (
                  <AccountRow
                    label={`${WEDDING_DATA.content.contact.father} ${fatherName}`}
                    account={parents.father.account}
                    onCopy={copyToClipboard}
                  />
                )}

                {/* Mother's account if exists */}
                {parents.mother.account && (
                  <AccountRow
                    label={`${WEDDING_DATA.content.contact.mother} ${motherName}`}
                    account={parents.mother.account}
                    onCopy={copyToClipboard}
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollSection>
  );
}

function AccountRow({
  label,
  account,
  onCopy,
}: {
  label: string;
  account: AccountInfo;
  onCopy: (text: string, label: string) => void;
}) {
  return (
    <div className="bg-[var(--color-secondary)] rounded-xl p-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-[var(--color-text-light)]">{label}</span>
        <button
          onClick={() =>
            onCopy(account.accountNumber, WEDDING_DATA.content.contact.account)
          }
          className="text-xs text-[var(--color-primary)] flex items-center gap-1"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          {WEDDING_DATA.content.contact.copy}
        </button>
      </div>
      <p className="text-sm text-[var(--color-text)]">
        {account.bank} {account.accountNumber}
      </p>
      <p className="text-xs text-[var(--color-text-light)] mt-0.5">
        {WEDDING_DATA.content.contact.depositor}: {account.depositor}
      </p>
    </div>
  );
}

export default function ContactSection() {
  const { groom, bride, parents } = WEDDING_DATA;

  return (
    <section className="section">
      <div className="section-inner">
        <ScrollSection animation="fade-up" className="text-center mb-10">
          <p className="eyebrow mb-2">{WEDDING_DATA.content.contact.eyebrow}</p>
          <h2 className="text-3xl heading-serif text-[var(--color-text)]">
            {WEDDING_DATA.content.contact.title}
          </h2>
          <div className="section-divider" />
        </ScrollSection>

        <div className="space-y-4">
          <ContactCard
            title={WEDDING_DATA.content.contact.groomSide}
            side="groom"
            person={groom}
            parents={parents.groom}
            delay={0.1}
          />
          <ContactCard
            title={WEDDING_DATA.content.contact.brideSide}
            side="bride"
            person={bride}
            parents={parents.bride}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
