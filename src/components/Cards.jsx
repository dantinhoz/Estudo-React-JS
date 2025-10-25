import React from "react";
import profile from '../assets/profile.jpg';

function Cards() {
    return(
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={profile} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Único</h2>
                    <p className="text-center text-4xl font-bold">R$150</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Armazena 500GB</p>
                        <p className="py-2 border-b mx-8">1 usuário</p>
                        <p className="py-2 border-b mx-8">Envia até 2GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">Experimente Agora</button>
                </div>

                <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={profile} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Dupla</h2>
                    <p className="text-center text-4xl font-bold">R$250</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Armazena 700GB</p>
                        <p className="py-2 border-b mx-8">2 usuários</p>
                        <p className="py-2 border-b mx-8">Envia até 3GB</p>
                    </div>
                    <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 bg-black">Experimente Agora</button>
                </div>

                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={profile} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">Grupo</h2>
                    <p className="text-center text-4xl font-bold">R$450</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Armazena 1TB</p>
                        <p className="py-2 border-b mx-8">5 usuários</p>
                        <p className="py-2 border-b mx-8">Envia até 5GB</p>
                    </div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">Experimente Agora</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;