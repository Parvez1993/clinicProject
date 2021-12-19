import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../contextapi";
import globe from "../images/globe.svg";
import menu from "../images/menu.svg";
import Sidebar from "./Sidebar";
function Navbar() {
  const { sidebar, setSidebar } = useUserContext();

  return (
    <>
      <div className=" bg-green-800">
        <div className="flex justify-between content-center py-4 container mx-auto">
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 stroke-current text-pink-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <div>
            <Sidebar />
          </div>
          <div className="md:block hidden">
            <Link
              to="/"
              className="px-2 text-xl text-pink-50 hover:bg-menu rounded-none  p-2 transition delay-75 duration-300 ease-in"
            >
              Home
            </Link>
            <a
              href="#about"
              className="px-2 text-xl text-pink-50 hover:bg-menu rounded-none  p-2 transition delay-75 duration-300 ease-in"
            >
              About
            </a>
            <Link
              to="#"
              className="px-2 text-xl text-pink-50 hover:bg-menu rounded-none  p-2 transition delay-75 duration-300 ease-in"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-pink-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setSidebar(true)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
