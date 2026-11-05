"use client";

import { useState } from "react";
import PageShell from "../components/PageShell";

const DEADLINE_LABEL = "October 26, 2026 at 12:00 PM EDT";

// Cards either expand in place (`body`) or send you somewhere (`href`).
const SECTIONS = [
  {
    title: "Certificate 101",
    blurb: "Start here if you're not sure what this program is.",
    cards: [
      {
        name: "What the certificate is",
        summary: "What you get, who it's for, and how it relates to the Congressional App Challenge.",
        minutes: 2,
        body: [
          "The Congressional App Challenge is run by the U.S. House of Representatives. Every congressional district picks its own winners, so you're judged against students in your district rather than the whole country.",
          "The Hack Club certificate is separate and additional. You submit the project you already built for the CAC, we check it over, and if it qualifies you get certified by Hack Club and an invitation to Capitol, our hackathon in Washington D.C.",
          "You do not have to win your district to get certified. Submitting to the CAC and open sourcing your work is what matters.",
        ],
      },
      {
        name: "Software projects",
        summary: "Apps, websites, games, and anything else you can run or install.",
        minutes: 2,
        body: [
          "A software project is anything that runs as a program: a web app, a mobile app, a desktop tool, a game, a CLI, a bot, or a library.",
          "You'll need a public GitHub repository, plus a link where a reviewer can actually try it: a deployed site, a TestFlight or Play Store link, an itch.io page, or a hosted demo.",
          "If it can't be hosted, a short screen recording linked from your README counts as the demo.",
        ],
      },
      {
        name: "Hardware projects",
        summary: "Physical builds that run code: microcontrollers, robots, sensor rigs.",
        minutes: 2,
        body: [
          "A hardware project is a physical device that runs code: an Arduino or Raspberry Pi build, a robot, a wearable, a sensor rig, or an embedded system.",
          "The repository still matters, so push your firmware, sketches, schematics, and any CAD or wiring diagrams.",
          "For the demo link, hardware usually can't be hosted, so use a video. A single unbroken clip of the thing working, narrated, is far more convincing than a photo gallery.",
        ],
      },
    ],
  },
  {
    title: "Building",
    blurb: "The habits that make a project easy to certify.",
    cards: [
      {
        name: "Writing a README that does the work for you",
        summary: "The single most useful thing you can do before submitting.",
        minutes: 4,
        body: [
          "A reviewer opens your repository first. If the README doesn't explain what the project is within a few lines, everything after that is harder.",
          "Cover, in order: what it does in one sentence, a screenshot or GIF, how to run it locally, what it's built with, and what you'd do next.",
          "Write the run instructions as if you're on a fresh machine. \"npm install && npm run dev\" is fine. \"Set up the environment\" is not.",
        ],
      },
      {
        name: "Your repository, and why it decides everything",
        summary: "Public, complete, licensed, and documented. This is what gets you certified or sent back.",
        minutes: 5,
        body: [
          "This is the single thing most likely to get a submission sent back. The repository is your submission. A reviewer judges what they can open, read, and run. A link to an empty repo, a private repo, or a single zip commit does not pass.",
          "It must be public. We can't certify what we can't read, and a private link fails review immediately.",
          "It must contain the actual, complete source code: everything needed to build and run the project. Not a subset, not a screenshot of code, not a link to a Google Drive folder. If you built it, it goes in the repo: source files, config, assets, schema, firmware, sketches, wiring diagrams, CAD files.",
          "It needs a README that explains what the project is, shows it (screenshot or GIF), and gives exact steps to run it from scratch. See the README card above.",
          "It needs a LICENSE file. MIT is one click on GitHub. Open sourcing is a requirement of this award, and a repo with no license technically isn't open source at all.",
          "It needs real commit history that shows the work happening over time. One giant \"initial commit\" containing a finished project is the most common thing that makes a submission impossible to verify.",
          "It must not contain secrets: API keys, .env files, database URLs, service account JSON, tokens. Check before you make it public. If a key was ever committed, rotate it, because deleting the file does not remove it from git history.",
          "Rule of thumb: hand the link to someone who has never seen your project. If they can't understand what it is and get it running without asking you a question, it isn't ready.",
        ],
      },
      {
        name: "Commits that show your work",
        summary: "Why a long commit history helps you more than one big upload.",
        minutes: 2,
        body: [
          "Commit as you go, in small pieces, with messages that say what changed. \"Fix login redirect loop\" tells a story; \"update\" and \"final version 3\" don't.",
          "This matters more than it sounds. Your commit history is the evidence that you built the project yourself, which is the thing a reviewer is actually assessing.",
          "Uploading a finished folder in a single commit is the most common thing that makes a submission hard to verify.",
        ],
      },
      {
        name: "Tracking hours with Hackatime",
        summary: "Optional, but it's what your travel stipend is calculated from.",
        minutes: 3,
        href: "https://hackatime.hackclub.com",
        external: true,
        body: [
          "Hackatime logs your coding time automatically from your editor. Connecting it is optional for certification, but every logged hour adds to your travel stipend for Capitol.",
          "Track under a project name you'll recognise, and mention it when you submit so the hours can be matched to your project.",
        ],
      },
    ],
  },
  {
    title: "Submitting",
    blurb: "What has to be in place, and when.",
    cards: [
      {
        name: "The three requirements",
        summary: "Open source it, enter the Challenge, submit it to Hack Club.",
        minutes: 2,
        href: "/certificate",
        body: [
          "A public GitHub repository containing your complete source, a README, and a LICENSE.",
          "An entry in the Congressional App Challenge, with a playable link to your project in the submission.",
          "The submission form on the certificate page, with your repository link and a demo link starting with https. For software that's somewhere a reviewer can try it; for hardware it's a video of your build actually working.",
        ],
      },
      {
        name: "Deadlines",
        summary: `Submissions close ${DEADLINE_LABEL}.`,
        minutes: 1,
        body: [
          `The Congressional App Challenge submission deadline is ${DEADLINE_LABEL}.`,
          "Don't aim for the last day. If your submission comes back with something missing and an hour left, there's no time to fix it.",
        ],
      },
    ],
  },
  {
    title: "Program",
    blurb: "The certificate, the trip, and where to look next.",
    cards: [
      {
        name: "Capitol, the hackathon",
        summary: "The trip to Washington D.C. and how the travel stipend works.",
        minutes: 3,
        body: [
          "Getting certified comes with an invitation to Capitol, a free 36-hour hackathon in Washington D.C. on October 9th to 11th. Food, merch, and travel stipends are covered.",
          "If you're under 18 you'll need a parent or guardian involved in the travel arrangements. The parents' guide covers what they should know.",
        ],
      },
      {
        name: "Browse certified projects",
        summary: "See what other students submitted and got certified.",
        minutes: 1,
        href: "/gallery",
      },
      {
        name: "Official Congressional App Challenge site",
        summary: "Rules, eligibility, and your district's own deadline and judges.",
        minutes: 1,
        href: "https://www.congressionalappchallenge.us/",
        external: true,
      },
      {
        name: "Hack Club Jams",
        summary: "Guided tutorials if you're looking for something to build.",
        minutes: 1,
        href: "https://jams.hackclub.com/",
        external: true,
      },
    ],
  },
];

function ResourceCard({ card }) {
  const [open, setOpen] = useState(false);
  const hasBody = Array.isArray(card.body) && card.body.length > 0;

  const meta = <span className="shrink-0 text-sm text-ink-soft">{card.minutes} min</span>;

  // Link-only cards are anchors; anything with body copy expands in place.
  if (card.href && !hasBody) {
    return (
      <a
        href={card.href}
        {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="box group flex items-start justify-between gap-4 no-underline transition-colors hover:bg-ink/[0.04]"
      >
        <span className="min-w-0">
          <span className="box__title block">
            {card.name}
            <img
              src="/collage/arrow-right.svg"
              alt=""
              aria-hidden="true"
              className="ml-2 inline-block h-3 w-3 align-middle transition-transform group-hover:translate-x-1"
              style={{ filter: "invert(1) brightness(0.2)" }}
            />
          </span>
          <span className="mt-1 block text-base text-ink-soft">{card.summary}</span>
        </span>
        {meta}
      </a>
    );
  }

  return (
    <div className="box">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <span className="min-w-0">
          <span className="box__title block">{card.name}</span>
          <span className="mt-1 block text-base text-ink-soft">{card.summary}</span>
        </span>
        <span className="flex shrink-0 items-center gap-3">
          {meta}
          <span
            aria-hidden="true"
            className={`inline-block text-ink-soft transition-transform ${open ? "rotate-45" : ""}`}
          >
            +
          </span>
        </span>
      </button>

      {open && (
        <div className="box__body">
          {card.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {card.href && (
            <p>
              <a
                href={card.href}
                {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="link font-bold"
              >
                Open {card.external ? "site" : "page"}
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <PageShell narrow>
      <h1 className="t-heading page-paper__title">Everything you need to get certified</h1>
      <div className="t-lead page-intro">
        <p>
          Short guides on building your project, writing it up, and getting it through review.
          Submissions close <strong>{DEADLINE_LABEL}</strong>.
        </p>
      </div>

      {/* The repo is the single biggest reason submissions get sent back,
          so it gets stated once, loudly, before any of the cards. */}
      <section className="box page-section">
        <h2 className="box__title">
          A good GitHub repository is required, and it has to contain everything
        </h2>
        <div className="box__body">
          <p>
            Your repository is your submission. A reviewer certifies what they can open, read, and
            run. Empty repos, private repos, and single-commit code dumps get sent back.
          </p>
          <ul>
            {[
              "Public, not private, not a zip",
              "The complete source, not a subset",
              "README: what it is, a screenshot, how to run it",
              "A LICENSE file (MIT is one click)",
              "Real commit history, not one big upload",
              "No API keys, .env files, or tokens",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            <strong>
              Test it: hand the link to someone who has never seen your project. If they can&apos;t
              understand it and get it running without asking you anything, it isn&apos;t ready.
            </strong>
          </p>
        </div>
      </section>

      {SECTIONS.map((section) => (
        <section key={section.title} className="page-section">
          <h2 className="t-heading">{section.title}</h2>
          <p className="t-body">{section.blurb}</p>
          <div className="mt-4">
            {section.cards.map((card) => (
              <ResourceCard key={card.name} card={card} />
            ))}
          </div>
        </section>
      ))}

      <section className="page-section">
        <h2 className="t-heading">Still stuck?</h2>
        <p className="t-body">
          The Hack Club Slack is the fastest way to get an answer from someone who has already
          shipped a project.
        </p>
        <div className="btn-row">
          <a href="https://hackclub.com/slack" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            Join the Slack
          </a>
          <a href="/faq" className="btn btn--ghost">
            Read the FAQ
          </a>
        </div>
      </section>
    </PageShell>
  );
}
