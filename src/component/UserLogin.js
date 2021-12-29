import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function UserLogin() {
  let [x, setx] = useState("");

  const handleChange = (e) => {
    console.log(e);
    console.log(moment(e).format("DD/MM/YYYY"));
  };
  console.log(x);
  return (
    <Calendar
      tileDisabled={({ date }) => date.getDay() === 6 || date.getDay() === 2}
      onChange={handleChange}
    />
  );
}

export default UserLogin;
