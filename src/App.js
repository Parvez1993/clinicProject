import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./component/Navbar";
import Appointment from "./page/Appointment";
import AddDoctors from "./admin/component/AddDoctors";
import Doctors from "./admin/component/Doctors";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/admin/addDoctors" element={<AddDoctors />} />
          <Route path="/admin/doctors/" element={<Doctors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
