// Official dates per congressionalappchallenge.us for the 2026 cycle.
export const CAC_SEASON_START = "2026-05-01T00:00:00-04:00";
export const CAC_SUBMISSION_DEADLINE = "2026-10-26T12:00:00-04:00";

export const CAC_KEY_DATES = [
  { label: "Challenge launches", date: "2026-05-01T00:00:00-04:00" },
  { label: "Registration & submission deadline", date: "2026-10-26T12:00:00-04:00" },
  { label: "Judging period", date: "2026-11-01T00:00:00-04:00" },
  { label: "District winners announced", date: "2026-12-01T00:00:00-05:00" },
];

// The dashboard's countdown dial is scaled to this rather than to the whole
// season. Measured from May the dial sits about a third full while the label
// still reads 59 days, which reads as "nearly out of time" when there are two
// months to go. Scaling to the run-in makes a full dial mean "all of it left"
// and an empty one mean "deadline".
export const CAC_COUNTDOWN_WINDOW_DAYS = 59;

const MS_PER_DAY = 1000 * 60 * 60 * 24;

export function getSeasonProgress(now = new Date()) {
  const start = new Date(CAC_SEASON_START).getTime();
  const end = new Date(CAC_SUBMISSION_DEADLINE).getTime();
  const current = now.getTime();

  const totalMs = end - start;
  const elapsedMs = Math.min(Math.max(current - start, 0), totalMs);
  const percent = totalMs > 0 ? Math.round((elapsedMs / totalMs) * 100) : 100;
  const msLeft = Math.max(end - current, 0);
  const daysLeft = Math.ceil(msLeft / MS_PER_DAY);

  // Share of the run-in still to go, clamped so a longer lead time reads as
  // full rather than overflowing the dial.
  const countdownPercent = Math.max(
    0,
    Math.min(100, Math.round((daysLeft / CAC_COUNTDOWN_WINDOW_DAYS) * 100))
  );

  return { percent, countdownPercent, daysLeft, closed: current >= end };
}
