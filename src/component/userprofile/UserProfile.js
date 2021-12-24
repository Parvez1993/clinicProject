import React from "react";
import UserModal from "./UserModal";

function UserProfile() {
  const [showModal, setShowModal] = React.useState(false);

  if (showModal) {
    return <UserModal showModal={showModal} setShowModal={setShowModal} />;
  }
  return (
    <div class="w-3/5 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        class="object-cover object-center w-full h-28"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />

      <div class="flex items-center px-6 py-3 bg-gray-900">
        <h2 class="mx-3 text-md font-semibold text-white">Patient Details</h2>
      </div>

      <div class="px-6 py-4">
        <div className="flex flex-col text-sm gap-y-3">
          <div>
            <span className="font-bold">Name: </span>Ash
          </div>
          <div>
            <span className="font-bold">Age: </span>30
          </div>
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Phone: </span>01910101
            </div>
          </div>
          <div>
            <span className="font-bold">Email: </span>md@gmail.com
          </div>
          <div>
            <button
              className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-14"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
