import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import SocialProjects from './SocialProjects';
import VolunteerRegistration from './VolunteerRegistration';
import '../css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos-sociais" element={<SocialProjects />} />
          <Route path="/cadastro-voluntarios" element={<VolunteerRegistration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

