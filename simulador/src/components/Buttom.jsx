import React from 'react'

export default function Buttom({ texto, icon, onClick }) {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={`
        w-full font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center text-md mb-2 bg-green-500 hover:bg-green-700 text-white"  
        `}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {texto}
    </button>
  )
}
