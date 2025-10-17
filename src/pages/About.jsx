import React from "react";

export default function About() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto rounded-xl bg-white dark:bg-black dark:border px-6 py-12">
            <h2 className="text-3xl text-center font-bold">About the Project</h2>

            <p className="text-2xl px-6 text-gray-700 dark:text-gray-300">
                The Music Economy Dashboard analyzes streaming and economic data to estimate how Nigeria’s digital music industry contributes to the national economy.
                This prototype was developed as part of the AI & Digital Music Economy Hackathon held in Abuja, 2025.

            </p>

            <div className="card-glass p-6">
                <h3 className="font-semibold text-2xl">Data Sources</h3>
                <ul className="mt-2 text-2xl">
                    <li>Spotify Web API</li>
                    <li>YouTube Data API</li>
                    <li>Boomplay (public charts / scraping)</li>
                    <li>National Bureau of Statistics</li>
                </ul>
            </div>

            <div className="card-glass p-4">
                <h3 className="font-semibold text-2xl">Methodology</h3>
                <p className="text-2xl mt-2">
                    Methodology
                    Our GDP estimates are derived from streaming revenue proxies (average payout per stream), combined with projected earnings from concerts and merchandise sales. All underlying assumptions are clearly documented and accessible within the dashboard for transparency.
                </p>
            </div>

            <div className="card-glass p-4">
                <h3 className="font-semibold text-2xl">Team</h3>
                <p className="text-2xl mt-2">Frontend(Data Visualization), Backend & ML, Data Science and Designer</p>
            </div>
        </div>
    );
}
