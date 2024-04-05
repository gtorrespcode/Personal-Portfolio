import React, { useState } from "react";

export default function About(props) {
  const [warning, setWarning] = useState(false);

  // Função para alternar o estado da mensagem de aviso
  const toggleWarning = () => {
    setWarning(!warning);
  };

  return (
    <div
      id="perfil"
      className="flex flex-col justify-center gap-y-12 items-center h-screen w-full bg-white"
    >
      <h1 className="text-center text-[#33261D] text-xl md:text-2xl">
        Meu nome é <span className="text-[#1FA1D8]">{props.name}</span>.
      </h1>
      <div className="flex text-center md:text-left flex-col gap-y-4 md:flex-row md:w-2/5 md:gap-x-12 justify-between items-center">
        <img
          className="w-1/2 rounded-full "
          src={props.img}
          alt={props.alt}
        />
        <div className="w-1/2">
          <p className="text-[#33261D] text-xl md:text-2xl my-2">
            {props.fContent}
          </p>
          <p className="text-[#33261D] text-xl md:text-2xl my-2">
            {props.sContent}
          </p>
        </div>
      </div>
      
      {warning && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
          <p className="text-gray-800">
            Esse portfolio é bem antigo. Estou montando um novo para trazer meus
            projetos mais atuais. Obrigado! ❤
          </p>
          <button
            onClick={toggleWarning}
            className="mt-2 px-4 py-2 bg-[#1FA1D8] text-white rounded-lg"
          >
            Fechar
          </button>
        </div>
      )}

      {/* Botão para exibir a mensagem de aviso */}
      <button
        onClick={toggleWarning}
        className="px-4 py-2 bg-[#1FA1D8] uppercase text-lg text-white border-2 rounded-sm border-[#1FA1D8] hover:text-[#1FA1D8] hover:bg-transparent hover:scale-110"
      >
        Observação
      </button>
    </div>
  );
}