import React from "react";
import About from "../component/About";
import Banner from "../component/Banner";
import Achievement from "../component/Achievement";
import Appointment from "../component/Appointment";
import Departments from "../component/Departments";
import GetAppointment from "../component/GetAppointment";
import Team from "../component/Team";
import Customer from "../component/Customer";
import Footer from "../component/Footer";
function Home() {
  return (
    <>
      <Banner />
      <About />
      <Achievement />
      <Appointment />
      <Departments />
      <Team />
      <GetAppointment />
      <Customer />
      <Footer />
    </>
  );
}

export default Home;
