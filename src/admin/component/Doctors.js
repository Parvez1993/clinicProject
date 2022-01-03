import React, { useEffect } from "react";
import axios from "axios";

function Doctors() {
  const [count, setCount] = React.useState(false);
  const [doctors, setDoctors] = React.useState("");

  React.useEffect(() => {
    const getDoctors = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/api/doctors`);
        setDoctors(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDoctors();
  }, []);

  const handleDelete = async (id) => {
    axios.delete(`http://localhost:4000/api/ddoctor/${id}`);
    setCount(true);
    console.log(id);
  };

  useEffect(() => {
    if (count) {
      setCount(false);
    }
  }, [count]);

  return (
    <>
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
                    <div class="font-semibold text-left">Visitings Hours</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Phone</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Description</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Delete</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                {doctors
                  ? doctors.map((detail, keys) => {
                      return (
                        <tr index={keys}>
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
                              {detail.starttime} {detail.endtime}
                            </div>
                          </td>
                          <td class="p-2 whitespace-nowrap">
                            <div class="text-lg text-center">
                              {detail.phone}
                            </div>
                          </td>
                          <td class="p-2 whitespace-nowrap">
                            <div class="text-lg text-center">
                              {detail.description}
                            </div>
                          </td>
                          <td class="p-2 whitespace-nowrap">
                            <div
                              class="text-lg text-center border-2 bg-red-800 text-blue-50 hover:bg-red-400 cursor-pointer"
                              onClick={() => handleDelete(detail._id)}
                            >
                              Delete
                            </div>
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
    </>
  );
}

export default Doctors;
