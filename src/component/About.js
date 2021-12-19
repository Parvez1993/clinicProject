import React from "react";
import IconsAbout from "./Icons_About";

function About() {
  return (
    <>
      <div class="container mx-auto px-8 m:w-1/2 lg:w-3/4" id="about">
        <div className="about_info my-24">
          <div className="text-4xl font-bold text-menu">About the Med</div>
          <div className="border-b-8 border-green-800 w-24 opacity-50 my-6" />
          <div>
            <p className="text-xl text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, iste. Repellendus quisquam minima maxime odit numquam
              reprehenderit. Iure adipisci, eius, delectus deleniti totam
              placeat alias ut repudiandae modi illum iusto.
            </p>
          </div>
        </div>
        <div className="about_icons">
          <IconsAbout />
        </div>
      </div>
    </>
  );
}

export default About;
