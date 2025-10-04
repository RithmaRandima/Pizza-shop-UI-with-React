import React from "react";
import { FaGooglePlay } from "react-icons/fa";

const DownloadButton = (props) => {
  return (
    <div className="bg-black w-fit text-white py-1 p-3 rounded-[3px]">
      {/* container */}
      <div className="flex items-center">
        <h1 className="text-[23px]">{props.icon}</h1>

        <div className="ml-2 text-left">
          <p className="font-light uppercase text-[9px]">{props.subTitle}</p>
          <h1 className="text-[15px] font-[600]">{props.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default DownloadButton;
