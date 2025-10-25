import React from "react";

function Newsletter() {
    return(
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Quer dicas para otimizar o seu processo?</h1>
                    <p>Se inscreva na nossa newsletter e fique atualizado.</p>
                </div>

                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Insira seu email" />
                        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black">Inscrever-se</button>
                    </div>
                    <p>Nos importamos com a sua proteção de dados. Leia nossa <span className="text-[#00df9a] underline">Política de Privacidade.</span></p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;