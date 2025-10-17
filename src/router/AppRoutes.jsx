import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import StreamingAnalytics from "../pages/StreamingAnalytics";
import EconomicImpact from "../pages/EconomicImpact";
import GlobalReach from "../pages/GlobalReach";
import About from "../pages/About";

function AppRoutes() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/streaming-analytics" element={<StreamingAnalytics />} />
        <Route path="/economic-impact" element={<EconomicImpact />} />
        <Route path="/global-reach" element={<GlobalReach />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </DashboardLayout>
  );
}

export default AppRoutes;
