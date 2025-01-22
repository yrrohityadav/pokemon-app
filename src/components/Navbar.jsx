// components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold">Pokédex</Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded">Home</Link>
            <Link to="/info" className="hover:bg-blue-700 px-3 py-2 rounded">Info</Link>
            <Link to="/portfolio" className="hover:bg-blue-700 px-3 py-2 rounded">Master</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;