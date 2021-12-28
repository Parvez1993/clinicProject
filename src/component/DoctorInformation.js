import React from "react";
import axios from "axios";

function DoctorInformation(props) {
  const { id } = props;
  const [showModal, setShowModal] = React.useState(false);
  const [doctors, setDoctors] = React.useState("");

  React.useEffect(() => {
    const getDoctors = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/doctor/${id}`
        );
        setDoctors(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDoctors();
  }, []);

  const {
    first_name,
    last_name,
    phone,
    email,
    specialties,
    degrees,
    description,
    image,
  } = doctors;

  return (
    <>
      <button
        className="flex-none w-36 h-12 uppercase font-medium tracking-wider bg-pink-900 text-white"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Info
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Doctor Details</h3>
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
                  <div class="flex justify-center">
                    <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                      <img
                        class=" w-full h-72 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={
                          image
                            ? image
                            : "https://thumbs.dreamstime.com/z/default-placeholder-doctor-half-length-portrait-photo-avatar-gray-color-119556416.jpg"
                        }
                        alt=""
                      />
                      <div class="p-6 flex flex-col justify-start">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">
                          {first_name} {last_name} / {specialties.name}
                        </h5>
                        <p class="text-gray-700 text-base mb-4">
                          {degrees.map((i) => {
                            return <p>{i}</p>;
                          })}
                        </p>
                        <p class="text-gray-600 text-xs uppercase">
                          Contact: {phone}
                        </p>
                        <p class="text-gray-600 text-xs uppercase">
                          email: {email}
                        </p>
                        <p class="text-gray-600 text-xs uppercase">
                          Description: {description}
                        </p>
                      </div>
                    </div>
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
                  <button
                    className="bg-emerald-500 text-white active: bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
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
  );
}

export default DoctorInformation;
