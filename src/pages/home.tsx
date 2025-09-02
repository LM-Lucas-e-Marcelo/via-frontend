import { Hero } from "../components/hero";
import { PrecautionaryInspection } from "../components/precautionary-inspection";
import { Rating } from "../components/rating";
import { Security } from "../components/secutiry";
import { Services } from "../components/services";
import { WhatsappButton } from "../components/whatsapp-button";
import { WhereAreWe } from "../components/where-are-we";
import { WhoAreWe } from "../components/who-are-we";

export function Home() {
  return (
    <>
      <Hero />
      <PrecautionaryInspection />
      <Services />
      <WhereAreWe />
      <Security />
      <Rating />
      <WhoAreWe />
      <WhatsappButton whatsappNumber={"5548991828855"} />
    </>
  );
}
