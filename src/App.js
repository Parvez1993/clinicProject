import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./component/Navbar";
import Appointment from "./page/Appointment";
import UserAppointment from "./admin/component/UserAppointment";
import Doctors from "./admin/component/Doctors";
import UserPanel from "./component/UserPanel";
import Login from "./component/Login";
import UserSignup from "./component/UserSignup";
import Admin from "./admin/component/Admin";
import UserLogin from "./component/UserLogin";
import DoctorLogin from "./doctor/DoctorLogin";
import DoctorPanel from "./doctor/DoctorPanel";
import { useUserContext } from "./contextApi/userContext";
function App() {
  const { user } = useUserContext();
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaa", user.role);

  if (Object.values(user)[1] === "admin") {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/user/addDoctors" element={<UserAppointment />} />
            <Route path="/admin/doctors/" element={<Doctors />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/doctor/login/" element={<DoctorLogin />} />
            <Route path="/doctor" element={<Home />} />
            <Route path="try" element={<UserLogin />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  } else if (Object.values(user)[1] === "doctor") {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/user/addDoctors" element={<UserAppointment />} />
            <Route path="/admin/doctors/" element={<Home />} />
            <Route path="/admin" element={<Home />} />
            <Route path="/doctor/login/" element={<DoctorLogin />} />
            <Route path="/doctor" element={<DoctorPanel />} />
            <Route path="try" element={<UserLogin />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserPanel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/user/addDoctors" element={<UserAppointment />} />
            <Route path="/admin/doctors/" element={<Home />} />
            <Route path="/admin" element={<Home />} />
            <Route path="/doctor/login/" element={<DoctorLogin />} />
            <Route path="/doctor" element={<Home />} />
            <Route path="try" element={<UserLogin />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

{
  /* <Routes>
<Route path="/" element={<Home />} />
<Route path="/user" element={<UserPanel />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<UserSignup />} />
<Route path="/appointment" element={<Appointment />} />
<Route path="/user/addDoctors" element={<UserAppointment />} />
<Route path="/admin/doctors/" element={<Doctors />} />
<Route path="/admin" element={<Admin />} />
<Route path="/doctor/login/" element={<DoctorLogin />} />
<Route path="/doctor" element={<DoctorPanel />} />
<Route path="try" element={<UserLogin />} />
</Routes> */
}

export default App;
