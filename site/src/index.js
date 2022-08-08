import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './Pages/Intro/App';
import Homepage from './Pages/Home/Home';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Project Organization
// - Intro Screen
// - Homepage
// - Settings Page ??
// - Parent Page
// - Child Page
// - Therapist Page

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />} />
      {/* <Route path="/Settings" element={<Settings />} /> */}
      <Route path="/Home" element={<Homepage />} />
      {/* <Route path="/ForParents" element={<Parents />} /> */}
      {/* <Route path="/ForChild" element={<Child />} /> */}
      {/* <Route path="/ForTherapist" element={<Therapist />} /> */}
    </Routes>
  </BrowserRouter>
);

reportWebVitals();