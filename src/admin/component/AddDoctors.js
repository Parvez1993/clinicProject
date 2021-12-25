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

  const { user } = useUserContext();
  console.log(user);

  //image
  const [image, setImage] = useState("");
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
    // e.target.reset();
    // try {
    //   await axios.post("http://localhost:4000/api/image", image);

    //   const myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");
    //   myHeaders.append("Authorization", "Token " + user.token);
    //   const requestOptions = {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: myHeaders,
    //   };
    //   await fetch("http://localhost:4000/api/doctor", requestOptions)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //     });
    // } catch (error) {
    //   console.log("error");
    // }
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
            <div>
              <label className="mx-2">Doctor Image</label>
            </div>
            <input
              type="file"
              accept="image/*,.pdf"
              placeholder="Type Here"
              className="rounded-lg"
              style={{ width: "90%" }}
              onChange={handleImage}
              required
            />
            <div className="text-red-500">
              {errors.first_name && <span>This field is required</span>}
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
