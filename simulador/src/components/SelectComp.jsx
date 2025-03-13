import React from 'react'
import Label from './Label'

export default function SelectComp({ label, valor, onChange, opciones }) {
  return (
    <div className='my-2 mx-4 text-black'>
        {label && <Label texto={label}/>}
        <select 
        value={valor}
        onChange={onChange}
        className='border border-gray-400 rounded-lg text-md p-2 w-full'>
            {opciones.map((opcion, id)=>(
                <option value={opcion} key={id}>{opcion}</option>
            ))}
        </select>
    </div>
  )
}
