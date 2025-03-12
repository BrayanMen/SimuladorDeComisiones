import React from 'react'

export default function AlertToast({ message, visible }) {
  return (
    <div className={`fixed bottom-16 left-0 right-0 mx-auto w-64 
    bg-green-600 text-white p-3 rounded-md shadow-lg text-center text-sm 
    transform transition-transform duration-300 
    ${visible ? 'translate-y-0' : 'translate-y-20'}`}>
      {message}
    </div>
  )
}
