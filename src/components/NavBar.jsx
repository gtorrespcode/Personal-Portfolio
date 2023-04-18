import React, { useState, useEffect } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import '../index.css'
import { Link } from "react-scroll";


export default function Navbar(){

    const [mobileNav, setMobileNav] = useState(false);
    const changeNav = () => {
        if(window.innerWidth < 768){
            setMobileNav(!mobileNav);
        }
    }





    return (
        <header className=" w-full h-14 text-white bg-[#1FA1D8] opacity-95 px-6 py-3 shadow-lg flex items-center justify-between fixed lg:px-20 z-10 ">
                <h1 className="text-2xl font-pacifico">GT</h1>
                <nav className={mobileNav ? "fixed top-0 left-0 h-full w-1/2 bg-[#1FA1D8] flex items-center justify-center flex-col duration-300" : ""}>
                    <Link onClick={changeNav} to="perfil" spy={true} smooth={true}  duration={600} className={mobileNav ? "py-6 active:text-[#33261D]": "hidden cursor-pointer lg:inline lg:px-5 md:inline lg:cursor-pointer md:px-3 "}>Perfil</Link>
                    <Link onClick={changeNav} to="projects" spy={true} smooth={true} duration={600} className={mobileNav ? "py-6 active:text-[#33261D]": "hidden cursor-pointer lg:inline lg:px-5 md:inline md:px-3  "}>Projetos</Link>
                    <Link onClick={changeNav} to="knowledge" spy={true} smooth={true} duration={600} className={mobileNav ? "py-6 active:text-[#33261D]": "hidden cursor-pointer lg:inline lg:px-5 md:inline md:px-3 "}>Conhecimentos</Link>
                    <Link onClick={changeNav} to="contact" spy={true} smooth={true} duration={600} className={mobileNav ? "py-6 active:text-[#33261D]": "hidden cursor-pointer lg:inline lg:px-5 md:inline md:px-3 "}>Contato</Link>
                    
                </nav>
                <button onClick={changeNav} className="text-2xl lg:hidden md:hidden">
                        <FaBars/>
                    </button>
        </header>
    );
    
}

/*
nav h-14
abou h-28
 */