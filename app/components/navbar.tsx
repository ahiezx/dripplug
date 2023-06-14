"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function IconsDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-auto">
      <button
        onClick={toggleIcons}
        className="px-3 py-2 text-sm font-medium text-green-400 hover:text-neutral-500 w-full  focus:outline-none focus:text-green-400 bg-neutral-900 hover:bg-neutral-900 shadow-md"
        style={{
          borderBottom: "#333 1.5px dotted",
        }}
      >
        <i className="fa fa-ellipsis-h"></i>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-sm bg-neutral-800 shadow-lg text-white">
          {/* <a
            href="/explore"
            className="block px-5 py-3 text-sm hover:bg-neutral-900 hover:text-green-500"
          >
            <i className="text-green-500 fa fa-compass"></i>
            <span className="mx-2">Explore</span>
          </a>           */}
          <a
            href="/calculator"
            className="block px-5 py-3 text-sm hover:bg-neutral-900 hover:text-green-500"
          >
            <i className="text-green-500 fa fa-calculator"></i>
            <span className="mx-2">Calculator</span>
          </a>
          <a
            href="/calculator"
            className="block px-5 py-3 text-sm hover:bg-neutral-900 hover:text-green-500"
          >
            <i className="text-green-500 fa fa-boxes"></i>
            <span className="mx-2">Tracker</span>
          </a>          
          {/* <a
            href="/outfits"
            className="block px-5 py-3 text-sm hover:bg-neutral-900 hover:text-green-500"
          >
            <i className="text-green-500 fa fa-sunglasses"></i>
            <span className="mx-2">Outfits</span>
          </a>
          <a
            href="/finds"
            className="block px-5 py-3 text-sm hover:bg-neutral-900 hover:text-green-500"
          >
            <i className="text-green-500 fa fa-heart"></i>
            <span className="mx-2">Best Finds</span>
          </a> */}
        </div>
      )}
    </div>
  );
}

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="">
      <nav
        style={{
          backgroundColor: "#111",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          width: "100%",
          zIndex: 1000,
        }}
        className="fixed top-0 left-0 right-0 shadow-lg"
      >
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* Your logo */}
                <a href="/">
                  <img
                    src="/images/logo-full3.png"
                    alt="Drip Plug Logo"
                    className="select-none
                    h-16
                    w-auto
                    "
                    draggable={false}
                  />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {/* Navigation links */}
                {/* <a
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-green-400 hover:text-neutral-500 focus:outline-none focus:text-green-400"
                >
                  Home
                </a> */}
                <a
                  href="#"
                  className={`relative px-3 py-2 rounded-md text-sm font-medium text-green-400 hover:text-neutral-500 focus:outline-none focus:text-green-400 ${
                    isDropdownOpen ? "text-neutral-500" : ""
                  }`}
                  onClick={toggleDropdown}
                >
                  {/* Categories */}
                  {isDropdownOpen && (
                    <div className="fixed left-0 mt-7 shadow-lg bg-neutral-200 text-black w-full md:h-full overflow-auto">
                      <h2
                        className="
                    text-2xl
                    font-bold
                    text-neutral-800
                    px-4
                    pt-4
                    underline

                    "
                      >
                        Categories
                      </h2>
                      <div className="flex items-top flex-wrap">
                        <div className="w-full md:w-1/6">
                          <div className="p-4">
                            <div className="text-lg font-bold">Nike</div>
                            <hr className="bg-green-600 h-1" />
                            <div className="mt-2">
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Tracksuits
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                T-shirts
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Hoodies
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Pants
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Misc & Accessories
                              </a>
                              <h4 className="my-2">Shoes & Sneakers: </h4>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Air Force 1
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Dunks
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Jordan 1 & 4
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Vapormax & 97 Max
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-1/6">
                          <div className="p-4">
                            <div className="text-lg font-bold">
                              Louis Vuitton
                            </div>
                            <hr className="bg-green-600 h-1" />
                            <div className="mt-2">
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Bags
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Misc & Accessories
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Pants
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Shorts
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Shoes
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                T-shirts
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-1/6">
                          <div className="p-4">
                            <div className="text-lg font-bold">Balenciaga</div>
                            <hr className="bg-green-600 h-1" />
                            <div className="mt-2">
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Shoes
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Pants
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                T-shirts
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Bags
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Misc & Accessories
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-1/6">
                          <div className="p-4">
                            <div className="text-lg font-bold">Trapstar</div>
                            <hr className="bg-green-600 h-1" />
                            <div className="mt-2">
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Jackets/Vests
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Hoodies
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Tracksuits
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                T-shirts
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Misc & Accessories
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-1/6">
                          <div className="p-4">
                            <div className="text-lg font-bold">Amiri</div>
                            <hr className="bg-green-600 h-1" />
                            <div className="mt-2">
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Hoodies
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                T-shirts
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Pants
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-1/6">
                          <div className="p-4">
                            <div className="text-lg font-bold">PRADA</div>
                            <hr className="bg-green-600 h-1" />
                            <div className="mt-2">
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Tracksuit
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Misc & Accessories
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Bags
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-1/6">
                          <div className="p-4">
                            <div className="text-lg font-bold">GUCCI</div>
                            <hr className="bg-green-600 h-1" />
                            <div className="mt-2">
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                T-shirts
                              </a>
                              <a
                                href="#"
                                className="block text-neutral-800 shadow-sm text-xs hover:bg-green-500 mb-0.5 px-2 py-2 text-sm font-medium bg-neutral-300"
                              >
                                Misc & Accessories
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </a>
                <div className="flex space-x-2 mx-3 pr-3" style={
                  {
                    borderRight: '1px solid #22C55E',
                  }
                }>
                  {/* <a href="#" className="block rounded-sm px-5 py-2 text-sm bg-neutral-800 hover:bg-green-700 hover:text-white shadow-md"><i className="text-green-500 fa fa-info-circle"></i> Contact</a> */}
                  <a
                  href="/search"
                  className="block px-5 py-2 text-sm bg-neutral-800 text-green-500 hover:bg-green-700 hover:text-white shadow-md"
                >
                  <i className=" fa fa-search"></i>
                  <span className="mx-2 text-white">Search</span>
                </a>
                <a
                  href="/explore"
                  className="block px-5 py-2 text-sm bg-neutral-800 text-green-500 hover:bg-green-700 hover:text-white shadow-md"
                >
                  <i className="fa fa-compass"></i>
                  <span className="mx-2 text-white">Explore</span>
                </a>                                  
                </div>
                <IconsDropDown />
                {/* <div className="flex">
                <a
                  href="/calculator"
                  className="px-3 py-2 rounded-md text-sm font-medium text-green-400 hover:text-neutral-500 focus:outline-none focus:text-green-400"
                >
                  <i className="fa fa-calculator"></i>
                </a>                            
                <a
                  href="/outfits"
                  className="px-1 py-2 rounded-md text-sm font-medium text-green-400 hover:text-neutral-500 focus:outline-none focus:text-green-400"
                >
                  <i className="fa fa-sunglasses"></i>
                </a>  
                <a
                  href="/finds"
                  className="px-1 py-2 rounded-md text-sm font-medium text-green-400 hover:text-neutral-500 focus:outline-none focus:text-green-400"
                >
                  <i className="fa fa-heart"></i>
                </a>  
                <a
                  href="/explore"
                  className="px-1 py-2 rounded-md text-sm font-medium text-green-400 hover:text-neutral-500 focus:outline-none focus:text-green-400"
                >
                  <i className="fa fa-compass"></i>
                </a>  
                </div>                                           */}
                {/* More navigation links */}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Hamburger menu button */}
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-neutral-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-green-400 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="fa fa-bars"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible menu for small devices */}
        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Navigation links */}
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:text-neutral-500 focus:outline-none focus:text-green-400"
            >
              Home
            </a>
            <a
              href="#"
              className={`block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:text-neutral-500 focus:outline-none focus:text-green-400 ${
                isDropdownOpen ? "text-neutral-500" : ""
              }`}
              onClick={toggleDropdown}
            >
              Categories
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  {/* Dropdown items */}
                  <ul className="py-1">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Option 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Option 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Option 3
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:text-neutral-500 focus:outline-none focus:text-green-400"
            >
              Account
            </a>
            {/* More navigation links */}
          </div>
        </div>
      </nav>
      <div className="py-10 bg-green-500"></div>
    </div>
  );
};

export default Navbar;
