import React from "react";
import doctor from "../images/doctor.jpg";
function Appointment() {
  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-1 md:grid-rows-2 place-items-center">
      <div>
        <div className="appointment my-10 px-4">
          <div className="text-4xl font-bold text-menu">Our Strength</div>
          <div className="border-b-8 border-green-800 w-24 opacity-50 my-6" />
          <div>
            <p className="text-xl text">
              <div>
                <ul class="list-disc">
                  <li className="mx-5 text-md">Top Quality</li>
                  <li className="mx-5">99.9% Effectiveness</li>
                  <li className="mx-5">Integration</li>
                  <li className="mx-5">Caring for the Community</li>
                  <li className="mx-5"> Research & Training</li>
                </ul>
              </div>
            </p>
          </div>
          {/* <div className="grid grid-cols-2 grid-flow-row gap-2 my-16 ">
            <input
              type="text"
              placeholder="first name"
              name="firstName"
              className="placeholder-green-800 focus:ring-green-800 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="last name"
              name="lastName"
              className="placeholder-green-800 focus:ring-green-800 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="phone"
              name="phone"
              className="placeholder-green-800 focus:ring-green-800 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              className="placeholder-green-800 focus:ring-green-800 focus:border-transparent"
            />
            <input
              type="date"
              placeholder="date"
              name="date"
              className="placeholder-green-800 text-green-800 focus:ring-green-800 focus:border-transparent"
            />
            <input
              type="time"
              placeholder="time"
              name="time"
              className="placeholder-green-800 text-green-800 focus:ring-green-800 focus:border-transparent"
            />
            <textarea
              placeholder="message"
              className="col-span-2 h-24 placeholder-green-800 focus:ring-green-800 focus:border-transparent"
              style={{ resize: "none" }}
            ></textarea>
          </div> */}
        </div>
      </div>
      <div>
        <img src={doctor} alt="doctor" />
      </div>
    </div>
  );
}

export default Appointment;
