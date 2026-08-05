import type { PillarId } from "./pillars";

/*
 * The logo mark, as five independently paintable figures.
 *
 * Geometry is verbatim from the supplied vector artwork
 * (public/Assertive Black.svg) - not traced, not redrawn. Each of the
 * five figures is one body path plus one head ellipse, and each already
 * carried its own fill colour in the source file, which is why the mark
 * can be taken apart at all.
 *
 * ORDER IS GEOMETRIC, NOT ALPHABETICAL. Measured head positions relative
 * to the mark centre (807.1, 800.8) put the five figures at -101.2, -26.1,
 * 45.1, 114.6 and 186.0 degrees - gaps of 75.1, 71.2, 69.5, 71.4 and 72.8
 * degrees. So they are a true five-spoke pinwheel and the array below runs
 * CLOCKWISE FROM 12 O'CLOCK. A reveal that steps -72 degrees per beat
 * therefore brings each successive petal to the top. Re-sorting this array
 * by pillar order would make the wheel jump around instead of turning.
 *
 * The mark centre happens to coincide with the bounding-box centre, so a
 * rotation about the default 50%/50% origin is already the correct axis -
 * verified by measurement, do not add a manual transform-origin.
 */

export interface Petal {
  id: PillarId;
  /**
   * Theme-aware token, NOT a literal. Dark resolves to the authored
   * artwork colour; light resolves to a lightness-corrected version where
   * the authored one cannot reach 3:1 on the bone page. See tokens.css.
   */
  color: string;
  /** The authored artwork value, kept for reference and provenance. */
  authored: string;
  /** Body path data, verbatim from the source SVG. */
  body: string;
  /** Head, verbatim from the source SVG. */
  head: { cx: number; cy: number; rx: number; ry: number; transform: string };
}

/** Source bbox is x -36.5, y -1.4, w 1687.2, h 1604.4 - padded for stroke. */
export const MARK_VIEWBOX = "-56 -21 1727 1645";

export const PETALS: Petal[] = [
  {
    id: "corporate",
    color: "var(--color-petal-corporate)",
    authored: "#159cbc",
    body: "M659.58,394.82s53.93-57.62,196.39-258.33c100.58-145.35,180.91-99.2,180.91-99.2,0,0,76.2,37.81,6.12,193.01-85.52,195.4-252.89,376.57-350.22,409.47-97.33,32.91-176.01-72.94-209.14-118.9-33.13-45.96-93.62-186.44-97.25-311.41-.62-71.27,64.97-56.88,124.89,14.41,48.31,57.47,149.74,175.51,148.29,170.94Z",
    head: {
      cx: 667.46,
      cy: 97.71,
      rx: 80.36,
      ry: 97.72,
      transform: "translate(-1.54 11.17) rotate(-.96)",
    },
  },
  {
    id: "content",
    color: "var(--color-petal-content)",
    authored: "#fcd088",
    body: "M1182.65,558.78s72.95,30.12,311.02,92.58c171.5,42.81,156.66,134.26,156.66,134.26,0,0-8.48,84.64-178.43,73.85-213.01-11.05-441.59-103.71-506.73-183.16-65.14-79.45,6.12-190.43,37.43-237.65,31.31-47.21,141.4-153.4,257.04-200.9,66.47-25.74,76.15,40.71,30.59,121.94-36.72,65.48-111.36,202.05-107.6,199.08Z",
    head: {
      cx: 1463.5,
      cy: 479.93,
      rx: 80.36,
      ry: 97.72,
      transform: "translate(746.8064 1843.1958) rotate(-80.4244)",
    },
  },
  {
    id: "activation",
    color: "var(--color-petal-activation)",
    authored: "#e8262d",
    body: "M1186.12,1086.94s-8.96,78.41-3.71,324.49c5.88,176.66-86.13,187.48-86.13,187.48,0,0-83.72,15.06-119.96-151.32-47.8-207.87-21.4-453.1,37.13-537.54,58.53-84.44,184.81-46.35,238.8-29.19,53.99,17.16,186.3,93.9,263.71,192.07,42.98,56.86-18.26,84.4-108.87,62.87-73.05-17.35-224.85-51.67-220.96-48.86Z",
    head: {
      cx: 1338.99,
      cy: 1335.38,
      rx: 80.36,
      ry: 97.72,
      transform: "translate(-139.39 156.17) rotate(-6.35)",
    },
  },
  {
    id: "live",
    color: "var(--color-petal-live)",
    authored: "#46b052",
    body: "M682.03,1268.19s-77.41,15.38-310.17,95.4c-166.46,59.46-204.82-24.87-204.82-24.87,0,0-39.87-75.14,107.55-160.39,183.4-108.9,425-158.52,523.26-128.52,98.26,30,100.49,161.88,100.61,218.53.12,56.65-32.63,206.06-102.53,309.71-41.04,58.27-85.94,8.34-93.07-84.52-5.74-74.86-19.35-229.89-20.83-225.34Z",
    head: {
      cx: 492.03,
      cy: 1489.52,
      // Note the swapped radii - this one is authored rotated in the source.
      rx: 97.72,
      ry: 80.36,
      transform: "translate(-565.26 330.68) rotate(-24.1)",
    },
  },
  {
    id: "weddings",
    color: "var(--color-petal-weddings)",
    authored: "#834e9b",
    body: "M354.81,843.31s-36.98-69.72-180.54-269.65c-104.81-142.33-35.06-203.32-35.06-203.32,0,0,60.51-59.79,184.54,56.89,157.03,144.34,274.02,361.48,273.53,464.22-.49,102.74-126.15,142.78-180.38,159.19-54.22,16.4-206.74,27.99-326.11-9.16-67.61-22.56-32.7-79.92,54.19-113.44,70.05-27.02,214.63-84.62,209.83-84.74Z",
    head: {
      cx: 88.19,
      cy: 724.96,
      rx: 80.36,
      ry: 97.72,
      transform: "translate(-452.31 233.84) rotate(-40.8)",
    },
  },
];

/** Degrees the wheel turns per beat, so the next petal reaches 12 o'clock. */
export const STEP = 360 / PETALS.length;
