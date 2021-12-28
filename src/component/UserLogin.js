import React, { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
function UserLogin() {
  const [date, setDate] = React.useState("");
  function handleSelect(date) {
    console.log(date); // native Date object
  }
  console.log(date);

  return (
    <div>
      <Calendar date={new Date()} onChange={() => handleSelect(date)} />
    </div>
  );
}

export default UserLogin;
