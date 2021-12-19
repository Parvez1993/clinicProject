import React from "react";
import Slider from "react-slick";
import cardiology from "../images/department/cardiology.jpg";
import dental from "../images/department/dental.jpg";
import eye from "../images/department/eye.jpg";
import gastro from "../images/department/gastro.jpg";
import plastic from "../images/department/plastic.jpg";
import trauma from "../images/department/trauma.jpg";
function Departments() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const department = [
    {
      name: "Cardiology",
      image: cardiology,
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, praesentium?",
    },
    {
      name: "Dental",
      image: dental,
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, praesentium?",
    },
    {
      name: "Eye",
      image: eye,
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, praesentium?",
    },
    {
      name: "Gastro",
      image: gastro,
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, praesentium?",
    },
    {
      name: "Plastic",
      image: plastic,
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, praesentium?",
    },
    {
      name: "Trauma",
      image: trauma,
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, praesentium?",
    },
  ];
  return (
    <>
      <div className="px-8 department my-24">
        <div className="text-4xl font-bold text-menu">Our Department</div>
        <div className="border-b-8 border-green-800 w-24 opacity-50 my-6" />
        <div>
          <p className="text-xl text">The most advanced labratory</p>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          {department.map((i, index) => (
            <div key={index}>
              <div className="px-1 lg:px-10 md:mx-20 w-full">
                <img
                  alt={i.name}
                  src={i.image}
                  className="h-28 w-auto lg:w-full lg:h-60"
                />
                <h2 className="font-bold text-base">{i.name}</h2>
                <div className="text-xs">{i.para}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Departments;
