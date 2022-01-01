import React, { useState } from "react";

import { useUserContext } from "../../contextApi/userContext";

import Profile from "../Profile";
function SidePanel() {
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
              onClick={() => setList("profile")}
            >
              PROFILE{" "}
            </p>{" "}
          </li>
          <li className="text-base p-4 flex items-center">
            <img
              src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-appointment-telemedicine-justicon-lineal-color-justicon.png"
              alt="patient"
              className="w-8 mx-2"
            />
            <p
              className="text-md opacity-80"
              onClick={() => setList("appointment")}
            >
              APPOINTMENT
            </p>
          </li>
          <li className="text-base p-4 flex items-center">
            <img
              src="https://img.icons8.com/bubbles/50/000000/apple-notes.png"
              alt="patient"
              className="w-12"
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
              className="text-base opacity-80"
              onClick={() => setList("history")}
            >
              HISTORY
            </p>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default SidePanel;
