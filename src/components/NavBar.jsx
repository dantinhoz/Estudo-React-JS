import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

function NavBar() {
    const [nav, setNav] = useState(false);

    function handleNav() {
        setNav(!nav)
    };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240] mx-auto px-4 text-white">

      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

      <ul className="hidden md:flex">
        <li className="p-4">Inicio</li>
        <li className="p-4">Empresa</li>
        <li className="p-4">Recursos</li>
        <li className="p-4">Sobre</li>
        <li className="p-4">Contato</li>
      </ul>

      <div className="block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">REACT.</h1>

        <ul className="uppercase p-4">
             <li className="p-4 border-b border-gray-600">Inicio</li>
             <li className="p-4 border-b border-gray-600">Empresa</li>
             <li className="p-4 border-b border-gray-600">Recursos</li>
             <li className="p-4 border-b border-gray-600">Sobre</li>
             <li className="p-4">Contato</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
