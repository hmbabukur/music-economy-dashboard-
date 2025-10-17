import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000",
  timeout: 10000,
});

export default {
  getKPIs: () => client.get("/api/kpis"),
  getStreamingTrends: (params) => client.get("/api/streaming-trends", { params }),
  getPlatformShare: () => client.get("/api/platform-share"),
};
