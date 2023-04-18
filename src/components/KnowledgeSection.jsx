import React from "react";
import FSideKnowledge from "./FSideKnowledge";
import SSideKnowledge from "./SSideKnowledge";


export default function KnowledgeSection(props){
    return (
        <div className="w-full h-screen bg-black px-9 pt-20 " id="knowledge">
            <p className="text-xl text-white lg:text-2xl lg:w-[49rem] lg:mx-auto lg:pt-2">{props.content}</p>
            <div className="flex justify-evenly pt-10 lg:w-[32rem] lg:mx-auto">
            <div className="border-r-2">
            <FSideKnowledge img="public\images\html-css-img.jpg"
            alt="HTML e CSS"
            subject="HTML e CSS"
            />
             <FSideKnowledge img="public\images\react-img.jpg"
            alt="React.js"
            subject="React.js"
            />
            <FSideKnowledge img="public\images\mongod-img.jpg"
            alt="Mongodb"
            subject="Mongodb" />
            </div>
            <div>
            <SSideKnowledge img="public\images\js-img.png"
            alt="Javascript"
            subject="Javascript"
            />
            <SSideKnowledge img="public\images\node-img.jpg"
            alt="Node.js"
            subject="Node.js"
            />
            </div>
            </div>
            <div className="pt-10 text-center">
            <p className="text-xl lg:text-2xl text-white">+ <span className="text-[#1FA1D8]">{props.fline}</span></p>
            <p className="text-xl lg:text-2xl text-white">+ <span className="text-[#EAA221]">{props.sline}</span></p>
            <p className="text-xl lg:text-2xl text-white">+ <span className="text-[#63D92C]">{props.tline}</span></p>
            </div>
        
            
        </div>
    )
}

 

