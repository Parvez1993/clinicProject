import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contextApi/userContext";
function DoctorLogin() {
  const { user, setUser, error, setError } = useUserContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  console.log(user.role);
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: myHeaders,
    };

    await fetch("http://localhost:4000/api/doctor/signin", requestOptions).then(
      (response) =>
        response
          .json()
          .then((data) => {
            if (data.error) {
              setError(data.error.message);
            }

            setUser(data);
            window.localStorage.setItem(
              "user",
              JSON.stringify(Object.values(data))
            );
          })
          .catch((err) => console.log(err))
    );
  };

  if (user.role === "doctor") {
    navigate("/doctor");
  }

  if (user.role === "user") {
    navigate("/user");
  }
  return (
    <section class="text-gray-600 body-font">
      {/* /////////error */}

      {error ? (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-800 my-12">
          <span className="text-2xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8 text-2xl ">
            <b className="capitalize">Error!</b> {error}
          </span>
          <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
            <span>×</span>
          </button>
        </div>
      ) : (
        ""
      )}

      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/6 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900">
            Welcome Doctors to the hub of Care
          </h1>
          <p class="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                {...register("email", { required: true })}
              />
              <div className="text-red-500">
                {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                {...register("password", { required: true })}
              />
              <div className="text-red-500">
                {errors.password && <span>This field is required</span>}
              </div>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Signin
            </button>
          </form>
          <p class="text-xs text-gray-500 mt-3">
            Dont have an account join us super fast.{" "}
            <Link to="/signup" style={{ color: "blue", fontSize: "18px" }}>
              Click here
            </Link>
          </p>
          <p class="text-xs text-gray-500 mt-3">
            If you are not Doctor click here ?{" "}
            <Link to="/login" style={{ color: "red", fontSize: "18px" }}>
              Click here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default DoctorLogin;
