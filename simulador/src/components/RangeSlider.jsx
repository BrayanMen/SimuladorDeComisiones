import React from 'react'

export default function RangeSlider({ min, max, step, valor, onChange, show, unidad = "" }) {
    return (
        <div className="relative m-4 text-gray-700">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={valor}
                onChange={onChange}
                className="w-full h-3 bg-gray-300 rounded-lg cursor-pointer range-thumb"
            />
            {show && (
                <div className="text-center font-bold text-gray-700 mt-1 text-sm">
                    {valor}
                    {unidad}
                </div>
            )}
        </div>
    )
}