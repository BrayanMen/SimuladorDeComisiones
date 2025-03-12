import React from 'react'

export default function RangeSlider({ min, max, paso, valor, onChange, show, unidad = "" }) {
    return (
        <div className='relative'>
            <input
                type="range"
                min={min}
                max={max}
                step={paso}
                value={valor}
                onChange={onChange}
                className='w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer' />
            {show && <div className='text-center font-bold text-red-600 mt-1 text-sm'>
                {valor}{unidad}
            </div>
            }
        </div>
    )
}
