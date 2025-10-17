import React, { useState } from "react";
import FilterBar from "../components/FilterBar";
import BarChart from "../components/BarChart";
import Heatmap from "../components/Heatmap";
import { TOP_ARTISTS } from "../data/sampleData";

export default function StreamingAnalytics() {
  const [filters, setFilters] = useState({ platform: "all" });

  function handleFilterChange(ch) {
    setFilters((s) => ({ ...s, ...ch }));
  }

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold">Streaming Analytics</h2>
      <FilterBar onChange={handleFilterChange} />
      <div className="grid md:grid-cols-2 gap-12">
        <BarChart title="Top Artists (by streams)" items={TOP_ARTISTS} />
        <div className="card-glass p-8 dark:border border-white ">
          <h3 className="text-2xl font-semibold mb-3 ">Top Tracks</h3>
          <ul className="space-y-2 text-xl">
            <li>Calm Down — Rema — 120M streams</li>
            <li>Last Last — Burna Boy — 98M streams</li>
            <li>Free Mind — Tems — 82M streams</li>
          </ul>
        </div>
      </div>

      <Heatmap />
    </div>
  );
}
