import React from "react";
//GetAppointment
function GetAppointment() {
  return (
    <div className="bg-green-800">
      <div className="flex-col md:flex-row flex md mt-28 items-center justify-between container w-1/2 mx-auto py-8 text-pink-50 gap-y-8 text-center px-2">
        <div>We take care of your Health</div>
        <div>
          Cell:999888222 or{" "}
          <span className="border-2 p-2 block hover:bg-menu hover:text-pink-50">
            Make an Appointment Today
          </span>
        </div>
      </div>
    </div>
  );
}

export default GetAppointment;
