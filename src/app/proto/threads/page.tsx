import { HeroSequence } from "@/components/sections/HeroSequence";
import { AfterStage } from "@/components/proto/AfterStage";

export const metadata = { title: "Concept C - Five Threads" };

export default function Page() {
  return (
    <>
      <HeroSequence />
      <AfterStage
        eyebrow="What happens next"
        title="From here the page runs normally."
        body="The sequence has introduced all five disciplines and their colours, so every section below can use its pillar hue as shorthand and be understood immediately - trust bar, selected work, proof, enquiry."
      />
    </>
  );
}
