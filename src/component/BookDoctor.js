import moment from "moment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useUserContext } from "../contextApi/userContext";
import { Link, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";

function BookDoctor(props) {
  const { docid } = props;
  const [showModal, setShowModal] = React.useState(false);
  const [doctors, setDoctors] = React.useState("");
  const [userdetails, setUserDetails] = React.useState("");
  //hooks form
  const [firstname, setfirstname] = useState(null);
  const [lastname, setlastname] = useState(null);
  const [phone, setphone] = useState(null);
  const [email, setEmail] = useState(null);
  const { user } = useUserContext();

  //calender variables
  let [slots, setSlots] = useState(null);
  let [calender, setCalender] = useState("");
  let [slotSelected, setSlotSelected] = useState("Choose");
  let [dataSelected, setdataSelected] = useState("");
  let temp = "";

  React.useEffect(() => {
    if (docid) {
      const getDoctors = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:4000/api/doctor/${docid}`
          );
          setCalender(data.appt);
          setDoctors(data);
        } catch (error) {
          console.log(error);
        }
      };
      getDoctors();
    }
  }, [docid]);

  React.useEffect(() => {
    if (user.length !== 0) {
      const id = Object.values(user)[0];
      axios.get(`http://localhost:4000/api/patient/${id}`).then((res) => {
        console.log("aaaa", id);
        setUserDetails(res.data);
        setfirstname(res.data.first_name);
        setlastname(res.data.last_name);
        setphone(res.data.phone);
        setEmail(res.data.email);
      });
    }
  }, [user]);
  const handleChange = async (e) => {
    const value = await moment(e).format("DD/MM/YYYY");
    console.log(value);
    temp = await calender.find((data) => data.date === value);
    setSlots(temp);
    setdataSelected(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    if (!firstname && !lastname && !phone && !email && slotSelected === "") {
      window.alert("Please fill all the forms");
    } else if (slotSelected === "Choose") {
      window.alert("Please pick a time slot ");
    } else {
      const data = {
        first_name: firstname,
        last_name: lastname,
        phone: phone,
        email: email,
        date: dataSelected,
        time: slotSelected,
        doctor_id: doctors._id,
        doctor_name: doctors.first_name + " " + doctors.last_name,
        user_id: userdetails._id,
      };

      const requestOptions = {
        method: "POST",
        body: JSON.stringify(data),
      };
      try {
        await fetch("http://localhost:4000/api/appointment", requestOptions);
      } catch (error) {
        console.log("error");
      }
    }
  };

  const handleSelectedSlot = (e) => {
    let value = e.target.value;
    setSlotSelected(value);
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
                {calender !== null ? (
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      <div className="px-8 department my-3">
                        <div className="border-b-8 border-green-800 w-24 opacity-50 my-6" />
                        <div>
                          {doctors ? (
                            <p className="text-xl text">
                              Book your appointments now for...
                              <span className="font-bold">
                                Dr: {doctors.first_name}
                              </span>
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      {user.length !== 0 ? (
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
                              </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3">
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
                              </div>
                              <div className="my-4">
                                <div>
                                  <label className="mx-2">Choose Date</label>
                                </div>
                                <Calendar
                                  className="react-calendar"
                                  tileDisabled={({ date }) =>
                                    date.getDay() === 0
                                  }
                                  minDate={moment().toDate()}
                                  maxDate={
                                    new Date(
                                      Date.now() + 7 * 24 * 60 * 60 * 1000
                                    )
                                  }
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="my-4">
                                <div>
                                  <label className="mx-2">Choose Slot</label>
                                </div>
                                <select
                                  required
                                  onClick={handleSelectedSlot}
                                  class="form-select appearance-none
                
      block
      px-3
      ml-5
      font-normal
              w-4/5
      bg-white bg-clip-padding bg-no-repeat
      rounded-lg
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                  aria-label="Default select example"
                                >
                                  <option>Choose</option>
                                  {slots ? (
                                    slots.slots.map((i, index) => {
                                      return (
                                        <option value={i} key={index}>
                                          {i}
                                        </option>
                                      );
                                    })
                                  ) : (
                                    <option disabled>Choose Date first</option>
                                  )}
                                </select>
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
                        <Link to="/login">
                          Please login in to continue. Click here
                        </Link>
                      )}
                    </p>
                  </div>
                ) : (
                  "Loading"
                )}
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
