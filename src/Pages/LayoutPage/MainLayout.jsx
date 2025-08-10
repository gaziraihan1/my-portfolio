import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <header className='p-2 md:py-3 lg:py-4 sticky top-0 z-50 bg-base-200'>
        <Navbar />
      </header>

      <main className='relative overflow-x-hidden px-6 lg:px-1 lg:w-11/12 2xl:w-10/12 mx-auto min-h-screen'>
        <Outlet />
      </main>

      <footer className=''>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
