import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BackgroundAnimation from '../../Components/BackgroundAnimation/BackgroundAnimation';

const MainLayout = () => {
  return (
    <div>
      <BackgroundAnimation />
      <header className='px-6 py-2 md:px-12 lg:px-7 md:py-3 lg:py-4 sticky top-0 z-50 bg-base-100'>
        <Navbar />
      </header>

      <main className='relative overflow-x-hidden md:px-8 lg:px-0 lg:w-11/12 2xl:w-10/12 mx-auto min-h-screen'>
        <Outlet />
      </main>

      <footer className=''>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
