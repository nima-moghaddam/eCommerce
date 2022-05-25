import React from "react";

const Backdrop = ({ closeModal }) => {
  return (
    <div
      onClick={closeModal}
      className="fixed left-0 z-40 h-screen w-screen bg-slate-800 bg-opacity-50"
    ></div>
  );
};

export default Backdrop;
