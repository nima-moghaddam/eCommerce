import React from "react";

const PriceBadge = ({ children }) => {
  return (
    <span className="scale-75 rounded bg-red-300 p-1 text-center text-sm text-white shadow-md">
      ${children}
    </span>
  );
};

export default PriceBadge;
