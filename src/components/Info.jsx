const Info = () => {
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">About Pokémon</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">What are Pokémon?</h2>
              <p className="text-gray-700">
                Pokémon are creatures of various sizes, types, and abilities that can be caught
                and trained by Pokémon Trainers.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Pokémon Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Primary Types:</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Fire - Strong against Grass, Ice, Bug, Steel</li>
                    <li>Water - Strong against Fire, Ground, Rock</li>
                    <li>Grass - Strong against Water, Ground, Rock</li>
                    <li>Electric - Strong against Water, Flying</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default Info;