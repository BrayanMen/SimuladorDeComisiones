import React from 'react'
import Section from '../components/Section.jsx'
import { DollarSign, DownloadCloudIcon, SlidersHorizontal, TargetIcon } from 'lucide-react';
import InputComp from '../components/InputComp.jsx';
import SelectComp from '../components/SelectComp.jsx';
import { calcularComision, formatoDeMoneda } from '../Utils/utils.js';
import { PRODUCTOS } from '../constants/dataInicial.js';
import RangeSlider from '../components/RangeSlider.jsx';
import Buttom from '../components/Buttom.jsx';

export default function SimulacionScreen({
    nivelAct, setNivelAct,
    productoSelec, setProductoSelec,
    metaGanancia, setMetaGanancia,
    ventasActuales, setVentasActuales,
    porcentajeFinal,
    showAlertApproved,
    productoActual,
    comisionActual,
    tengoQueVender,
    volumenCarrera,
    totalVentasMes,
    porcentajeDisplay
}) {

    return (
        <div className="space-y-4 pb-6">
            <Section
                title="Comisión Actual"
                icon={<SlidersHorizontal size={16} />}>
                <div className='flex flex-col text-center justify-center'>
                    <SelectComp
                        label="Simulador de Venta Personal"
                        valor={productoSelec}
                        onChange={(e) => setProductoSelec(e.target.value)}
                        opciones={PRODUCTOS.map(p => p.nombre)} />
                    <p className='mb-2 justify-center text-gray-500 font-semibold'>
                        {productoActual.precio}
                    </p>
                </div>
                <RangeSlider
                    min={10}
                    max={40}
                    step={5}
                    valor={nivelAct}
                    onChange={(e) => setNivelAct(parseInt(e.target.value))}
                    show={true}
                    unidad="%" />
                <div className="grid grid-cols-5 gap-1 mx-2 mb-3">
                    {[10, 15, 20, 35, 40].map((nivel, i) => (
                        <div key={i} className={`border bg-gray-200 rounded-md p-1 text-center ${nivel === nivelAct ? 'bg-blue-50 border-green-900' : ''}`}>
                            <p className="text-xs text-green-700 font-medium">
                                {nivel}%
                            </p>
                            <p className="font-bold text-green-900 text-xs">
                                ${Math.round(calcularComision(productoActual.precio, nivel)).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between m-4 text-gray-700 items-center p-2 bg-gray-50 rounded-md">
                    <p className="font-medium text-sm">Tu Ganancia Neta Hoy:</p>
                    <p className="text-lg font-bold border px-2 rounded-xl bg-gray-200 text-green-600">
                        ${Math.round(comisionActual).toLocaleString()}
                    </p>
                </div>
            </Section>
            <Section
                title='Comisiones Esperadas'
                icon={<DollarSign size={20} />}>
                <div className='mx-4 mt-4'>
                    <div className='flex justify-between text-black'>
                        <p className='font-medium'>Progreso </p>
                        <p className='font-medium'>{porcentajeDisplay}%</p>
                    </div>
                    <div className="w-auto mt-2 bg-gray-300 rounded-full h-2.5">
                        <div
                            className="bg-green-600 h-2.5 rounded-full"
                            style={{ width: `${porcentajeFinal}%` }}>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between text-gray-700 items-center px-4 py-2 bg-green-50 rounded-lg">
                    <p className="font-medium ">Total Comisiones:</p>
                    <p className="text-lg font-bold text-green-700">
                        {formatoDeMoneda(comisionActual)}
                    </p>
                </div>
            </Section>
            <Section
                title='¿Cuanto quiero ganar este mes en mi Venta Personal?'
                icon={<TargetIcon size={20} />}>
                <InputComp
                    label='Meta de Ganancia'
                    valor={metaGanancia}
                    onChange={(event) => { setMetaGanancia(parseInt(event.target.value)) }}
                    type='number' />
                <InputComp
                    label="Ventas Actuales del Mes (Simulacion)"
                    valor={ventasActuales} onChange={(event) =>
                        setVentasActuales(parseInt(event.target.value))}
                    type="number" />
                <div className="text-center p-3 bg-blue-50 rounded-lg mb-2">
                    <p className="text-sm text-gray-600">Estás actualmente al</p>
                    <p className="text-2xl font-bold text-green-700">{porcentajeDisplay}%</p>
                    <p className="text-sm text-gray-600">de tu meta</p>
                </div>
                <div className='text-gray-700 grid grid-cols-3'>
                    {[{ label: "Tengo que Vender:", value: `$ ${tengoQueVender.toLocaleString()}` },
                    { label: "Volumen en carrera de:", value: `${volumenCarrera} USD` },
                    { label: "Ventas en el Mes", value: Math.round(totalVentasMes) }]
                        .map((item, i) => (
                            <div key={i} className='flex flex-col shadow-xl mb-6 bg-gray-200 rounded-sm m-2 p-2 text-center '>
                                <p className='font-bold text-lg text-gray-800'>
                                    {item.label}
                                </p>
                                <p className='text-green-700 text-xl font-bold'>
                                    {item.value}
                                </p>
                            </div>
                        ))}
                </div>
            </Section>
            <Buttom text="Guardar Configuración"
                icon={<DownloadCloudIcon size={20} />}
                onClick={() => showAlertApproved('¡Guardado correctamente!')}
                className="w-full" />
        </div>
    )
}
