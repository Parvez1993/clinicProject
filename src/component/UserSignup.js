import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function UserSignup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let navigate = useNavigate();

  const onSubmit = async (data, e) => {
    e.target.reset();
    // console.log(data);

    data.role = "user";
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: myHeaders,
    };

    fetch(`http://localhost:4000/api/signup`, requestOptions)
      .then((response) => {
        return response.text();
      })
      .then((data) => (data ? JSON.parse(data) : {}))
      .then((data) => {
        if (data.error) {
          console.log("error hoise");
        } else {
          navigate("/login");
        }
      });
  };

  return (
    <>
      <div className="px-8 department my-28">
        <div className="text-4xl font-bold text-menu ">Create Account</div>
        <div className="border-b-8 border-green-800 w-24 opacity-50 my-6" />
        <div>
          <p className="text-xl text">Create your account to get started</p>
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
                <label className="mx-2">Password</label>
              </div>
              <input
                type="password"
                placeholder="Type Here"
                className="rounded-lg mx-1"
                style={{ width: "93%", height: "40px" }}
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <div className="text-red-500">
                {errors.password && <span>{errors.password.message}</span>}
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

export default UserSignup;
