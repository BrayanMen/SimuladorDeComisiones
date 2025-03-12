import React from 'react'
import logo from '../assets/logo.png'


export default function Header() {
  return (
    <header className="bg-green-800 text-white sm:text-center p-4 shadow-lg relative">
        <h1 className='text-xl font-bold text center'>Asistente de Metas Mensuales</h1>
        <div className='absolute top-2 right-5 bg-white rounded-full p-2'>            
            <img src={logo} alt='logo' width={30} />
        </div>
      
    </header>
  )
}
