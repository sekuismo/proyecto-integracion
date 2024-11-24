"use client"
import React from 'react'
import WorkshopForm from './components/WorkshopForm'

function page() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Agregar Nuevo Taller</h1>
            <WorkshopForm />
        </div>

    )
}

export default page