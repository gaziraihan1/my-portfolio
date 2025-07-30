import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const links = (
    <>
      <li>
        <a href="#" className="hover:text-blue-400 transition-colors duration-300">Home</a>
      </li>
      <li>
        <a href="#about-me" className="hover:text-blue-400 transition-colors duration-300">About me</a>
      </li>
      <li>
        <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
      </li>
      <li>
        <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
      </li>
      <li>
        <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
      </li>
    </>
  );

  return (
    <nav className="z-50 flex justify-between items-center px-4 py-2 overflow-x-hidden">
      <div>
        <img
          src="/my-logo-3.avif"
          alt="Logo"
          className="w-10 h-10 lg:w-14 lg:h-14 rounded-full object-cover"
        />
      </div>

      <ul className="hidden lg:flex gap-8 text-base font-medium text-gray-300">
        {links}
      </ul>

      <div className="hidden lg:block">
        <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-opacity-80 transition-all duration-300">
          <a href="/resume-001.pdf" download>Resume</a>
        </button>
      </div>

      <div
        className="lg:hidden text-3xl text-gray-200 cursor-pointer"
        onClick={() => setMenuToggle(!menuToggle)}
      >
        {menuToggle ? <IoMdClose /> : <HiOutlineMenuAlt3 />}
      </div>

      {menuToggle && (
        <div className="lg:hidden absolute top-19 md:top-21 right-0 bg-base-200 py-4 px-8 rounded-md shadow-md border border-gray-700">
          <ul className="flex flex-col gap-4 text-center text-gray-200 font-medium">
            {links}
            <li>
              <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-opacity-80 transition-all duration-300">
                  <a href="/resume-001.pdf" download>Resume</a>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
