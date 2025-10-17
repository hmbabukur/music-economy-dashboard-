import React from "react";
import KPISection from "../components/KPISection";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold">Nigeria's Music Data Overview</h2>
      <KPISection />
      <div className="grid md:grid-cols-2 gap-6">
        <LineChart />
        <PieChart />
      </div>
    </div>
  );
}

export default Home;
