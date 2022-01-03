import React from "react";
import Slider from "react-slick";
import doc from "../images/doctors/doc.jpg";
import doc2 from "../images/doctors/doc2.jpg";
import doc3 from "../images/doctors/doc3.jpg";
import doc4 from "../images/doctors/doc4.jpg";
function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const doctors = [
    {
      name: "Dr. Zampa",
      sub: "Oncologist",
      image: doc,
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, praesentium?",
    },
    {
      name: "Dr. Maker",
      sub: "Neurologist",
      image: doc2,
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, praesentium?",
    },
    {
      name: "Dr. Parker",
      sub: "Endocrinologist",
      image: doc3,
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, praesentium?",
    },
    {
      name: "Dr. Scott",
      sub: "Cardiologist",
      image: doc4,
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, praesentium?",
    },
  ];
  return (
    <>
      <div className="px-8 department my-24">
        <div className="text-4xl font-bold text-menu">Our Team</div>
        <div className="border-b-8 border-green-800 w-24 opacity-50 my-6" />
        <div>
          <p className="text-xl text">Recognized World Class Doctors</p>
        </div>
      </div>
      <div>
        <div className="custom_container">
          {" "}
          <Slider {...settings}>
            {doctors.map((i, index) => (
              <div key={index}>
                <div className="px-1 lg:px-10 md:mx-20 w-full">
                  <img
                    alt={i.name}
                    src={i.image}
                    className="h-full w-full lg:w-full lg:h-60"
                  />
                  <h2 className="font-bold text-md text-center">{i.name}</h2>
                  <div className="text-md text text-center">({i.sub})</div>
                  <div className="text-base text-center">{i.para}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Team;
