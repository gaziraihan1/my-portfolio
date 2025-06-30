import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className="mt-12 md:mt-20 lg:mt-28 2xl:mt-36 bg-base-300">
            <div className='p-10 md:p-16 lg:p-20'>

            <div className=' flex flex-col md:flex-row md:text-left justify-center items-center text-center md:justify-between max-w-3xl mx-auto gap-4 md:items-start'>
                
      <div>
        <h2 className="text-lg text-gray-100 md:text-xl font-medium">Direct Links</h2>
        <ul className="space-y-1 md:space-y-3 mt-2 md:mt-4">
          <li>
          <a className="text-gray-200" href='#'>Home</a>
        </li>
        <li>
          <a className="text-gray-200" href='#about-me'>About me</a>
        </li>
        <li>
          <a className="text-gray-200" href='#skills'>All Skills</a>
        </li>
        <li>
          <a className="text-gray-200" href='projects'>Projects</a>
        </li>
        <li>
          <a  className="text-gray-200" href='#contact'>Contact</a>
        </li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg md:text-xl font-medium text-gray-100">Social Links</h2>
        <ul className="flex gap-2 md:gap-4 mt-2 md:mt-4 justify-center ">
          <li>
            <SocialIcon style={{height: 36, width: 36}} url="https://x.com/raihangazy90" />
          </li>
          <li>
            <SocialIcon style={{height: 36, width: 36}} url="https://github.com/gaziraihan1" />
          </li>
          <li>
            <SocialIcon style={{height: 36, width: 36}} url="https://www.linkedin.com/in/mohammad-raihan-gazi"/>
          </li>
        </ul>
      </div>
            </div> 
            <p className="text-center text-gray-400 text-sm mt-8">
  &copy; 2025 Mohammad Raihan Gazi. All rights reserved.
</p>
            </div>
        </div>
    );
};

export default Footer;