import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Services } from "./pages/services";
import { Franchise } from "./pages/franchise";
import { WhoAreWe } from "./pages/whoarewe";

export const AppRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/services/:id" Component={Services} />
        <Route path="/franchise" Component={Franchise} />
        <Route path="/where-are-we" Component={WhoAreWe} />
      </Routes>
    </BrowserRouter>
  );
};
