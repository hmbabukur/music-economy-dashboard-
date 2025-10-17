import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <Navbar />
      <main className="flex-grow px-4 md:px-8 py-6">{children}</main>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
