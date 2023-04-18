import { useState } from 'react'
import Header from './components/NavBar';
import About from './components/About';
import './App.css'
import KnowledgeSection from './components/KnowledgeSection';
import ProjectSection from './components/ProjectSection';
import Contact from './components/Contact';
import Navbar from './components/NavBar';
import './index.css'


function App() {

  return (
    <div className="App">
    <Navbar />
    <About name="Gabriel Torres" 
    img="src\assets\profile-photo.jpeg"
    alt="Minha foto"
    fContent={<p>SOU BACHAREL EM SISTEMAS DE INFORMAÇÃO E <span className='text-[#1FA1D8]'>DESENVOLVEDOR FRONT-END</span>.</p>} 

    sContent={<p>AQUI VOCÊ IRÁ ENCONTRAR INFORMAÇÕES SOBRE
MIM QUE PODEM DESPERTAR SEU <span className='text-[#800020]'>INTERESSE</span>.</p>}
    
    />
    <ProjectSection content={<p>Comecei fazer alguns projetos simples em <span className='text-[#1FA1D8]'>2021</span>, usando apenas <span className='text-[#EAA221]'>HTML</span> E <span className='text-[#EAA221]'>CSS</span>.  aqui estão alguns deles.</p>}/>

    <KnowledgeSection content={<p>Em <span className='text-[#1FA1D8]'>2022</span> comecei a procurar pelas tecnologias mais <span className='text-[#1FA1D8]'>populares</span> do mercado e estudei sobre desenvolvimento <span className='text-[#EAA221]'>back-end</span> e <span className='text-[#63D92C]'>Banco de dados</span>.
segue aqui uma lista com tudo que aprendi.</p>}

      fline="Tailwind css, bootstrap e jquery"
      sline="EXPRESS.JS E PYTHON"
      tline="MYSQL"
    />
    <Contact content={<p>ESSE ANO ESTOU À PROCURA DE UMA VAGA COMO DESENVOLVEDOR PARA APRIMORAR MINHAS <span className='text-[#800020]'>HABILIDADES</span> E contribuir para projetos desafiadores que me permitam aplicar meu <span className='text-[#800020]'>conhecimentos</span>.</p>}
    phone="(21) 96773-8931"
    email="gabrieltorresp2009@gmail.com"
    />

    </div>
  )
}


export default App;
