import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PDF from './Pages/PDF';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pdf" element={<PDF />} />
      </Routes>
    </Router>
  );
}

export default App;
