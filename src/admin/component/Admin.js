import React from "react";
import { useUserContext } from "../../contextApi/userContext";
import AddDoctors from "./AddDoctors";
import AddSpeciality from "./AddSpeciality";
import AdminSidepanel from "./AdminSidepanel";
import Doctors from "./Doctors";
import ViewUsers from "./ViewUsers";

function Admin() {
  const { list } = useUserContext();

  const checkList = () => {
    if (list === "doctors") {
      return <AddDoctors />;
    } else if (list === "addSpeciality") {
      return <AddSpeciality />;
    } else if (list === "prescription") {
      return <h3>prescription</h3>;
    } else if (list === "view_users") {
      return <ViewUsers />;
    } else if (list === "view_doctors") {
      return <Doctors />;
    } else {
      return <h3>Welcome to the admin panel</h3>;
    }
  };

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto flex flex-col">
          <div class="lg:w-4/5 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="flex flex-col items-center text-center justify-center">
                  <p class="text-base">
                    <AdminSidepanel />
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

export default Admin;
