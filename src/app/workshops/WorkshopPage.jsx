// src/app/workshops/WorkshopPage.jsx
"use client";

import { useWorkshops } from "../../context/WorkshopContext";
import SearchBar from "./components/SearchBar";
import WorkshopList from "./components/WorkshopList";
import { useState,useEffect } from "react";

const WorkshopPage = () => {
  const { workshops, loading, error } = useWorkshops();
  const [filteredWorkshops, setFilteredWorkshops] = useState([]);

  // Actualizar talleres filtrados cuando cambian los datos
  useEffect(() => {
    setFilteredWorkshops(workshops);
  }, [workshops]);

  if (loading) return <p>Cargando talleres...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-6 ">
      <h1 className="text-3xl font-pixel text-primary mb-6 text-center">
        Encuentra el Taller Perfecto
      </h1>

      <div className="flex flex-col lg:flex-row lg:gap-6">
        {/* Lista de talleres */}
        <section className="lg:w-3/4 w-full">
          <WorkshopList workshops={filteredWorkshops} />
        </section>

        {/* Barra de búsqueda */}
        <aside className="lg:w-1/4 w-full bg-neutral-light p-4 rounded-md shadow-md self-start">
          <h2 className="text-xl font-bold mb-4 text-neutral-dark">Búsqueda</h2>
          <SearchBar workshops={workshops} onSearch={setFilteredWorkshops} />
        </aside>
      </div>
    </div>
  );
};

export default WorkshopPage;
