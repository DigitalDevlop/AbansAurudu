import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slide from './300250/slid';
import SlideB from './408114/slid';
import SlideC from './72890/slid';




function App() {
  return (
    <Router>
    <Routes>
      <Route path="/abans/300*250" element={<Slide />} />
      <Route path="/abans/400*114" element={<SlideB />} />
      <Route path="/abans/728*90" element={<SlideC />} />


    </Routes>
  </Router>
  );
}

export default App;
