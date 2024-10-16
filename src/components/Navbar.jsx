import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="bg-white">
      {/* Desktop navigation */}
      <nav className="hidden md:flex justify-between mx-auto items-center pr-10 h-32 max-w-6xl">
        <div className="w-40">
          <a href="/">
            <img src={logo} />
          </a>
        </div>
        <div>
          <ul className="md:flex gap-10 justify-center items-center font-sans font-semibold hidden text-lg tracking-wide">
            <li className="hover:text-customPurple">
              <a
                href="/"
                className="active:border-b-2 active:border-b-customPurple"
              >
                Home
              </a>
            </li>
            <li className="hover:text-customPurple">
              <a
                href="#vision"
                className="active:border-b-2 active:border-b-customPurple"
              >
                About Us
              </a>
            </li>
            <li className="hover:text-customPurple">
              <a
                href="#services"
                className="active:border-b-2 active:border-b-customPurple"
              >
                Services
              </a>
            </li>
            <li className="hover:text-customPurple">
              <a
                href="#footer"
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
            <ul className="flex flex-col gap-10 font-sans animate-open-menu font-semibold text-2xl tracking-wide">
              <li>
                <a
                  href="/"
                  className="hover:opacity-60 active:border-b-2 active:border-b-customYellow"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#vision"
                  onClick={() => setShowMenu(false)}
                  className="hover:opacity-60 active:border-b-2 active:border-b-customYellow"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => setShowMenu(false)}
                  className="hover:opacity-60 active:border-b-2 active:border-b-customYellow"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  onClick={() => setShowMenu(false)}
                  className="hover:opacity-60 active:border-b-2 active:border-b-customYellow"
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
