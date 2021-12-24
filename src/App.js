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
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserPanel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/admin/addDoctors" element={<UserAppointment />} />
          <Route path="/admin/doctors/" element={<Doctors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
