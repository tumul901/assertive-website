import { RundownHero } from "@/components/proto/RundownHero";
import { AfterStage } from "@/components/proto/AfterStage";

export const metadata = { title: "Concept B - Call Sheet" };

export default function Page() {
  return (
    <>
      <RundownHero />
      <AfterStage
        eyebrow="What happens next"
        title="The rundown ends at 21:00 and the page begins."
        body="Nothing has moved and nothing has been hidden - a buyer skimming on a phone got the whole proposition in the first screen. The five hues have already been introduced as a schedule, so the pillar cards below are reading a language the page has taught them."
      />
    </>
  );
}
