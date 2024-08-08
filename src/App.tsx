import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { WhoWeAre } from "./components/who-we-are";

export function App() {
  return (
    <div className="w-full bg-zinc-800 h-full flex flex-col items-center text-zinc-700 font-nunito scroll-smooth">
      <Header />
      <Hero />
      <Services />
      <WhoWeAre />
    </div>
  );
}
