import React from 'react'
import { icons } from 'lucide-react'
import { NAVEGACION } from '../constants/dataInicial';

export default function Navigation({ activeNav, setActiveNav }) {
  return (
    <div className='flex border-b border-gray-300 content-between justify-between bg-green-500 sticky top-0 z-10 '>
      {NAVEGACION?.map(navItem => {
        const Icon = icons[navItem.icon];
        return (
          <button
            key={navItem.id}
            onClick={() => setActiveNav(navItem.id)}
            className={`p-3 w-full ${activeNav === navItem.id ? 'bg-green-700 text-white' : 'text-gray-600 font-semibold hover:bg-green-700 hover:text-white'}`}>
            <div className='flex flex-col items-center'>
              <Icon size={25} />
              <span className="text-md mt-2">{navItem.label}</span>
            </div>
          </button>
        )
      })}
    </div>
  )
}