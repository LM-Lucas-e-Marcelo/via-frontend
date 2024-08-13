import { Footer } from "./components/footer";
import { Franchise } from "./components/franchise";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { WhereAreWe } from "./components/where-are-we";
import { WhoAreWe } from "./components/who-are-we";

export function App() {
  return (
    <div className="w-full h-full flex flex-col items-center text-zinc-700 font-nunito scroll-smooth bg-gradient-to-r from-white to-zinc-100">
      <Header />
      <Hero />
      <Services />
      <WhereAreWe />
      <Franchise />
      <WhoAreWe />
      <Footer />
    </div>
  );
}
