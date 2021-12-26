import React, { useState } from "react";
import Doctors from "../admin/component/Doctors";
import AppointmentSidebar from "../component/appointment/AppointmentSidebar";

function Appointment() {
  const [doctors, setDoctors] = useState("yes");
  const [category, setCategory] = useState("yes");
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-32 p-2">
        <div className="text-4xl rounded-lg my-14">Select Department</div>
        <div>
          <form>
            <select className="w-72 h-16 rounded-lg">
              <option>Choose</option>
              <option>Cardio</option>
              <option>SADIO</option>
              <option>CRIO</option>
            </select>
          </form>
        </div>
      </div>

      <div className="container mx-auto p-2 mt-32">
        {doctors ? (
          <div>
            <div class="flex font-serif w-40 bg shadow-lg">
              <div class="flex-none w-52 relative">
                <img
                  src="https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q="
                  alt=""
                  class="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <form class="flex-auto p-6">
                <div class="flex flex-wrap items-baseline">
                  <h1 class="w-full flex-none mb-3 text-2xl leading-none text-gray-900">
                    Gwen Stacy
                  </h1>
                  <div class="flex-auto text-lg font-medium text-gray-500">
                    Cardiologist
                  </div>
                  <div class="flex-auto text-lg font-medium text-gray-500">
                    MMBS FCPS MS
                  </div>
                </div>
                <div class="flex-auto text-lg font-medium text-gray-700 mt-5">
                  Time: 11:20 - 12:20
                </div>
                <div class="flex-auto text-lg font-medium text-gray-700 mt-3">
                  Contact: 999988899
                </div>
                <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200"></div>
                <div class="flex space-x-4 mb-5 text-sm font-medium">
                  <div class="flex-auto flex space-x-4 pr-4">
                    <button
                      class="flex-none w-36 h-12 uppercase font-medium tracking-wider bg-gray-900 text-white"
                      type="submit"
                    >
                      Book Now
                    </button>
                    <button
                      class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-gray-200 text-gray-900"
                      type="button"
                    >
                      Information
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="text-4xl text-center my-24">
            Please pick the department you wish to consult
          </div>
        )}
      </div>
    </>
  );
}

export default Appointment;
