import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Services } from "./pages/services";
import { Franchise } from "./pages/franchise";
import { WhereAreWe } from "./pages/wherearewe";
import { Layout } from "./layout";
import { ViaVistorias } from "./pages/via-vistorias";
import { WorkWithUs } from "./pages/work-with-us";
import { franchisesPages } from "./constants/franchisesPages";

export const AppRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" Component={Home} />
          <Route path="/services/:id" Component={Services} />
          <Route path="/franchise" Component={Franchise} />
          <Route path="/where-are-we" Component={WhereAreWe} />
          <Route path="/work-with-us" Component={WorkWithUs} />
        </Route>
        {franchisesPages.map(({ route, ...rest }) => (
          <Route
            key={route}
            path={route}
            element={<ViaVistorias route={route} {...rest} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
