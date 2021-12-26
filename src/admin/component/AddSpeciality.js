import React from "react";
import axios from "axios";
import { useUserContext } from "../../contextApi/userContext";
function AddSpeciality() {
  const { user } = useUserContext();

  //from database
  const [specialties, setSpecialties] = React.useState("");

  //from user
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState("");
  const [count, setCount] = React.useState(false);

  React.useEffect(() => {
    if (count === false) {
      const getSpeciality = async () => {
        try {
          const { data } = await axios.get(
            "http://localhost:4000/api/specialties"
          );
          setSpecialties(data);
        } catch (error) {
          console.log(error);
        }
      };

      getSpeciality();
    }
  }, [count]);

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      let arr = {};
      arr = {
        name: e.target.value,
      };
      setInput(arr);
      console.log(JSON.stringify(arr));

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Token " + user.token);
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(arr),
        headers: myHeaders,
      };

      try {
        await fetch("http://localhost:4000/api/specialty", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .then(() => {
            setInput("");
            e.target.value = "";
            setCount(true);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  React.useEffect(() => {
    if (count === true) {
      setCount(false);
    }
  }, [count]);

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <>
      <div className="department my-3">
        <div className="text-4xl font-bold text-menu">Add Speciality</div>
        <div className="border-b-8 border-green-800 w-24 opacity-50 my-6" />
      </div>
      <div class="relative flex w-full flex-wrap items-stretch mb-3">
        <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-3 ">
          <i class="fas fa-user-tag"></i>
        </span>
        <input
          type="text"
          placeholder="Placeholder"
          class="px-3 py-4 placeholder-green-800 text-blueGray-600 relative bg-white rounded text-base shadow  w-full pl-10 focusInput"
          onKeyDown={handleKeyPress}
        />
      </div>

      <div class="flex justify-center my-28">
        <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
          <li class="px-6 text-lg py-2 border-b border-gray-200 w-full rounded-t-lg font-bold">
            Specialities
          </li>
          {specialties
            ? specialties.map((i) => {
                return (
                  <li class="text-sm px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                    {i.name}
                  </li>
                );
              })
            : "No speciality to show"}
        </ul>
      </div>
      {/* <object
        data="http://africau.edu/images/default/sample.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Alternative text - include a link{" "}
          <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a>
        </p>
      </object> */}
    </>
  );
}

export default AddSpeciality;
