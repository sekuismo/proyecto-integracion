"use client"
import React from 'react';

const communes = [
    'Alhué', 'Buin', 'Calera de Tango', 'Cerrillos', 'Cerro Navia', 'Colina', 'Conchalí',
    'Curacaví', 'El Bosque', 'El Monte', 'Estación Central', 'Huechuraba', 'Independencia',
    'Isla de Maipo', 'La Cisterna', 'La Florida', 'La Granja', 'La Pintana', 'La Reina',
    'Lampa', 'Las Condes', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 'Maipú',
    'María Pinto', 'Melipilla', 'Ñuñoa', 'Padre Hurtado', 'Peñaflor', 'Peñalolén', 'Pedro Aguirre Cerda',
    'Pirque', 'Providencia', 'Pudahuel', 'Puente Alto', 'Quilicura', 'Quinta Normal', 'Recoleta',
    'Renca', 'San Bernardo', 'San Joaquín', 'San José de Maipo', 'San Miguel', 'San Pedro',
    'San Ramón', 'Santiago', 'Talagante', 'Til Til', 'Vitacura'
];


const CommuneSelect = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor="commune" className="block text-gray-700">Comuna</label>
            <select
                id="commune"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="" disabled>Selecciona una comuna</option>
                {communes.map((commune) => (
                    <option key={commune} value={commune}>{commune}</option>
                ))}
            </select>
        </div>
    );
};

export default CommuneSelect;
