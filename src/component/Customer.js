import React, { useRef } from "react";
import Slider from "react-slick";

function Customer() {
  const user = [
    {
      image: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
      quote:
        "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
      name: "Jane Doe",
      position: "Actress",
    },
    {
      image: "https://randomuser.me/api/portraits/thumb/women/85.jpg",
      quote:
        "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
      name: "Kitty Doe",
      position: "Lawyer",
    },
    {
      image: "https://randomuser.me/api/portraits/thumb/women/95.jpg",
      quote:
        "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
      name: "Lazy Doe",
      position: "Ceo of Pipe Pipers",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slider = useRef();

  const previous = () => {
    slider.current.slickPrev();
  };

  const next = () => {
    slider.current.slickNext();
  };

  return (
    <>
      <div className="my-16">
        <div className="">
          <div className="text-center my-6 text-2xl">What Customer Says</div>
        </div>
        <Slider ref={(c) => (slider.current = c)} {...settings}>
          {user.map((i, index) => (
            <div key={index}>
              <div className="flex w-1/2 mx-auto">
                <div className="px-1 lg:px-10 md:mx-20 w-full flex flex-col justify-center items-center gap-y-3">
                  <div className="flex justify-between w-44">
                    <div
                      className="text-3xl cursor-pointer text-green-800"
                      onClick={previous}
                    >
                      &#8592;
                    </div>
                    <div>
                      <img
                        alt={i.name}
                        src={i.image}
                        className="h-10 w-10 rounded-lg"
                      />
                    </div>
                    <div
                      className="text-3xl cursor-pointer text-green-800"
                      onClick={next}
                    >
                      &#8594;
                    </div>
                  </div>
                  <div>
                    <h2 className="font-bold text-xl text-center">{i.name}</h2>
                  </div>
                  <div className="text-md text text-center">({i.quote})</div>
                  <div className="text-sm text-center font-bold">
                    {i.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Customer;
