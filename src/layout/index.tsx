import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Layout = () => {
  return (
    <div className="w-full h-full flex flex-col items-center text-zinc-700 font-nunito scroll-smooth bg-gradient-to-r from-white to-zinc-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
