import React from "react";

export default function FSideKnowledge(props){
    return (
        <div className="flex items-center py-4 ">
            <img className="w-12 h-12 rounded-full " src={props.img} alt={props.alt}/>
            <p className="text-white text-xl px-3 lg:text-2xl lg:px-8">{props.subject}</p>
        </div>
    );
}