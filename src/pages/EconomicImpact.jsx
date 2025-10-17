import React from "react";
import KPISection from "../components/KPISection";
import LineChart from "../components/LineChart";

export default function EconomicImpact() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold">Economic Impact</h2>

      <KPISection />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-glass p-8">
          <h3 className="text-2xl font-semibold mb-6">GDP Contribution Over Time</h3>
          <LineChart />
        </div>

        <div className="card-glass p-8">
          <h3 className="text-2xl font-semibold mb-6">Employment Estimates</h3>
          <p className="text-xl">
            Estimated jobs supported by the music industry (formal + informal).
          </p>
          <div className="mt-4">
            <div className="text-5xl font-bold">52,000</div>
            <div className="text-xl opacity-80">Jobs (estimated)</div>
          </div>
        </div>
      </div>

      <div className="card-glass py-8 px-12">
        <h3 className="text-2xl font-semibold mb-4">Forecast (3 years)</h3>
        <p className="text-xl">Predicted growth in streaming revenue and export value (sample).</p>
        {/* placeholder chart */}
        <div className="mt-4">
          <LineChart />
        </div>
      </div>
    </div>
  );
}
