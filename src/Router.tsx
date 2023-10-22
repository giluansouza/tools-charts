import { Route, Routes } from "react-router-dom";
import OrgChart from "./pages/OrgChart";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import LinkAnalysis from "./pages/LinkAnalysis";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/org-chart" element={<OrgChart />} />
        <Route path="/link-analysis" element={<LinkAnalysis />} />
      </Route>
    </Routes>
  )
}