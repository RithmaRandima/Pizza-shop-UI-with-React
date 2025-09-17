import React from "react";
import { motion } from "framer-motion";
import { serviceData } from "../data/ServiceData";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2 ">
        <motion.h1 className="text-3xl font-bold text-gray-200">
          Fresh and <span className="text-orange-400">Tasty </span>Pizza
        </motion.h1>
        <p className="text-sm opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          voluptatibus autem, explicabo accusamus eligendi necessitatibus quo
          expedita veniam iure esse sed cum, ipsa eum corporis velit id modi
          deserunt quasi.
        </p>
      </div>
      {/* card section */}
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {serviceData.map(({ id, title, subtitle, image }) => {
          return (
            <ServiceCard
              key={id}
              title={title}
              subtitle={subtitle}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
