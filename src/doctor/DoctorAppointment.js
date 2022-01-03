import axios from "axios";
import React, { useState } from "react";
import { useUserContext } from "../contextApi/userContext";

function DoctorAppointment() {
  const { user } = useUserContext();
  const [patients, setPatients] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [pdf, setPdf] = useState("");
  const [mess, setMess] = useState("");

  React.useEffect(() => {
    const patientId = Object.values(user)[0];
    console.log("bhai bhai", patientId);
    if (patientId) {
      const getDoctors = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:4000/api/doctor/appointments/${patientId}`
          );
          setPatients(data);
        } catch (error) {
          console.log(error);
        }
      };
      getDoctors();
    }
  }, [user]);
  console.log(patients);

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    console.log(id);
    const data = new FormData(e.target);
    data.append("pres", pdf);
    await axios.put(`http://localhost:4000/api/prescription/${id}`, data);
    setPdf("");
    setMess("You have successfully entered prescription");
    setShowModal(false);
  };
  return (
    <div>
      {mess ? mess : ""}
      {patients ? (
        <>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center">
                    <thead class="border-b bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          Time
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4"
                        >
                          View Profile
                        </th>
                      </tr>
                    </thead>
                    {patients.map((user, index) => {
                      return (
                        <>
                          <tbody key={index}>
                            <tr class="bg-white border-b">
                              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {user.firstname} {user.lastname}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {user.date}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {user.time}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {/* <!-- Button trigger modal --> */}
                                <>
                                  <button
                                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(true)}
                                  >
                                    View
                                  </button>

                                  {showModal ? (
                                    <>
                                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                          {/*content*/}
                                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                              <h3 className="text-3xl font-semibold">
                                                Prescription
                                              </h3>
                                              <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() =>
                                                  setShowModal(false)
                                                }
                                              >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                  ×
                                                </span>
                                              </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                <span className="font-bold">
                                                  Patient Details:
                                                </span>{" "}
                                                {user.firstname} |{" "}
                                                {user.lastname} | {user.phone} |{" "}
                                                {user.email}
                                                <form
                                                  className="my-12"
                                                  onSubmit={(e) =>
                                                    handleSubmit(e, user.userid)
                                                  }
                                                >
                                                  <div class="flex justify-center">
                                                    <div class="mb-3 w-96">
                                                      <label
                                                        for="formFile"
                                                        class="form-label inline-block mb-2 text-gray-700"
                                                      >
                                                        Upload Prescription
                                                      </label>
                                                      <input
                                                        class="form-control block
                                                        w-full
                                                        px-3
                                                        py-1.5
                                                        text-base
                                                        font-normal
                                                        text-gray-700
                                                        bg-white bg-clip-padding
                                                        border border-solid border-gray-300
                                                        rounded
                                                        transition
                                                        ease-in-out
                                                        m-0
                                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        type="file"
                                                        onChange={(e) =>
                                                          setPdf(
                                                            e.target.files[0]
                                                          )
                                                        }
                                                        multiple="multiple"
                                                        placeholder="select image"
                                                        name="file"
                                                        required
                                                      />
                                                    </div>
                                                  </div>
                                                  <div class="flex space-x-2 justify-center">
                                                    <button
                                                      type="submit"
                                                      class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                    >
                                                      Submit
                                                    </button>
                                                  </div>
                                                </form>
                                              </p>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                              <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() =>
                                                  setShowModal(false)
                                                }
                                              >
                                                Close
                                              </button>
                                              <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() =>
                                                  setShowModal(false)
                                                }
                                              >
                                                Save Changes
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                  ) : null}
                                </>
                              </td>
                            </tr>
                          </tbody>
                        </>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        "No appointment to show"
      )}
    </div>
  );
}

export default DoctorAppointment;
