import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="container px-6 py-16 mx-auto border-b-2 my-9">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
                Best place to choose <br /> your{" "}
                <span className="text-blue-500 ">Career</span>
              </h1>

              <p className="mt-3 text-gray-600 ">
                Making money fast may seem like an impossible task, but with the
                right approach and commitment you can do it. Here are some ideas
                to help make $1,000 fast.
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Explore Now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://merakiui.com/images/components/Catalogue-pana.svg"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
