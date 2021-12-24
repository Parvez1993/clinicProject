import React from "react";

import { useUserContext } from "../contextApi/userContext";
import AppointmentDate from "./userprofile/AppointmentDate";
import SidePanel from "./userprofile/SidePanel";
import UserProfile from "./userprofile/UserProfile";

function UserPanel() {
  const checkList = () => {
    if (list === "profile") {
      return <UserProfile />;
    } else if (list === "appointment") {
      return <AppointmentDate />;
    } else if (list === "prescription") {
      return <h3>prescription</h3>;
    } else if (list === "history") {
      return <h3>history</h3>;
    } else {
      return <h3>Welcome to the admin panel</h3>;
    }
  };

  const { list } = useUserContext();
  console.log(list);
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto flex flex-col">
          <div class="lg:w-4/5 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="flex flex-col items-center text-center justify-center">
                  <p class="text-base">
                    <SidePanel />
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">{checkList()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserPanel;
