import React from "react";

export default function About(props){
    return (
        <div id="perfil" className="pt-28 h-screen w-full bg-white">
            <h1 className="text-center text-[#33261D] text-xl lg:text-2xl">Meu nome é <span className="text-[#1FA1D8]">{props.name}</span>.</h1>
            <div className="lg:flex lg:h-[24rem] lg:items-center lg:mt-4 ">
            <div className="h-60  my-8 mx-auto lg:w-[25rem] lg:h-[25rem]">
            
                <div className="bg-[#1488FA] w-32 h-32 rounded-full relative left-[50%] lg:h-56 lg:w-56 lg:left-54 top-6 "></div>
                <div className="bg-[#1488FA] w-8 h-8 rounded-full relative left-[24%] bottom-[50%]   sm:invisible md:invisible lg:visible  lg:w-12 lg:h-12 lg:left-6 lg:bottom-44 "></div>
                <div className="bg-[#1488FA] w-8 h-8 rounded-full relative left-[66%] -bottom-[8%]  sm:invisible md:invisible lg:visible lg:w-12 lg:h-12 lg:left-80 lg:-bottom-10"></div>
                <img className="w-44 h-44 rounded-full relative m-auto bottom-[70%] lg:w-80 lg:h-80 lg:bottom-[70%]" src={props.img} alt={props.alt} />
                
            </div>
            
                <div className="w-64 mx-auto  lg:w-[25rem]">
                <p className="text-[#33261D] text-xl lg:text-2xl my-2">{props.fContent}</p>
                <p className="text-[#33261D] text-xl lg:text-2xl my-2">{props.sContent}</p>
                </div>
            </div>
            
        </div>
    )
}

/*
                <div className="bg-[#1488FA] w-32 h-32 rounded-full relative left-48 lg:h-56 lg:w-56 lg:left-54 top-6 "></div>
                <div className="bg-[#1488FA] w-8 h-8 rounded-full relative left-20 bottom-28 lg:w-12 lg:h-12 lg:left-6 lg:bottom-44 "></div>
                <div className="bg-[#1488FA] w-8 h-8 rounded-full relative left-64 -bottom-4 lg:w-12 lg:h-12 lg:left-80 lg:-bottom-10"></div>
                <img className="w-44 h-44 rounded-full relative m-auto bottom-44 lg:w-80 lg:h-80 lg:bottom-[70%]" src={props.img} alt={props.alt} />

                
                left-[24%] bottom-[50%]
                left-[66%] -bottom-[8%]
*/

