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
        </div>
      </div>
      <div>
        <img src={doctor} alt="doctor" />
      </div>
    </div>
  );
}

export default Appointment;
