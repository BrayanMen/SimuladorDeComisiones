import React from 'react'
import Section from '../components/Section.jsx'
import { Users } from 'lucide-react';

export default function SimulacionScreen() {
  return (
    <div className="space-y-4 pb-6">
      <Section title="Variables de Usuario" icon={<Users size={20}/>}>
      <div>{u}</div>
      </Section>
    </div>
  )
}
