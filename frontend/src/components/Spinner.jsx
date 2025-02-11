import React from "react";

export default function Spinner() {
  return (
    <div className="flex justify-center item-center">
      <div className="animate-ping w-16 h-16 rounded-full bg-sky-600"></div>
    </div>
  );
}
