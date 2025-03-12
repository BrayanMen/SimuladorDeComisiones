import React from 'react'
import Label from './Label'

export default function Select({ label, valor, onChange, opciones }) {
  return (
    <div className='mb-2'>
        {label && <Label texto={label}/>}
        <select value={valor}
        onChange={onChange}
        className='w-full p-2 border-black text-xm'>
            {opciones.map((opcion, id)=>(
                <option value={opcion} key={id}>{opcion}</option>
            ))}
        </select>
    </div>
  )
}
