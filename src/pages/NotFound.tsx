import { Button } from "@/components/ui/button";
import { profile } from "@/data/story";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="paper-grain flex min-h-screen flex-col bg-paper text-ink">
      <header className="border-b border-rule">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-6 py-3 md:px-10">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid size-8 place-items-center border border-ink/80 font-display text-[0.78rem] leading-none text-ink">
              RS
            </span>
            <span className="eyebrow text-ink-soft">
              {profile.name} — About Me
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-6 py-24 md:px-10">
        <p className="eyebrow text-seal">Errata</p>
        <h1 className="mt-5 font-display text-6xl leading-none text-ink md:text-8xl">
          404
        </h1>
        <div className="mt-8 h-px w-full bg-rule" />
        <p className="mt-8 max-w-xl font-body text-xl leading-9 text-ink-soft">
          This page was never set in type. The story lives in thirteen chapters
          on the front page.
        </p>
        <div className="mt-9">
          <Button asChild size="lg" className="rounded-none">
            <Link to="/">
              <ArrowLeft className="size-4" />
              Back to the story
            </Link>
          </Button>
        </div>
      </main>

      <footer className="border-t border-rule">
        <div className="mx-auto max-w-4xl px-6 py-8 md:px-10">
          <p className="eyebrow text-ink-soft">{profile.motto}</p>
        </div>
      </footer>
    </div>
  );
}
