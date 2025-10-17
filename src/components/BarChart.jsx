import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function BarChart({ title = "Top artists", items = [] }) {
  const labels = items.map((d) => d.name);
  const values = items.map((d) => Math.round(d.streams / 1_000_000)); 

  const data = {
    labels,
    datasets: [
      {
        label: "Streams (M)",
        data: values,
        backgroundColor: "rgba(99,102,241,0.9)",
      },
    ],
  };

  return (
    <div className="card-glass p-8 dark:border border-white">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <Bar data={data} />
    </div>
  );
}
