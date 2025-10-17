import React, { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [filters, setFilters] = useState({
    platform: "all",
    region: "global",
    dateRange: null,
  });

  return (
    <DataContext.Provider value={{ filters, setFilters }}>
      {children}
    </DataContext.Provider>
  );
}
