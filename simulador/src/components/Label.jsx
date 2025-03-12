import React from 'react'

export default function Label({texto}) {
  return (
    <label className='block text-md font-medium text-gray-600 my-1'>{texto}</label>
  )
}
