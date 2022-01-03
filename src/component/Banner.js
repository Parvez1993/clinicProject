import React from "react";
import { Link } from "react-router-dom";
import banner from "../images/banner.jpg";
function Banner() {
  return (
    <div className="relative">
      <div
        className="bg-fixed bg-cover bg-no-repeat bg-center max-h-full w-full"
        style={{ backgroundImage: `url('${banner}')`, height: "80vh" }}
      ></div>
      <div className="shadow sm:w-96 md:w-1/2 w-full-lg p-10 lg:p-16  absolute transform top-20 md:left-10 lg lg:top-16 text-pink-50 backdrop-filter backdrop-blur top-50 bg-menu bg-opacity-25">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide">
          A Hospital for Everyone
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl  tracking-wide my-10">
          Get free consultancy now
        </p>
        <div class="rounded-sm text-3xl   text-pink-50 p-2 animate-pulse bg-menu inline cursor-pointer ">
          <Link to="/appointment"> Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
