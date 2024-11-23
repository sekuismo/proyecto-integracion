// src/app/workshops/WorkshopPage.jsx
"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WorkshopList from "./components/WorkshopList";

const workshopsMock = [
  { id: 1, name: "Taller A", location: "Calle 123", rating: 4.5 },
  { id: 2, name: "Taller B", location: "Calle 456", rating: 3.8 },
  { id: 3, name: "Taller C", location: "Calle 789", rating: 4.2 },
];

const WorkshopPage = () => {
  const [workshops, setWorkshops] = useState(workshopsMock);
  const [filteredWorkshops, setFilteredWorkshops] = useState(workshops);

  const handleSearch = (query) => {
    const results = workshops.filter((workshop) =>
      workshop.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredWorkshops(results);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-pixel text-primary mb-4">Talleres Disponibles</h1>
      <SearchBar onSearch={handleSearch} />
      <WorkshopList workshops={filteredWorkshops} />
    </div>
  );
};

export default WorkshopPage;
