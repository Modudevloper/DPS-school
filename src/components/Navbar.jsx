import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='w-full'>
      <div className='container mx-auto p-4'>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Dharam Public School"
              className='rounded-full object-cover w-12 lg:w-20'
            />
            <div className='hidden lg:flex flex-col justify-center ml-2'>
              <span className='font-bold'>Dharam Public School</span>
              <span className='text-gray-500 text-sm'>Palwal Districts</span>
            </div>
            <span className='lg:hidden block text-sm ml-2'>Dharam Public School</span>
          </div>
          <div className="hidden lg:flex space-x-4">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/aboutus" className="nav-link">ABOUT US</Link>
            <Link to="/faculty" className="nav-link">FACULTY</Link>
            <Link to="/students" className="nav-link">STUDENTS</Link>
            <Link to="/events" className="nav-link">EVENTS</Link>
            <Link to="/curriculum" className="nav-link">ACADEMICS</Link>
            <Link to="/moto" className="nav-link">MISSION & MOTO</Link>
            <Link to="/campus" className="nav-link">GLIMPSE</Link>
            <Link to="/contact" className="btn btn-primary shadow text-light">Addmission & Contact</Link>
          </div>
          <div className='lg:hidden'>
            <Menu className='cursor-pointer' onClick={toggleMenu} />
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
            <li><Link to="/" className="block" onClick={toggleMenu}>HOME</Link></li>
            <li><Link to="/aboutus" className="block" onClick={toggleMenu}>ABOUT US</Link></li>
            <li><Link to="/faculty" className="block" onClick={toggleMenu}>FACULTY</Link></li>
            <li><Link to="/students" className="block" onClick={toggleMenu}>STUDENTS</Link></li>
            <li><Link to="/events" className="block" onClick={toggleMenu}>EVENTS</Link></li>
            <li><Link to="/curriculum" className="block" onClick={toggleMenu}>ACADEMICS</Link></li>
            <li><Link to="/moto" className="block" onClick={toggleMenu}>MISSION & MOTO</Link></li>
            <li><Link to="/campus" className="block" onClick={toggleMenu}>GLIMPSE</Link></li>
            <li><Link to="/contact" className="btn bg-blue-500 text-white block text-center" onClick={toggleMenu}>CONTACT US</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
