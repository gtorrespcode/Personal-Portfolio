import React from "react";

export default function Project(props){
    return (
        <div>
            <p className="text-white text-xl pb-6 lg:text-2xl" >{props.name}</p>
            <a href={props.link}>
            <img className="w-24 h-24 rounded-full blur-[1px] hover:blur-none lg:w-44 lg:h-32 lg:rounded-md" src={props.img} alt={props.alt}/>
            </a>
        </div>
    );
}