import { PortalHero } from "@/components/proto/PortalHero";
import { AfterStage } from "@/components/proto/AfterStage";

export const metadata = { title: "Concept A - Portal" };

export default function Page() {
  return (
    <>
      <PortalHero />
      <AfterStage
        eyebrow="What happens next"
        title="You land in the work, not on another headline."
        body="The zoom hands you straight to the five most recent events. From here the page continues as normal - pillars, proof, enquiry - with the colour arc carrying on from wherever the portal left it."
      />
    </>
  );
}
