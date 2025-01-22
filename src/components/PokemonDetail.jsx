import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemonDetail();
  }, [id]);

  const fetchPokemonDetail = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching pokemon details:', error);
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (!pokemon) return <div className="text-center mt-8">Pokemon not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
          ← Back to List
        </Link>
        <div className="text-center">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-48 h-48 mx-auto"
          />
          <h1 className="text-3xl font-bold capitalize mt-4">{pokemon.name}</h1>
          <div className="flex justify-center gap-2 mt-4">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className="px-4 py-1 rounded-full text-white bg-blue-500"
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h2 className="font-semibold mb-2">Stats</h2>
              {pokemon.stats.map((stat) => (
                <div key={stat.stat.name} className="flex justify-between">
                  <span className="capitalize">{stat.stat.name}:</span>
                  <span>{stat.base_stat}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h2 className="font-semibold mb-2">Details</h2>
              <div className="flex justify-between">
                <span>Height:</span>
                <span>{pokemon.height / 10}m</span>
              </div>
              <div className="flex justify-between">
                <span>Weight:</span>
                <span>{pokemon.weight / 10}kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;