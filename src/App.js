import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-blue-600 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li>
              <Link to="/projects" className="text-white">Projects</Link>
            </li>
            <li>
              <Link to="/education" className="text-white">Education</Link>
            </li>
          </ul>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
