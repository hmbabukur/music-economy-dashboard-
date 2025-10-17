import React from "react";

export default function TooltipInfo({ text }) {
  return (
    <div className="text-xs text-gray-500 italic">
      <button title={text} className="underline decoration-dotted">
        ℹ️
      </button>
    </div>
  );
}
