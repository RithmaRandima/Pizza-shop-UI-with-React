import React from "react";
import bgImage from "../../assets/bg_slate.jpg";
import pizzaMain from "../../assets/bg_slate.jpg";
import Navbar from "../Navbar/Navbar";

const heroBGStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
};

const Hero = () => {
  return (
    <main style={heroBGStyle}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* navbar section */}
          <Navbar />
          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] ">
            {/* text content section */}
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
              <div className="absolute bg-red-300 -top-20 left-[200px]">
                <h1 className="text-[140px] scale-150 font-bold text-orange-700 leading-none">
                  Black Tumbler
                </h1>
              </div>
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
      </section>
    </main>
  );
};

export default Hero;
