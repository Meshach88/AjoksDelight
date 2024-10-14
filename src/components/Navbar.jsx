import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      {/* Desktop navigation */}
      <nav className="hidden md:flex justify-between mx-10 items-center pr-10">
        <div className="w-40">
          <img src={logo} />
        </div>
        <div>
          <ul className="md:flex gap-10 justify-center items-center font-sans font-semibold hidden text-lg tracking-wide mr-10">
            <li className="hover:text-customPurple">
              <a
                href="#"
                className="active:border-b-2 active:border-b-customPurple"
              >
                Home
              </a>
            </li>
            <li className="hover:text-customPurple">
              <a
                href="#"
                className="active:border-b-2 active:border-b-customPurple"
              >
                About Us
              </a>
            </li>
            <li className="hover:text-customPurple">
              <a
                href="#"
                className="active:border-b-2 active:border-b-customPurple"
              >
                Menu
              </a>
            </li>
            <li className="hover:text-customPurple">
              <a
                href="#"
                className="active:border-b-2 active:border-b-customPurple"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile navigation menu */}
      <nav className="md:hidden h-24 flex justify-between items-center relative">
        <div className="w-32">
          <img src={logo} />
        </div>
        {showMenu ? (
          <MdClose
            onClick={() => setShowMenu(false)}
            className="text-3xl absolute right-8 cursor-pointer"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setShowMenu(true)}
            className="text-2xl absolute right-8 cursor-pointer"
          />
        )}

        {showMenu && (
          <div className="w-full h-screen absolute flex flex-col items-center text-center text-customYellow z-50 top-24 bg-customPurple justify-start p-10">
            <ul className="flex flex-col gap-10 font-sans font-semibold text-2xl tracking-wide">
              <li>
                <a
                  href="#"
                  className="active:border-b-2 active:border-b-customYellow"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="active:border-b-2 active:border-b-customYellow"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="active:border-b-2 active:border-b-customYellow"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="active:border-b-2 active:border-b-customYellow"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
