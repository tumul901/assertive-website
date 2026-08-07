import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 requires an explicit allowlist for <Image quality={...}> values
  // (default is [75] only). 82 is used for hero/case-study photography —
  // see PLAN.md §0.2 item 2. Add a value here before using it anywhere.
  images: {
    qualities: [75, 82],
  },
  serverExternalPackages: ["better-sqlite3", "@prisma/adapter-better-sqlite3"],
  output: "standalone",
};

export default nextConfig;
