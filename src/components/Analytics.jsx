import React from "react";
import laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="font-bold uppercase text-[#00df9a]">
            Dashboard de Análise de dados
          </p>

          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Gerencie Análise de Dados</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit veniam porro facilis cupiditate mollitia fuga tempore, ullam voluptatibus amet quisquam aperiam delectus natus necessitatibus ducimus asperiores nihil sapiente eius?
          </p>

          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">Comece Agora</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
