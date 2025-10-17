import React from "react";

export default function FilterBar({ onChange }) {
  function handleChange(e) {
    const { name, value } = e.target;
    onChange && onChange({ [name]: value });
  }

  return (
    <div className="card-glass px-8 py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between dark:border">
      <div className="flex gap-3 items-center">
        <select name="platform" onChange={handleChange} className="px-3 py-4 rounded-md text-xl border dark:text-black focus:outline-none">
          <option value="all">All Platforms</option>
          <option value="spotify">Spotify</option>
          <option value="youtube">YouTube</option>
          <option value="boomplay">Boomplay</option>
        </select>

        <select name="region" onChange={handleChange} className="px-3 py-4 text-xl rounded-md border dark:text-black focus:outline-none">
          <option value="global">Global</option>
          <option value="nigeria">Nigeria</option>
          <option value="africa">Africa</option>
        </select>

        <input
          name="artist"
          onChange={handleChange}
          placeholder="Search artist..."
          className="px-3 py-4 text-lg rounded-md border focus:outline-none"
        />
      </div>

      <div className="flex gap-2 items-center">
        <label className="text-2xl opacity-80">Date</label>
        <input type="date" name="date" onChange={handleChange} className="px-6 py-4 text-lg dark:text-black rounded-md border" />
      </div>
    </div>
  );
}
