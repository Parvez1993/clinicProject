import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../contextApi/userContext";
function DoctorProfile() {
  const { user } = useUserContext();

  const [doctors, setDoctors] = useState("");
  const [error, setError] = useState("");

  const [phone, setPhone] = useState("");
  const [start_time, setStartTime] = useState("");
  const [end_time, setEndTime] = useState("");
  const [duration, setDuration] = useState("");

  console.log("aaaa", user);
  React.useEffect(() => {
    const docId = Object.values(user)[0];
    if (docId) {
      const getDoctors = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:4000/api/doctor/${docId}`
          );

          setDoctors(data);
          setPhone(data.phone);
          setDuration(data.duration);
          setStartTime(data.start_time);
          setEndTime(data.end_time);
        } catch (error) {
          console.log(error);
        }
      };
      getDoctors();
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(phone, start_time, end_time, duration);
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // const requestOptions = {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: myHeaders,
    // };

    // try {
    //   const token = Object.values(user)[0];
    //   const myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");
    //   myHeaders.append("Authorization", "Token" + token);
    //   const requestOptions = {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: myHeaders,
    //   };
    //   await fetch("http://localhost:4000/api/doctor", requestOptions)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //     });
    // } catch (error) {
    //   console.log("error");
    // }
  };

  return (
    <>
      {user ? (
        <section class="text-gray-600 body-font">
          {/* /////////error */}

          <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class=" md:pr-16 " style={{ width: "50%" }}>
              <h1 class="title-font font-medium text-3xl text-gray-900">
                Doctor Information
              </h1>
              <p class="leading-relaxed mt-4">
                <div class="flex justify-center">
                  <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                    <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                      An item
                    </li>
                    <li class="px-6 py-2 border-b border-gray-200 w-full">
                      A second item
                    </li>
                    <li class="px-6 py-2 border-b border-gray-200 w-full">
                      A third item
                    </li>
                    <li class="px-6 py-2 border-b border-gray-200 w-full">
                      A fourth item
                    </li>
                    <li class="px-6 py-2 w-full rounded-b-lg">
                      And a fifth one
                    </li>
                  </ul>
                </div>
              </p>
            </div>
            <div
              class=" bg-gray-100 rounded-lg p-8 flex flex-col  mt-10 md:mt-0"
              style={{ width: "50%" }}
            >
              <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                Edit Information
              </h2>
              <form>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Phone
                  </label>
                  <input
                    placeholder={doctors.phone}
                    value={phone}
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                {/* //start time */}
                <div className="my-2">
                  <div>
                    <label className="mx-2">Start Time</label>
                  </div>
                  <input
                    value={start_time}
                    placeholder={doctors.start_time}
                    defaultValues={doctors.start_time}
                    type="time"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    style={{ width: "100%" }}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>
                {/* //end-time */}
                <div className="my-2">
                  <label className="mx-2">End Time</label>
                  <input
                    value={end_time}
                    placeholder={doctors.end_time}
                    defaultValues={doctors.end_time}
                    type="time"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    style={{ width: "100%" }}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>

                {/* //duration */}
                <div className="my-2">
                  <label className="mx-2">Doctor Duration</label>
                  <input
                    value={duration}
                    placeholder={doctors.duration}
                    defaultValues={doctors.duration}
                    type="number"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    style={{ width: "100%" }}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
                <button
                  class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      ) : (
        "Loading"
      )}
    </>
  );
}

export default DoctorProfile;
