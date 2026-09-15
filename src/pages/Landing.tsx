import { PaperStructure } from "@/components/PaperStructure";
import { Portrait } from "@/components/Portrait";
import {
  ChapterSection,
  Hairline,
  MarginNote,
  Prose,
  PullQuote,
  Reveal,
  RuledList,
  Seal,
} from "@/components/story";
import { Button } from "@/components/ui/button";
import {
  aimBody,
  aimStatements,
  chapters,
  coreValues,
  developmentAreas,
  developmentOutro,
  educationFocus,
  educationNote,
  experience,
  facts,
  futurePhases,
  goals,
  interests,
  leadershipIntro,
  leadershipOutro,
  leadershipTraits,
  learningLoop,
  learningParagraphs,
  missionOutro,
  missionStatements,
  profile,
  profileParagraphs,
  skillGroups,
  skillsNote,
  successParagraphs,
  visionParagraphs,
  visionQualities,
} from "@/data/story";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight, BookOpenText } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-40 h-[2px] origin-left bg-seal/70"
    />
  );
}

function Masthead() {
  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-8 place-items-center border border-ink/80 font-display text-[0.78rem] leading-none text-ink">
            RS
          </span>
          <span className="eyebrow hidden text-ink-soft sm:block">
            {profile.name} — About Me
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <a
            href="#contents"
            className="eyebrow hidden text-ink-soft transition-colors hover:text-seal md:block"
          >
            Contents
          </a>
          <a
            href="#closing"
            className="eyebrow hidden text-ink-soft transition-colors hover:text-seal md:block"
          >
            Mission
          </a>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-ink/25 bg-transparent"
          >
            <a href="#the-person">
              <BookOpenText className="size-4" />
              Read the story
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <PaperStructure className="absolute inset-0 z-0" />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-b from-paper/55 via-paper/25 to-paper/85 md:bg-gradient-to-r md:from-paper md:via-paper/50 md:to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-20 pb-24 md:px-10">
        <Reveal>
          <div className="flex items-start gap-5 sm:gap-7">
            <Portrait
              className="w-28 shrink-0 sm:w-36 md:w-44"
              eager
              src={profile.photoUrl || undefined}
              monogramClassName="text-4xl"
            />
            <div className="flex flex-col gap-2.5 pt-1">
              <span className="eyebrow text-seal">{profile.issue}</span>
              <span className="eyebrow text-ink-soft">{profile.edition}</span>
              <span className="eyebrow text-ink-soft">{profile.dateLine}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.02em] text-ink sm:text-6xl lg:text-8xl">
            Rashidul <span className="italic text-ink/85">Sikder</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-7 flex items-center gap-4">
            <Hairline className="max-w-16" />
            <p className="font-display text-lg italic text-seal md:text-xl">
              {profile.motto}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Prose lead className="mt-8 max-w-xl">
            A {profile.age}-year-old {profile.nationality} {profile.flag}{" "}
            student — working at the meeting point of technology, design and
            creativity, and turning ideas into useful things.
          </Prose>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-9 flex max-w-xl flex-wrap items-center gap-x-6 gap-y-3">
            {[
              ["Age", `${profile.age}`],
              ["Nationality", `${profile.nationality} ${profile.flag}`],
              ["Religion", profile.religion],
              ["Academic level", profile.academicLevel],
              ["Blood group", profile.bloodGroup],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`flex items-baseline gap-2 ${
                  index > 0 ? "border-l border-rule pl-6" : ""
                }`}
              >
                <dt className="eyebrow text-ink-soft/80">{label}</dt>
                <dd className="font-display text-base text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-none">
              <a href="#the-person">
                Read the story
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-ink/25 bg-transparent"
            >
              <a href="#experience">See the working record</a>
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute right-10 bottom-12 z-10 hidden max-w-60 text-right lg:block">
        <p className="eyebrow text-seal">Fig. 1</p>
        <p className="mt-2 font-body text-sm leading-6 text-ink-soft">
          The structure — technology, design, creativity, innovation and
          leadership, turning in one frame.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="eyebrow text-ink-soft/70">Scroll</span>
        <span className="h-12 w-px bg-gradient-to-b from-rule to-transparent" />
        <ArrowDown className="size-3.5 animate-bounce text-ink-soft/70" />
      </div>
    </section>
  );
}

function Contents() {
  return (
    <section id="contents" className="scroll-mt-20 border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-seal">Index</p>
              <h2 className="mt-3 text-4xl text-ink md:text-5xl">
                The Contents
              </h2>
            </div>
            <p className="max-w-md font-body text-base leading-7 text-ink-soft">
              Thirteen chapters, read top to bottom — or jump straight to
              whichever part of the story you came for.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-12 md:grid-cols-2">
          {chapters.map((chapter, index) => (
            <Reveal key={chapter.id} delay={Math.min(index * 0.02, 0.2)}>
              <div className="group flex items-center justify-between gap-4 border-b border-rule py-4">
                <a
                  href={`#${chapter.id}`}
                  className="flex flex-1 items-baseline gap-4"
                >
                  <span className="w-7 shrink-0 font-display text-base text-seal/80">
                    {chapter.numeral}
                  </span>
                  <span className="min-w-0">
                    <span className="font-display text-xl text-ink transition-colors group-hover:text-seal">
                      {chapter.title}
                    </span>
                    <span className="eyebrow mt-1 block text-ink-soft/80 sm:mt-0 sm:ml-3 sm:inline">
                      {chapter.kicker}
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChapterThePerson() {
  return (
    <div className="grid gap-10 md:grid-cols-12 md:gap-12">
      <div className="space-y-6 md:col-span-7">
        {profileParagraphs.map((paragraph, index) => (
          <Prose key={paragraph} lead={index === 0}>
            {paragraph}
          </Prose>
        ))}
      </div>

      <div className="md:col-span-4 md:col-start-9">
        <Portrait
          className="mb-8"
          src={profile.photoUrl || undefined}
          caption="Rashidul Sikder · Bangladesh · Higher Secondary"
        />

        <div className="border border-rule bg-paper-raised paper-shadow">
          <div className="border-b border-rule px-5 py-3">
            <span className="eyebrow text-seal">Personal Information</span>
          </div>
          <dl className="divide-y divide-rule/70">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 px-5 py-3"
              >
                <dt className="eyebrow text-ink-soft">{fact.label}</dt>
                <dd className="font-display text-base text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-6">
          <MarginNote label="In one line">
            A learner first — building knowledge, skills and character at the
            same time.
          </MarginNote>
        </div>
      </div>
    </div>
  );
}

function ChapterEducation() {
  return (
    <div className="grid gap-10 md:grid-cols-12 md:gap-12">
      <div className="space-y-6 md:col-span-6">
        <Prose lead>
          I am currently pursuing my Higher Secondary education.
        </Prose>
        <Prose>
          Alongside my academic studies, I actively focus on developing
          practical and professional skills that prepare me for future study
          and professional opportunities.
        </Prose>
        <Prose>{educationNote}</Prose>
      </div>

      <div className="md:col-span-5 md:col-start-8">
        <p className="eyebrow mb-4 text-seal">Focus Areas</p>
        <RuledList items={educationFocus} numbered />
      </div>
    </div>
  );
}

function ChapterInterests() {
  return (
    <div className="space-y-14">
      {interests.map((block) => (
        <div key={block.id} className="grid gap-6 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-3">
            <span className="font-display text-4xl text-seal/55">
              {block.glyph}
            </span>
            <Hairline className="my-4 max-w-16" />
            <h3 className="text-2xl text-ink">{block.title}</h3>
          </div>

          <div className="md:col-span-9">
            <Prose className="max-w-2xl">{block.intro}</Prose>
            {block.items.length > 0 && (
              <div className="mt-7 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                {block.items.map((item) => (
                  <span
                    key={item}
                    className="border-t border-rule/70 py-2.5 text-[0.98rem] leading-6 text-ink-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function ChapterSkills() {
  return (
    <div>
      <div className="grid gap-10 md:grid-cols-3 md:gap-12">
        {skillGroups.map((group, index) => (
          <div key={group.title} className="border-t border-ink/70 pt-5">
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl text-ink">{group.title}</h3>
              <span className="eyebrow text-seal/80">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <RuledList items={group.items} className="mt-4" />
          </div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-3">
        <div className="md:col-span-2">
          <MarginNote label="Note">{skillsNote}</MarginNote>
        </div>
      </div>
    </div>
  );
}

function ChapterExperience() {
  return (
    <ol className="divide-y divide-rule">
      {experience.map((item) => (
        <li
          key={item.organisation}
          className="grid gap-2 py-6 md:grid-cols-12 md:gap-10"
        >
          <p className="eyebrow text-ink-soft md:col-span-3">{item.period}</p>
          <div className="md:col-span-9">
            <h3 className="font-display text-xl text-ink md:text-2xl">
              {item.organisation}
              {item.native && (
                <span className="ml-3 font-bengali text-lg text-ink-soft">
                  {item.native}
                </span>
              )}
            </h3>
            <p className="mt-1.5 font-display text-base text-seal">
              {item.role}
            </p>
            {item.description && (
              <p className="mt-2.5 max-w-2xl font-body text-[1rem] leading-7 text-ink-soft">
                {item.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function ChapterAim() {
  return (
    <div>
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <Prose lead>{aimBody}</Prose>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <p className="eyebrow mb-4 text-seal">The Combination</p>
          <ul className="space-y-2">
            {aimStatements.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3 border-b border-rule/70 pb-2 font-display text-lg text-ink"
              >
                <Seal />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="eyebrow mb-4 text-ink-soft">Short-Term Goals</p>
          <RuledList items={goals.shortTerm} numbered />
        </div>
        <div>
          <p className="eyebrow mb-4 text-ink-soft">Long-Term Goals</p>
          <RuledList items={goals.longTerm} numbered />
        </div>
      </div>
    </div>
  );
}

function ChapterVision() {
  return (
    <div>
      <div className="max-w-4xl">
        <Prose lead>{visionParagraphs[0]}</Prose>
        <div className="mt-7 grid gap-7 md:grid-cols-2 md:gap-12">
          {visionParagraphs.slice(1).map((paragraph) => (
            <Prose key={paragraph}>{paragraph}</Prose>
          ))}
        </div>
      </div>

      <p className="eyebrow mt-12 mb-4 text-seal">
        I envision creating work that is
      </p>
      <div className="grid grid-cols-2 border-t border-l border-rule bg-paper-raised md:grid-cols-3">
        {visionQualities.map((quality) => (
          <div
            key={quality}
            className="border-b border-r border-rule px-5 py-6 font-display text-lg text-ink"
          >
            {quality}
          </div>
        ))}
      </div>
    </div>
  );
}

function ChapterLearning() {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {learningLoop.map((step, index) => (
          <div key={step} className="border-t-2 border-ink/75 pt-4">
            <span className="eyebrow text-seal">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 font-display text-2xl text-ink">{step}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-4xl">
        <Prose lead>{learningParagraphs[0]}</Prose>
        <div className="mt-7 grid gap-7 md:grid-cols-2 md:gap-12">
          {learningParagraphs.slice(1).map((paragraph) => (
            <Prose key={paragraph}>{paragraph}</Prose>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChapterLeadership() {
  return (
    <div>
      <Prose lead className="max-w-3xl">
        {leadershipIntro}
      </Prose>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
        <RuledList items={leadershipTraits.slice(0, 5)} numbered />
        <RuledList items={leadershipTraits.slice(5)} numbered={false} />
      </div>

      <div className="mt-12 max-w-3xl">
        <PullQuote attribution="My working definition">
          {leadershipOutro}
        </PullQuote>
      </div>
    </div>
  );
}

function ChapterDevelopment() {
  return (
    <div>
      <div className="grid gap-10 md:grid-cols-3 md:gap-12">
        {developmentAreas.map((area, index) => (
          <div key={area.title} className="border-t border-ink/70 pt-5">
            <span className="eyebrow text-seal">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-2xl text-ink">{area.title}</h3>
            <p className="mt-3 font-body text-[1.02rem] leading-7 text-ink-soft">
              {area.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-3xl">
        <PullQuote>{developmentOutro}</PullQuote>
      </div>
    </div>
  );
}

function ChapterFuture() {
  return (
    <ol className="relative border-l border-rule pl-8">
      {futurePhases.map((phase, index) => (
        <li
          key={phase.phase}
          className={`relative ${index === futurePhases.length - 1 ? "" : "pb-10"}`}
        >
          <span
            aria-hidden="true"
            className="absolute left-[-2.25rem] top-2.5 size-2 rotate-45 bg-ink/70"
          />
          <p className="eyebrow text-ink-soft">{phase.phase}</p>
          <h3 className="mt-2 text-2xl text-ink">{phase.title}</h3>
          <p className="mt-2 max-w-2xl font-body text-[1.02rem] leading-7 text-ink-soft">
            {phase.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

function ChapterSuccess() {
  return (
    <div className="grid gap-10 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-7">
        <div className="space-y-6">
          {successParagraphs.map((paragraph, index) => (
            <Prose key={paragraph} lead={index === 1}>
              {paragraph}
            </Prose>
          ))}
        </div>
      </div>

      <div className="md:col-span-4 md:col-start-9">
        <MarginNote label="The short version">
          Take an idea, acquire the knowledge, build it, improve it, and make
          something that genuinely helps people.
        </MarginNote>
      </div>
    </div>
  );
}

function ChapterMission() {
  return (
    <div>
      <ol className="grid gap-6 md:grid-cols-5">
        {missionStatements.map((statement, index) => (
          <li key={statement} className="border-t border-ink/70 pt-4">
            <span className="eyebrow text-seal">
              {["I", "II", "III", "IV", "V"][index]}
            </span>
            <p className="mt-2 font-display text-xl leading-snug text-ink">
              {statement}
            </p>
          </li>
        ))}
      </ol>

      <Prose className="mt-10 max-w-3xl">{missionOutro}</Prose>

      <div className="mt-14">
        <p className="eyebrow mb-5 text-seal">Core Values</p>
        <div className="grid grid-cols-1 border-t border-l border-rule bg-paper-raised sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => (
            <div key={value.name} className="border-b border-r border-rule p-5">
              <h3 className="font-display text-lg text-ink">{value.name}</h3>
              <p className="mt-2 font-body text-sm leading-6 text-ink-soft">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Closing() {
  return (
    <section id="closing" className="border-t border-rule bg-paper-raised">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10">
        <Reveal>
          <p className="eyebrow text-seal">My Motto</p>
          <h2 className="mt-6 font-display text-4xl leading-tight text-ink md:text-6xl">
            Learn. Create. Improve. Inspire.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="mb-10 flex items-center justify-center gap-4">
            <Hairline className="max-w-24" />
            <Seal />
            <Hairline className="max-w-24" />
          </div>
          <p className="mx-auto max-w-2xl font-body text-xl leading-9 text-ink-soft">
            “{profile.visionLine}”
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-none">
              <a href="#the-person">
                Read the story from the top
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-ink/25 bg-transparent"
            >
              <a href="#contents">Back to the contents</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Colophon() {
  return (
    <footer className="border-t border-rule bg-paper">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-lg text-ink">{profile.name}</p>
          <p className="eyebrow mt-1 text-ink-soft">
            {profile.location} · {profile.academicLevel}
          </p>
        </div>
        <p className="eyebrow text-ink-soft md:text-center">
          Set in Fraunces &amp; Newsreader · Paper #F0EEE6
        </p>
        <p className="text-xs leading-5 text-ink-soft md:text-right">
          © {new Date().getFullYear()} {profile.name}. Learn. Create. Improve.
          Inspire.
        </p>
      </div>
    </footer>
  );
}

export default function Landing() {
  const { hash } = useLocation();

  // Deep links like /#experience arrive from the reading room.
  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ block: "start" });
  }, [hash]);

  return (
    <div className="paper-grain min-h-screen bg-paper text-ink">
      <ScrollProgress />
      <Masthead />
      <main>
        <Hero />
        <Contents />
        <ChapterSection chapter={chapters[0]}>
          <ChapterThePerson />
        </ChapterSection>
        <ChapterSection chapter={chapters[1]}>
          <ChapterEducation />
        </ChapterSection>
        <ChapterSection chapter={chapters[2]}>
          <ChapterInterests />
        </ChapterSection>
        <ChapterSection chapter={chapters[3]}>
          <ChapterSkills />
        </ChapterSection>
        <ChapterSection chapter={chapters[4]}>
          <ChapterExperience />
        </ChapterSection>
        <ChapterSection chapter={chapters[5]}>
          <ChapterAim />
        </ChapterSection>
        <ChapterSection chapter={chapters[6]}>
          <ChapterVision />
        </ChapterSection>
        <ChapterSection chapter={chapters[7]}>
          <ChapterLearning />
        </ChapterSection>
        <ChapterSection chapter={chapters[8]}>
          <ChapterLeadership />
        </ChapterSection>
        <ChapterSection chapter={chapters[9]}>
          <ChapterDevelopment />
        </ChapterSection>
        <ChapterSection chapter={chapters[10]}>
          <ChapterFuture />
        </ChapterSection>
        <ChapterSection chapter={chapters[11]}>
          <ChapterSuccess />
        </ChapterSection>
        <ChapterSection chapter={chapters[12]}>
          <ChapterMission />
        </ChapterSection>
        <Closing />
      </main>
      <Colophon />
    </div>
  );
}
