export const KPI_MOCK = {
  totalStreams: "2.5B",
  artistsTracked: "1,200+",
  gdpContribution: "₦580M",
  jobsSupported: "52,000",
  exportRevenue: "₦125M",
};

export const STREAMS_TIMESERIES = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "Total Streams (M)",
      data: [300, 380, 420, 510, 610, 720, 860, 930],
    },
  ],
};

export const PLATFORM_SHARE = {
  labels: ["Spotify", "Boomplay", "YouTube", "Audiomack"],
  data: [45, 30, 20, 5],
};

export const TOP_ARTISTS = [
  { name: "Burna Boy", streams: 120_000_000 },
  { name: "Rema", streams: 95_000_000 },
  { name: "Tems", streams: 83_000_000 },
  { name: "Omah Lay", streams: 60_000_000 },
];
