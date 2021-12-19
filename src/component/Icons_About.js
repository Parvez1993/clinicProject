import React from "react";
import about1 from "../images/about1.svg";
import about2 from "../images/about2.svg";
import about3 from "../images/about3.svg";
import about4 from "../images/about4.svg";
import about7 from "../images/about7.svg";
import about5 from "../images/about5.svg";

const about = [
  {
    img: about1,
    heading: "Proffessional Doctors",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit  Quidem quibusdam.",
  },
  {
    img: about2,
    heading: "Quick Ambulance",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit  Quidem quibusdam.",
  },
  {
    img: about3,
    heading: "Emergency Help",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit  Quidem quibusdam.",
  },
  {
    img: about4,
    heading: "You are a Family",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit  Quidem quibusdam.",
  },
  {
    img: about5,
    heading: "Dedicated Patient Care",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit  Quidem quibusdam.",
  },
  {
    img: about7,
    heading: "Exlusive Blood Bank",
    paragraph:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit  Quidem quibusdam.",
  },
];

function Icons_About() {
  return (
    <div className="sm:grid-cols-1 grid md:grid-cols-1 lg:grid-cols-3 grid-flow-row gap-4">
      {" "}
      {about.map((i, k) => {
        const { img, heading, paragraph } = i;
        return (
          <div keys={k} className="main flex items-center gap-4">
            <div className="logo rounded bg-menu p-4">
              <img
                src={img}
                alt="about1"
                width="30"
                style={{ height: "20px" }}
              />
            </div>
            <div className="info">
              <p className="font-bold text-xl">{heading}</p>
              <p>{paragraph}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Icons_About;
