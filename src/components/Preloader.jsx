import React from "react";

const Preloader = () => {
  return (
    <div
      className="min-vh-100 w-100 d-flex align-items-center justify-content-center preloader_img position-fixed w-100 top-0 z-3 start-0"
    >
      <div><h1 className="text-white ff-recharge">AI-</h1>
      </div>
    </div>
  );
};

export default Preloader;