// src/app/workshops/components/SearchBar.jsx
import { useState, useEffect } from "react";

const SearchBar = ({ workshops, onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      const results = workshops.filter(
        (workshop) =>
          workshop.name.toLowerCase().includes(query.toLowerCase()) ||
          workshop.location.toLowerCase().includes(query.toLowerCase())
      );
      onSearch(results);
    }, 300);

    return () => clearTimeout(handler);
  }, [query, workshops, onSearch]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar talleres..."
        className="w-full p-2 border border-neutral-dark rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
