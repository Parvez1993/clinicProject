import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
function AddDoctors() {
  const [category, setCategory] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/specialties"
        );
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  return (
    <>
      <div className="px-8 department my-3">
        <div className="text-4xl font-bold text-menu">Add Doctors</div>
        <div className="border-b-8 border-green-800 w-24 opacity-50 my-6" />
        <div>
          <p className="text-xl text">Book your appointments now</p>
        </div>
      </div>
      <div className="container mx-auto mb-32 px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="my-2">
              <div>
                <label className="mx-2">First Name</label>
              </div>
              <input
                type="text"
                placeholder="Type Here"
                className="rounded-lg"
                style={{ width: "90%" }}
                {...register("first_name", { required: true })}
              />
              <div className="text-red-500">
                {errors.first_name && <span>This field is required</span>}
              </div>
            </div>
            <div className="my-2">
              <div>
                <label className="mx-2">Last Name</label>
              </div>
              <input
                type="text"
                placeholder="Type Here"
                className="rounded-lg"
                style={{ width: "90%" }}
                {...register("last_name", { required: true })}
              />
              <div className="text-red-500">
                {errors.last_name && <span>This field is required</span>}
              </div>
            </div>
            <div className="my-2">
              <label className="mx-2">Phone No</label>
              <input
                type="text"
                placeholder="Type Here"
                className="rounded-lg"
                style={{ width: "90%" }}
                {...register("phone", { required: true })}
              />
              <div className="text-red-500">
                {errors.phone && <span>This field is required</span>}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="my-2">
              <div>
                <label className="mx-2">Email</label>
              </div>
              <input
                type="email"
                placeholder="Type Here"
                className="rounded-lg"
                style={{ width: "90%" }}
                {...register("email", { required: true })}
              />
              <div className="text-red-500">
                {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div className="my-2">
              <div>
                <label className="mx-2">Start Time</label>
              </div>
              <input
                type="time"
                className="rounded-lg"
                style={{ width: "90%" }}
                {...register("startTime", { required: true })}
              />
              <div className="text-red-500">
                {errors.startTime && <span>This field is required</span>}
              </div>
            </div>
            <div className="my-2">
              <label className="mx-2">End Time</label>
              <input
                type="time"
                className="rounded-lg"
                style={{ width: "90%" }}
                {...register("endTime", { required: true })}
              />
              <div className="text-red-500">
                {errors.endTime && <span>This field is required</span>}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="my-2">
              <div>
                <label className="mx-2">specialties</label>
              </div>

              <select
                {...register("specialties", { required: true })}
                class="form-select appearance-none
                
      block
      px-3
      font-normal
              w-4/5
      bg-white bg-clip-padding bg-no-repeat
      rounded-lg
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Select Speciality</option>
                {category
                  ? category.map((i) => {
                      return (
                        <option value={i.name + "" + i._id}>{i.name}</option>
                      );
                    })
                  : "Loading"}
              </select>
              <div className="text-red-500">
                {errors.specialties && <span>This field is required</span>}
              </div>
            </div>
            <div className="my-2">
              <div>
                <label className="mx-2">degrees</label>
              </div>
              <input
                type="text"
                placeholder="Type Here"
                className="rounded-lg"
                style={{ width: "90%" }}
                {...register("degrees", { required: true })}
              />
              <div className="text-red-500">
                {errors.degrees && <span>This field is required</span>}
              </div>
            </div>
            <div className="my-2">
              <label className="mx-2">Description</label>
              <input
                type="text"
                placeholder="Type Here"
                className="rounded-lg"
                style={{ width: "90%" }}
                {...register("description", { required: true })}
              />
              <div className="text-red-500">
                {errors.description && <span>This field is required</span>}
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="border-2 p-2 w-24 bg-green-900 text-pink-50 text-center block hover:bg-menu hover:text-pink-50"
          ></input>
        </form>
      </div>
    </>
  );
}

export default AddDoctors;
