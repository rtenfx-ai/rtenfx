import type { Chapter } from "@/data/story";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Subtle scroll reveal used across the printed sections. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/** Hairline scale used to separate parts of the page. */
export function Hairline({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-rule ${className}`} />;
}

export function Seal({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block size-1.5 rotate-45 bg-seal ${className}`}
    />
  );
}

export function ChapterRule({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-4">
      <Hairline className="flex-1" />
      {label ? (
        <span className="eyebrow text-ink-soft whitespace-nowrap">{label}</span>
      ) : (
        <Seal />
      )}
      <Hairline className="flex-1" />
    </div>
  );
}

/** Ruled aside that reads like a printed marginal note. */
export function MarginNote({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <aside className="paper-ruled border border-rule bg-paper-raised px-5 py-5 paper-shadow">
      {label && <p className="eyebrow mb-3 text-seal">{label}</p>}
      <div className="text-[0.95rem] leading-7 text-ink-soft">{children}</div>
    </aside>
  );
}

export function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <blockquote className="border-l border-seal/60 pl-6">
      <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
        {children}
      </p>
      {attribution && (
        <footer className="eyebrow mt-4 text-ink-soft">{attribution}</footer>
      )}
    </blockquote>
  );
}

/** Hairline-separated list, numbered like a printed index. */
export function RuledList({
  items,
  numbered = false,
  className = "",
}: {
  items: readonly string[];
  numbered?: boolean;
  className?: string;
}) {
  return (
    <ul className={`divide-y divide-rule/70 ${className}`}>
      {items.map((item, index) => (
        <li
          key={item}
          className="group flex items-baseline gap-4 py-3 transition-colors hover:bg-paper-raised"
        >
          {numbered && (
            <span className="eyebrow w-6 shrink-0 text-ink-soft/80 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <span className="text-[1.02rem] leading-7 text-ink-soft transition-colors group-hover:text-ink">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** The frame every chapter of the story is printed inside. */
export function ChapterSection({
  chapter,
  children,
}: {
  chapter: Chapter;
  children: ReactNode;
}) {
  return (
    <section id={chapter.id} className="scroll-mt-20 border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-3">
            <div className="font-display text-6xl leading-none text-seal/75 md:text-7xl">
              {chapter.numeral}
            </div>
            <Hairline className="my-5 max-w-24" />
            <p className="eyebrow text-ink-soft">{chapter.kicker}</p>
          </Reveal>

          <Reveal className="md:col-span-9" delay={0.06}>
            <h2 className="text-4xl leading-[1.05] text-ink md:text-5xl">
              {chapter.title}
            </h2>
            <p className="mt-5 max-w-2xl font-body text-lg leading-8 text-ink-soft">
              {chapter.summary}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <Seal />
      <span className="eyebrow text-ink-soft">{children}</span>
    </div>
  );
}

/** Body paragraph with generous editorial leading. */
export function Prose({
  children,
  lead = false,
  className = "",
}: {
  children: ReactNode;
  lead?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`${
        lead
          ? "font-body text-xl leading-9 text-ink md:text-2xl md:leading-10"
          : "font-body text-[1.05rem] leading-8 text-ink-soft"
      } ${className}`}
    >
      {children}
    </p>
  );
}

