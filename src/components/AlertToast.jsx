import React from 'react'

export default function AlertToast({ message, visible }) {
  return (
    <div className={`fixed -bottom-10 left-0 right-0 mx-auto w-64 
    bg-green-600 text-white p-3 rounded-md shadow-xl text-center 
    transform transition-transform duration-300 
    ${visible ? '-translate-y-40' : 'translate-y-40'}`}>
      {message}
    </div>
  )
}
