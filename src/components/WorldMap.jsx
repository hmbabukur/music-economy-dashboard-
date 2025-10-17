import React from "react";
import nigeriaMap from "../assets/nigeria-map.jpg";


export default function WorldMap() {
  return (
    <div className="card-glass p-8">
      <h3 className="text-xl font-semibold mb-3">Global Reach (sample)</h3>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 flex items-center justify-center">
          <img src={nigeriaMap} alt="Nigeria Map" className="w-full h-auto rounded-lg shadow-lg" />

        </div>

        <div className="flex-1">
          <ul className="space-y-2 text-xl">
            <li>United Kingdom — 2.4M streams</li>
            <li>United States — 1.8M streams</li>
            <li>Nigeria — 8.2M streams</li>
            <li>Netherlands — 400k streams</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
