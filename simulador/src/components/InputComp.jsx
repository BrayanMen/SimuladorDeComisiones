import React from 'react'
import Label from './Label'

export default function InputComp({label, valor, onChange, type ="text", className=""}) {
  return (
    <div className='my-2 mx-4 text-black'>
      {label && <Label texto={label}/>}
      <input
        type={type}
        value={valor}
        onChange={onChange}
        className={`border border-gray-400 rounded-lg text-md p-2 w-full ${className}`}
        />
    </div>
  )
}
