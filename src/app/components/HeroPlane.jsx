"use client";

import { useEffect, useRef } from "react";

// The flight, in design px on the 1728 frame: a cubic Bézier traced by the
// plane's centre. It starts with the nose poking in at the left edge beside the
// dome, skims over the statue on top, and climbs away to the upper right.
const PATH = [
  [-70, 450],
  [180, 390],
  [600, 210],
  [1250, -20],
];

// The cut-out is an SVG whose 1081x1069 canvas is mostly empty: the aircraft
// sits in this box, in the SVG's own units (measured from the alpha of the
// image it wraps, and matching the drop shadow's filter region). Everything
// below is derived from it, so the plane keeps the size it had as a photo
// however much blank canvas the export carries around it.
const ART = { vw: 1081, vh: 1069, x: 34.611, y: 404.166, w: 1016.306, h: 292.288 };

// The aircraft spans the same 460 design px on the frame that the old 960x239
// cut-out did; the box around it is scaled to suit, and its empty margin —
// which the hero clips — costs nothing.
const PLANE_W = 460;
const K = PLANE_W / ART.w;
const W = ART.vw * K;
const H = ART.vh * K;

// Where the aircraft's own centre falls inside that box. PATH traces the
// centre, so the box hangs off this rather than off half its own size.
const CX = (ART.x + ART.w / 2) * K;
const CY = (ART.y + ART.h / 2) * K;

// The photo already climbs at about 10.5°; the plane is turned by whatever the
// path adds to that, so its nose follows the curve.
const PITCH = 10.5;

// The whole flight happens over this fraction of the hero's height of scroll.
const FLIGHT = 0.42;

// How quickly the plane catches up with the scroll position, in ms. A little
// lag turns wheel notches into a glide.
const EASE_MS = 90;

// Position (design px, relative to the start) and turn (deg) at t in [0, 1].
function pose(t) {
  const u = 1 - t;
  const a = u * u * u;
  const b = 3 * u * u * t;
  const c = 3 * u * t * t;
  const d = t * t * t;
  const x = a * PATH[0][0] + b * PATH[1][0] + c * PATH[2][0] + d * PATH[3][0];
  const y = a * PATH[0][1] + b * PATH[1][1] + c * PATH[2][1] + d * PATH[3][1];
  const dx = 3 * (u * u * (PATH[1][0] - PATH[0][0]) + 2 * u * t * (PATH[2][0] - PATH[1][0]) + t * t * (PATH[3][0] - PATH[2][0]));
  const dy = 3 * (u * u * (PATH[1][1] - PATH[0][1]) + 2 * u * t * (PATH[2][1] - PATH[1][1]) + t * t * (PATH[3][1] - PATH[2][1]));
  const climb = (Math.atan2(-dy, dx) * 180) / Math.PI;
  return { fx: x - PATH[0][0], fy: y - PATH[0][1], fr: PITCH - climb };
}

const START = pose(0);

export default function HeroPlane() {
  const ref = useRef(null);

  useEffect(() => {
    const plane = ref.current;
    const hero = plane?.closest(".hero");
    if (!plane || !hero) return;
    // Parked at the start of its flight, the plane is still part of the collage.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let target = 0;
    let t = 0;
    let frame = 0;
    let last = 0;

    const progress = () =>
      Math.min(Math.max(window.scrollY / (hero.offsetHeight * FLIGHT), 0), 1);

    const place = () => {
      const { fx, fy, fr } = pose(t);
      plane.style.setProperty("--fx", fx);
      plane.style.setProperty("--fy", fy);
      plane.style.setProperty("--fr", fr);
    };

    const tick = (now) => {
      const dt = last ? now - last : 16;
      last = now;
      t += (target - t) * (1 - Math.exp(-dt / EASE_MS));
      if (Math.abs(target - t) < 0.0005) t = target;
      place();
      if (t === target) {
        frame = 0;
        last = 0;
      } else {
        frame = requestAnimationFrame(tick);
      }
    };

    const onScroll = () => {
      target = progress();
      if (!frame) frame = requestAnimationFrame(tick);
    };

    // Arriving mid-page puts the plane where it belongs without a fly-in.
    t = target = progress();
    place();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="hero__piece hero__plane"
      style={{
        "--x": PATH[0][0] - CX,
        "--y": PATH[0][1] - CY,
        "--wd": W,
        "--ht": H,
        "--fx": START.fx,
        "--fy": START.fy,
        "--fr": START.fr,
      }}
      aria-hidden="true"
    >
      <img src="/collage/airplane.svg" alt="" />
    </div>
  );
}
