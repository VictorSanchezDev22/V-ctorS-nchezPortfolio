import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import DesktopNav from './Page/HomePageScrollable.jsx';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        {/* <Route path="/" element = {<HomePage />} /> */}
        <Route path="/" element = {<DesktopNav />} />
        {/* <Route path="/cv" element = {<CurriculumPage/>}/> */}
      </Routes>
    </BrowserRouter>   
  );
}

export default App;