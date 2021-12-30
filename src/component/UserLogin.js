import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function UserLogin() {
  const [doctors, setDoctors] = React.useState("");
  let [date, setDate] = useState(null);
  let [calender, setCalender] = useState(null);
  React.useEffect(() => {
    const getDoctors = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/doctor/61cdf177fe833a2e9bf6189a`
        );
        setCalender(data.appt);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDoctors();
  }, []);

  if (calender) {
    const temp = calender.find((i) => i.date === date);
    console.log(temp);
  }

  const handleChange = (e) => {
    const value = moment(e).format("DD/MM/YYYY");
    setDate(value);
    console.log(value);
  };

  // console.log(moment().toDate());
  moment().add(10, "days").calendar();

  // console.log(moment().add(10, "days"));
  return (
    <Calendar
      tileDisabled={({ date }) => date.getDay() === 0}
      minDate={moment().toDate()}
      maxDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
      onChange={handleChange}
    />
  );
}

export default UserLogin;
