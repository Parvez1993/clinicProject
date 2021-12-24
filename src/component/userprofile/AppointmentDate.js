import React from "react";

function AppointmentDate() {
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
                  <div class="font-semibold text-left">Appointment</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Doctor</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Time</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100">
              <tr>
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="font-medium text-gray-800">Alex Shatov</div>
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">alexshatov@gmail.com</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-medium text-green-500">
                    $2,890.66
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-lg text-center">🇺🇸</div>
                </td>
              </tr>
              <tr>
                <td class="p-2 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="font-medium text-gray-800">Philip Harbach</div>
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">philip.h@gmail.com</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left font-medium text-green-500">
                    $2,767.04
                  </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-lg text-center">🇩🇪</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDate;
