import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { STREAMS_TIMESERIES } from "../data/sampleData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function LineChart() {
  const data = {
    labels: STREAMS_TIMESERIES.labels,
    datasets: [
      {
        label: "Streams (Millions)",
        data: STREAMS_TIMESERIES.datasets[0].data,
        borderColor: "rgba(14,165,233,1)",
        backgroundColor: "rgba(14,165,233,0.15)",
        tension: 0.35,
        fill: true,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="card-glass p-8">
      <h3 className="text-xl font-semibold mb-6">Streaming trend</h3>
      <Line data={data} options={options} />
    </div>
  );
}
