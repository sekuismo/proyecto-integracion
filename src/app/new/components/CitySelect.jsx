"use client"
import React from 'react';

const CitySelect = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="city" className="block text-gray-700">Ciudad</label>
      <select
        id="city"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Santiago">Santiago</option>
      </select>
    </div>
  );
};

export default CitySelect;
