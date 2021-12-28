import React, { useState } from "react";
import Doctors from "../admin/component/Doctors";
import AppointmentSidebar from "../component/appointment/AppointmentSidebar";

import axios from "axios";
import DoctorInformation from "../component/DoctorInformation";
import { Link } from "react-router-dom";
import BookDoctor from "../component/BookDoctor";
import { useUserContext } from "../contextApi/userContext";
function Appointment() {
  const [doctors, setDoctors] = useState("");
  //from database
  const [specialties, setSpecialties] = React.useState("");
  const [count, setCount] = React.useState(false);

  const { user } = useUserContext();

  React.useEffect(() => {
    const getSpeciality = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/specialties"
        );
        setSpecialties(data);
      } catch (error) {
        console.log(error);
      }
    };

    getSpeciality();
  }, []);

  console.log("ok", specialties);

  const handleSpecialityChange = async (e) => {
    setDoctors("");
    const value = e.target.value;

    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/doctorsp/${value}`
      );
      setDoctors(data);
      setCount(true);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (count === true) {
      setCount(false);
    }
  }, [count]);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-32 p-2">
        <div className="text-4xl rounded-lg my-14">Select Department</div>
        <div>
          <form>
            <select
              className="w-72 h-16 rounded-lg"
              onClick={handleSpecialityChange}
            >
              <option>Choose</option>
              {specialties
                ? specialties.map((i, index) => {
                    return <option value={i._id}>{i.name}</option>;
                  })
                : "Loading"}
            </select>
          </form>
        </div>
      </div>

      <div className="container mx-auto p-2 mt-32">
        {doctors ? (
          doctors.map((doctor) => {
            return (
              <>
                <div className="my-10">
                  <div class="flex font-serif w-40 bg shadow-lg">
                    <div class="flex-none w-52 relative">
                      <img
                        src={
                          doctor.image
                            ? doctor.image
                            : "https://thumbs.dreamstime.com/z/default-placeholder-doctor-half-length-portrait-photo-avatar-gray-color-119556416.jpg"
                        }
                        alt=""
                        class="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <form class="flex-auto p-6">
                      <div class="flex flex-wrap items-baseline">
                        <h1 class="w-full flex-none mb-3 text-2xl leading-none text-gray-900">
                          {doctor.firstname} {doctor.lastname}
                        </h1>
                        <div class="flex-auto text-lg font-medium text-gray-500">
                          {doctor.specialties.name}
                        </div>
                        <div class="flex-auto text-lg font-medium text-gray-500">
                          {doctor.degrees.map((i) => {
                            return <p>{i}</p>;
                          })}
                        </div>
                      </div>
                      <div class="flex-auto text-lg font-medium text-gray-700 mt-5">
                        Time: 11:20 - 12:20
                      </div>
                      <div class="flex-auto text-lg font-medium text-gray-700 mt-3">
                        {doctor.phone}
                      </div>
                      <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200"></div>
                      <div class="flex space-x-4 mb-5 text-sm font-medium">
                        <div class="flex-auto flex space-x-4 pr-4">
                          <BookDoctor id={doctor._id} />

                          <button
                            class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-gray-200 text-gray-900"
                            type="button"
                          >
                            <DoctorInformation id={doctor._id} />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            );
          })
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
