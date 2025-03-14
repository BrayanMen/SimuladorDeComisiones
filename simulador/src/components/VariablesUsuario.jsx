import React from 'react'
import { MESES } from '../constants/dataInicial';
import Section from './Section';
import InputComp from './InputComp';
import SelectComp from './SelectComp';
import { Users } from 'lucide-react';

export default function VariablesUsuario({userData,setUserData}) {
    const handlerUserData = (campo, valor) => {
        setUserData({ ...userData, [campo]: valor })
    };
  return (
    <div className="mx-4 sm:my-2">
            <Section title="Variables de Usuario" icon={<Users size={20} />}>                
                <div className='my-1 grid grid-cols-2'>
                    <InputComp
                        label="Nombre de Socio/a"
                        valor={userData.nombre}
                        onChange={(event) => handlerUserData('nombre', event.target.value)} />
                    <SelectComp
                        label='Mes'
                        valor={userData.mes}
                        onChange={(event) => handlerUserData('mes', event.target.value)}
                        opciones={MESES}
                    />
                    <InputComp
                        label="Mi Ticket Promedio en USD"
                        valor={userData.ticketPromedio}
                        onChange={(event) => handlerUserData('ticketPromedio', event.target.value)} />
                    <InputComp
                        label="Valor USD ( Valor de cambio )"
                        valor={userData.valorUSD}
                        onChange={(event) => handlerUserData('valorUSD', event.target.value)} />
                </div>
            </Section>
        </div>
  )
}
