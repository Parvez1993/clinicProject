import React from "react";
import { useUserContext } from "../../contextApi/userContext";

function AdminSidepanel() {
  const { list, setList } = useUserContext();
  console.log(list);
  return (
    <div className="bg-white">
      <ul className="text-4xl py-8 sidepanel_ul">
        <div className="flex flex-wrap  md:flex-col">
          <li className="text-base p-4 flex items-center">
            <img
              src="https://img.icons8.com/color/48/26e07f/circled-user-female-skin-type-4--v1.png"
              alt="patient"
              className="w-10"
            />
            <p
              className="text-md opacity-80"
              onClick={() => setList("doctors")}
            >
              Add Doctors
            </p>
          </li>
          <li className="text-base p-4 flex items-center">
            <img
              src="https://img.icons8.com/color/48/26e07f/circled-user-female-skin-type-4--v1.png"
              alt="patient"
              className="w-10"
            />
            <p
              className="text-md opacity-80"
              onClick={() => setList("addSpeciality")}
            >
              Add Speciality
            </p>
          </li>
          <li className="text-base p-4 flex items-center">
            <img
              src="https://img.icons8.com/color/48/26e07f/circled-user-female-skin-type-4--v1.png"
              alt="patient"
              className="w-10"
            />
            <p
              className="text-base opacity-80"
              onClick={() => setList("prescription")}
            >
              PRESCRIPTION
            </p>
          </li>

          <li className="text-base p-4 flex items-center">
            <img
              src="https://img.icons8.com/color/48/26e07f/circled-user-female-skin-type-4--v1.png"
              alt="patient"
              className="w-10"
            />
            <p
              className="text-base opacity-80 uppercase"
              onClick={() => setList("view_doctors")}
            >
              View Doctors
            </p>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default AdminSidepanel;
