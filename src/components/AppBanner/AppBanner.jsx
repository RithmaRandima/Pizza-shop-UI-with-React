import React from "react";
import background from "../../assets/app-banner-bg.jpg";
import DownloadButton from "./DownloadButton/DownloadButton";
import { FaGooglePlay } from "react-icons/fa";
import { PiAppleLogoFill } from "react-icons/pi";

const bannerStyle = {
  backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4)), url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const AppBanner = () => {
  return (
    <div className="relative mx-auto w-[90%] h-[370px] " style={bannerStyle}>
      <div className=" absolute text-center right-[30px] top-[50%] translate-y-[-50%] w-[500px]">
        <h1 className="font-bold text-[33px]">Download the app</h1>
        <p className="my-[15px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
          ducimus corrupti pariatur fugit tempora ea aliquid quasi cupiditate in
          veritatis?
        </p>
        <div className="flex gap-[25px] mx-auto w-fit">
          <DownloadButton
            title="Google Play"
            subTitle="Get it on"
            icon={<FaGooglePlay />}
          />
          <DownloadButton
            title="App Store"
            subTitle="Download on the"
            icon={<PiAppleLogoFill />}
          />
        </div>
      </div>
      AppBanner
    </div>
  );
};

export default AppBanner;
