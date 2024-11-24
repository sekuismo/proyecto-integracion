"use client"
import React from 'react';

const CountrySelect = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="country" className="block text-gray-700">País</label>
      <select
        id="country"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Chile">Chile</option>
      </select>
    </div>
  );
};

export default CountrySelect;
