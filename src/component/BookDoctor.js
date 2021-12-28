import moment from "moment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useUserContext } from "../contextApi/userContext";

function BookDoctor(props) {
  const { id } = props;
  const [showModal, setShowModal] = React.useState(false);
  const [doctors, setDoctors] = React.useState("");
  const [userdetails, setUserDetails] = React.useState("");
  //hooks form
  const [firstname, setfirstname] = useState(null);
  const [lastname, setlastname] = useState(null);
  const [phone, setphone] = useState(null);
  const [email, setEmail] = useState(null);
  const { user } = useUserContext();

  React.useEffect(() => {
    if (user) {
      const id = Object.values(user)[0];
      axios.get(`http://localhost:4000/api/patient/${id}`).then((res) => {
        setUserDetails(res.data);
        setfirstname(res.data.first_name);
        setlastname(res.data.last_name);
        setphone(res.data.phone);
        setEmail(res.data.email);
      });
    }
  }, [user]);

  console.log(userdetails);

  React.useEffect(() => {
    const getDoctors = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/doctor/${id}`
        );
        setDoctors(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDoctors();
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  return (
    <>
      <button
        className="flex-none w-36 h-12 uppercase font-medium tracking-wider bg-pink-900 text-white"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Book Now
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold"> Appointment Form</h3>
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
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <div className="px-8 department my-3">
                      <div className="border-b-8 border-green-800 w-24 opacity-50 my-6" />
                      <div>
                        <p className="text-xl text">
                          Book your appointments now for...
                          <span className="font-bold">
                            Dr: {doctors.first_name}
                          </span>
                        </p>
                      </div>
                    </div>
                    {userdetails ? (
                      <div className="container mx-auto mb-32 px-4">
                        <form>
                          <div className="grid grid-cols-1 sm:grid-cols-3">
                            <div className="my-2">
                              <div>
                                <label className="mx-2">First Name</label>
                              </div>
                              <input
                                type="text"
                                placeholder="Type Here"
                                className="rounded-lg"
                                style={{ width: "90%" }}
                                value={firstname}
                                onChange={(e) => setfirstname(e.target.value)}
                              />
                              <div className="text-red-500">
                                {errors.first_name && (
                                  <span>This field is required</span>
                                )}
                              </div>
                            </div>
                            <div className="my-2">
                              <div>
                                <label className="mx-2">Last Name</label>
                              </div>
                              <input
                                type="text"
                                placeholder="Type Here"
                                className="rounded-lg"
                                style={{ width: "90%" }}
                                value={lastname}
                                onChange={(e) => setlastname(e.target.value)}
                              />
                              <div className="text-red-500">
                                {errors.last_name && (
                                  <span>This field is required</span>
                                )}
                              </div>
                            </div>
                            <div className="my-2">
                              <label className="mx-2">Phone No</label>
                              <input
                                type="text"
                                placeholder="Type Here"
                                className="rounded-lg"
                                style={{ width: "90%" }}
                                value={phone}
                                onChange={(e) => setphone(e.target.value)}
                              />
                              <div className="text-red-500">
                                {errors.phone && (
                                  <span>This field is required</span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="my-4">
                              <div>
                                <label className="mx-2">Email</label>
                              </div>
                              <input
                                type="email"
                                placeholder="Type Here"
                                className="rounded-lg"
                                style={{ width: "90%" }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                              <div className="text-red-500">
                                {errors.email && (
                                  <span>This field is required</span>
                                )}
                              </div>
                            </div>
                            <div className="my-4">
                              <div>
                                <label className="mx-2">Date</label>
                              </div>
                              <input
                                type="date"
                                placeholder="Type Here"
                                className="rounded-lg mx-1"
                                style={{ width: "93%", height: "40px" }}
                                min={disablePastDate()}
                                {...register("date", { required: true })}
                              />
                              <div className="text-red-500">
                                {errors.date && (
                                  <span>This field is required</span>
                                )}
                              </div>
                            </div>

                            <div
                              className="border-2 p-2 w-24 bg-green-900 text-pink-50 text-center block hover:bg-menu hover:text-pink-50"
                              onClick={handleSubmit}
                            >
                              Submit
                            </div>
                          </div>
                        </form>
                      </div>
                    ) : (
                      "Wait"
                    )}
                  </p>
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

export default BookDoctor;
