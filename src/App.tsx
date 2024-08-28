import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <div className="w-full h-full flex flex-col items-center text-zinc-700 font-nunito scroll-smooth bg-gradient-to-r from-white to-zinc-100">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}
