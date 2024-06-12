import { useState } from "react";
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaHackerrank} from 'react-icons/fa6'

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(true);

    const handleClick = () => {
        setIsHidden(!isHidden);
        
    };

  return (
    <nav className="h-16 flex flex-wrap justify-between items-center fixed left-0 right-0 top-0 py-2 lg:px-12 px-3 backdrop-blur-xl bg-transparent duration-100">
        <div className="flex flex-wrap items-center justify-center text-2xl gap-4 px-3">
            <a target="_blank" href="https://www.linkedin.com/in/ritesh-singh-533661190/" className="text-blue-500">
                <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/ritesh6916">
                <FaGithub />
            </a>
            <a target="_blank" href="https://www.hackerrank.com/profile/RITESHSINGH0500" className="text-green-600">
            <FaHackerrank />
            </a>
        </div>

        <div className="hidden md:block px-3">
            <ul className="flex gap-6 text-md font-bold">
                <li>
                    <a href="#home" className="hover:text-white text-[#7587ec] duration-200">Home</a>
                </li>
                <li>
                    <a href="#about" className="hover:text-white text-[#7587ec] duration-200">About</a>
                </li>
                <li>
                    <a href="#experience" className="hover:text-white text-[#7587ec] duration-200">Experience</a>
                </li>
                <li>
                    <a href="#technologies" className="hover:text-white text-[#7587ec] duration-200">Technologies</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-white text-[#7587ec] duration-200">Projects</a>
                </li>
                
                <li>
                    <a href="#other" className="hover:text-white text-[#7587ec] duration-200">Education</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-white text-[#7587ec] duration-200">Contact</a>
                </li>
            </ul>
        </div>

        <button 
            className="md:hidden focus:outline-none w-12 px-3"
            onClick={handleClick}
            onBlur={() => setTimeout(() => setIsHidden(!isHidden), 1000)}
        >
            <svg className="h-6 w-10 text-white" fill="none" viewBox="0 0 24 22" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
        <div className={`${ isHidden ? "hidden" : "block" } md:hidden w-44 absolute top-14 right-4 border bg-gray-900 rounded-xl`}>
            <ul className="flex flex-col font-medium justify-center">
                <li className="border-b">
                    <a className="block py-2 pr-4 pl-3 duration-200 hover:border hover:border-gray-100 hover:bg-gray-800 rounded-lg m-1 lg:hover:bg-transparent lg:border-0 hover:text-white text-[#7587ec] lg:p-0" href="#">Home</a>
                </li>
                <li className="border-b">
                    <a className="block py-2 pr-4 pl-3 duration-200 hover:border hover:border-gray-100 hover:bg-gray-800 rounded-lg m-1  lg:hover:bg-transparent lg:border-0 hover:text-white text-[#7587ec] lg:p-0" href="#about">About</a>
                </li>
                <li className="border-b">
                    <a className="block py-2 pr-4 pl-3 duration-200 hover:border hover:border-gray-100 hover:bg-gray-800 rounded-lg m-1  lg:hover:bg-transparent lg:border-0 hover:text-white text-[#7587ec] lg:p-0" href="#experience">Experience</a>
                </li>
                <li className="border-b">
                    <a className="block py-2 pr-4 pl-3 duration-200 hover:border hover:border-gray-100 hover:bg-gray-800 rounded-lg m-1  lg:hover:bg-transparent lg:border-0 hover:text-white text-[#7587ec] lg:p-0" href="#technologies">Technologies</a>
                </li>
                <li className="border-b">
                    <a className="block py-2 pr-4 pl-3 duration-200 hover:border hover:border-gray-100 hover:bg-gray-800 rounded-lg m-1  lg:hover:bg-transparent lg:border-0 hover:text-white text-[#7587ec] lg:p-0" href="#projects">Projects</a>
                </li>
                
                <li className="border-b">
                    <a className="block py-2 pr-4 pl-3 duration-200 hover:border hover:border-gray-100 hover:bg-gray-800 rounded-lg m-1  lg:hover:bg-transparent lg:border-0 hover:text-white text-[#7587ec] lg:p-0" href="#other">Other</a>
                </li>
                <li>
                    <a className="block py-2 pr-4 pl-3 duration-200 hover:border hover:border-gray-100 hover:bg-gray-800 rounded-lg m-1  lg:hover:bg-transparent lg:border-0 hover:text-white text-[#7587ec] lg:p-0" href="#contact">Contact me</a>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
