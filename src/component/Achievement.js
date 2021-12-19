import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const record = [
  {
    no: "125",
    subtitle: "Our Staffs",
    text: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis",
  },
  {
    no: "170",
    subtitle: "Clinic Rooms",
    text: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis",
  },
  {
    no: "750",
    subtitle: "Happy Clients",
    text: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis",
  },
  {
    no: "130",
    subtitle: "Our Machines",
    text: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis",
  },
];

function Achievement() {
  return (
    <div className="bg-menu p-4 md:p-16 mt-24 md:mt:10 lg:mt-36">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row px-4 container mx-auto gap-y-8">
        {record.map((i, k) => {
          const { no, subtitle, text } = i;
          return (
            <>
              <div
                keys={k}
                className="flex flex-col items-center justify-between font-bold text-pink-50 gap-y-3"
              >
                <div className="lg:text-3xl text-2xl">
                  <CountUp start={0} end={no} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start}>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </div>
                <div className="lg:text-xl text-xl  border-b-4 pb-3">
                  {subtitle}
                </div>
                <div className="lg:text-lg text-base text-center md:w-3/4 lg:w-full lg:px-2 sm:px-2">
                  {text}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Achievement;
