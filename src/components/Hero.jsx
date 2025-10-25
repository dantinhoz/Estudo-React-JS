import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 uppercase">
          Crescendo com análise de dados
        </p>

        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Cresça com dados.
        </h1>

        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Rápido, acessível para
          </p>

          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SaSS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <p className="md:text-2xl text-xl text-gray-500 font-bold">Monitore suas análises de dados para aumentar plataformas BTB, BTC, & SaSS.</p>

        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Comece Agora</button>
      </div>
    </div>
  );
}

export default Hero;
