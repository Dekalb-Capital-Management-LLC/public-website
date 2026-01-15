import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white flex justify-between items-center px-8 py-4 shadow-md">
      <div className="text-xl font-bold">Dekalb Capital Management LLC </div>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-600 transition">Home</Link>
        <Link to="/teams" className="hover:text-gray-600 transition">Teams</Link>
        <Link to="/news" className="hover:text-gray-600 transition">News</Link>
      </div>
    </nav>
  );
}

export default Navbar;