import axios from "axios";
import React from "react";
import { useUserContext } from "../../contextApi/userContext";

function AppointmentDate() {
  const [userdetails, setUserDetails] = React.useState("");
  const { user } = useUserContext();

  React.useEffect(() => {
    if (user.length !== 0) {
      const id = Object.values(user)[0];
      axios
        .get(`http://localhost:4000/api/patient/appointments/${id}`)
        .then((res) => {
          setUserDetails(res.data);
        });
    }
  }, [user]);

  return (
    <div class="w-full max-w-5xl my-12 mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
      <header class="px-5 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">Apoointment List</h2>
      </header>
      <div class="p-3">
        <div class="overflow-x-auto">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Name</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Email</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Doctor Name</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Appointment Date</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Appointment Time</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100">
              {userdetails
                ? userdetails.map((detail) => {
                    return (
                      <tr>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="font-medium text-gray-800">
                              {detail.firstname} {detail.lastname}
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left"> {detail.email}</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left font-medium text-green-500">
                            {detail.doctorname}
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center"> {detail.date}</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-lg text-center"> {detail.time}</div>
                        </td>
                      </tr>
                    );
                  })
                : "waiting"}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDate;
