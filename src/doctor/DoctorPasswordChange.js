import React from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../contextApi/userContext";
function DoctorPasswordChange() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [err, setErr] = React.useState("");
  const [mess, setMess] = React.useState("");

  const { user } = useUserContext();

  const onSubmit = async (data, e) => {
    if (data.password !== data.confirm__password) {
      setErr("Password do not match ");
    } else {
      const email = Object.values(user)[2];
      let objArr = {};
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      objArr = { password: data.password, email: email };
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(objArr),
        headers: myHeaders,
      };

      console.log(JSON.stringify(objArr));
      await fetch(
        "http://localhost:4000/api/doctor/change",
        requestOptions
      ).then(() => setMess("Successfully changed"));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {err ? (
          <div
            class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 "
            role="alert"
          >
            {err}
          </div>
        ) : (
          ""
        )}

        {mess ? (
          <div
            class="bg-red-700 rounded-lg py-5 px-6 mb-4 text-base text-red-50"
            role="alert"
          >
            {mess}
          </div>
        ) : (
          ""
        )}
        <div className="my-4">
          <div>
            <label className="mx-2">Change Password</label>
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
        <div className="my-4">
          <div>
            <label className="mx-2">Confirm Password</label>
          </div>
          <input
            type="password"
            placeholder="Type Here"
            className="rounded-lg mx-1"
            style={{ width: "93%", height: "40px" }}
            {...register("confirm__password", {
              required: true,
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          <div className="text-red-500">
            {errors.confirm__password && (
              <span>{errors.confirm__password.message}</span>
            )}
          </div>
        </div>
        <input
          type="submit"
          className="border-2 p-2 w-24 bg-green-900 text-pink-50 text-center block hover:bg-menu hover:text-pink-50"
        ></input>
      </form>
    </>
  );
}

export default DoctorPasswordChange;
