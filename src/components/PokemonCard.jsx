const PokemonCard = ({ pokemon }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
        <div className="p-4">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-32 h-32 mx-auto"
          />
          <h2 className="text-xl font-semibold text-center capitalize mt-2">
            {pokemon.name}
          </h2>
          <div className="flex justify-center gap-2 mt-2">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className="px-3 py-1 rounded-full text-sm text-white bg-blue-500"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PokemonCard;