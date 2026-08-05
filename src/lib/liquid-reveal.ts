/*
 * The liquid spread.
 *
 * A blob grows from the point you clicked until it covers the viewport.
 * It is not a circle: each frame samples N points around the centre and
 * pushes each one in or out by two summed sine waves, then joins them
 * with cubic Beziers. The wave phase advances frame to frame, so the
 * edge rolls as it expands rather than just scaling - that is what reads
 * as liquid rather than as a wipe. The wobble amplitude decays toward 0
 * so it settles into a clean circle instead of ending mid-ripple.
 *
 * WHY EVERY FRAME HAS THE SAME COMMAND COUNT: CSS can only interpolate
 * between two path() values when their command lists match exactly in
 * length and type. Generate them any other way (varying N, mixing arcs)
 * and the browser silently falls back to a discrete jump at the midpoint.
 *
 * WHY THE RADIUS IS PRE-EASED HERE: the frames are handed to WAAPI with
 * easing "linear". A timing function in the options object is applied
 * BETWEEN EACH KEYFRAME PAIR, not once across the whole run, so with 15
 * keyframes an ease-out would produce fifteen little ease-outs. Baking
 * the ease into the radius keeps the motion a single decelerating spread.
 */

const SAMPLES = 14;

function blobPath(cx: number, cy: number, r: number, phase: number, amp: number) {
  const pts: [number, number][] = [];
  for (let i = 0; i < SAMPLES; i++) {
    const theta = (i / SAMPLES) * Math.PI * 2;
    const wobble =
      Math.sin(3 * theta + phase) * 0.6 + Math.sin(5 * theta - phase * 1.3) * 0.4;
    const rr = r * (1 + amp * wobble);
    pts.push([cx + rr * Math.cos(theta), cy + rr * Math.sin(theta)]);
  }

  // Closed Catmull-Rom through the samples, expressed as cubic Beziers.
  const f = (n: number) => n.toFixed(1);
  let d = `M ${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < SAMPLES; i++) {
    const p0 = pts[(i - 1 + SAMPLES) % SAMPLES];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % SAMPLES];
    const p3 = pts[(i + 2) % SAMPLES];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${f(c1x)} ${f(c1y)}, ${f(c2x)} ${f(c2y)}, ${f(p2[0])} ${f(p2[1])}`;
  }
  return `${d} Z`;
}

/** Distance from (x, y) to the furthest corner - how big the blob must get. */
export function coverRadius(x: number, y: number, w: number, h: number) {
  return Math.hypot(Math.max(x, w - x), Math.max(y, h - y));
}

export function liquidFrames(x: number, y: number, maxR: number, steps = 15) {
  const frames: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // ease-out-expo
    // Overshoot the cover radius slightly so the wobble never exposes a
    // corner on the final frame.
    const r = maxR * 1.06 * eased;
    const amp = 0.17 * (1 - eased) + 0.012;
    frames.push(`path("${blobPath(x, y, r, t * Math.PI * 1.7, amp)}")`);
  }
  return frames;
}
