import { useState } from "react";

/**
 * Editorial portrait plate.
 *
 * Two ways to provide the photo:
 * 1. Drop a file into `public/` using any of the filenames below — it appears
 *    automatically, no code change needed.
 * 2. Set `photoUrl` in `src/data/story.ts` to a hosted image URL.
 *
 * Until a photo resolves, the plate falls back to a typeset monogram so the
 * page never shows a broken image.
 */
const PORTRAIT_SOURCES = [
  "/rashidul-sikder.jpg",
  "/rashidul-sikder.jpeg",
  "/rashidul-sikder.png",
  "/rashidul-sikder.webp",
];

export function Portrait({
  className = "",
  caption,
  eager = false,
  src,
  monogramClassName = "text-4xl sm:text-5xl",
}: {
  className?: string;
  caption?: string;
  eager?: boolean;
  /** Explicit photo URL. Takes precedence over the local file names above. */
  src?: string;
  monogramClassName?: string;
}) {
  const sources = src ? [src] : PORTRAIT_SOURCES;
  const [sourceIndex, setSourceIndex] = useState(0);
  const missingPhoto = sourceIndex >= sources.length;

  return (
    <figure className={className}>
      <div className="border border-ink/25 bg-paper-raised p-1.5 paper-shadow">
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink/15 bg-paper-deep">
          {missingPhoto ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
              <span
                className={`font-display leading-none tracking-[0.08em] text-ink/80 ${monogramClassName}`}
              >
                RS
              </span>
              <span aria-hidden="true" className="h-px w-10 bg-rule" />
              <span className="eyebrow text-ink-soft/80">Portrait</span>
            </div>
          ) : (
            <img
              src={sources[sourceIndex]}
              alt="Rashidul Sikder"
              loading={eager ? "eager" : "lazy"}
              decoding="async"
              onError={() => setSourceIndex((index) => index + 1)}
              className="h-full w-full object-cover object-top"
            />
          )}
          {/* inner hairline, echoing the monogram's double frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-1.5 border border-ink/10"
          />
        </div>
      </div>

      {caption && (
        <figcaption className="mt-3 border-t border-rule pt-2 font-body text-[0.8rem] leading-5 text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
