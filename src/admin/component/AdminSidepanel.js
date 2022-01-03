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
              src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-doctor-hospital-and-medical-justicon-lineal-color-justicon.png"
              alt="patient"
              className="w-8 mr-4"
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
              src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-skills-business-and-management-kiranshastry-lineal-color-kiranshastry-16.png"
              alt="patient"
              className="w-8 mr-4"
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
              src="https://img.icons8.com/clouds/100/000000/view-file.png"
              alt="patient"
              className="w-10 mr-4"
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
