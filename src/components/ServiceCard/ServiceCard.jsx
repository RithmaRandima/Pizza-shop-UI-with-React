import React from "react";

const ServiceCard = ({ title, subtitle, image }) => {
  return (
    <div className="text-center p-4 space-y-7">
      <img
        src={image}
        alt=""
        className=".img-shadow max-w-[200px] mx-auto hover:scale-105 duration-300"
      />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-orange-400">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
