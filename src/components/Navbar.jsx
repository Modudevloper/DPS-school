import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white text-gray-800 shadow-md' : 'bg-black bg-opacity-50 text-white backdrop-blur-md'
      }`}
    >
      <div className='container mx-auto p-4 flex justify-between items-center'>
        <div className="flex items-center">
          <img
            src={logo}
            alt="Dharam Public School"
            className='rounded-full object-cover w-12 lg:w-20'
          />
          <div className='hidden lg:flex flex-col justify-center ml-2'>
            <span className={`font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            New DPS School
            </span>
            <span className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-400'}`}>
              Palwal 
            </span>
          </div>
          <span className={`lg:hidden block text-sm ml-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Dharam Public School
          </span>
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className={`nav-link ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-gray-300'}`}>HOME</Link>
          <Link to="/aboutus" className={`nav-link ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-gray-300'}`}>ABOUT US</Link>
          <Link to="/faculty" className={`nav-link ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-gray-300'}`}>FACULTY</Link>
          <Link to="/students" className={`nav-link ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-gray-300'}`}>STUDENTS</Link>
          <Link to="/events" className={`nav-link ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-gray-300'}`}>EVENTS</Link>
          <Link to="/curriculum" className={`nav-link ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-gray-300'}`}>ACADEMICS</Link>
          <Link to="/moto" className={`nav-link ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-gray-300'}`}>MISSION</Link>
          <Link to="/campus" className={`nav-link ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-gray-300'}`}>GLIMPSE</Link>
          <Link to="/contact" className="btn btn-primary shadow text-light text-sm px-4 py-2 rounded-l-full rounded-r-full">
            Admission & Contact
          </Link>
        </div>
        <div className='lg:hidden'>
          <Menu className={`cursor-pointer ${isScrolled ? 'text-gray-800' : 'text-white'}`} onClick={toggleMenu} />
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white p-4 w-64 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="cursor-pointer text-2xl mb-4" onClick={toggleMenu}>
          &times;
        </div>
        <ul className="space-y-4">
          <li><Link to="/" className="block hover:text-gray-300" onClick={toggleMenu}>HOME</Link></li>
          <li><Link to="/aboutus" className="block hover:text-gray-300" onClick={toggleMenu}>ABOUT US</Link></li>
          <li><Link to="/faculty" className="block hover:text-gray-300" onClick={toggleMenu}>FACULTY</Link></li>
          <li><Link to="/students" className="block hover:text-gray-300" onClick={toggleMenu}>STUDENTS</Link></li>
          <li><Link to="/events" className="block hover:text-gray-300" onClick={toggleMenu}>EVENTS</Link></li>
          <li><Link to="/curriculum" className="block hover:text-gray-300" onClick={toggleMenu}>ACADEMICS</Link></li>
          <li><Link to="/moto" className="block hover:text-gray-300" onClick={toggleMenu}>MISSION</Link></li>
          <li><Link to="/campus" className="block hover:text-gray-300" onClick={toggleMenu}>GLIMPSE</Link></li>
          <li>
            <Link
              to="/contact"
              className="btn bg-blue-500 text-white block text-center text-sm px-4 py-2 rounded-l-full rounded-r-full"
              onClick={toggleMenu}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
