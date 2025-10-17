import React from "react";


export default function Heatmap() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = ["0-3", "4-7", "8-11", "12-15", "16-19", "20-23"];

  const rnd = () => Math.floor(Math.random() * 100);

  return (
    <div className="card-glass p-8 dark:border border-white">
      <h3 className="text-2xl font-semibold mb-3">Listening heatmap</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-lg">
          <thead>
            <tr>
              <th className="text-left pb-2">Day / Hour</th>
              {hours.map((h) => (
                <th key={h} className="pb-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((d) => (
              <tr key={d}>
                <td className="py-2">{d}</td>
                {hours.map((h, i) => {
                  const v = rnd();
                  const bg = v > 70 ? "bg-red-400" : v > 40 ? "bg-yellow-300" : "bg-green-200";
                  return (
                    <td key={h + i} className="p-1">
                      <div className={`${bg} w-full h-6 rounded`} title={`${v}%`}>
                        <span className="sr-only">{v}%</span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
