import React from 'react';
import { Link, Outlet } from 'react-router';

const ProjectLayout = () => {
    return (
        <div className='my-10'>
            <div className='text-center'>
                <Link className='text-xl btn btn-primary' to={'/'}>Home</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default ProjectLayout;