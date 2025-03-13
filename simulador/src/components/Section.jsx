import React from 'react'

export default function Section({ title, icon, children, extra }) {
    return (
        <div className='bg-gray-100 rounded-sm shadow-2xl overflow-hidden my-2 flex flex-col w-full h-full'>
            <div className='bg-green-500 text-gray-700 p-3 flex items-center justify-between'>
                <div className='flex items-center'>
                    {icon}
                    <h2 className='font-semibold text-md ml-2'>{title}</h2>
                </div>
                {extra && <span className='text-sm font-medium'>{extra}</span>}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
