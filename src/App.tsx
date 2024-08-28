import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { AppRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <div className="w-full h-full flex flex-col items-center text-zinc-700 font-nunito scroll-smooth bg-gradient-to-r from-white to-zinc-100">
      <Header />
      <ToastContainer />
      <AppRoutes />
      <Footer />
    </div>
  );
}
