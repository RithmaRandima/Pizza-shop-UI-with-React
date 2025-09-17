import React, { useState } from "react";
import bgImage from "../../assets/bg_slate.jpg";
import pizzaMain from "../../assets/bg_slate.jpg";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const heroBGStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
};

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main style={heroBGStyle}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* navbar section */}
          <Navbar setSidebar={setSidebar} sidebar={sidebar} />
          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] ">
            {/* text content section */}
            <div className="text-orange-600 mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Balack Tumler
              </motion.h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lify Style Lovers</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Natus nesciunt accusamus dolor, delectus consectetur totam
                    dolorem neque explicabo perferendis beatae non ipsum quae
                    assumenda! Quidem, molestiae voluptas! Rem, eligendi eos.
                  </h1>
                </div>

                <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25"></div>
              </div>
            </div>
            {/* hero image section */}
            <div className="reltive ">
              <img
                src={pizzaMain}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* orange circle */}
              {/* <div className="absolute h-[180px] w-[180px]  top-15 right-10 border-pink-200 rounded-full border-[20px]"></div> */}

              {/* bg-text section */}
              {/* <div className="absolute bg-red-300 -top-20 left-[200px]">
                <h1 className="text-[140px] scale-150 font-bold text-orange-700 leading-none">
                  Black Tumbler
                </h1>
              </div> */}
            </div>
            {/* third div section */}
            <div className="text-orange-600 mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14">
                Balack Tumler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lify Style Lovers</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Natus nesciunt accusamus dolor, delectus consectetur totam
                    dolorem neque explicabo perferendis beatae non ipsum quae
                    assumenda! Quidem, molestiae voluptas! Rem, eligendi eos.
                  </h1>
                </div>

                <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25"></div>
              </div>
            </div>
          </div>
        </div>

        {/* sidebar section */}
        {sidebar && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-blue-400/80 to-blue-800/80 backdrop-blur-sm z-10"
          >
            <div className="w-full h-full flex-col flex justify-center items-center gap-6 text-white">
              {/* line */}
              <div className="w-[1px] h-[70px] bg-white"></div>
              {/* social */}
              <div className="inline-block p-2 rounded-full cursor-pointer border-white border-2">
                <FaFacebook className="text-2xl" />
              </div>
              <div className="inline-block p-2 rounded-full cursor-pointer border-white border-2">
                <FaTwitter className="text-2xl" />
              </div>
              <div className="inline-block p-2 rounded-full cursor-pointer border-white border-2">
                <FaInstagram className="text-2xl" />
              </div>
              {/* line */}
              <div className="w-[1px] h-[70px] bg-white"></div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
