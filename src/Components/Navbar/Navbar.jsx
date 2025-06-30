import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
useEffect(() => {
  if (menuToggle) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = '';
  };
}, [menuToggle]);



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
    <nav className="relative z-50 flex justify-between items-center px-4 py-2  overflow-x-hidden">
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

      <button
        className="lg:hidden text-3xl cursor-pointer"
        onClick={() => setMenuToggle(true)}
        aria-label="Open Menu"
      >
        <HiOutlineMenuAlt3 />
      </button>

      <AnimatePresence>
        {menuToggle && (
          <>
            <motion.div
  className="fixed top-0 right-0 bg-opacity-40"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  onClick={() => setMenuToggle(false)}
/>

            <motion.div
  className="fixed top-0 right-0 h-full w-64 z-50 bg-base-200 rounded-e-lg lg:hidden"
  initial={{ x: '100%' }}
  animate={{ x: 0 }}
  exit={{ x: '100%' }}
  transition={{ type: 'tween', duration: 0.3 }}
>
              <div className="flex justify-end px-6 py-4 my-2">
                <button
                  className="text-3xl cursor-pointer"
                  onClick={() => setMenuToggle(false)}
                  aria-label="Close Menu"
                >
                  <IoMdClose />
                </button>
              </div>

              <ul className="flex flex-col gap-4 p-4 bg-base-300 text-base font-medium rounded text-center">
                {links}
                <li>
                  <button className="cursor-pointer w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-80 transition">
                    Resume
                  </button>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
