import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Coursoul from './home/Coursoul';
import Main1 from './home/Main1';
import Main2 from './home/Main2';
import Marquee from './home/Marquee';
import Main3 from './home/Main3';
import Timer from './home/Timer';
import Faculty from './faculty/Faculty';
import Students from './student/Students';
import Events from './event/Events';
import Curriculum from './academic/Curriculum';
import Moto from './mission/Moto';
import College from './about/About';
import Contact from './Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Coursoul />
              <Marquee text="Welcome to New DPS School, where we nurture young minds for a brighter future." />
              <Timer />
              <Main2 />
              <Main1 />
              <Main3 />
            </motion.div>
          }
        />
        <Route
          path="/faculty"
          element={
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Faculty />
            </motion.div>
          }
        />
        <Route
          path="/students"
          element={
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Students />
            </motion.div>
          }
        />
        <Route
          path="/events"
          element={
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Events />
            </motion.div>
          }
        />
        <Route
          path="/curriculum"
          element={
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Curriculum />
            </motion.div>
          }
        />
        <Route
          path="/moto"
          element={
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Moto />
            </motion.div>
          }
        />
        <Route
          path="/aboutus"
          element={
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <College />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

