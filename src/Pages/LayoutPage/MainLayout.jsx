import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
        <header className='p-2 md:p-3 lg:p-4 mx-2 my-2 lg:w-11/12 2xl:w-10/12 lg:mx-auto lg:my-4 sticky top-0 z-50 bg-base-200 backdrop-blur-lg rounded-lg border border-gray-600 dark:border-gray-700'>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    );
};

export default MainLayout;