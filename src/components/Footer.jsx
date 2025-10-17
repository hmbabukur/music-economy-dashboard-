import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-8 text-2xl text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Music Economy Dashboard. Built with by MeerTech Team.
    </footer>
  );
}

export default Footer;
