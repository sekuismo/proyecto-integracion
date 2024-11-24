"use client";

import SearchBar from "./components/SearchBar";
import WorkshopList from "./components/WorkshopList";
import { useState, useEffect } from "react";

const WorkshopPage = () => {
  const [workshops, setWorkshops] = useState([]);
  const [filteredWorkshops, setFilteredWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const res = await fetch("/api/data"); // Ruta simulada
        if (!res.ok) throw new Error("Error al cargar los datos");
        const data = await res.json();
        setWorkshops(data.workshops); // Consumir la clave "workshops"
        setFilteredWorkshops(data.workshops);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWorkshops();
  }, []);

  if (loading) return <p>Cargando talleres...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-6">
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
