// src/app/workshops/components/SearchBar.jsx
const SearchBar = ({ onSearch }) => {
    const handleSearch = (e) => {
      e.preventDefault();
      const query = e.target.elements.search.value.trim();
      onSearch(query);
    };
  
    return (
      <form onSubmit={handleSearch} className="flex gap-4 mb-6">
        <input
          type="text"
          name="search"
          placeholder="Buscar talleres cercanos..."
          className="flex-grow border border-neutral-dark p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-primary text-neutral-light px-4 py-2 rounded-md hover:bg-primary-dark"
        >
          Buscar
        </button>
      </form>
    );
  };
  
  export default SearchBar;
  