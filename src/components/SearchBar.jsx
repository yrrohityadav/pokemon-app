const SearchBar = ({ onSearch }) => {
    return (
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search Pokemon..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  };
  
  export default SearchBar;