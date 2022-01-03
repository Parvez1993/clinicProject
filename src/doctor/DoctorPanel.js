import React from "react";
import { useUserContext } from "../contextApi/userContext";
import DoctorProfile from "./DoctorProfile";
import DoctorSidepanel from "./DoctorSidepanel";
import DoctorAppointment from "./DoctorAppointment";
import DoctorPrescription from "./DoctorPrescription";
import DoctorPasswordChange from "./DoctorPasswordChange";

function DoctorPanel() {
  const checkList = () => {
    if (list === "password") {
      return <DoctorPasswordChange />;
    } else if (list === "profile") {
      return <DoctorProfile />;
    } else if (list === "appointment") {
      return <DoctorAppointment />;
    } else if (list === "prescription") {
      return <DoctorPrescription />;
    } else {
      return <DoctorAppointment />;
    }
  };

  const { list } = useUserContext();

  return (
    <section class="text-gray-600 body-font">
      <div class="px-5 py-12 mx-auto flex flex-col">
        <div class="lg:w-4/5 mx-auto">
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="flex flex-col items-center text-center justify-center">
                <p class="text-base">
                  <DoctorSidepanel />
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
  );
}

export default DoctorPanel;
