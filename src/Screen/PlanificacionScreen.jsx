import React from 'react'
import Section from '../components/Section'
import { TargetIcon } from 'lucide-react'

export default function PlanificacionScreen({
  nuevosProspectos,
  presentacionesPorSemana,
  presentacionesNecesarias,
  tasaCierre,
  distribucionPorSemana,
}) {
  let dia = new Date().getUTCDate();
  let mes = new Date().getUTCMonth();
  let año = new Date().getUTCFullYear();
  let fecha = `${dia}/${mes}/${año}`

  return (
    <div className='space-y-2'>
      <Section
        title={`TU PLAN DE ACCIÓN desde HOY: ${fecha}`}
        icon={<TargetIcon />}>
        <div className='text-gray-700 py-4 grid grid-cols-3'>
          {[{ label: "Nuevos Datos a Prospectar:", value: nuevosProspectos },
          { label: "Mínimo Presentaciones por Mes: ", value: presentacionesNecesarias },
          { label: "Minimo Presentaciones por Sem:", value: presentacionesPorSemana }]
            .map((item, i) => (
              <div key={i} className='flex flex-col shadow-xl mb-2 bg-gray-200 rounded-sm m-2 p-2 text-center '>
                <span className='font-bold text-sm md:text-lg text-gray-800'>
                  {item.label}
                </span>
                <span className='text-green-700 text-xl font-bold'>
                  {item.value}
                </span>
              </div>
            ))}
        </div>
        <div className='mb-6 rounded-sm p-2 text-center '>
          <span className='font-bold text-lg text-gray-800'>
            Capacitación Mínima Sugerida entre Campus Virtual y Oficina:
          </span>
          <br></br>
          <span className='text-green-800 text-xl font-bold'>
            20Hs semanales
          </span>
        </div>
        <div className="mx-4 my-6 text-center">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Distribucion por semana
          </h3>
          <div className="bg-gray-500 rounded-md mx-4 px-8 py-2">
            <div className="flex justify-between mb-1">
              {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'].map((sem, i) => (
                <span key={i} className="text-xs font-medium">
                  {sem}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              {distribucionPorSemana.map((valor, i) => (
                <span key={i}
                  className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-semibold text-xs">
                  {valor.toFixed(1)}
                </span>
              ))}
            </div>
          </div>
          <span className="text-center text-xl font-bold text-gray-600 mt-1">
            {(tasaCierre)} % de tasa de cierre
          </span>
        </div>
      </Section>
    </div>
  )
}