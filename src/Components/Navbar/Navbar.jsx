import React, { useState } from 'react';
import { Link } from 'react-router';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);



  const links = (
    <>
      <li><a href='#'>Home</a></li>
      <li><a href="#about-me">About me</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </>
  );

  return (
    <nav className=" z-50 flex justify-between items-center px-4 py-2 overflow-x-hidden">
      <div>
        <img src="/my-logo-3.png" alt="Logo" className="w-10 h-10 lg:w-14 lg:h-14 rounded-full" />
      </div>

      <ul className="hidden lg:flex gap-8 text-base font-medium text-gray-300">
        {links}
      </ul>

      <div className="hidden lg:block">
        <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-opacity-80 transition cursor-pointer">
          Resume
        </button>
      </div>

      <div
        className="lg:hidden text-3xl cursor-pointer"
        onClick={() => setMenuToggle(!menuToggle)}
        aria-label="Open Menu"
      >
        {
          menuToggle ? <IoMdClose />: <HiOutlineMenuAlt3/>
        }
      </div>
        {
          menuToggle && <div className='absolute top-20 right-0 bg-base-200 py-4 px-8 rounded transition-all text-gray-200'>
            <ul className='flex flex-col gap-4 text-center'>
              {links}
              <li>
                <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-opacity-80 transition cursor-pointer">
          Resume
        </button>
              </li>
            </ul>
          </div>
        }
        
    </nav>
  );
};

export default Navbar;
