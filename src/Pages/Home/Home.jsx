import React from 'react';
import Bannner from '../../Components/Banner/Bannner';
import About from '../../Components/About/About';
import Skills from '../../Components/Skill/Skills';
import Projects from '../../Components/Projects/Projects';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Bannner />
            <About />
            <Skills />
            <Projects />
        </div>
    );
};

export default Home;