import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../contextapi";
import { useSpring, animated } from "react-spring";
import close from "../images/close.svg";

function Sidebar() {
  const styles = useSpring({
    loop: () => 0,
    from: { x: 500 },
    to: { x: 0 },
  });
  const { sidebar, setSidebar } = useUserContext();
  const closeSidebar = () => {
    setSidebar(false);
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
            to="#"
            className="p-3 hover:bg-menu hover:text-pink-50 transition delay-75 duration-300 ease-in"
          >
            About
          </Link>
          <Link
            to="#"
            className="p-3 hover:bg-menu hover:text-pink-50 transition delay-75 duration-300 ease-in"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
