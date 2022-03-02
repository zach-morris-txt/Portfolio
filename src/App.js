import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProjectPage from './Pages/ProjectPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
