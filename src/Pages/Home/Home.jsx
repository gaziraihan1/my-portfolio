import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Bannner from '../../Components/Banner/Bannner';
import About from '../../Components/About/About';
import Skills from '../../Components/Skill/Skills';
import Projects from '../../Components/Projects/Projects';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Bannner />
            <About />
            <Skills />
            <Projects />
        </div>
    );
};

export default Home;