import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logoDark.png';

function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-md flex justify-between items-center px-8 py-1 shadow-lg sticky top-0 z-50 border-b border-gray-100 animate-fade-in">
      <img src={logo} alt="Dekalb Capital Management LLC" className="h-10 md:h-14 hover:opacity-80 transition-opacity duration-300" />
      <div className="flex gap-8">
        <Link to="/" className="text-sm md:text-base font-medium hover:text-primary transition-all duration-300 relative group">
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/teams" className="text-sm md:text-base font-medium hover:text-primary transition-all duration-300 relative group">
          Teams
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        {/* <Link to="/news" className="font-medium hover:text-primary transition-all duration-300 relative group">
          News
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link> */}
      </div>
    </nav>
  );
}

export default Navbar;