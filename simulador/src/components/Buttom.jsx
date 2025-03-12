import React from 'react'

export default function Buttom({texto, icon, onClick,showAlerta, variante = "primaria"}) {
  return (
    <button
    onClick={()=>{
        onClick();
        showAlerta(`¡${texto} correctamente!`)
    }}
    className={`
        w-full font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center text-md mb-2
        ${variante === "primaria"? "bg-green-800 hover:bg-green-500 text-white":
        variante === "secundaria" ? "bg-gray-200 hover:bg-gray-300 text-black" :
        variante === "success" ? "bg-green-600 hover:bg-green-700 text-white" : ""}
        `}
    >
        {icon && <span className='mr-2'>{icon}</span>}
        {texto}
    </button>
  )
}
