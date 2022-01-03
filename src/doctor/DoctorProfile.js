import axios from "axios";
import React, { useState } from "react";
import doc from "../images/doctors/doc.jpg";
import { useUserContext } from "../contextApi/userContext";
function DoctorProfile() {
  const { user } = useUserContext();

  const [doctors, setDoctors] = useState("");

  const [phone, setPhone] = useState("");
  const [start_time, setStartTime] = useState("");
  const [end_time, setEndTime] = useState("");
  const [duration, setDuration] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [mess, setMess] = React.useState("");
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
    const docId = Object.values(user)[0];

    const data = {
      phone: phone,
      start_time: start_time,
      end_time: end_time,
      duration: duration,
    };

    console.log(data);
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
    };

    try {
      await fetch(
        `http://localhost:4000/api/doctor/update/${docId}`,
        requestOptions
      ).then((response) => response.json());
      setShowModal(false);
      setMess(
        "You have successfully updated wait for the next day for the information to be updated"
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const {
    first_name,
    last_name,
    email,
    specialties,
    degrees,
    description,
    image,
  } = doctors;

  return (
    <>
      {mess ? (
        <div
          class="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full"
          role="alert"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="check-circle"
            class="w-4 h-4 mr-2 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
            ></path>
          </svg>
          {mess}
        </div>
      ) : (
        ""
      )}
      {user && doctors ? (
        <section class="text-gray-600 body-font">
          {/* /////////error */}

          <img src={doc} alt="docImg" />
          <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="md:pr-16">
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  {first_name} {last_name} / {specialties.name}
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  {degrees.map((i) => {
                    return <p>{i}</p>;
                  })}
                </p>
              </div>
            </div>
            <div>
              {" "}
              <p class="text-gray-600 text-lg uppercase">Contact: {phone}</p>
              <p class="text-gray-600 text-lg uppercase">email: {email}</p>
              <p class="text-gray-600 text-lg uppercase">
                Description: {description}
              </p>
              <p class="text-gray-600 text-lg uppercase">
                Time: {doctors.start_time} - {doctors.end_time}
              </p>
              <p class="text-gray-600 text-lg uppercase">
                Duration: {doctors.duration}
              </p>
            </div>
          </div>
          {/* ////////modal */}
        </section>
      ) : (
        "Loading"
      )}
      <button
        className="bg-green-800 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Information</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div
                    class=" bg-gray-100 rounded-lg p-8 flex flex-col  mt-10 md:mt-0"
                    style={{ width: "100%" }}
                  >
                    <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                      Edit Information
                    </h2>
                    <form>
                      <div class="relative mb-4">
                        <label
                          for="email"
                          class="leading-7 text-sm text-gray-600"
                        >
                          Phone
                        </label>
                        <input
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
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default DoctorProfile;
