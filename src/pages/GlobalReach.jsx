import React from "react";
import WorldMap from "../components/WorldMap";

export default function GlobalReach() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold">Global Reach</h2>

      <WorldMap />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-glass p-8">
          <h3 className="text-xl font-semibold mb-3">Top Export Countries</h3>
          <ol className="list-decimal list-inside text-xl">
            <li>United Kingdom — 2.4M</li>
            <li>United States — 1.8M</li>
            <li>Canada — 520k</li>
            <li>Nigeria (domestic) — 8.2M</li>
          </ol>
        </div>

        <div className="card-glass p-8">
          <h3 className="text-xl font-semibold mb-3">Regional Breakdown</h3>
          <p className="text-xl">Africa: 65% | North America: 15% | Europe: 12% | Others: 8%</p>
        </div>
      </div>
    </div>
  );
}
