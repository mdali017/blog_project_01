import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Container from "../common/Container";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="relative  shadow ">
        <div className="container px-6 py-3 mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <a href="#">
                  <img className="size-20" src={logo} alt="Logo" />
                </a>

                {/* Search input on desktop */}
                <div className="hidden mx-10 md:block">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md  focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-24  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col md:flex-row md:mx-1">
                <a
                  className="my-2 text-sm leading-5 text-gray-700 transition-colors  md:mx-4 md:my-0"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="my-2 text-sm leading-5 text-gray-700 transition-colors  md:mx-4 md:my-0"
                  href="#"
                >
                  Blog
                </a>
                <a
                  className="my-2 text-sm leading-5 text-gray-700 transition-colors  md:mx-4 md:my-0"
                  href="#"
                >
                  Why
                </a>
                <a
                  className="my-2 text-sm leading-5 text-gray-700 transition-colors  md:mx-4 md:my-0"
                  href="#"
                >
                  Career
                </a>
              </div>

              {/* Mobile search input */}
              <div className="my-4 md:hidden">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="w-full py-2 pl-10 pr-4 text-gray-700  border rounded-md   "
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal scroll section */}
        </div>
        <div className="bg-black">
          <Container>
            <div className="py-1  -mx-3 overflow-auto whitespace-nowrap no-scrollbar  scroll-hidden ">
              {[
                "Make Money",
                "Manage Money",
                "Invest",
                "Insurance",
                "Credit",
                "Debt",
                "Banking",
                "Retirement",
              ].map((item) => (
                <a
                  key={item}
                  className="mx-4 text-sm leading-5  text-white transition-colors   duration-300 "
                  href="#"
                >
                  {item}
                </a>
              ))}
            </div>
          </Container>
        </div>
      </nav>
    </div>
  );
};

export default Header;
