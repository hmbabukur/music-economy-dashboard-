import React from "react";
import { KPI_MOCK } from "../data/sampleData";

function KPICard({ title, value, subtitle, colorClass }) {
  return (
    <div className={`p-5 rounded-2xl shadow-md ${colorClass} text-white`}>
      <div className="text-sm uppercase opacity-90">{title}</div>
      <div className="mt-2 text-2xl md:text-5xl font-extrabold kpi-value">{value}</div>
      {subtitle && <div className="mt-1 text-lg opacity-90">{subtitle}</div>}
    </div>
  );
}

export default function KPISection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <KPICard
        title="Total Streams"
        value={KPI_MOCK.totalStreams}
        subtitle="All platforms"
        colorClass="bg-gradient-to-tr from-cyan-500 to-blue-600"
      />
      <KPICard
        title="Artists Tracked"
        value={KPI_MOCK.artistsTracked}
        subtitle="Active artists"
        colorClass="bg-gradient-to-tr from-emerald-500 to-green-600"
      />
      <KPICard
        title="GDP Contribution"
        value={KPI_MOCK.gdpContribution}
        subtitle="Estimated"
        colorClass="bg-gradient-to-tr from-purple-500 to-pink-600"
      />
      <KPICard
        title="Jobs Supported"
        value={KPI_MOCK.jobsSupported}
        subtitle="Formal & informal"
        colorClass="bg-gradient-to-tr from-yellow-500 to-orange-600"
      />
    </div>
  );
}
