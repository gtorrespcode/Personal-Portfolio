import React from "react";
import Project from "./Project";

export default function ProjectSection(props){
    return (
        <div className="h-screen w-full bg-black pt-20 px-9" id="projects">

            <p className="text-center text-white text-xl lg:text-2xl lg:py-10">{props.content}</p>

            <div className="pt-10  text-center grid gap-x-2 gap-y-14 grid-cols-2 grid-rows-2 justify-items-center lg:pt-20 lg:grid-cols-4 lg:grid-rows-1 " >
            <Project name="Documentação"
            link="https://codepen.io/gtorrespcode/pen/oNEwqvg"
            img="src\assets\Py-doc-img.png"
            alt="Foto do projeto de documentação"
            />
            <Project name="Site de vendas"
            link="https://codepen.io/gtorrespcode/pen/ExQyqqP"
            img="src\assets\Store-img.png"
            alt="foto do projeto site de vendas"
            />
            <Project name="Formulário"
            link="https://codepen.io/gtorrespcode/pen/PoQNQgw"
            img="src\assets\Survey-img.png"
            alt="foto do projeto formulário"
            />
            <Project name="Tributo"
            link="https://codepen.io/gtorrespcode/pen/PoQZogR"
            img="src\assets\Stanley-img.png"
            alt="foto do projeto tributo"
            />
            </div>
            
        </div>
    );
}