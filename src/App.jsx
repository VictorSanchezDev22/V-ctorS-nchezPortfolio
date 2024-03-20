import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import HomePage from './Page/HomePage.jsx';
import DesktopNav from './Page/DesktopNav.jsx';
import ProjectPage from './Page/ProjectsPage.jsx'; 
import ContactPage from './Page/ContactPage.jsx'; 
import CurriculumPage from './Page/CurriculumPage.jsx'; 
import GameDev from './Page/GameDev.jsx'; 
import WebDev from './Page/WebDev.jsx'; 

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        {/* <Route path="/" element = {<HomePage />} /> */}
        <Route path="/" element = {<DesktopNav />} />
        <Route path="/projects" element = {<ProjectPage />}/> 
        <Route path="/contacto" element = {<ContactPage />}/> 
        <Route path="/cv" element = {<CurriculumPage/>}/>
        <Route path="/gamedev" element = {<GameDev />}/>
        <Route path="/webdev" element = {<WebDev />}/>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;