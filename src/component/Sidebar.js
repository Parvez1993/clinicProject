import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSidebarContext } from "../contextapi";
import { useSpring, animated } from "react-spring";
import close from "../images/close.svg";
import { useUserContext } from "../contextApi/userContext";

function Sidebar() {
  const { sidebar, setSidebar } = useSidebarContext();

  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await setUser("");
      window.localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <div
        className={`${
          sidebar
            ? "bg-green-300 h-screen w-72 md:hidden sidebar active z-10"
            : "bg-green-300 z-10 h-screen w-72 md:hidden sidebar"
        }`}
      >
        <div>
          <img
            src={close}
            width="30"
            alt="close"
            onClick={() => setSidebar(false)}
          />
        </div>
        <div className="flex flex-col gap-10 my-14 text-2xl">
          <Link
            to="/"
            className="p-3 hover:bg-menu hover:text-pink-50 transition delay-75 duration-300 ease-in"
          >
            Home
          </Link>
          <Link
            to="#about"
            className="p-3 hover:bg-menu hover:text-pink-50 transition delay-75 duration-300 ease-in"
          >
            About
          </Link>

          {user.role !== "doctor" ? (
            <Link
              to="/Appointment"
              className="p-3 hover:bg-menu hover:text-pink-50 transition delay-75 duration-300 ease-in"
            >
              Appointment
            </Link>
          ) : (
            ""
          )}

          {Object.values(user)[1] === "admin" ? (
            <Link
              to="/admin"
              className="p-3 hover:bg-menu hover:text-pink-50 transition delay-75 duration-300 ease-in"
            >
              Profile
            </Link>
          ) : Object.values(user)[1] === "doctor" ? (
            <Link
              to="/doctor"
              className="p-3 hover:bg-menu hover:text-pink-50 transition delay-75 duration-300 ease-in"
            >
              Profile
            </Link>
          ) : Object.values(user)[1] === "user" ? (
            <Link
              to="/user"
              className="p-3 hover:bg-menu hover:text-pink-50 transition delay-75 duration-300 ease-in"
            >
              Profile
            </Link>
          ) : (
            ""
          )}
          {Object.values(user)[3] ? (
            <button
              className="p-3 hover:bg-menu hover:text-pink-50 transition delay-75 duration-300 ease-in"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="p-3 hover:bg-menu hover:text-pink-50 transition delay-75 duration-300 ease-in"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
