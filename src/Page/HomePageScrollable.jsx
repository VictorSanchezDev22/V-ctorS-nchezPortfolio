import React from 'react';

import {Body} from '../assets/DesktopNavigation.js';

import Navbar from '../components/Navbar.jsx';
import Presentacion from '../components/Presentacion.jsx';
import Sobremi from '../components/Sobremi.jsx';
import Experiencia from '../components/Experiencia.jsx';
import Proyectos from '../components/Projects.jsx';
import Contacto from '../components/Contact.jsx';

const HomePage = () => {
    return (
      <>
        <Body>
        { /* DESKTOP NAV */ }
    
        { /* HAMBURGER NAV */ }
          <Navbar/>

        { /* SECTIONS */ }
          <Presentacion/>
        
        { /* SECTION ABOUT */ }
          <Sobremi/>
      
        {/*EXPERIENCE SECTION*/}
          <Experiencia/>

          <Proyectos />

          <Contacto/>
      </Body>
      </>
    );
  };
export default HomePage;