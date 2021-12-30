import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useUserContext } from "../../contextApi/userContext";
function AddDoctors() {
  const [category, setCategory] = useState("");
  //get select from user
  const [select, setSelect] = useState("");
  //get object from select
  const [selectObj, setSelectObj] = useState([]);
  //preview
  const [preview, setPreview] = useState(null);

  //store degree
  const [degree, setDegree] = useState([]);
  const [count, setCount] = useState(false);
  const [message, setMessage] = useState("Successfully done");

  const [error, setError] = useState("Error");

  let degreeArray = [];
  const { user } = useUserContext();

  //image
  const [image, setImage] = useState("");

  //duration

  const [duration, setDuration] = useState("");
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

  const onSubmit = async (data, e) => {
    console.log(data);
    if (!degree.length > 0 || degree.length < 1) {
      return setError("Please fill the degree by pressing enter");
    }
    const newData = {
      ...data,
      degrees: degree,
      role: "doctor",
      duration: duration,
    };
    const newImage = { image: image };
    newData.specialties = selectObj;
    const imageForm = new FormData(e.target);
    imageForm.append("image", image);

    e.target.reset();
    console.log(newImage);
    try {
      await axios.post("http://localhost:4000/api/image", imageForm);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Token " + user.token);
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(newData),
        headers: myHeaders,
      };
      await fetch("http://localhost:4000/api/doctor", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .then(() => {
          setDegree("");
          setPreview("");
          setImage("");
        });
    } catch (error) {
      console.log("error");
    }
    setMessage("You have successfully entered the form");
  };

  const handleImage = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (select.length > 0) {
      const temp = category.find((i) => i._id === select);
      setSelectObj(temp);
    }
  }, [category, select]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (degree.length > 0) {
        degreeArray = degree;
        degreeArray.push(e.target.value);
        setDegree(degreeArray);
        e.target.value = "";
        setCount(true);
      } else {
        setDegree([e.target.value]);
        e.target.value = "";
        setCount(true);
      }
    }
  };

  React.useEffect(() => {
    if (count === true) {
      setCount(false);
    }
  }, [count]);

  const removeDegree = (index) => {
    let temp = degree;
    let tempRemove = temp.filter((item) => item !== temp[index]);
    setDegree(tempRemove);
    setCount(true);
  };

  const handleDuration = (e) => {
    const value = e.target.value;
    var regExp = /[a-zA-Z]/g;
    if (regExp.test(value)) {
      window.alert("You cannot enter letter or symbols");
    }
    const parseValue = parseInt(value);
    setDuration(parseValue);
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

      {message ? (
        <div className="bg-menu text-white px-6 py-4 border-0 rounded relative mb-4 bg-emerald-500">
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">Success Yipee</b> {message}
          </span>
          <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
            <span onClick={() => setMessage("")}>×</span>
          </button>
        </div>
      ) : (
        ""
      )}

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
                {...register("start_time", { required: true })}
                required
              />
              <div className="text-red-500">
                {errors.start_time && <span>This field is required</span>}
              </div>
            </div>
            <div className="my-2">
              <label className="mx-2">End Time</label>
              <input
                type="time"
                className="rounded-lg"
                style={{ width: "90%" }}
                {...register("end_time", { required: true })}
              />
              <div className="text-red-500">
                {errors.end_time && <span>This field is required</span>}
              </div>
            </div>
          </div>

          {degree.length > 0
            ? degree.map((i, index) => (
                <span class="px-4 py-2 rounded-full text-pink-50 bg-green-800 font-semibold text-sm mx-2 w-max cursor-pointer active:bg-gray-300 transition duration-300 ease inline-block">
                  {i}
                  <button class="bg-transparent hover focus:outline-none">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="times"
                      class="w-3 ml-3"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 352 512"
                      onClick={() => removeDegree(index)}
                    >
                      <path
                        fill="currentColor"
                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                      ></path>
                    </svg>
                  </button>
                </span>
              ))
            : ""}
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="my-6">
              <div>
                <label className="mx-2">specialties</label>
              </div>

              <select
                onChange={(e) => setSelect(e.target.value)}
                class="form-select appearance-none
                
      block
      px-3
      ml-5
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
                  ? category.map((i, index) => {
                      return <option value={i._id}>{i.name}</option>;
                    })
                  : "Loading"}
              </select>
              <div className="text-red-500">
                {errors.specialties && <span>This field is required</span>}
              </div>
            </div>
            <div className="my-6">
              <div>
                <label className="mx-2">degrees</label>
              </div>
              <input
                type="text"
                placeholder="Please Press Enter"
                className="rounded-lg"
                style={{ width: "90%" }}
                onKeyDown={handleKeyPress}
              />
            </div>
            <div className="my-6">
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
          <div className="my-2">
            <div>
              {preview !== null ? (
                <div className="">
                  <img
                    src={preview}
                    alt="img"
                    className="w-24 md:w-32 lg:w-48"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex">
              <div>
                <label className="mx-2">Doctor Image</label>
                <input
                  type="file"
                  placeholder="Type Here"
                  className="rounded-lg"
                  style={{ width: "90%" }}
                  multiple="multiple"
                  onChange={handleImage}
                  name="file"
                  required
                />
                <div className="text-red-500">
                  {errors.file && <span>This field is required</span>}
                </div>
              </div>
              <div>
                <div>
                  <label className="mx-2">Doctor Duration</label>
                  <input
                    type="number"
                    placeholder="Type Here"
                    className="rounded-lg"
                    style={{ width: "90%" }}
                    onChange={handleDuration}
                  />
                  <div className="text-red-500">
                    {errors.duration && <span>This field is required</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
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
