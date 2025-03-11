import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';

import Coursoul from './components/home/Coursoul';
import Main1 from './components/home/Main1';
import Main2 from './components/home/Main2';
import Marquee from './components/home/Marquee';
import Navbar from './components/navbar/Navbar';
import Main3 from './components/home/Main3';
import Footer from './components/footer/Footer';
import Faculty from './components/faculty/Faculty';
import Students from './components/student/Students';
// import Campus from './components/glimse/Campus';
import College from './components/about/About';
import Contact from './components/Contact';
import Timer from './components/home/Timer';
import Events from './components/event/Events';
import Curriculum from './components/academic/Curriculum';
import Moto from './components/mission/Moto';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Router>
      <div className='bg-gray-100'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Coursoul />
                <Marquee text="Welcome to New DPS School, where we nurture young minds for a brighter future." />
                <Timer />
                <Main2 />
                <Main1 />
                <Main3 />
              </>
            }
          />
          <Route path='/faculty' element={<Faculty />} />
          <Route path='/students' element={<Students />} />
          {/* <Route path='/campus' element={<Campus />} /> */}
          <Route path='/events' element={<Events />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/moto' element={<Moto />} />
          <Route path='/aboutus' element={<College />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>

        {isVisible && (
          <button
            className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <KeyboardArrowUp />
          </button>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
