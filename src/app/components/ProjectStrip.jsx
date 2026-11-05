"use client";

import { useEffect, useRef, useState } from "react";
import projects from "../gallery/projects.json";
import ProjectCard from "./ProjectCard";

// How many real projects the strip shows.
const COUNT = 14;

// The comp starts the row with its first card cut off at the left edge
// (x = -92 on the 1728 frame); scrolling the row there on mount reproduces it.
const INITIAL_OFFSET = 92;

// The row drifts left at this many px per second, easing to a stop and back up
// to speed over roughly EASE_MS. After a hand scroll it waits RESUME_MS before
// drifting again.
const SPEED = 36;
const EASE_MS = 350;
const RESUME_MS = 2500;

const featured = projects
  .filter((project) => project.imageSrc && !project.imageSrc.includes("placeholder"))
  .slice(0, COUNT);

export default function ProjectStrip() {
  const ref = useRef(null);
  // Autoscroll needs a second copy of the cards to loop into; it's only added
  // once we know the visitor hasn't asked for reduced motion.
  const [looping, setLooping] = useState(false);

  useEffect(() => {
    const strip = ref.current;
    if (strip && strip.scrollLeft === 0) strip.scrollLeft = INITIAL_OFFSET;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setLooping(true);
  }, []);

  useEffect(() => {
    const strip = ref.current;
    if (!looping || !strip) return;

    // Snapping (off now) may have pulled the first card back into view on mount.
    if (strip.scrollLeft < INITIAL_OFFSET) strip.scrollLeft = INITIAL_OFFSET;

    // One lap is the distance from the first card to its copy; wrapping back by
    // exactly that is invisible.
    const first = strip.querySelector(".project-card");
    const copy = strip.querySelector(".strip__copy > .project-card");
    let lap = copy.offsetLeft - first.offsetLeft;
    const measure = () => {
      lap = copy.offsetLeft - first.offsetLeft;
    };

    // Anything holding the row still: a mouse over it, keyboard focus in it, a
    // finger on it.
    const holds = new Set();
    let pos = strip.scrollLeft;
    let speed = 0;
    let resumeAt = 0;
    let last = 0;
    let frame = 0;

    const tick = (now) => {
      const dt = last ? Math.min(now - last, 50) : 0;
      last = now;
      // A hand scroll moved the row: stay where it was left, and wait a moment
      // before drifting again.
      if (Math.abs(strip.scrollLeft - pos) > 1) {
        pos = strip.scrollLeft;
        speed = 0;
        resumeAt = now + RESUME_MS;
      }
      const target = holds.size || now < resumeAt ? 0 : SPEED;
      speed += (target - speed) * (1 - Math.exp(-dt / EASE_MS));
      if (speed > 0.05) {
        pos += (speed * dt) / 1000;
        if (pos >= lap) pos -= lap;
        strip.scrollLeft = pos;
      }
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (frame) return;
      last = 0;
      pos = strip.scrollLeft;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    // Only drift while the row is on screen.
    const observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    observer.observe(strip);

    const onEnter = (e) => e.pointerType === "mouse" && holds.add("hover");
    const onLeave = (e) => e.pointerType === "mouse" && holds.delete("hover");
    const onDown = () => holds.add("press");
    const onUp = () => {
      if (holds.delete("press")) resumeAt = performance.now() + RESUME_MS;
    };
    // Keyboard focus only: a clicked link keeps focus, and shouldn't freeze the
    // row after the mouse has gone.
    const onFocusIn = (e) => e.target.matches(":focus-visible") && holds.add("focus");
    const onFocusOut = (e) => !strip.contains(e.relatedTarget) && holds.delete("focus");

    strip.addEventListener("pointerenter", onEnter);
    strip.addEventListener("pointerleave", onLeave);
    strip.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    strip.addEventListener("focusin", onFocusIn);
    strip.addEventListener("focusout", onFocusOut);
    window.addEventListener("resize", measure);

    return () => {
      stop();
      observer.disconnect();
      strip.removeEventListener("pointerenter", onEnter);
      strip.removeEventListener("pointerleave", onLeave);
      strip.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      strip.removeEventListener("focusin", onFocusIn);
      strip.removeEventListener("focusout", onFocusOut);
      window.removeEventListener("resize", measure);
    };
  }, [looping]);

  return (
    <div
      ref={ref}
      className={`strip${looping ? " strip--auto" : ""}`}
      aria-label="Previously certified projects"
    >
      <div className="strip__track">
        {featured.map((project, index) => (
          <ProjectCard key={project.recordId} project={project} priority={index < 8} />
        ))}
        {looping && (
          <div className="strip__copy" aria-hidden="true" inert>
            {featured.map((project) => (
              <ProjectCard key={project.recordId} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
