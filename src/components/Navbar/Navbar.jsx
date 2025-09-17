import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="  ">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <h1 className="tezt-2xl font-semibold uppercase">
            COdes <span className="text-orange-300">Coffee</span>
          </h1>
          {/* ham menu section*/}
          <div
            onClick={() => {
              setSidebar(!sidebar);
            }}
          >
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
