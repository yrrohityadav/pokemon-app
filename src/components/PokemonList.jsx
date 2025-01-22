import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import SearchBar from './SearchBar';

const PokemonList = ({ pokemon, loading }) => {
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    setFilteredPokemon(pokemon);
  }, [pokemon]);

  const handleSearch = (searchTerm) => {
    const filtered = pokemon.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Pokédex
        </h1>
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <div className="text-center mt-8">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {filteredPokemon.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonList;