import React from "react";
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { SiLinkedin, SiGithub } from "react-icons/si";


export default function Contact(props){
    return (
        <div className="w-full h-screen relative" id="contact">
            <div className="h-1/2 bg-[#1FA1D8] px-9 pt-24 lg:pt-26">
                <p className="text-xl text-white lg:w-[49rem] lg:mx-auto">{props.content}</p>
            </div>
            <div className="w-full h-24 flex justify-center gap-4 relative -top-12 lg:h-40 lg:gap-20 lg:-top-20">
            <div className="w-24 h-24 rounded-full bg-[#1FA1D8] lg:w-40 lg:h-40"></div>
            <div className=" flex items-center justify-center w-24 h-24 rounded-full bg-white lg:w-40 lg:h-40">
                <span className="text-[#1FA1D8] text-2xl font-pacifico">GT</span>
            </div>        
            <div className="w-24 h-24 rounded-full bg-[#1FA1D8] lg:w-40 lg:h-40"></div>
            </div>

            <div className=" text-xl text-[#33261D] text-center lg:relative lg:bottom-[10%]">
            <p className="pb-4">Contato</p>
            <p> <GiSmartphone className="inline"/>{props.phone}</p>
            <p className="mb-2"><HiOutlineMail className="inline pr-1"/>{props.email} </p>
            <div className="text-center"><a href={props.linkedinLink}><SiLinkedin className="inline mr-2"/></a>
            <a href={props.gitLink}><SiGithub className="inline"/></a></div>
            </div>

        
            
            
            

        </div>
    )
}

