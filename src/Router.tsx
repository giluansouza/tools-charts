import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import OrgChart from "./pages/OrgChart";
import LinkAnalysis from "./pages/LinkAnalysis";
import DensityKernel from "./pages/DensityKernel";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/densidade-kernel" element={<DensityKernel />} />
        <Route path="/org-chart" element={<OrgChart />} />
        <Route path="/link-analysis" element={<LinkAnalysis />} />
      </Route>
    </Routes>
  )
}