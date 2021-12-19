import moment from "moment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
function AddDoctors() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    data.date = Date.now();

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
      <div className="px-8 department my-24">
        <div className="text-4xl font-bold text-menu">Appointment Form</div>
        <div className="border-b-8 border-green-800 w-24 opacity-50 my-6" />
        <div>
          <p className="text-xl text">Book your appointments now</p>
        </div>
      </div>
      <div className="container mx-auto mb-32">
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
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="my-4">
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
            <div className="my-4">
              <div>
                <label className="mx-2">Date</label>
              </div>
              <input
                type="date"
                placeholder="Type Here"
                className="rounded-lg mx-1"
                style={{ width: "93%", height: "40px" }}
                min={disablePastDate()}
                {...register("date", { required: true })}
              />
              <div className="text-red-500">
                {errors.date && <span>This field is required</span>}
              </div>
            </div>

            <input
              type="submit"
              className="border-2 p-2 w-24 bg-green-900 text-pink-50 text-center block hover:bg-menu hover:text-pink-50"
            ></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddDoctors;
