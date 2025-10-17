import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { PLATFORM_SHARE } from "../data/sampleData";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    labels: PLATFORM_SHARE.labels,
    datasets: [
      {
        data: PLATFORM_SHARE.data,
        backgroundColor: [
          "#06b6d4", 
          "#f97316", 
          "#6366f1", 
          "#10b981", 
        ],
        hoverOffset: 6,
      },
    ],
  };

  return (
    <div className="card-glass p-8">
      <h3 className="text-xl font-semibold mb-6">Platform share</h3>
      <Pie data={data} />
    </div>
  );
}
