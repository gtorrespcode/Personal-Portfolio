import React from "react";

export default function SSideKnowledge(props){
    return (
        <div className="flex items-center py-4 flex-row-reverse relative top-12">
            <img className="w-12 h-12 rounded-full" src={props.img} alt={props.alt}/>
            <p className="text-white text-xl pr-3 lg:text-2xl lg:pr-8">{props.subject}</p>
        </div>
    );
}