import React from "react";

const CreditCard = (props) => {
  return (
    <div className=" bg-black w-[40px] flex items-center justify-center h-[25px] text-whit">
      <div className="text-[20px] text-white">{props.icon}</div>
    </div>
  );
};

export default CreditCard;
