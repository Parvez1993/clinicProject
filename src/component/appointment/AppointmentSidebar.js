import React from "react";
import { Link } from "react-router-dom";
import Doctors from "../../admin/component/Doctors";

function AppointmentSidebar() {
  return (
    <>
      <div>
        <div className="h-screen bg-menu ">
          <div className="text-xl text-center py-5 text-pink-50 font-bold">
            Doctor Category
          </div>

          <Link to="/admin/doctors/id">
            <div className="text-md text-red-50 my-5 mx-3">Cardio boss</div>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default AppointmentSidebar;
