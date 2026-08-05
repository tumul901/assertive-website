export interface Stat {
  value: number | null;
  suffix: string;
  label: string;
}

// PLAN.md section 3.7: the live site publishes no numbers anywhere - no
// events delivered, no cities, no years active, no brands served. Do not
// invent any. value stays null until the client supplies real figures;
// Scale.tsx renders an em-dash for every null entry.
export const STATS: Stat[] = [
  { value: null, suffix: "+", label: "Events delivered" },
  { value: null, suffix: "+", label: "Cities" },
  { value: null, suffix: "", label: "Years in business" },
  { value: null, suffix: "+", label: "Brands served" },
];
